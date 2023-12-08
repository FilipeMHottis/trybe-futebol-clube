import * as bycript from 'bcryptjs';

class Bcrypt {
  private saltRounds = process.env.BCRYPT_SALT_ROUNDS || 10;

  public encrypt = async (password: string): Promise<string> => {
    const newPassword = bycript.hash(password, this.saltRounds);
    return newPassword;
  };

  public compare = async (
    password: string,
    hash: string,
  ): Promise<boolean> => {
    const isMatch = await bycript.compare(password, hash);
    return isMatch;
  };
}

export default new Bcrypt();
