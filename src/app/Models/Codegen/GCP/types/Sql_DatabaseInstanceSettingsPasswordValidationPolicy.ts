import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Sql_DatabaseInstanceSettingsPasswordValidationPolicy {
  // Prevents the use of the username in the password.
  DisallowUsernameSubstring?: boolean;

  /*
Enables or disable the password validation policy.

The optional `replica_configuration` block must have `master_instance_name` set
to work, cannot be updated, and supports:
*/
  EnablePasswordPolicy?: boolean;

  // Specifies the minimum number of characters that the password must have.
  MinLength?: number;

  // Specifies the minimum duration after which you can change the password.
  PasswordChangeInterval?: string;

  // Specifies the number of previous passwords that you can't reuse.
  ReuseInterval?: number;

  // Checks if the password is a combination of lowercase, uppercase, numeric, and non-alphanumeric characters.
  Complexity?: string;
}

export function Sql_DatabaseInstanceSettingsPasswordValidationPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "MinLength",
      "Specifies the minimum number of characters that the password must have.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PasswordChangeInterval",
      "Specifies the minimum duration after which you can change the password.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ReuseInterval",
      "Specifies the number of previous passwords that you can't reuse.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Complexity",
      "Checks if the password is a combination of lowercase, uppercase, numeric, and non-alphanumeric characters.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "DisallowUsernameSubstring",
      "Prevents the use of the username in the password.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnablePasswordPolicy",
      "Enables or disable the password validation policy.\n\nThe optional `replica_configuration` block must have `master_instance_name` set\nto work, cannot be updated, and supports:",
      [],
      true,
      false,
    ),
  ];
}
