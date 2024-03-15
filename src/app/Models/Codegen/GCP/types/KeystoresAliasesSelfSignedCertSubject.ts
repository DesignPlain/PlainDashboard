export interface KeystoresAliasesSelfSignedCertSubject {
  // Common name of the organization. Maximum length is 64 characters.
  CommonName?: string;

  // Two-letter country code. Example, IN for India, US for United States of America.
  CountryCode?: string;

  /*
Email address. Max 255 characters.

- - -
*/
  Email?: string;

  // City or town name. Maximum length is 128 characters.
  Locality?: string;

  // Organization name. Maximum length is 64 characters.
  Org?: string;

  // Organization team name. Maximum length is 64 characters.
  OrgUnit?: string;

  // State or district name. Maximum length is 128 characters.
  State?: string;
}
