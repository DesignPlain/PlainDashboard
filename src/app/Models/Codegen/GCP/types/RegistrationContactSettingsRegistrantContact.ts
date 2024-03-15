import { RegistrationContactSettingsRegistrantContactPostalAddress } from "./RegistrationContactSettingsRegistrantContactPostalAddress";

export interface RegistrationContactSettingsRegistrantContact {
  // Fax number of the contact in international format. For example, "+1-800-555-0123".
  FaxNumber?: string;

  // Required. Phone number of the contact in international format. For example, "+1-800-555-0123".
  PhoneNumber?: string;

  /*
Required. Postal address of the contact.
Structure is documented below.
*/
  PostalAddress?: RegistrationContactSettingsRegistrantContactPostalAddress;

  // Required. Email address of the contact.
  Email?: string;
}
