import { RegistrationContactSettingsAdminContactPostalAddress } from "./RegistrationContactSettingsAdminContactPostalAddress";

export interface RegistrationContactSettingsAdminContact {
  // Required. Phone number of the contact in international format. For example, "+1-800-555-0123".
  PhoneNumber?: string;

  /*
Required. Postal address of the contact.
Structure is documented below.
*/
  PostalAddress?: RegistrationContactSettingsAdminContactPostalAddress;

  // Required. Email address of the contact.
  Email?: string;

  // Fax number of the contact in international format. For example, "+1-800-555-0123".
  FaxNumber?: string;
}
