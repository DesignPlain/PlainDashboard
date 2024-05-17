import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Identityplatform_ConfigSignInEmail {
  // Whether email auth is enabled for the project or not.
  Enabled?: boolean;

  /*
Whether a password is required for email auth or not. If true, both an email and
password must be provided to sign in. If false, a user may sign in via either
email/password or email link.
*/
  PasswordRequired?: boolean;
}

export function Identityplatform_ConfigSignInEmail_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Whether email auth is enabled for the project or not.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "PasswordRequired",
      "Whether a password is required for email auth or not. If true, both an email and\npassword must be provided to sign in. If false, a user may sign in via either\nemail/password or email link.",
      [],
      false,
      false,
    ),
  ];
}
