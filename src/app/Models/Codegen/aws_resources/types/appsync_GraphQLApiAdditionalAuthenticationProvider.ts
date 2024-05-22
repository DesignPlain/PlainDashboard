import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appsync_GraphQLApiAdditionalAuthenticationProviderOpenidConnectConfig,
  appsync_GraphQLApiAdditionalAuthenticationProviderOpenidConnectConfig_GetTypes,
} from "./appsync_GraphQLApiAdditionalAuthenticationProviderOpenidConnectConfig";
import {
  appsync_GraphQLApiAdditionalAuthenticationProviderUserPoolConfig,
  appsync_GraphQLApiAdditionalAuthenticationProviderUserPoolConfig_GetTypes,
} from "./appsync_GraphQLApiAdditionalAuthenticationProviderUserPoolConfig";
import {
  appsync_GraphQLApiAdditionalAuthenticationProviderLambdaAuthorizerConfig,
  appsync_GraphQLApiAdditionalAuthenticationProviderLambdaAuthorizerConfig_GetTypes,
} from "./appsync_GraphQLApiAdditionalAuthenticationProviderLambdaAuthorizerConfig";

export interface appsync_GraphQLApiAdditionalAuthenticationProvider {
  // Nested argument containing OpenID Connect configuration. Defined below.
  openidConnectConfig?: appsync_GraphQLApiAdditionalAuthenticationProviderOpenidConnectConfig;

  // Amazon Cognito User Pool configuration. Defined below.
  userPoolConfig?: appsync_GraphQLApiAdditionalAuthenticationProviderUserPoolConfig;

  // Authentication type. Valid values: `API_KEY`, `AWS_IAM`, `AMAZON_COGNITO_USER_POOLS`, `OPENID_CONNECT`, `AWS_LAMBDA`
  authenticationType?: string;

  // Nested argument containing Lambda authorizer configuration. Defined below.
  lambdaAuthorizerConfig?: appsync_GraphQLApiAdditionalAuthenticationProviderLambdaAuthorizerConfig;
}

export function appsync_GraphQLApiAdditionalAuthenticationProvider_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "openidConnectConfig",
      "Nested argument containing OpenID Connect configuration. Defined below.",
      appsync_GraphQLApiAdditionalAuthenticationProviderOpenidConnectConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "userPoolConfig",
      "Amazon Cognito User Pool configuration. Defined below.",
      appsync_GraphQLApiAdditionalAuthenticationProviderUserPoolConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "authenticationType",
      "Authentication type. Valid values: `API_KEY`, `AWS_IAM`, `AMAZON_COGNITO_USER_POOLS`, `OPENID_CONNECT`, `AWS_LAMBDA`",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "lambdaAuthorizerConfig",
      "Nested argument containing Lambda authorizer configuration. Defined below.",
      appsync_GraphQLApiAdditionalAuthenticationProviderLambdaAuthorizerConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
