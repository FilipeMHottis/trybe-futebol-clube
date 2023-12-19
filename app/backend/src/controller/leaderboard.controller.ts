import { Request, Response } from 'express';
import LeaderboardService from '../service/leadboardboard.service';
import mapStatus from '../utils/httpStatus';

interface Controller {
  getHomeLeaderboard: (req: Request, res: Response) => Promise<void>;
  getAwayLeaderboard: (req: Request, res: Response) => Promise<void>;
  getAllLeaderboards: (req: Request, res: Response) => Promise<void>;
}

class LeaderboardController implements Controller {
  private leaderboard = new LeaderboardService();

  public async getHomeLeaderboard(req: Request, res: Response): Promise<void> {
    const { status, data } = await this.leaderboard.getLeaderboard(true);
    res.status(mapStatus(status)).json(data);
  }

  public async getAwayLeaderboard(req: Request, res: Response): Promise<void> {
    const { status, data } = await this.leaderboard.getLeaderboard(false);
    res.status(mapStatus(status)).json(data);
  }

  public async getAllLeaderboards(req: Request, res: Response): Promise<void> {
    const { status, data } = await this.leaderboard.getAllLeaderboards();
    res.status(mapStatus(status)).json(data);
  }
}

export default LeaderboardController;
