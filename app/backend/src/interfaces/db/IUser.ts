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

export type { User };
export default IUser;
