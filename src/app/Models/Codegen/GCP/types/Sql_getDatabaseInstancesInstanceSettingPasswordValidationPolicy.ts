import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Sql_getDatabaseInstancesInstanceSettingPasswordValidationPolicy {
  // Disallow username as a part of the password.
  DisallowUsernameSubstring?: boolean;

  // Whether the password policy is enabled or not.
  EnablePasswordPolicy?: boolean;

  // Minimum number of characters allowed.
  MinLength?: number;

  // Minimum interval after which the password can be changed. This flag is only supported for PostgresSQL.
  PasswordChangeInterval?: string;

  // Number of previous passwords that cannot be reused.
  ReuseInterval?: number;

  // Password complexity.
  Complexity?: string;
}

export function Sql_getDatabaseInstancesInstanceSettingPasswordValidationPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "MinLength",
      "Minimum number of characters allowed.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PasswordChangeInterval",
      "Minimum interval after which the password can be changed. This flag is only supported for PostgresSQL.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ReuseInterval",
      "Number of previous passwords that cannot be reused.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Complexity",
      "Password complexity.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "DisallowUsernameSubstring",
      "Disallow username as a part of the password.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnablePasswordPolicy",
      "Whether the password policy is enabled or not.",
      [],
      true,
      false,
    ),
  ];
}
