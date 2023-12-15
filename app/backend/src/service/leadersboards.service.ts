import LeaderboardsModel from '../model/leadersBoards.model';
import TeamsModel from '../model/teams.model';
import ServiceResponse from '../interfaces/serviceResponse';
import I from '../interfaces/ILaaderboards';
import ICustomError from '../interfaces/ICustomError';

interface Service {
  getById:(
    teamId: number,
    homeOrAwai: 'home' | 'away' | 'any',
  ) => Promise<ServiceResponse<I>>;
  getAll: (
    homeOrAwai: 'home' | 'away' | 'any') => Promise<ServiceResponse<I[]>>;
}

class LeaderboardsService implements Service {
  private teamModel = new TeamsModel();
  private leaderboardsModel = new LeaderboardsModel();

  public async getById(teamId: number, h: 'home' | 'away' | 'any'): Promise<ServiceResponse<I>> {
    const team = await this.teamModel.getById(teamId);
    if (!team) return { status: 'notFound', data: { message: 'Team not found' } };

    const leaderboard: I = {
      name: team.teamName,
      totalPoints: await this.leaderboardsModel.getTotalPoints(teamId, h),
      totalGames: await this.leaderboardsModel.getTotalGames(teamId, h),
      totalVictories: await this.leaderboardsModel.getTotalVictories(teamId, h),
      totalDraws: await this.leaderboardsModel.getTotalDraws(teamId, h),
      totalLosses: await this.leaderboardsModel.getTotalLosses(teamId, h),
      goalsFavor: await this.leaderboardsModel.getGoalsFavor(teamId, h),
      goalsOwn: await this.leaderboardsModel.getGoalsOwn(teamId, h),
      goalsBalance: await this.leaderboardsModel.getGoalsBalance(teamId, h),
      effiviency: await this.leaderboardsModel.getEffiviency(teamId, h),
    };

    if (!leaderboard) return { status: 'notFound', data: { message: 'Leaderboard not found' } };

    return { status: 'ok', data: leaderboard };
  }

  public async getAll(homeOrAwai: 'home' | 'away' | 'any'): Promise<ServiceResponse<I[]>> {
    try {
      const teams = await this.teamModel.getAllTeams();

      if (!teams) return { status: 'notFound', data: { message: 'Teams not found' } };
      const leaderboards = teams.map(async (team) => {
        if (!team.id) throw new Error('Team id not found');
        const leaderboard = await this.getById(team.id, homeOrAwai);
        if (leaderboard.status === 'notFound') throw new Error('Team id not found');
        return leaderboard.data as I;
      });

      const leaderboardsResolved = await Promise.all(leaderboards);

      return { status: 'ok', data: leaderboardsResolved };
    } catch (err) {
      const error = err as ICustomError;
      return { status: 'notFound', data: { message: error.message } };
    }
  }
}

export default LeaderboardsService;
