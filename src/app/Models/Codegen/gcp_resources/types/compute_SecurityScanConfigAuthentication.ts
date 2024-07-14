import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  compute_SecurityScanConfigAuthenticationCustomAccount,
  compute_SecurityScanConfigAuthenticationCustomAccount_GetTypes,
} from "./compute_SecurityScanConfigAuthenticationCustomAccount";
import {
  compute_SecurityScanConfigAuthenticationGoogleAccount,
  compute_SecurityScanConfigAuthenticationGoogleAccount_GetTypes,
} from "./compute_SecurityScanConfigAuthenticationGoogleAccount";

export interface compute_SecurityScanConfigAuthentication {
  /*
Describes authentication configuration that uses a custom account.
Structure is documented below.
*/
  customAccount?: compute_SecurityScanConfigAuthenticationCustomAccount;

  /*
Describes authentication configuration that uses a Google account.
Structure is documented below.
*/
  googleAccount?: compute_SecurityScanConfigAuthenticationGoogleAccount;
}

export function compute_SecurityScanConfigAuthentication_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "customAccount",
      "Describes authentication configuration that uses a custom account.\nStructure is documented below.",
      compute_SecurityScanConfigAuthenticationCustomAccount_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "googleAccount",
      "Describes authentication configuration that uses a Google account.\nStructure is documented below.",
      compute_SecurityScanConfigAuthenticationGoogleAccount_GetTypes(),
      false,
      false,
    ),
  ];
}
