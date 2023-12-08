import Joi = require('joi');
import { Request, Response, NextFunction } from 'express';
import mapStatus from '../utils/httpStatus';
import { ServiceResponseError } from '../Interfaces/serviceResponse';

class LoginValidationMiddleware {
  private loginSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  validateLogin = (req: Request, res: Response, next: NextFunction) => {
    const { error } = this.loginSchema.validate(req.body);
    if (error) {
      const { status, data }: ServiceResponseError = {
        status: 'badRequest',
        data: {
          message: error.message,
        },
      };

      return res.status(mapStatus(status)).json(data);
    }
    next();
  };
}

export default LoginValidationMiddleware;
