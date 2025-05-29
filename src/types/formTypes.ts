export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
}

export interface AddressInfo {
  address: string;
  city: string;
  zipCode: string;
}

export type FormData = PersonalInfo & AddressInfo;
