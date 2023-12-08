import IUser from '../Interfaces/db/IUser';
import Users from '../database/models/usersModel';

interface UserModel {
  getUserByEmail(email: string): Promise<IUser | null>;
}

class UsersModel implements UserModel {
  private db = Users;

  public async getUserByEmail(email: string): Promise<IUser | null> {
    const user = await this.db.findOne({ where: { email } });
    return user;
  }
}

export default UsersModel;