import { Router, Request, Response } from 'express';
import LoginValidationMiddleware from '../middlewares/loginValidation.Middleware';
import UsersController from '../controller/users.controller';

const router = Router();

const loginValidationMiddleware = new LoginValidationMiddleware();

router.post(
  '/',
  loginValidationMiddleware.validateLogin,
  (req: Request, res: Response) => new UsersController().login(req, res),
);

export default router;
