import { Router, Request, Response } from 'express';
import LoginValidationMiddleware from '../middlewares/loginValidation.Middleware';
import ValidationToken from '../middlewares/validationToken';
import LoginController from '../controller/login.controller';

const router = Router();

const loginValidationMiddleware = new LoginValidationMiddleware();
const validationToken = new ValidationToken();

router.post(
  '/',
  loginValidationMiddleware.validateLogin,
  (req: Request, res: Response) => new LoginController().login(req, res),
);

router.get(
  '/role',
  validationToken.validate,
  (req: Request, res: Response) => new LoginController().getRole(req, res),
);

export default router;
