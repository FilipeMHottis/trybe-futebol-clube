import Joi = require('joi');
import { Request, Response, NextFunction } from 'express';
import mapStatus from '../utils/httpStatus';
import { ServiceResponseError } from '../interfaces/serviceResponse';

class MatcheValidationMiddleware {
  private matcheSchema = Joi.object().keys({
    homeTeamId: Joi.number().required(),
    awayTeamId: Joi.number().required(),
    homeTeamGoals: Joi.number().min(0).required(),
    awayTeamGoals: Joi.number().min(0).required(),
  });

  validateMatche = (req: Request, res: Response, next: NextFunction) => {
    const { error } = this.matcheSchema.validate(req.body);

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

export default MatcheValidationMiddleware;
