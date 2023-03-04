import { IAddress, IUser } from '../types/user';
// import { Address } from './address';

export class User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  name: string;
  phone: string;
  address: IAddress;
  supportPin: string;
  newsletterOn: boolean;

  public constructor(user: IUser) {
    this.email = user.email;
    this.password = user.password;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.name = `${user.firstName} ${user.lastName}`;
    this.phone = user.phone;
    this.address = user.address;
    this.supportPin = user.supportPin;
    this.newsletterOn = user.newsletterOn;
  }
}
