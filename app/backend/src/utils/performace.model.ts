import { IMatchesWithTeams } from '../interfaces/db/IMatches';

interface IPerformance {
  getTotalVictories: (home: boolean) => number;
  getTotalDraws: () => number;
  getTotalLosses: (home: boolean) => number;
  getTotalGoalsFavor: (home: boolean) => number;
  getTotalGoalsOwn: (home: boolean) => number;
  getTotalGoalsBalance: (home: boolean) => number;
  getTotalPoints: (home: boolean) => number;
  getTotalGames: (home: boolean) => number;
  getEffiviency: (home: boolean) => number;
}

class Performace implements IPerformance {
  private matches: IMatchesWithTeams[];

  constructor(matches: IMatchesWithTeams[]) {
    this.matches = matches;
  }

  public getTotalVictories(home: boolean): number {
    return this.matches.filter((match) =>
      (home
        ? match.homeTeamGoals > match.awayTeamGoals
        : match.homeTeamGoals < match.awayTeamGoals
      )).length;
  }

  public getTotalLosses(home: boolean): number {
    return this.matches.filter((match) =>
      (home
        ? match.homeTeamGoals < match.awayTeamGoals
        : match.awayTeamGoals < match.homeTeamGoals
      )).length;
  }

  public getTotalDraws(): number {
    return this.matches.filter((match) =>
      match.homeTeamGoals === match.awayTeamGoals).length;
  }

  public getTotalGoalsFavor(home: boolean): number {
    return this.matches.reduce((total, match) =>
      total + (home ? match.homeTeamGoals : match.awayTeamGoals), 0);
  }

  public getTotalGoalsOwn(home: boolean): number {
    return this.matches.reduce((total, match) =>
      total + (home ? match.awayTeamGoals : match.homeTeamGoals), 0);
  }

  public getTotalGoalsBalance(home: boolean): number {
    return this.getTotalGoalsFavor(home) - this.getTotalGoalsOwn(home);
  }

  public getTotalPoints(home: boolean): number {
    const victories = this.getTotalVictories(home);
    const draws = this.getTotalDraws();
    return (victories * 3) + draws;
  }

  public getTotalGames(home: boolean): number {
    return this.getTotalVictories(home)
        + this.getTotalDraws()
        + this.getTotalLosses(home);
  }

  public getEffiviency(home: boolean): number {
    const totalPoints = this.getTotalPoints(home);
    const totalGames = this.getTotalGames(home);

    if (totalGames === 0) return 0.00;

    const efficiency = (totalPoints / (totalGames * 3)) * 100;
    return Math.round(efficiency * 100) / 100;
  }
}

export default Performace;
