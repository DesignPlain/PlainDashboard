import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  sql_UserPasswordPolicyStatus,
  sql_UserPasswordPolicyStatus_GetTypes,
} from "./sql_UserPasswordPolicyStatus";

export interface sql_UserPasswordPolicy {
  // Password expiration duration with one week grace period.
  passwordExpirationDuration?: string;

  //
  statuses?: Array<sql_UserPasswordPolicyStatus>;

  // Number of failed attempts allowed before the user get locked.
  allowedFailedAttempts?: number;

  // If true, the check that will lock user after too many failed login attempts will be enabled.
  enableFailedAttemptsCheck?: boolean;

  // If true, the user must specify the current password before changing the password. This flag is supported only for MySQL.
  enablePasswordVerification?: boolean;
}

export function sql_UserPasswordPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enableFailedAttemptsCheck",
      "If true, the check that will lock user after too many failed login attempts will be enabled.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enablePasswordVerification",
      "If true, the user must specify the current password before changing the password. This flag is supported only for MySQL.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "passwordExpirationDuration",
      "Password expiration duration with one week grace period.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "statuses",
      "",
      sql_UserPasswordPolicyStatus_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "allowedFailedAttempts",
      "Number of failed attempts allowed before the user get locked.",
      [],
      false,
      false,
    ),
  ];
}
