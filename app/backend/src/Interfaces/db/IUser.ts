import { Request } from 'express';

interface IUser {
  id?: number;
  username: string;
  role: string;
  email: string;
  password: string;
}

type User = {
  id?: number;
  username: string;
  email: string;
};

interface RequestWithUser extends Request {
  user: User;
}

export type { User, RequestWithUser };
export default IUser;
