/**
 *  This class creates single instance of fixture entity
 *  Extend it and change createFixtureInstance() method according to creation any entity
 */

export class BaseFactory {
  protected static _setUpDone: boolean = false;

  protected static setUp(): void {
    if (this._setUpDone) {
      return;
    }

    this._setUpDone = true;

    this.createFixtureInstance();
  }

  protected static createFixtureInstance(): void {}
}
