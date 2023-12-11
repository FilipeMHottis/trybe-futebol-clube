import { Request, Response } from 'express';
import mapStatus from '../utils/httpStatus';
import UsersService from '../service/login.service';
import ServiceResponse from '../Interfaces/serviceResponse';
import jwt from '../utils/jwt';

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

  public async getRole(req: Request, res: Response): Promise<Response> {
    const { authorization } = req.headers;
    const { id } = jwt.verifyToken(authorization as any);
    const { status, data }: ServiceResponse<object> = await this.service.getRole(id as number);
    return res.status(mapStatus(status)).json(data);
  }
}

export default LoginController;
