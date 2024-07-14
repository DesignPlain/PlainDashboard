import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sql_DatabaseInstanceSettingsPasswordValidationPolicy {
  // Checks if the password is a combination of lowercase, uppercase, numeric, and non-alphanumeric characters.
  complexity?: string;

  // Prevents the use of the username in the password.
  disallowUsernameSubstring?: boolean;

  /*
Enables or disable the password validation policy.

The optional `replica_configuration` block must have `master_instance_name` set
to work, cannot be updated, and supports:
*/
  enablePasswordPolicy?: boolean;

  // Specifies the minimum number of characters that the password must have.
  minLength?: number;

  // Specifies the minimum duration after which you can change the password.
  passwordChangeInterval?: string;

  // Specifies the number of previous passwords that you can't reuse.
  reuseInterval?: number;
}

export function sql_DatabaseInstanceSettingsPasswordValidationPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "minLength",
      "Specifies the minimum number of characters that the password must have.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "passwordChangeInterval",
      "Specifies the minimum duration after which you can change the password.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "reuseInterval",
      "Specifies the number of previous passwords that you can't reuse.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "complexity",
      "Checks if the password is a combination of lowercase, uppercase, numeric, and non-alphanumeric characters.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "disallowUsernameSubstring",
      "Prevents the use of the username in the password.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enablePasswordPolicy",
      "Enables or disable the password validation policy.\n\nThe optional `replica_configuration` block must have `master_instance_name` set\nto work, cannot be updated, and supports:",
      [],
      true,
      false,
    ),
  ];
}
