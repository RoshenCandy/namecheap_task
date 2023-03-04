import { IAddress } from '../types/user';
import { BasePO } from './base.po';

export class ProfilePO extends BasePO {
  public item: string = '.item[ng-class*="{itemName}"]';

  public getItem(itemName: string): string {
    return this.item.replace('{itemName}', itemName);
  }

  public getFullUserAddress(userAddress: IAddress): string {
    return `${userAddress.street}, ${userAddress.city}, ${userAddress.state} ${userAddress.zip}, ${this._getFullCountryName(userAddress.country)}`;
  }

  private _getFullCountryName(shortName: string): string | undefined {
    const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

    return regionNames.of('UA');
  }
}
