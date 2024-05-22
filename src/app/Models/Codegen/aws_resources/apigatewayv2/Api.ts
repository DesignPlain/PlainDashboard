import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  apigatewayv2_ApiCorsConfiguration,
  apigatewayv2_ApiCorsConfiguration_GetTypes,
} from "../types/apigatewayv2_ApiCorsConfiguration";

export interface ApiArgs {
  // Part of _quick create_. Specifies any [route key](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-routes.html). Applicable for HTTP APIs.
  routeKey?: string;

  // Map of tags to assign to the API. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // An OpenAPI specification that defines the set of routes and integrations to create as part of the HTTP APIs. Supported only for HTTP APIs.
  body?: string;

  // Description of the API. Must be less than or equal to 1024 characters in length.
  description?: string;

  // Name of the API. Must be less than or equal to 128 characters in length.
  name?: string;

  /*
Part of _quick create_. Quick create produces an API with an integration, a default catch-all route, and a default stage which is configured to automatically deploy changes.
For HTTP integrations, specify a fully qualified URL. For Lambda integrations, specify a function ARN.
The type of the integration will be `HTTP_PROXY` or `AWS_PROXY`, respectively. Applicable for HTTP APIs.
*/
  target?: string;

  /*
An [API key selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions).
Valid values: `$context.authorizer.usageIdentifierKey`, `$request.header.x-api-key`. Defaults to `$request.header.x-api-key`.
Applicable for WebSocket APIs.
*/
  apiKeySelectionExpression?: string;

  // Part of _quick create_. Specifies any credentials required for the integration. Applicable for HTTP APIs.
  credentialsArn?: string;

  /*
Whether clients can invoke the API by using the default `execute-api` endpoint.
By default, clients can invoke the API with the default `{api_id}.execute-api.{region}.amazonaws.com endpoint`.
To require that clients use a custom domain name to invoke the API, disable the default endpoint.
*/
  disableExecuteApiEndpoint?: boolean;

  // API protocol. Valid values: `HTTP`, `WEBSOCKET`.
  protocolType?: string;

  // Cross-origin resource sharing (CORS) [configuration](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html). Applicable for HTTP APIs.
  corsConfiguration?: apigatewayv2_ApiCorsConfiguration;

  // Whether warnings should return an error while API Gateway is creating or updating the resource using an OpenAPI specification. Defaults to `false`. Applicable for HTTP APIs.
  failOnWarnings?: boolean;

  /*
The [route selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-route-selection-expressions) for the API.
Defaults to `$request.method $request.path`.
*/
  routeSelectionExpression?: string;

  // Version identifier for the API. Must be between 1 and 64 characters in length.
  version?: string;
}
export class Api extends Resource {
  // Map of tags to assign to the API. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  /*
Part of _quick create_. Quick create produces an API with an integration, a default catch-all route, and a default stage which is configured to automatically deploy changes.
For HTTP integrations, specify a fully qualified URL. For Lambda integrations, specify a function ARN.
The type of the integration will be `HTTP_PROXY` or `AWS_PROXY`, respectively. Applicable for HTTP APIs.
*/
  public target?: string;

  // Version identifier for the API. Must be between 1 and 64 characters in length.
  public version?: string;

  /*
An [API key selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions).
Valid values: `$context.authorizer.usageIdentifierKey`, `$request.header.x-api-key`. Defaults to `$request.header.x-api-key`.
Applicable for WebSocket APIs.
*/
  public apiKeySelectionExpression?: string;

  // Part of _quick create_. Specifies any credentials required for the integration. Applicable for HTTP APIs.
  public credentialsArn?: string;

  // Description of the API. Must be less than or equal to 1024 characters in length.
  public description?: string;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Cross-origin resource sharing (CORS) [configuration](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html). Applicable for HTTP APIs.
  public corsConfiguration?: apigatewayv2_ApiCorsConfiguration;

