export type UserType = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  office_id: string;
  birthdate: string;
  active: boolean;
};

export type OfficeType = {
  contact: string;
  countryId: number;
  id: number;
  phone: string;
  title: string;
};
