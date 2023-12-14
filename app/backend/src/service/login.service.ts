import jwt from '../utils/jwt';
import bcrypt from '../utils/bcrypt';
import UsersModel from '../model/users.model';
import ServiceResponse from '../interfaces/serviceResponse';

interface ILoginService {
  login(email: string, password: string): Promise<ServiceResponse<object>>;
  getRole(id: number): Promise<ServiceResponse<object>>;
}

class LoginService implements ILoginService {
  private db = new UsersModel();

  public async login(email: string, password: string): Promise<ServiceResponse<object>> {
    const user = await this.db.getUserByEmail(email);

    if (!user) {
      return {
        status: 'unauthorized',
        data: { message: 'Invalid email or password' },
      };
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return {
        status: 'unauthorized',
        data: { message: 'Invalid email or password' },
      };
    }

    const token = jwt.generateToken(
      { id: user.id, email: user.email, username: user.username },
    );
    return { status: 'ok', data: { token } };
  }

  public async getRole(id:number): Promise<ServiceResponse<object>> {
    const user = await this.db.getById(Number(id));

    if (!user) {
      return {
        status: 'unauthorized',
        data: { message: 'Invalid id!' },
      };
    }

    return { status: 'ok', data: { role: user.role } };
  }
}

export default LoginService;
