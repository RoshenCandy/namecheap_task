import users from '../../fixtures/users.json';
import { User } from '../../models/user';
import { IUser } from '../../types/user';
import { BaseFactory } from './base-factory';

export class UserFactory extends BaseFactory {
  protected static _user: IUser;
  protected static _nonExistingUser: IUser;
  protected static _invalidUser: IUser;

  public static simpleUser(): User {
    this.setUp();

    return this._user;
  }

  public static nonExistingUser(): User {
    this.setUp();

    return this._nonExistingUser;
  }

  public static invalidUser(): User {
    this.setUp();

    return this._invalidUser;
  }

  protected static createFixtureInstance(): void {
    this._user = new User(users.user);
    this._nonExistingUser = new User(users.nonExistingUser as IUser);
    this._invalidUser = new User(users.invalidUser as IUser);
  }
}
