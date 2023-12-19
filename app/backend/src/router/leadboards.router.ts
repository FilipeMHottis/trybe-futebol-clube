import { Router, Request, Response } from 'express';
import LeaderboardController from '../controller/leaderboard.controller';

const router = Router();

router.get(
  '/home',
  (req: Request, res: Response) => new LeaderboardController().getHomeLeaderboard(req, res),
);

router.get(
  '/away',
  (req: Request, res: Response) => new LeaderboardController().getAwayLeaderboard(req, res),
);

router.get(
  '/',
  (req: Request, res: Response) => new LeaderboardController().getAllLeaderboards(req, res),
);

export default router;
