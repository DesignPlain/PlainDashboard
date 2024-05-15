import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Apigee_KeystoresAliasesSelfSignedCertSubject {
  // Organization team name. Maximum length is 64 characters.
  OrgUnit?: string;

  // State or district name. Maximum length is 128 characters.
  State?: string;

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
}

export function Apigee_KeystoresAliasesSelfSignedCertSubject_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Email",
      "Email address. Max 255 characters.\n\n- - -",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Locality",
      "City or town name. Maximum length is 128 characters.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Org",
      "Organization name. Maximum length is 64 characters.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "OrgUnit",
      "Organization team name. Maximum length is 64 characters.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "State",
      "State or district name. Maximum length is 128 characters.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "CommonName",
      "Common name of the organization. Maximum length is 64 characters.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "CountryCode",
      "Two-letter country code. Example, IN for India, US for United States of America.",
      [],
      false,
      true,
    ),
  ];
}
