import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cognito_IdentityPoolCognitoIdentityProvider {
  // The client ID for the Amazon Cognito Identity User Pool.
  clientId?: string;

  // The provider name for an Amazon Cognito Identity User Pool.
  providerName?: string;

  // Whether server-side token validation is enabled for the identity provider’s token or not.
  serverSideTokenCheck?: boolean;
}

export function cognito_IdentityPoolCognitoIdentityProvider_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'serverSideTokenCheck',
      'Whether server-side token validation is enabled for the identity provider’s token or not.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'clientId',
      'The client ID for the Amazon Cognito Identity User Pool.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'providerName',
      'The provider name for an Amazon Cognito Identity User Pool.',
      () => [],
      false,
      false,
    ),
  ];
}
