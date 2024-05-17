import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Sql_UserPasswordPolicyStatus,
  Sql_UserPasswordPolicyStatus_GetTypes,
} from "./Sql_UserPasswordPolicyStatus";

export interface Sql_UserPasswordPolicy {
  //
  Statuses?: Array<Sql_UserPasswordPolicyStatus>;

  // Number of failed attempts allowed before the user get locked.
  AllowedFailedAttempts?: number;

  // If true, the check that will lock user after too many failed login attempts will be enabled.
  EnableFailedAttemptsCheck?: boolean;

  // If true, the user must specify the current password before changing the password. This flag is supported only for MySQL.
  EnablePasswordVerification?: boolean;

  // Password expiration duration with one week grace period.
  PasswordExpirationDuration?: string;
}

export function Sql_UserPasswordPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Statuses",
      "",
      Sql_UserPasswordPolicyStatus_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "AllowedFailedAttempts",
      "Number of failed attempts allowed before the user get locked.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnableFailedAttemptsCheck",
      "If true, the check that will lock user after too many failed login attempts will be enabled.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnablePasswordVerification",
      "If true, the user must specify the current password before changing the password. This flag is supported only for MySQL.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PasswordExpirationDuration",
      "Password expiration duration with one week grace period.",
      [],
      false,
      false,
    ),
  ];
}
