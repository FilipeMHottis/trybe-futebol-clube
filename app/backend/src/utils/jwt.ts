import { verify, sign, JwtPayload } from 'jsonwebtoken';

class Jwt {
  private secret = process.env.JWT_SECRET || 'secret';

  public generateToken = (payload: object): string => {
    const token = sign(payload, this.secret, { expiresIn: '7d' });
    return token;
  };

  public verifyToken = (token: string): string | JwtPayload => {
    const payload = verify(token, this.secret);
    return payload;
  };
}

export default new Jwt();
