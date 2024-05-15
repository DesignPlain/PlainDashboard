import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Clouddomains_RegistrationContactSettingsRegistrantContactPostalAddress,
  Clouddomains_RegistrationContactSettingsRegistrantContactPostalAddress_GetTypes,
} from "./Clouddomains_RegistrationContactSettingsRegistrantContactPostalAddress";

export interface Clouddomains_RegistrationContactSettingsRegistrantContact {
  // Fax number of the contact in international format. For example, "+1-800-555-0123".
  FaxNumber?: string;

  // Required. Phone number of the contact in international format. For example, "+1-800-555-0123".
  PhoneNumber?: string;

  /*
Required. Postal address of the contact.
Structure is documented below.
*/
  PostalAddress?: Clouddomains_RegistrationContactSettingsRegistrantContactPostalAddress;

  // Required. Email address of the contact.
  Email?: string;
}

export function Clouddomains_RegistrationContactSettingsRegistrantContact_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "FaxNumber",
      'Fax number of the contact in international format. For example, "+1-800-555-0123".',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "PhoneNumber",
      'Required. Phone number of the contact in international format. For example, "+1-800-555-0123".',
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "PostalAddress",
      "Required. Postal address of the contact.\nStructure is documented below.",
      Clouddomains_RegistrationContactSettingsRegistrantContactPostalAddress_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Email",
      "Required. Email address of the contact.",
      [],
      true,
      true,
    ),
  ];
}
