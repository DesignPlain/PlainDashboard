import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface sql_getDatabaseInstancesInstanceSettingPasswordValidationPolicy {
  // Password complexity.
  complexity?: string;

  // Disallow username as a part of the password.
  disallowUsernameSubstring?: boolean;

  // Whether the password policy is enabled or not.
  enablePasswordPolicy?: boolean;

  // Minimum number of characters allowed.
  minLength?: number;

  // Minimum interval after which the password can be changed. This flag is only supported for PostgresSQL.
  passwordChangeInterval?: string;

  // Number of previous passwords that cannot be reused.
  reuseInterval?: number;
}

export function sql_getDatabaseInstancesInstanceSettingPasswordValidationPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enablePasswordPolicy",
      "Whether the password policy is enabled or not.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minLength",
      "Minimum number of characters allowed.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "passwordChangeInterval",
      "Minimum interval after which the password can be changed. This flag is only supported for PostgresSQL.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "reuseInterval",
      "Number of previous passwords that cannot be reused.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "complexity",
      "Password complexity.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "disallowUsernameSubstring",
      "Disallow username as a part of the password.",
      [],
      true,
      false,
    ),
  ];
}
