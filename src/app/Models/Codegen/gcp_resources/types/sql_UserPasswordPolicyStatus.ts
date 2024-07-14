import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sql_UserPasswordPolicyStatus {
  // If true, user does not have login privileges.
  locked?: boolean;

  // Password expiration duration with one week grace period.
  passwordExpirationTime?: string;
}

export function sql_UserPasswordPolicyStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "locked",
      "If true, user does not have login privileges.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "passwordExpirationTime",
      "Password expiration duration with one week grace period.",
      [],
      false,
      false,
    ),
  ];
}
