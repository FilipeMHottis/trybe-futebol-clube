import { Request, Response } from 'express';
import { RequestWithUser } from '../Interfaces/db/IUser';
import mapStatus from '../utils/httpStatus';
import UsersService from '../service/login.service';
import ServiceResponse from '../Interfaces/serviceResponse';

interface Controller {
  login(req: Request, res: Response): Promise<Response>;
  getRole(req: Request, res: Response): Promise<Response>;
}

class LoginController implements Controller {
  private service = new UsersService();

  public async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const { status, data }: ServiceResponse<object> = await this.service.login(email, password);
    return res.status(mapStatus(status)).json(data);
  }

  public async getRole(req: RequestWithUser, res: Response): Promise<Response> {
    const { id } = req.user;
    if (!id) return res.status(400).json({ message: 'User not found' });
    const { status, data }: ServiceResponse<object> = await this.service.getRole(id);
    return res.status(mapStatus(status)).json(data);
  }
}

export default LoginController;
