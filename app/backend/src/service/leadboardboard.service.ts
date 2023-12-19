import LeaderboardModel from '../model/leaderboard.model';
import ServiceResponse from '../interfaces/serviceResponse';
import ILeaderboards from '../interfaces/ILaaderboards';

interface Service {
  getLeaderboard: (home: boolean) => Promise<ServiceResponse<ILeaderboards[]>>;
  getAllLeaderboards: () => Promise<ServiceResponse<ILeaderboards[]>>;
}

class LeaderboardService implements Service {
  private leaderboard = new LeaderboardModel();

  public async getLeaderboard(home: boolean): Promise<ServiceResponse<ILeaderboards[]>> {
    const leaderboard = await this.leaderboard.getLeaderboard(home);
    if (!leaderboard) return { status: 'notFound', data: { message: 'No leaderboard found' } };
    return { status: 'ok', data: leaderboard };
  }

  public async getAllLeaderboards(): Promise<ServiceResponse<ILeaderboards[]>> {
    const leaderboard = await this.leaderboard.getAllLeaderboards();
    if (!leaderboard) return { status: 'notFound', data: { message: 'No leaderboard found' } };
    return { status: 'ok', data: leaderboard };
  }
}

export default LeaderboardService;
