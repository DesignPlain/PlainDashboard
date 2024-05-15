import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Clouddomains_RegistrationContactSettingsRegistrantContact,
  Clouddomains_RegistrationContactSettingsRegistrantContact_GetTypes,
} from "./Clouddomains_RegistrationContactSettingsRegistrantContact";
import {
  Clouddomains_RegistrationContactSettingsTechnicalContact,
  Clouddomains_RegistrationContactSettingsTechnicalContact_GetTypes,
} from "./Clouddomains_RegistrationContactSettingsTechnicalContact";
import {
  Clouddomains_RegistrationContactSettingsAdminContact,
  Clouddomains_RegistrationContactSettingsAdminContact_GetTypes,
} from "./Clouddomains_RegistrationContactSettingsAdminContact";

export interface Clouddomains_RegistrationContactSettings {
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
  RegistrantContact?: Clouddomains_RegistrationContactSettingsRegistrantContact;

  /*
Caution: Anyone with access to this email address, phone number, and/or postal address can take control of the domain.
Warning: For new Registrations, the registrant receives an email confirmation that they must complete within 15 days to
avoid domain suspension.
Structure is documented below.
*/
  TechnicalContact?: Clouddomains_RegistrationContactSettingsTechnicalContact;

  /*
Caution: Anyone with access to this email address, phone number, and/or postal address can take control of the domain.
Warning: For new Registrations, the registrant receives an email confirmation that they must complete within 15 days to
avoid domain suspension.
Structure is documented below.
*/
  AdminContact?: Clouddomains_RegistrationContactSettingsAdminContact;
}

export function Clouddomains_RegistrationContactSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "AdminContact",
      "Caution: Anyone with access to this email address, phone number, and/or postal address can take control of the domain.\nWarning: For new Registrations, the registrant receives an email confirmation that they must complete within 15 days to\navoid domain suspension.\nStructure is documented below.",
      Clouddomains_RegistrationContactSettingsAdminContact_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Privacy",
      "Required. Privacy setting for the contacts associated with the Registration.\nValues are PUBLIC_CONTACT_DATA, PRIVATE_CONTACT_DATA, and REDACTED_CONTACT_DATA",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "RegistrantContact",
      "Caution: Anyone with access to this email address, phone number, and/or postal address can take control of the domain.\nWarning: For new Registrations, the registrant receives an email confirmation that they must complete within 15 days to\navoid domain suspension.\nStructure is documented below.",
      Clouddomains_RegistrationContactSettingsRegistrantContact_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "TechnicalContact",
      "Caution: Anyone with access to this email address, phone number, and/or postal address can take control of the domain.\nWarning: For new Registrations, the registrant receives an email confirmation that they must complete within 15 days to\navoid domain suspension.\nStructure is documented below.",
      Clouddomains_RegistrationContactSettingsTechnicalContact_GetTypes(),
      true,
      true,
    ),
  ];
}
