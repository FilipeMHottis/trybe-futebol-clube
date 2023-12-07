import { Router, Request, Response } from 'express';
import TemasController from '../controller/teams.controller';

const router = Router();

router.get(
  '/',
  (req: Request, res: Response) => new TemasController().getAllTeams(req, res),
);

router.get(
  '/:id',
  (req: Request, res: Response) => new TemasController().getById(req, res),
);

export default router;
