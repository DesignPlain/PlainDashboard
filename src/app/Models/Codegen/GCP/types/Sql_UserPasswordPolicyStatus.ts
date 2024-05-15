import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Sql_UserPasswordPolicyStatus {
  // If true, user does not have login privileges.
  Locked?: boolean;

  // Password expiration duration with one week grace period.
  PasswordExpirationTime?: string;
}

export function Sql_UserPasswordPolicyStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Locked",
      "If true, user does not have login privileges.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PasswordExpirationTime",
      "Password expiration duration with one week grace period.",
      [],
      false,
      false,
    ),
  ];
}
