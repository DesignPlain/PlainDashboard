import { RegistrationContactSettingsRegistrantContact } from "./RegistrationContactSettingsRegistrantContact";
import { RegistrationContactSettingsTechnicalContact } from "./RegistrationContactSettingsTechnicalContact";
import { RegistrationContactSettingsAdminContact } from "./RegistrationContactSettingsAdminContact";

export interface RegistrationContactSettings {
  /*
Required. Privacy setting for the contacts associated with the Registration.
Values are PUBLIC_CONTACT_DATA, PRIVATE_CONTACT_DATA, and REDACTED_CONTACT_DATA
*/
  Privacy?: string;

  /*
Caution: Anyone with access to this email address, phone number, and/or postal address can take control of the domain.
Warning: For new Registrations, the registrant receives an email confirmation that they must complete within 15 days to
avoid domain suspension.
Structure is documented below.
*/
  RegistrantContact?: RegistrationContactSettingsRegistrantContact;

  /*
Caution: Anyone with access to this email address, phone number, and/or postal address can take control of the domain.
Warning: For new Registrations, the registrant receives an email confirmation that they must complete within 15 days to
avoid domain suspension.
Structure is documented below.
*/
  TechnicalContact?: RegistrationContactSettingsTechnicalContact;

  /*
Caution: Anyone with access to this email address, phone number, and/or postal address can take control of the domain.
Warning: For new Registrations, the registrant receives an email confirmation that they must complete within 15 days to
avoid domain suspension.
Structure is documented below.
*/
  AdminContact?: RegistrationContactSettingsAdminContact;
}
