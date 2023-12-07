import { Request, Response } from 'express';
import TeamsService from '../service/teams.service';
import mapStatus from '../utils/httpStatus';

class TeamsController implements TeamsController {
  private service = new TeamsService();

  public async getAllTeams(req: Request, res: Response): Promise<Response> {
    const { status, data } = await this.service.getAllTeams();
    return res.status(mapStatus(status)).json(data);
  }

  public async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { status, data } = await this.service.getById(Number(id));
    return res.status(mapStatus(status)).json(data);
  }
}

export default TeamsController;
