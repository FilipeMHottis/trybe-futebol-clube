import { Request, Response } from 'express';
import mapStatus from '../utils/httpStatus';
import MatchesService from '../service/matches.service';
import { NewMatch } from '../interfaces/db/IMatches';

interface Controller {
  getAllMatches(req: Request, res: Response): Promise<Response>;
  getAllMatchesInProgress(req: Request, res: Response): Promise<Response>;
  getMatchesById(req: Request, res: Response): Promise<Response>;
  updateProgress(req: Request, res: Response): Promise<Response>;
  updateScore(req: Request, res: Response): Promise<Response>;
  postNewMatch(req: Request, res: Response): Promise<Response>;
}

class MatchesController implements Controller {
  private service = new MatchesService();

  public async getAllMatches(_req: Request, res: Response): Promise<Response> {
    const { status, data } = await this.service.getAllMatches();
    return res.status(mapStatus(status)).json(data);
  }

  public async getAllMatchesInProgress(req: Request, res: Response): Promise<Response> {
    const onProgress = req.query.inProgress as 'true' | 'false';
    const { status, data } = await this.service.getAllMatchesInProgress(onProgress === 'true');
    return res.status(mapStatus(status)).json(data);
  }

  public async getMatchesById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { status, data } = await this.service.getMatcheById(Number(id));
    return res.status(mapStatus(status)).json(data);
  }

  public async updateProgress(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { status, data } = await this.service.updateProgress(Number(id));
    return res.status(mapStatus(status)).json(data);
  }

  public async updateScore(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const { status, data } = await this.service.updateScore(
      Number(id),
      homeTeamGoals,
      awayTeamGoals,
    );
    return res.status(mapStatus(status)).json(data);
  }

  public async postNewMatch(req: Request, res: Response): Promise<Response> {
    const newMatch: NewMatch = req.body;
    const { status, data } = await this.service.postNewMatch(newMatch);
    return res.status(mapStatus(status)).json(data);
  }
}

export default MatchesController;
