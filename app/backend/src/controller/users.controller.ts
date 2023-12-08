import { Request, Response } from 'express';
import mapStatus from '../utils/httpStatus';
import UsersService from '../service/users.service';
import ServiceResponse from '../Interfaces/serviceResponse';

interface Controller {
  login(req: Request, res: Response): Promise<Response>;
}

class UsersController implements Controller {
  private service = new UsersService();

  public async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const { status, data }: ServiceResponse<object> = await this.service.login(email, password);
    return res.status(mapStatus(status)).json(data);
  }
}

export default UsersController;
