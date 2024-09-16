import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appsync_GraphQLApiAdditionalAuthenticationProviderLambdaAuthorizerConfig {
  // Number of seconds a response should be cached for. The default is 5 minutes (300 seconds). The Lambda function can override this by returning a `ttlOverride` key in its response. A value of 0 disables caching of responses. Minimum value of 0. Maximum value of 3600.
  authorizerResultTtlInSeconds?: number;

  // ARN of the Lambda function to be called for authorization. Note: This Lambda function must have a resource-based policy assigned to it, to allow `lambda:InvokeFunction` from service principal `appsync.amazonaws.com`.
  authorizerUri?: string;

  // Regular expression for validation of tokens before the Lambda function is called.
  identityValidationExpression?: string;
}

export function appsync_GraphQLApiAdditionalAuthenticationProviderLambdaAuthorizerConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'authorizerResultTtlInSeconds',
      'Number of seconds a response should be cached for. The default is 5 minutes (300 seconds). The Lambda function can override this by returning a `ttlOverride` key in its response. A value of 0 disables caching of responses. Minimum value of 0. Maximum value of 3600.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'authorizerUri',
      'ARN of the Lambda function to be called for authorization. Note: This Lambda function must have a resource-based policy assigned to it, to allow `lambda:InvokeFunction` from service principal `appsync.amazonaws.com`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'identityValidationExpression',
      'Regular expression for validation of tokens before the Lambda function is called.',
      () => [],
      false,
      false,
    ),
  ];
}
