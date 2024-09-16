import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appsync_GraphQLApiUserPoolConfig {
  // Regular expression for validating the incoming Amazon Cognito User Pool app client ID.
  appIdClientRegex?: string;

  // AWS region in which the user pool was created.
  awsRegion?: string;

  // Action that you want your GraphQL API to take when a request that uses Amazon Cognito User Pool authentication doesn't match the Amazon Cognito User Pool configuration. Valid: `ALLOW` and `DENY`
  defaultAction?: string;

  // User pool ID.
  userPoolId?: string;
}

export function appsync_GraphQLApiUserPoolConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'appIdClientRegex',
      'Regular expression for validating the incoming Amazon Cognito User Pool app client ID.',
      () => [],
      false,
      false,
    ),
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
      'defaultAction',
      "Action that you want your GraphQL API to take when a request that uses Amazon Cognito User Pool authentication doesn't match the Amazon Cognito User Pool configuration. Valid: `ALLOW` and `DENY`",
      () => [],
      true,
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
  ];
}
