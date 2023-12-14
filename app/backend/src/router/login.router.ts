import { Router, Request, Response, NextFunction } from 'express';
import { RequestWithUser } from '../Interfaces/db/IUser';
import LoginValidationMiddleware from '../middlewares/loginValidation.middleware';
import ValidationToken from '../middlewares/validationToken.middleware';
import LoginController from '../controller/login.controller';

const router = Router();

const loginValidationMiddleware = new LoginValidationMiddleware();

router.post(
  '/',
  loginValidationMiddleware.validateLogin,
  (req: Request, res: Response) => new LoginController().login(req, res),
);

router.get(
  '/role',
  (req: Request, res: Response, next: NextFunction) => {
    const reqWithUser = req as RequestWithUser;
    new ValidationToken().validate(reqWithUser, res, next);
  },
  (req: Request, res: Response) => {
    const reqWithUser = req as RequestWithUser;
    new LoginController().getRole(reqWithUser, res);
  },
);

export default router;
