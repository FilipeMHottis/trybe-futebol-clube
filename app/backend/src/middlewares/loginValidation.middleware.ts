import Joi = require('joi');
import { Request, Response, NextFunction } from 'express';
import mapStatus from '../utils/httpStatus';
import { ServiceResponseError } from '../Interfaces/serviceResponse';

const mensages = {
  'string.empty': 'All fields must be filled',
  'string.email': 'Invalid email or password',
  'string.min': 'Invalid email or password',
  'any.required': 'All fields must be filled',
};

class LoginValidationMiddleware {
  private loginSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }).messages(mensages);;

  validateLogin = (req: Request, res: Response, next: NextFunction) => {
    const { error } = this.loginSchema.validate(req.body);

    if (error?.message === mensages['string.email']) {
      const { status, data }: ServiceResponseError = {
        status: 'unauthorized',
        data: { message: error.message },
      };

      return res.status(mapStatus(status)).json(data);
    }

    if (error) {
      const { status, data }: ServiceResponseError = {
        status: 'badRequest',
        data: { message: error.message },
      };

      return res.status(mapStatus(status)).json(data);
    }
    next();
  };
}

export default LoginValidationMiddleware;
