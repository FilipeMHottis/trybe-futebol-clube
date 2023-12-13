import { Request, Response } from 'express';
import mapStatus from '../utils/httpStatus';
import MatchesService from '../service/matches.service';

interface Controller {
  getAllMatches(req: Request, res: Response): Promise<Response>;
  getAllMatchesInProgress(req: Request, res: Response): Promise<Response>;
}

class MatchesController implements Controller {
  private service = new MatchesService();

  public async getAllMatches(_req: Request, res: Response): Promise<Response> {
    const { status, data } = await this.service.getAllMatches();
    return res.status(mapStatus(status)).json(data);
  }

  public async getAllMatchesInProgress(req: Request, res: Response): Promise<Response> {
    const { status, data } = await this.service.getAllMatchesInProgress();
    return res.status(mapStatus(status)).json(data);
  }
}

export default MatchesController;
