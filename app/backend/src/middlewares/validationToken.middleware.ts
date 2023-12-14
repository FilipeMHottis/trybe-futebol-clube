import { Response, NextFunction } from 'express';
import Jwt from '../utils/jwt';
import { RequestWithUser } from '../interfaces/db/IUser';

class ValidationToken {
  validate = (req: RequestWithUser, res: Response, next: NextFunction) => {
    const headerParms = req.headers.authorization?.split(' ');
    if (!headerParms) {
      return res.status(401).json({ message: 'Token not found' });
    }
    if (headerParms[0] !== 'Bearer') {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }

    const token = headerParms[1];
    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

    try {
      const decoded = Jwt.verifyToken(token);
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Token must be provided' });
    }
  };
}

export default ValidationToken;
