import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appsync_GraphQLApiOpenidConnectConfig,
  appsync_GraphQLApiOpenidConnectConfig_GetTypes,
} from '../types/appsync_GraphQLApiOpenidConnectConfig';
import {
  appsync_GraphQLApiAdditionalAuthenticationProvider,
  appsync_GraphQLApiAdditionalAuthenticationProvider_GetTypes,
} from '../types/appsync_GraphQLApiAdditionalAuthenticationProvider';
import {
  appsync_GraphQLApiLogConfig,
  appsync_GraphQLApiLogConfig_GetTypes,
} from '../types/appsync_GraphQLApiLogConfig';
import {
  appsync_GraphQLApiLambdaAuthorizerConfig,
  appsync_GraphQLApiLambdaAuthorizerConfig_GetTypes,
} from '../types/appsync_GraphQLApiLambdaAuthorizerConfig';
import {
  appsync_GraphQLApiUserPoolConfig,
  appsync_GraphQLApiUserPoolConfig_GetTypes,
} from '../types/appsync_GraphQLApiUserPoolConfig';
import {
  appsync_GraphQLApiEnhancedMetricsConfig,
  appsync_GraphQLApiEnhancedMetricsConfig_GetTypes,
} from '../types/appsync_GraphQLApiEnhancedMetricsConfig';

export interface GraphQLApiArgs {
  // Nested argument containing logging configuration. See `log_config` Block for details.
  logConfig?: appsync_GraphQLApiLogConfig;

  // Whether tracing with X-ray is enabled. Defaults to false.
  xrayEnabled?: boolean;

  // Authentication type. Valid values: `API_KEY`, `AWS_IAM`, `AMAZON_COGNITO_USER_POOLS`, `OPENID_CONNECT`, `AWS_LAMBDA`
  authenticationType?: string;

  // The maximum number of resolvers that can be invoked in a single request. The default value is `0` (or unspecified), which will set the limit to `10000`. When specified, the limit value can be between `1` and `10000`. This field will produce a limit error if the operation falls out of bounds.
  resolverCountLimit?: number;

  // Schema definition, in GraphQL schema language format. This provider cannot perform drift detection of this configuration.
  schema?: string;

  // Nested argument containing Lambda authorizer configuration. See `lambda_authorizer_config` Block for details.
  lambdaAuthorizerConfig?: appsync_GraphQLApiLambdaAuthorizerConfig;

  // Sets the value of the GraphQL API to enable (`ENABLED`) or disable (`DISABLED`) introspection. If no value is provided, the introspection configuration will be set to ENABLED by default. This field will produce an error if the operation attempts to use the introspection feature while this field is disabled. For more information about introspection, see [GraphQL introspection](https://graphql.org/learn/introspection/).
  introspectionConfig?: string;

  /*
User-supplied name for the GraphSQL API.

The following arguments are optional:
*/
  name?: string;

  /*
The maximum depth a query can have in a single request. Depth refers to the amount of nested levels allowed in the body of query. The default value is `0` (or unspecified), which indicates there's no depth limit. If you set a limit, it can be between `1` and `75` nested levels. This field will produce a limit error if the operation falls out of bounds.

Note that fields can still be set to nullable or non-nullable. If a non-nullable field produces an error, the error will be thrown upwards to the first nullable field available.
*/
  queryDepthLimit?: number;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Amazon Cognito User Pool configuration. See `user_pool_config` Block for details.
  userPoolConfig?: appsync_GraphQLApiUserPoolConfig;

  // Enables and controls the enhanced metrics feature. See `enhanced_metrics_config` Block for details.
  enhancedMetricsConfig?: appsync_GraphQLApiEnhancedMetricsConfig;

  // Nested argument containing OpenID Connect configuration. See `openid_connect_config` Block for details.
  openidConnectConfig?: appsync_GraphQLApiOpenidConnectConfig;

  // Sets the value of the GraphQL API to public (`GLOBAL`) or private (`PRIVATE`). If no value is provided, the visibility will be set to `GLOBAL` by default. This value cannot be changed once the API has been created.
  visibility?: string;

  // One or more additional authentication providers for the GraphSQL API. See `additional_authentication_provider` Block for details.
  additionalAuthenticationProviders?: Array<appsync_GraphQLApiAdditionalAuthenticationProvider>;
}
export class GraphQLApi extends DS_Resource {
  // Enables and controls the enhanced metrics feature. See `enhanced_metrics_config` Block for details.
  public enhancedMetricsConfig?: appsync_GraphQLApiEnhancedMetricsConfig;

  /*
The maximum depth a query can have in a single request. Depth refers to the amount of nested levels allowed in the body of query. The default value is `0` (or unspecified), which indicates there's no depth limit. If you set a limit, it can be between `1` and `75` nested levels. This field will produce a limit error if the operation falls out of bounds.

Note that fields can still be set to nullable or non-nullable. If a non-nullable field produces an error, the error will be thrown upwards to the first nullable field available.
*/
  public queryDepthLimit?: number;

  // Sets the value of the GraphQL API to public (`GLOBAL`) or private (`PRIVATE`). If no value is provided, the visibility will be set to `GLOBAL` by default. This value cannot be changed once the API has been created.
  public visibility?: string;

