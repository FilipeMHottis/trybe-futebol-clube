import { Router, Request, Response } from 'express';
import TemasController from '../controller/teams.controller';

const router = Router();

router.get(
  '/',
  (req: Request, res: Response) => new TemasController().getAllTeams(req, res),
);

export default router;
