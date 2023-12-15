import { Request, Response } from 'express';
import mapStatus from '../utils/httpStatus';
import LeaderboardsService from '../service/leadersboards.service';

interface Controller {
  getAllLeaderboards: (req: Request, res: Response) => Promise<Response>;
  getLeaderboardByTeamId: (req: Request, res: Response) => Promise<Response>;
}

class LeaderboardsController implements Controller {
  private leaderboardsService = new LeaderboardsService();

  public async getAllLeaderboards(req: Request, res: Response): Promise<Response> {
    let homeOrAway: 'home' | 'away' | 'any';

    if (req.path.includes('/home')) {
      homeOrAway = 'home';
    } else if (req.path.includes('/away')) {
      homeOrAway = 'away';
    } else {
      homeOrAway = 'any';
    }

    const response = await this.leaderboardsService.getAll(homeOrAway);

    return res.status(mapStatus(response.status)).json(response);
  }

  public async getLeaderboardByTeamId(req: Request, res: Response): Promise<Response> {
    const { teamId } = req.params;

    const response = await this.leaderboardsService.getById(
      Number(teamId),
      'away',
    );

    return res.status(mapStatus(response.status)).json(response);
  }
}

export default LeaderboardsController;
