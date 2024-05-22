import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cognito_UserPoolPasswordPolicy {
  // Whether you have required users to use at least one lowercase letter in their password.
  requireLowercase?: boolean;

  // Whether you have required users to use at least one number in their password.
  requireNumbers?: boolean;

  // Whether you have required users to use at least one symbol in their password.
  requireSymbols?: boolean;

  // Whether you have required users to use at least one uppercase letter in their password.
  requireUppercase?: boolean;

  // In the password policy you have set, refers to the number of days a temporary password is valid. If the user does not sign-in during this time, their password will need to be reset by an administrator.
  temporaryPasswordValidityDays?: number;

  // Minimum length of the password policy that you have set.
  minimumLength?: number;
}

export function cognito_UserPoolPasswordPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "requireNumbers",
      "Whether you have required users to use at least one number in their password.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "requireSymbols",
      "Whether you have required users to use at least one symbol in their password.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "requireUppercase",
      "Whether you have required users to use at least one uppercase letter in their password.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "temporaryPasswordValidityDays",
      "In the password policy you have set, refers to the number of days a temporary password is valid. If the user does not sign-in during this time, their password will need to be reset by an administrator.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minimumLength",
      "Minimum length of the password policy that you have set.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "requireLowercase",
      "Whether you have required users to use at least one lowercase letter in their password.",
      [],
      false,
      false,
    ),
  ];
}
