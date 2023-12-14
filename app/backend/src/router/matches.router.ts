import { Router, Request, Response, NextFunction } from 'express';
import { RequestWithUser } from '../interfaces/db/IUser';
import ValidationToken from '../middlewares/validationToken.middleware';
import MatchesController from '../controller/matches.controller';
import MatcheValidationMiddleware from '../middlewares/matcheValidation';

const router = Router();

router.get(
  '/',
  (req: Request, res: Response) => {
    if (req.query.inProgress === 'true' || req.query.inProgress === 'false') {
      return new MatchesController().getAllMatchesInProgress(req, res);
    }
    return new MatchesController().getAllMatches(req, res);
  },
);

router.get(
  '/:id',
  (req: Request, res: Response) => new MatchesController().getMatchesById(req, res),
);

router.patch(
  '/:id/finish',
  (req: Request, res: Response, next: NextFunction) => {
    const reqWithUser = req as RequestWithUser;
    return new ValidationToken().validate(reqWithUser, res, next);
  },
  (req: Request, res: Response) => new MatchesController().updateProgress(req, res),
);

router.patch(
  '/:id',
  (req: Request, res: Response, next: NextFunction) => {
    const reqWithUser = req as RequestWithUser;
    return new ValidationToken().validate(reqWithUser, res, next);
  },
  (req: Request, res: Response) => new MatchesController().updateScore(req, res),
);

router.post(
  '/',
  (req: Request, res: Response, next: NextFunction) => {
    const reqWithUser = req as RequestWithUser;
    return new ValidationToken().validate(reqWithUser, res, next);
  },
  new MatcheValidationMiddleware().validateMatche,
  (req: Request, res: Response) => new MatchesController().postNewMatch(req, res),
);

export default router;
