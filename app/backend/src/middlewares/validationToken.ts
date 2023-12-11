import { Request, Response, NextFunction } from 'express';
import mapStatus from '../utils/httpStatus';
import { ServiceResponseError } from '../Interfaces/serviceResponse';
import Jwt from '../utils/jwt';

class ValidationToken {
  validate = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
      const { status, data }: ServiceResponseError = {
        status: 'unauthorized',
        data: { message: 'Token not found' },
      };
      return res.status(mapStatus(status)).json(data);
    }

    try {
      Jwt.verifyToken(token);
      next();
    } catch (error) {
      const { status, data }: ServiceResponseError = {
        status: 'unauthorized', data: { message: 'Token must be a valid token' },
      };
      return res.status(mapStatus(status)).json(data);
    }
  };
}

export default ValidationToken;
