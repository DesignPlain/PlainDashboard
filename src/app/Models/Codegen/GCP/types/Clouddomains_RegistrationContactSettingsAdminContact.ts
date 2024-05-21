import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  clouddomains_RegistrationContactSettingsAdminContactPostalAddress,
  clouddomains_RegistrationContactSettingsAdminContactPostalAddress_GetTypes,
} from "./clouddomains_RegistrationContactSettingsAdminContactPostalAddress";

export interface clouddomains_RegistrationContactSettingsAdminContact {
  // Required. Email address of the contact.
  email?: string;

  // Fax number of the contact in international format. For example, "+1-800-555-0123".
  faxNumber?: string;

  // Required. Phone number of the contact in international format. For example, "+1-800-555-0123".
  phoneNumber?: string;

  /*
Required. Postal address of the contact.
Structure is documented below.
*/
  postalAddress?: clouddomains_RegistrationContactSettingsAdminContactPostalAddress;
}

export function clouddomains_RegistrationContactSettingsAdminContact_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "email",
      "Required. Email address of the contact.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "faxNumber",
      'Fax number of the contact in international format. For example, "+1-800-555-0123".',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "phoneNumber",
      'Required. Phone number of the contact in international format. For example, "+1-800-555-0123".',
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "postalAddress",
      "Required. Postal address of the contact.\nStructure is documented below.",
      clouddomains_RegistrationContactSettingsAdminContactPostalAddress_GetTypes(),
      true,
      true,
    ),
  ];
}
