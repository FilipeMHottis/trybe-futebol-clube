import { Router, Request, Response } from 'express';
import LeaderboardsController from '../controller/leadersboards.controller';

const router = Router();

router.get(
  '/',
  (req: Request, res: Response) => new LeaderboardsController().getAllLeaderboards(req, res),
);

router.get(
  '/home',
  (req: Request, res: Response) => new LeaderboardsController().getAllLeaderboards(req, res),
);

router.get(
  '/away',
  (req: Request, res: Response) => new LeaderboardsController().getAllLeaderboards(req, res),
);

router.get(
  '/:teamId',
  (req: Request, res: Response) => new LeaderboardsController().getLeaderboardByTeamId(req, res),
);

export default router;
