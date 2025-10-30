export const COMPANY_NAME = "PLACED";
export const COMPANY_FULL_NAME = "PLACED Staff Dash";
export const COMPANY_TAGLINE = "Your team, our home.";
export const AI_HELPER_NAME = "Lunai";
export const COMPANY_ADDRESS = "123 Dashboard Way, Staging, CA 90210";
export const COMPANY_PHONE = "555-PLACED-DASH";
export const COMPANY_EMAIL = "support@placeddash.com";
export const DEFAULT_QUOTE_EXPIRY_DAYS = 30;
export const DEFAULT_TAX_RATE = 0.08;
export type IGoogleUser = {
  avatar_url: string;
  email: string;
  email_verified: boolean;
  full_name: string;
  iss: string;
  name: string;
  picture: string;
  provider_id: string;
  sub: string;
};

export type IDbCompany = {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  email: string;
  website_url: string;
  industry: 'Construction' | 'Insurance' | 'Computer Software' | '' | string;
};

export type IDbContact = {
  id: number;
  first_name: string;
  last_name: string;
  middle_name?: string;
  phone?: string;
  email?: string;
  address?: string;
  city?: string;
  state?: string;
  postal_code?: string;
  type:
    | 'Residential'
    | 'Commercial'
    | 'Industrial'
    | 'Multi-Family/HOA'
    | 'Government/Institutional';
  company_id?: number;
  company: IDbCompany;
};

export type IDbCustomer = {
  id: number;
  customer_type_id: number;
  first_name: string;
  last_name: string;
  street_address: string;
  city: string;
  zipcode: string;
  phone_number: string;
  email: string;
  updated_at: string | null;
  created_at: string;
  company_name: string | null;
  state: string;
  customer_type: IDbCustomerType;
};

export type IDbCustomerType = {
  id: number;
  name: string;
  description: string;
  updated_at: string | null;
  created_at: string;
};

export type IDbQRequest = {
  firstName: string;
  lastName: string;
  email: string;
  phone_number: string;
  customer_typeID: string;
  est_request_status_id: string;
  requested_date: string;
  service_type_id: number;
  streetAddress: string;
  city: string;
  state: string;
  zipcode: string;
};

export type IFormAddCustomer = {
  first_name: string;
  last_name: string;
  customer_tpye: string;
  email: string;
  phone_number: string;
  street_address: string;
  city: string;
  state: string;
  zipcode: string;
};

enum CustomerTypeEnum {
  Residential = 'Residential',
  Commercial = 'Commercial',
  Industrial = 'Industrial',
  MultiFamilyHOA = 'Multi-Family/HOA',
  GovernmentInstitutional = 'Government/Institutional'
}

export type IDbQuoteRequestStatus = {
  id: number;
  name: string;
  description: string;
  updated_at: Date;
  created_at: Date;
};