  // Name of the API. Must be less than or equal to 128 characters in length.
  public name?: string;

  // API protocol. Valid values: `HTTP`, `WEBSOCKET`.
  public protocolType?: string;

  /*
ARN prefix to be used in an `aws.lambda.Permission`'s `source_arn` attribute
or in an `aws.iam.Policy` to authorize access to the [`@connections` API](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-how-to-call-websocket-api-connections.html).
See the [Amazon API Gateway Developer Guide](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-control-access-iam.html) for details.
*/
  public executionArn?: string;

  // Whether warnings should return an error while API Gateway is creating or updating the resource using an OpenAPI specification. Defaults to `false`. Applicable for HTTP APIs.
  public failOnWarnings?: boolean;

  // Part of _quick create_. Specifies any [route key](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-routes.html). Applicable for HTTP APIs.
  public routeKey?: string;

  // URI of the API, of the form `https://{api-id}.execute-api.{region}.amazonaws.com` for HTTP APIs and `wss://{api-id}.execute-api.{region}.amazonaws.com` for WebSocket APIs.
  public apiEndpoint?: string;

  // ARN of the API.
  public arn?: string;

  // An OpenAPI specification that defines the set of routes and integrations to create as part of the HTTP APIs. Supported only for HTTP APIs.
  public body?: string;

  /*
Whether clients can invoke the API by using the default `execute-api` endpoint.
By default, clients can invoke the API with the default `{api_id}.execute-api.{region}.amazonaws.com endpoint`.
To require that clients use a custom domain name to invoke the API, disable the default endpoint.
*/
  public disableExecuteApiEndpoint?: boolean;

  /*
The [route selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-route-selection-expressions) for the API.
Defaults to `$request.method $request.path`.
*/
  public routeSelectionExpression?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "routeKey",
        "Part of _quick create_. Specifies any [route key](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-routes.html). Applicable for HTTP APIs.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the API. Must be less than or equal to 128 characters in length.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "disableExecuteApiEndpoint",
        "Whether clients can invoke the API by using the default `execute-api` endpoint.\nBy default, clients can invoke the API with the default `{api_id}.execute-api.{region}.amazonaws.com endpoint`.\nTo require that clients use a custom domain name to invoke the API, disable the default endpoint.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "apiKeySelectionExpression",
        "An [API key selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions).\nValid values: `$context.authorizer.usageIdentifierKey`, `$request.header.x-api-key`. Defaults to `$request.header.x-api-key`.\nApplicable for WebSocket APIs.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "routeSelectionExpression",
        "The [route selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-route-selection-expressions) for the API.\nDefaults to `$request.method $request.path`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "body",
        "An OpenAPI specification that defines the set of routes and integrations to create as part of the HTTP APIs. Supported only for HTTP APIs.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "target",
        "Part of _quick create_. Quick create produces an API with an integration, a default catch-all route, and a default stage which is configured to automatically deploy changes.\nFor HTTP integrations, specify a fully qualified URL. For Lambda integrations, specify a function ARN.\nThe type of the integration will be `HTTP_PROXY` or `AWS_PROXY`, respectively. Applicable for HTTP APIs.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "protocolType",
        "API protocol. Valid values: `HTTP`, `WEBSOCKET`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "corsConfiguration",
        "Cross-origin resource sharing (CORS) [configuration](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html). Applicable for HTTP APIs.",
        apigatewayv2_ApiCorsConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "failOnWarnings",
        "Whether warnings should return an error while API Gateway is creating or updating the resource using an OpenAPI specification. Defaults to `false`. Applicable for HTTP APIs.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "version",
        "Version identifier for the API. Must be between 1 and 64 characters in length.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the API. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the API. Must be less than or equal to 1024 characters in length.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "credentialsArn",
        "Part of _quick create_. Specifies any credentials required for the integration. Applicable for HTTP APIs.",
        [],
        false,
        true,
      ),
    ];
  }
}
