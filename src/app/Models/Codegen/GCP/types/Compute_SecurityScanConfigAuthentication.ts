import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_SecurityScanConfigAuthenticationCustomAccount,
  Compute_SecurityScanConfigAuthenticationCustomAccount_GetTypes,
} from "./Compute_SecurityScanConfigAuthenticationCustomAccount";
import {
  Compute_SecurityScanConfigAuthenticationGoogleAccount,
  Compute_SecurityScanConfigAuthenticationGoogleAccount_GetTypes,
} from "./Compute_SecurityScanConfigAuthenticationGoogleAccount";

export interface Compute_SecurityScanConfigAuthentication {
  /*
Describes authentication configuration that uses a custom account.
Structure is documented below.
*/
  CustomAccount?: Compute_SecurityScanConfigAuthenticationCustomAccount;

  /*
Describes authentication configuration that uses a Google account.
Structure is documented below.
*/
  GoogleAccount?: Compute_SecurityScanConfigAuthenticationGoogleAccount;
}

export function Compute_SecurityScanConfigAuthentication_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "CustomAccount",
      "Describes authentication configuration that uses a custom account.\nStructure is documented below.",
      Compute_SecurityScanConfigAuthenticationCustomAccount_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "GoogleAccount",
      "Describes authentication configuration that uses a Google account.\nStructure is documented below.",
      Compute_SecurityScanConfigAuthenticationGoogleAccount_GetTypes(),
      false,
      false,
    ),
  ];
}
