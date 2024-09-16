import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appsync_GraphQLApiAdditionalAuthenticationProviderUserPoolConfig,
  appsync_GraphQLApiAdditionalAuthenticationProviderUserPoolConfig_GetTypes,
} from './appsync_GraphQLApiAdditionalAuthenticationProviderUserPoolConfig';
import {
  appsync_GraphQLApiAdditionalAuthenticationProviderLambdaAuthorizerConfig,
  appsync_GraphQLApiAdditionalAuthenticationProviderLambdaAuthorizerConfig_GetTypes,
} from './appsync_GraphQLApiAdditionalAuthenticationProviderLambdaAuthorizerConfig';
import {
  appsync_GraphQLApiAdditionalAuthenticationProviderOpenidConnectConfig,
  appsync_GraphQLApiAdditionalAuthenticationProviderOpenidConnectConfig_GetTypes,
} from './appsync_GraphQLApiAdditionalAuthenticationProviderOpenidConnectConfig';

export interface appsync_GraphQLApiAdditionalAuthenticationProvider {
  // Authentication type. Valid values: `API_KEY`, `AWS_IAM`, `AMAZON_COGNITO_USER_POOLS`, `OPENID_CONNECT`, `AWS_LAMBDA`
  authenticationType?: string;

  // Nested argument containing Lambda authorizer configuration. See `lambda_authorizer_config` Block for details.
  lambdaAuthorizerConfig?: appsync_GraphQLApiAdditionalAuthenticationProviderLambdaAuthorizerConfig;

  // Nested argument containing OpenID Connect configuration. See `openid_connect_config` Block for details.
  openidConnectConfig?: appsync_GraphQLApiAdditionalAuthenticationProviderOpenidConnectConfig;

  // Amazon Cognito User Pool configuration. See `user_pool_config` Block for details.
  userPoolConfig?: appsync_GraphQLApiAdditionalAuthenticationProviderUserPoolConfig;
}

export function appsync_GraphQLApiAdditionalAuthenticationProvider_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'userPoolConfig',
      'Amazon Cognito User Pool configuration. See `user_pool_config` Block for details.',
      () =>
        appsync_GraphQLApiAdditionalAuthenticationProviderUserPoolConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'authenticationType',
      'Authentication type. Valid values: `API_KEY`, `AWS_IAM`, `AMAZON_COGNITO_USER_POOLS`, `OPENID_CONNECT`, `AWS_LAMBDA`',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'lambdaAuthorizerConfig',
      'Nested argument containing Lambda authorizer configuration. See `lambda_authorizer_config` Block for details.',
      () =>
        appsync_GraphQLApiAdditionalAuthenticationProviderLambdaAuthorizerConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'openidConnectConfig',
      'Nested argument containing OpenID Connect configuration. See `openid_connect_config` Block for details.',
      () =>
        appsync_GraphQLApiAdditionalAuthenticationProviderOpenidConnectConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
