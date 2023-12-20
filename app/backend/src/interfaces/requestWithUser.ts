import { Request } from 'express';
import { User } from './db/IUser';

interface RequestWithUser extends Request {
  user: User;
}

export default RequestWithUser;
