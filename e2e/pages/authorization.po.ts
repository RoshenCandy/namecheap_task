import { BasePO } from './base.po';

export class AuthorizationPO extends BasePO {
  public emailInput: string = '.form-group.email input';
  public passwordInput: string = '.password input';
  public showHidePasswordButton: string = 'button .icon-eye';
  public emailTooltipError: string = '.form-group.email ' + this.tooltipError;
}
