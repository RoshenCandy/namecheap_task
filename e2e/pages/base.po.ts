export class BasePO {
  public submitButton: string = 'button[type="submit"]';
  public userDropDown: string = '.ssls-header-user.ssls-header-dropdown';
  public header: string = '.ssls-header';
  public userDropDownText: string = this.userDropDown + ' .ssls-toolbar__btn-text';
  public notification: string = '.ssls-notification__info';
  public notificationText: string = this.notification + ' .noty_text';
  public tooltipError: string = '.tooltip-error';
  public profileButton: string = 'a[href="/user/profile"]';
}