  // Sets the value of the GraphQL API to enable (`ENABLED`) or disable (`DISABLED`) introspection. If no value is provided, the introspection configuration will be set to ENABLED by default. This field will produce an error if the operation attempts to use the introspection feature while this field is disabled. For more information about introspection, see [GraphQL introspection](https://graphql.org/learn/introspection/).
  public introspectionConfig?: string;

  // Nested argument containing Lambda authorizer configuration. See `lambda_authorizer_config` Block for details.
  public lambdaAuthorizerConfig?: appsync_GraphQLApiLambdaAuthorizerConfig;

  // Authentication type. Valid values: `API_KEY`, `AWS_IAM`, `AMAZON_COGNITO_USER_POOLS`, `OPENID_CONNECT`, `AWS_LAMBDA`
  public authenticationType?: string;

  // Nested argument containing logging configuration. See `log_config` Block for details.
  public logConfig?: appsync_GraphQLApiLogConfig;

  // Nested argument containing OpenID Connect configuration. See `openid_connect_config` Block for details.
  public openidConnectConfig?: appsync_GraphQLApiOpenidConnectConfig;

  // The maximum number of resolvers that can be invoked in a single request. The default value is `0` (or unspecified), which will set the limit to `10000`. When specified, the limit value can be between `1` and `10000`. This field will produce a limit error if the operation falls out of bounds.
  public resolverCountLimit?: number;

  // Schema definition, in GraphQL schema language format. This provider cannot perform drift detection of this configuration.
  public schema?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of URIs associated with the APIE.g., `uris["GRAPHQL"] = https://ID.appsync-api.REGION.amazonaws.com/graphql`
  public uris?: Map<string, string>;

  // Amazon Cognito User Pool configuration. See `user_pool_config` Block for details.
  public userPoolConfig?: appsync_GraphQLApiUserPoolConfig;

  // One or more additional authentication providers for the GraphSQL API. See `additional_authentication_provider` Block for details.
  public additionalAuthenticationProviders?: Array<appsync_GraphQLApiAdditionalAuthenticationProvider>;

  // ARN
  public arn?: string;

  /*
User-supplied name for the GraphSQL API.

The following arguments are optional:
*/
  public name?: string;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Whether tracing with X-ray is enabled. Defaults to false.
  public xrayEnabled?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'openidConnectConfig',
        'Nested argument containing OpenID Connect configuration. See `openid_connect_config` Block for details.',
        () => appsync_GraphQLApiOpenidConnectConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'logConfig',
        'Nested argument containing logging configuration. See `log_config` Block for details.',
        () => appsync_GraphQLApiLogConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'schema',
        'Schema definition, in GraphQL schema language format. This provider cannot perform drift detection of this configuration.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'lambdaAuthorizerConfig',
        'Nested argument containing Lambda authorizer configuration. See `lambda_authorizer_config` Block for details.',
        () => appsync_GraphQLApiLambdaAuthorizerConfig_GetTypes(),
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
        InputType.Number,
        'resolverCountLimit',
        'The maximum number of resolvers that can be invoked in a single request. The default value is `0` (or unspecified), which will set the limit to `10000`. When specified, the limit value can be between `1` and `10000`. This field will produce a limit error if the operation falls out of bounds.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'userPoolConfig',
        'Amazon Cognito User Pool configuration. See `user_pool_config` Block for details.',
        () => appsync_GraphQLApiUserPoolConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'introspectionConfig',
        'Sets the value of the GraphQL API to enable (`ENABLED`) or disable (`DISABLED`) introspection. If no value is provided, the introspection configuration will be set to ENABLED by default. This field will produce an error if the operation attempts to use the introspection feature while this field is disabled. For more information about introspection, see [GraphQL introspection](https://graphql.org/learn/introspection/).',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'enhancedMetricsConfig',
        'Enables and controls the enhanced metrics feature. See `enhanced_metrics_config` Block for details.',
        () => appsync_GraphQLApiEnhancedMetricsConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'visibility',
        'Sets the value of the GraphQL API to public (`GLOBAL`) or private (`PRIVATE`). If no value is provided, the visibility will be set to `GLOBAL` by default. This value cannot be changed once the API has been created.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'additionalAuthenticationProviders',
        'One or more additional authentication providers for the GraphSQL API. See `additional_authentication_provider` Block for details.',
        () => appsync_GraphQLApiAdditionalAuthenticationProvider_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'xrayEnabled',
        'Whether tracing with X-ray is enabled. Defaults to false.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'User-supplied name for the GraphSQL API.\n\nThe following arguments are optional:',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'queryDepthLimit',
        "The maximum depth a query can have in a single request. Depth refers to the amount of nested levels allowed in the body of query. The default value is `0` (or unspecified), which indicates there's no depth limit. If you set a limit, it can be between `1` and `75` nested levels. This field will produce a limit error if the operation falls out of bounds.\n\nNote that fields can still be set to nullable or non-nullable. If a non-nullable field produces an error, the error will be thrown upwards to the first nullable field available.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
