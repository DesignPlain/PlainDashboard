import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  clouddomains_RegistrationContactSettingsRegistrantContact,
  clouddomains_RegistrationContactSettingsRegistrantContact_GetTypes,
} from "./clouddomains_RegistrationContactSettingsRegistrantContact";
import {
  clouddomains_RegistrationContactSettingsTechnicalContact,
  clouddomains_RegistrationContactSettingsTechnicalContact_GetTypes,
} from "./clouddomains_RegistrationContactSettingsTechnicalContact";
import {
  clouddomains_RegistrationContactSettingsAdminContact,
  clouddomains_RegistrationContactSettingsAdminContact_GetTypes,
} from "./clouddomains_RegistrationContactSettingsAdminContact";

export interface clouddomains_RegistrationContactSettings {
  /*
Required. Privacy setting for the contacts associated with the Registration.
Values are PUBLIC_CONTACT_DATA, PRIVATE_CONTACT_DATA, and REDACTED_CONTACT_DATA
*/
  privacy?: string;

  /*
Caution: Anyone with access to this email address, phone number, and/or postal address can take control of the domain.
Warning: For new Registrations, the registrant receives an email confirmation that they must complete within 15 days to
avoid domain suspension.
Structure is documented below.
*/
  registrantContact?: clouddomains_RegistrationContactSettingsRegistrantContact;

  /*
Caution: Anyone with access to this email address, phone number, and/or postal address can take control of the domain.
Warning: For new Registrations, the registrant receives an email confirmation that they must complete within 15 days to
avoid domain suspension.
Structure is documented below.
*/
  technicalContact?: clouddomains_RegistrationContactSettingsTechnicalContact;

  /*
Caution: Anyone with access to this email address, phone number, and/or postal address can take control of the domain.
Warning: For new Registrations, the registrant receives an email confirmation that they must complete within 15 days to
avoid domain suspension.
Structure is documented below.
*/
  adminContact?: clouddomains_RegistrationContactSettingsAdminContact;
}

export function clouddomains_RegistrationContactSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "privacy",
      "Required. Privacy setting for the contacts associated with the Registration.\nValues are PUBLIC_CONTACT_DATA, PRIVATE_CONTACT_DATA, and REDACTED_CONTACT_DATA",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "registrantContact",
      "Caution: Anyone with access to this email address, phone number, and/or postal address can take control of the domain.\nWarning: For new Registrations, the registrant receives an email confirmation that they must complete within 15 days to\navoid domain suspension.\nStructure is documented below.",
      clouddomains_RegistrationContactSettingsRegistrantContact_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "technicalContact",
      "Caution: Anyone with access to this email address, phone number, and/or postal address can take control of the domain.\nWarning: For new Registrations, the registrant receives an email confirmation that they must complete within 15 days to\navoid domain suspension.\nStructure is documented below.",
      clouddomains_RegistrationContactSettingsTechnicalContact_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "adminContact",
      "Caution: Anyone with access to this email address, phone number, and/or postal address can take control of the domain.\nWarning: For new Registrations, the registrant receives an email confirmation that they must complete within 15 days to\navoid domain suspension.\nStructure is documented below.",
      clouddomains_RegistrationContactSettingsAdminContact_GetTypes(),
      true,
      true,
    ),
  ];
}
