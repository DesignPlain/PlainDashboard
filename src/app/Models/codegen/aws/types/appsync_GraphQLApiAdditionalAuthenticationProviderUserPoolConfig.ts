import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appsync_GraphQLApiAdditionalAuthenticationProviderUserPoolConfig {
  // Regular expression for validating the incoming Amazon Cognito User Pool app client ID.
  appIdClientRegex?: string;

  // AWS region in which the user pool was created.
  awsRegion?: string;

  // User pool ID.
  userPoolId?: string;
}

export function appsync_GraphQLApiAdditionalAuthenticationProviderUserPoolConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'awsRegion',
      'AWS region in which the user pool was created.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'userPoolId',
      'User pool ID.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'appIdClientRegex',
      'Regular expression for validating the incoming Amazon Cognito User Pool app client ID.',
      () => [],
      false,
      false,
    ),
  ];
}
