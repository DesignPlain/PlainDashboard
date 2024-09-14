import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_SecurityScanConfigAuthenticationGoogleAccount {
  /*
The password of the Google account. The credential is stored encrypted
in GCP.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  password?: string;

  // The user name of the Google account.
  username?: string;
}

export function compute_SecurityScanConfigAuthenticationGoogleAccount_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "password",
      "The password of the Google account. The credential is stored encrypted\nin GCP.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "username",
      "The user name of the Google account.",
      () => [],
      true,
      false,
    ),
  ];
}
