import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cognito_UserPoolPasswordPolicy {
  // Minimum length of the password policy that you have set.
  minimumLength?: number;

  /*
Number of previous passwords that you want Amazon Cognito to restrict each user from reusing. Users can't set a password that matches any of number of previous passwords specified by this argument. A value of 0 means that password history is not enforced. Valid values are between 0 and 24.

--Note:-- This argument requires advanced security features to be active in the user pool.
*/
  passwordHistorySize?: number;

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
}

export function cognito_UserPoolPasswordPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'requireLowercase',
      'Whether you have required users to use at least one lowercase letter in their password.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'requireNumbers',
      'Whether you have required users to use at least one number in their password.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'requireSymbols',
      'Whether you have required users to use at least one symbol in their password.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'requireUppercase',
      'Whether you have required users to use at least one uppercase letter in their password.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'temporaryPasswordValidityDays',
      'In the password policy you have set, refers to the number of days a temporary password is valid. If the user does not sign-in during this time, their password will need to be reset by an administrator.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'minimumLength',
      'Minimum length of the password policy that you have set.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'passwordHistorySize',
      "Number of previous passwords that you want Amazon Cognito to restrict each user from reusing. Users can't set a password that matches any of number of previous passwords specified by this argument. A value of 0 means that password history is not enforced. Valid values are between 0 and 24.\n\n**Note:** This argument requires advanced security features to be active in the user pool.",
      () => [],
      false,
      false,
    ),
  ];
}
