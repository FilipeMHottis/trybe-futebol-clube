import { verify, sign } from 'jsonwebtoken';
import { User } from '../interfaces/db/IUser';

class Jwt {
  private secret = process.env.JWT_SECRET || 'secret';

  public generateToken = (payload: object): string => {
    const token = sign(payload, this.secret, { expiresIn: '7d' });
    return token;
  };

  public verifyToken = (token: string) => {
    const payload = verify(token, this.secret) as User;
    return payload;
  };
}

export default new Jwt();
