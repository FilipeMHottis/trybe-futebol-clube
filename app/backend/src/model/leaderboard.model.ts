import ILeaderboards from '../interfaces/ILaaderboards';
import ITeams from '../interfaces/db/ITeams';
import { IMatchesWithTeams } from '../interfaces/db/IMatches';
import Performace from './performace.model';
import MatchesModel from './matches.model';
import TeamsModel from './teams.model';

interface Model {
  getLeaderboard: (home: boolean) => Promise<ILeaderboards[]>;
  getAllLeaderboards: () => Promise<ILeaderboards[]>;
}

class LeaderboardModel implements Model {
  private matches = new MatchesModel();
  private teams = new TeamsModel();

  private static soartTeams(a: ILeaderboards, b: ILeaderboards) {
    return b.totalPoints - a.totalPoints
    || b.totalVictories - a.totalVictories
    || b.goalsBalance - a.goalsBalance
    || b.goalsFavor - a.goalsFavor;
  }

  private static createTeamStats(
    team: ITeams,
    performances: Performace,
    home: boolean,
  ): ILeaderboards {
    return {
      name: team.teamName,
      totalVictories: performances.getTotalVictories(home),
      totalDraws: performances.getTotalDraws(),
      totalLosses: performances.getTotalLosses(home),
      goalsFavor: performances.getTotalGoalsFavor(home),
      goalsOwn: performances.getTotalGoalsOwn(home),
      goalsBalance: performances.getTotalGoalsBalance(home),
      totalPoints: performances.getTotalPoints(home),
      totalGames: performances.getTotalGames(home),
      efficiency: performances.getEffiviency(home),
    };
  }

  public async getLeaderboard(home: boolean): Promise<ILeaderboards[]> {
    const matches = await this.matches.getAllMatches();
    const teams = await this.teams.getAllTeams();

    if (!matches || !teams) throw new Error('No matches or teams found');
    const matchesNoRepeat = matches.filter((match, index, self) => {
      const matchIndex = self.findIndex((m) => m.id === match.id);
      return matchIndex === index;
    });

    return teams.map((team) => {
      const finishedMatches = matchesNoRepeat
        .filter((match) => (home
          ? match.homeTeamId === team.id
          : match.awayTeamId === team.id)
          && match.inProgress === false);
      const performances = new Performace(finishedMatches as IMatchesWithTeams[]);
      return LeaderboardModel.createTeamStats(team, performances, home);
    }).sort(LeaderboardModel.soartTeams);
  }

  private static createAllTeamStats(
    h: Performace,
    a: Performace,
    name: string,
  ): ILeaderboards {
    const totalPoints = h.getTotalPoints(true) + a.getTotalPoints(false);
    const totalGames = h.getTotalGames(true) + a.getTotalGames(false);

    return {
      name,
      totalPoints,
      totalGames,
      totalVictories: h.getTotalVictories(true) + a.getTotalVictories(false),
      totalDraws: h.getTotalDraws() + a.getTotalDraws(),
      totalLosses: h.getTotalLosses(true) + a.getTotalLosses(false),
      goalsFavor: h.getTotalGoalsFavor(true) + a.getTotalGoalsFavor(false),
      goalsOwn: h.getTotalGoalsOwn(true) + a.getTotalGoalsOwn(false),
      goalsBalance: h.getTotalGoalsBalance(true) + a.getTotalGoalsBalance(false),
      efficiency: Number(parseFloat(((totalPoints / (totalGames * 3)) * 100).toFixed(2))),
    };
  }

  public async getAllLeaderboards(): Promise<ILeaderboards[]> {
    const matches = await this.matches.getAllMatches();
    const teams = await this.teams.getAllTeams();

    if (!matches || !teams) throw new Error('No matches or teams found');

    return teams.map((team) => {
      const homeMatches = matches.filter((match) => match.homeTeamId === team.id
        && !match.inProgress);
      const awayMatches = matches.filter((match) => match.awayTeamId === team.id
        && !match.inProgress);

      const homePerformance = new Performace(homeMatches as IMatchesWithTeams[]);
      const awayPerformance = new Performace(awayMatches as IMatchesWithTeams[]);

      const totalPerformance = LeaderboardModel
        .createAllTeamStats(homePerformance, awayPerformance, team.teamName);
      return totalPerformance;
    }).sort(LeaderboardModel.soartTeams);
  }
}

export default LeaderboardModel;
