export interface IUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  name: string;
  phone: string;
  address: IAddress;
  supportPin: string;
  newsletterOn: boolean;
}

export interface IAddress {
  country: string;
  state: string;
  city: string;
  zip: string;
  street: string;
}
