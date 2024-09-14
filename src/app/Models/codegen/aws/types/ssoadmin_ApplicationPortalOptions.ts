import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ssoadmin_ApplicationPortalOptionsSignInOptions,
  ssoadmin_ApplicationPortalOptionsSignInOptions_GetTypes,
} from "./ssoadmin_ApplicationPortalOptionsSignInOptions";

export interface ssoadmin_ApplicationPortalOptions {
  // Indicates whether this application is visible in the access portal. Valid values are `ENABLED` and `DISABLED`.
  visibility?: string;

  // Sign-in options for the access portal. See `sign_in_options` below.
  signInOptions?: ssoadmin_ApplicationPortalOptionsSignInOptions;
}

export function ssoadmin_ApplicationPortalOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "visibility",
      "Indicates whether this application is visible in the access portal. Valid values are `ENABLED` and `DISABLED`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "signInOptions",
      "Sign-in options for the access portal. See `sign_in_options` below.",
      () => ssoadmin_ApplicationPortalOptionsSignInOptions_GetTypes(),
      false,
      false,
    ),
  ];
}
