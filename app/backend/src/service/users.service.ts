import jwt from '../utils/jwt';
import bcrypt from '../utils/bcrypt';
import UsersModel from '../model/users.model';
import ServiceResponse from '../Interfaces/serviceResponse';

interface UserService {
  login(email: string, password: string): Promise<ServiceResponse<object>>;
}

class UsersService implements UserService {
  private db = new UsersModel();

  public async login(email: string, password: string): Promise<ServiceResponse<object>> {
    const user = await this.db.getUserByEmail(email);

    if (!user) {
      return {
        status: 'unauthorized',
        data: { message: 'email or password incorrec' },
      };
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return {
        status: 'unauthorized',
        data: { message: 'email or password incorrect' },
      };
    }

    const token = jwt.generateToken({ id: user.id });
    return { status: 'ok', data: { token } };
  }
}

export default UsersService;
