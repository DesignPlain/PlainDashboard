import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface identityplatform_ConfigSignInEmail {
  // Whether email auth is enabled for the project or not.
  enabled?: boolean;

  /*
Whether a password is required for email auth or not. If true, both an email and
password must be provided to sign in. If false, a user may sign in via either
email/password or email link.
*/
  passwordRequired?: boolean;
}

export function identityplatform_ConfigSignInEmail_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Whether email auth is enabled for the project or not.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'passwordRequired',
      'Whether a password is required for email auth or not. If true, both an email and\npassword must be provided to sign in. If false, a user may sign in via either\nemail/password or email link.',
      () => [],
      false,
      false,
    ),
  ];
}
