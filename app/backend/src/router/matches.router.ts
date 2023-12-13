import { Router, Request, Response } from 'express';
import MatchesController from '../controller/matches.controller';

const router = Router();

router.get(
  '/',
  (req: Request, res: Response) => {
    if (req.query.inProgress) return new MatchesController().getAllMatchesInProgress(req, res);
    return new MatchesController().getAllMatches(req, res);
  },
);

export default router;
