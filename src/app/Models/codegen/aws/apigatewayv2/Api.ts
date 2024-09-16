import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  apigatewayv2_ApiCorsConfiguration,
  apigatewayv2_ApiCorsConfiguration_GetTypes,
} from '../types/apigatewayv2_ApiCorsConfiguration';

export interface ApiArgs {
  // API protocol. Valid values: `HTTP`, `WEBSOCKET`.
  protocolType?: string;

  /*
The [route selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-route-selection-expressions) for the API.
Defaults to `$request.method $request.path`.
*/
  routeSelectionExpression?: string;

  /*
An [API key selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions).
Valid values: `$context.authorizer.usageIdentifierKey`, `$request.header.x-api-key`. Defaults to `$request.header.x-api-key`.
Applicable for WebSocket APIs.
*/
  apiKeySelectionExpression?: string;

  /*
Whether clients can invoke the API by using the default `execute-api` endpoint.
By default, clients can invoke the API with the default `{api_id}.execute-api.{region}.amazonaws.com endpoint`.
To require that clients use a custom domain name to invoke the API, disable the default endpoint.
*/
  disableExecuteApiEndpoint?: boolean;

  // Name of the API. Must be less than or equal to 128 characters in length.
  name?: string;

  // Map of tags to assign to the API. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Version identifier for the API. Must be between 1 and 64 characters in length.
  version?: string;

  // An OpenAPI specification that defines the set of routes and integrations to create as part of the HTTP APIs. Supported only for HTTP APIs.
  body?: string;

  // Whether warnings should return an error while API Gateway is creating or updating the resource using an OpenAPI specification. Defaults to `false`. Applicable for HTTP APIs.
  failOnWarnings?: boolean;

  // Cross-origin resource sharing (CORS) [configuration](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html). Applicable for HTTP APIs.
  corsConfiguration?: apigatewayv2_ApiCorsConfiguration;

  // Part of _quick create_. Specifies any credentials required for the integration. Applicable for HTTP APIs.
  credentialsArn?: string;

  // Description of the API. Must be less than or equal to 1024 characters in length.
  description?: string;

  // Part of _quick create_. Specifies any [route key](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-routes.html). Applicable for HTTP APIs.
  routeKey?: string;

  /*
Part of _quick create_. Quick create produces an API with an integration, a default catch-all route, and a default stage which is configured to automatically deploy changes.
For HTTP integrations, specify a fully qualified URL. For Lambda integrations, specify a function ARN.
The type of the integration will be `HTTP_PROXY` or `AWS_PROXY`, respectively. Applicable for HTTP APIs.
*/
  target?: string;
}
export class Api extends DS_Resource {
  // Map of tags to assign to the API. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  /*
Part of _quick create_. Quick create produces an API with an integration, a default catch-all route, and a default stage which is configured to automatically deploy changes.
For HTTP integrations, specify a fully qualified URL. For Lambda integrations, specify a function ARN.
The type of the integration will be `HTTP_PROXY` or `AWS_PROXY`, respectively. Applicable for HTTP APIs.
*/
  public target?: string;

  // Part of _quick create_. Specifies any credentials required for the integration. Applicable for HTTP APIs.
  public credentialsArn?: string;

  /*
Whether clients can invoke the API by using the default `execute-api` endpoint.
By default, clients can invoke the API with the default `{api_id}.execute-api.{region}.amazonaws.com endpoint`.
To require that clients use a custom domain name to invoke the API, disable the default endpoint.
*/
  public disableExecuteApiEndpoint?: boolean;

  /*
ARN prefix to be used in an `aws.lambda.Permission`'s `source_arn` attribute
or in an `aws.iam.Policy` to authorize access to the [`@connections` API](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-how-to-call-websocket-api-connections.html).
See the [Amazon API Gateway Developer Guide](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-control-access-iam.html) for details.
*/
  public executionArn?: string;

  // Name of the API. Must be less than or equal to 128 characters in length.
  public name?: string;

  /*
An [API key selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions).
Valid values: `$context.authorizer.usageIdentifierKey`, `$request.header.x-api-key`. Defaults to `$request.header.x-api-key`.
Applicable for WebSocket APIs.
*/
  public apiKeySelectionExpression?: string;

  // ARN of the API.
  public arn?: string;

  // Cross-origin resource sharing (CORS) [configuration](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html). Applicable for HTTP APIs.
  public corsConfiguration?: apigatewayv2_ApiCorsConfiguration;

  // Whether warnings should return an error while API Gateway is creating or updating the resource using an OpenAPI specification. Defaults to `false`. Applicable for HTTP APIs.
  public failOnWarnings?: boolean;

  // API protocol. Valid values: `HTTP`, `WEBSOCKET`.
  public protocolType?: string;

  // Part of _quick create_. Specifies any [route key](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-routes.html). Applicable for HTTP APIs.
  public routeKey?: string;

  /*
The [route selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-route-selection-expressions) for the API.
Defaults to `$request.method $request.path`.
*/
  public routeSelectionExpression?: string;

  // Version identifier for the API. Must be between 1 and 64 characters in length.
  public version?: string;

  // URI of the API, of the form `https://{api-id}.execute-api.{region}.amazonaws.com` for HTTP APIs and `wss://{api-id}.execute-api.{region}.amazonaws.com` for WebSocket APIs.
  public apiEndpoint?: string;

  // An OpenAPI specification that defines the set of routes and integrations to create as part of the HTTP APIs. Supported only for HTTP APIs.
  public body?: string;

  // Description of the API. Must be less than or equal to 1024 characters in length.
  public description?: string;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        'disableExecuteApiEndpoint',
        'Whether clients can invoke the API by using the default `execute-api` endpoint.\nBy default, clients can invoke the API with the default `{api_id}.execute-api.{region}.amazonaws.com endpoint`.\nTo require that clients use a custom domain name to invoke the API, disable the default endpoint.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the API. Must be less than or equal to 128 characters in length.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'credentialsArn',
        'Part of _quick create_. Specifies any credentials required for the integration. Applicable for HTTP APIs.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description of the API. Must be less than or equal to 1024 characters in length.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'target',
        'Part of _quick create_. Quick create produces an API with an integration, a default catch-all route, and a default stage which is configured to automatically deploy changes.\nFor HTTP integrations, specify a fully qualified URL. For Lambda integrations, specify a function ARN.\nThe type of the integration will be `HTTP_PROXY` or `AWS_PROXY`, respectively. Applicable for HTTP APIs.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'routeSelectionExpression',
        'The [route selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-route-selection-expressions) for the API.\nDefaults to `$request.method $request.path`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'apiKeySelectionExpression',
        'An [API key selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions).\nValid values: `$context.authorizer.usageIdentifierKey`, `$request.header.x-api-key`. Defaults to `$request.header.x-api-key`.\nApplicable for WebSocket APIs.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'routeKey',
        'Part of _quick create_. Specifies any [route key](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-routes.html). Applicable for HTTP APIs.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Map of tags to assign to the API. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'version',
        'Version identifier for the API. Must be between 1 and 64 characters in length.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'failOnWarnings',
        'Whether warnings should return an error while API Gateway is creating or updating the resource using an OpenAPI specification. Defaults to `false`. Applicable for HTTP APIs.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'corsConfiguration',
        'Cross-origin resource sharing (CORS) [configuration](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html). Applicable for HTTP APIs.',
        () => apigatewayv2_ApiCorsConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'protocolType',
        'API protocol. Valid values: `HTTP`, `WEBSOCKET`.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'body',
        'An OpenAPI specification that defines the set of routes and integrations to create as part of the HTTP APIs. Supported only for HTTP APIs.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
