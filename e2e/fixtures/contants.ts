export class Constants {
  public static readonly WRONG_EMAIL_OR_PASSWORD_MESSAGE: string = 'Uh oh! Email or password is incorrect';
  public static readonly WRONG_EMAIL_MESSAGE: string = 'Uh oh! Thisisn’t an email';
  public static readonly PASSWORD_HIDDEN = (quantity: number): string => {
    return '*'.repeat(quantity);
  };
}
