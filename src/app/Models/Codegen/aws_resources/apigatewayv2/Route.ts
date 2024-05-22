import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  apigatewayv2_RouteRequestParameter,
  apigatewayv2_RouteRequestParameter_GetTypes,
} from "../types/apigatewayv2_RouteRequestParameter";

export interface RouteArgs {
  // API identifier.
  apiId?: string;

  // Authorization scopes supported by this route. The scopes are used with a JWT authorizer to authorize the method invocation.
  authorizationScopes?: Array<string>;

  /*
Authorization type for the route.
For WebSocket APIs, valid values are `NONE` for open access, `AWS_IAM` for using AWS IAM permissions, and `CUSTOM` for using a Lambda authorizer.
For HTTP APIs, valid values are `NONE` for open access, `JWT` for using JSON Web Tokens, `AWS_IAM` for using AWS IAM permissions, and `CUSTOM` for using a Lambda authorizer.
Defaults to `NONE`.
*/
  authorizationType?: string;

  // Identifier of the `aws.apigatewayv2.Authorizer` resource to be associated with this route.
  authorizerId?: string;

  // Operation name for the route. Must be between 1 and 64 characters in length.
  operationName?: string;

  // Route key for the route. For HTTP APIs, the route key can be either `$default`, or a combination of an HTTP method and resource path, for example, `GET /pets`.
  routeKey?: string;

  // The [route response selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-route-response-selection-expressions) for the route. Supported only for WebSocket APIs.
  routeResponseSelectionExpression?: string;

  // Boolean whether an API key is required for the route. Defaults to `false`. Supported only for WebSocket APIs.
  apiKeyRequired?: boolean;

  // The [model selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-model-selection-expressions) for the route. Supported only for WebSocket APIs.
  modelSelectionExpression?: string;

  // Request models for the route. Supported only for WebSocket APIs.
  requestModels?: Map<string, string>;

  // Request parameters for the route. Supported only for WebSocket APIs.
  requestParameters?: Array<apigatewayv2_RouteRequestParameter>;

  // Target for the route, of the form `integrations/`-`IntegrationID`-, where -`IntegrationID`- is the identifier of an `aws.apigatewayv2.Integration` resource.
  target?: string;
}
export class Route extends Resource {
  // Boolean whether an API key is required for the route. Defaults to `false`. Supported only for WebSocket APIs.
  public apiKeyRequired?: boolean;

  // Route key for the route. For HTTP APIs, the route key can be either `$default`, or a combination of an HTTP method and resource path, for example, `GET /pets`.
  public routeKey?: string;

  // The [route response selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-route-response-selection-expressions) for the route. Supported only for WebSocket APIs.
  public routeResponseSelectionExpression?: string;

  // Target for the route, of the form `integrations/`-`IntegrationID`-, where -`IntegrationID`- is the identifier of an `aws.apigatewayv2.Integration` resource.
  public target?: string;

  // API identifier.
  public apiId?: string;

  // Authorization scopes supported by this route. The scopes are used with a JWT authorizer to authorize the method invocation.
  public authorizationScopes?: Array<string>;

  /*
Authorization type for the route.
For WebSocket APIs, valid values are `NONE` for open access, `AWS_IAM` for using AWS IAM permissions, and `CUSTOM` for using a Lambda authorizer.
For HTTP APIs, valid values are `NONE` for open access, `JWT` for using JSON Web Tokens, `AWS_IAM` for using AWS IAM permissions, and `CUSTOM` for using a Lambda authorizer.
Defaults to `NONE`.
*/
  public authorizationType?: string;

  // Identifier of the `aws.apigatewayv2.Authorizer` resource to be associated with this route.
  public authorizerId?: string;

  // The [model selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-model-selection-expressions) for the route. Supported only for WebSocket APIs.
  public modelSelectionExpression?: string;

  // Operation name for the route. Must be between 1 and 64 characters in length.
  public operationName?: string;

  // Request models for the route. Supported only for WebSocket APIs.
  public requestModels?: Map<string, string>;

  // Request parameters for the route. Supported only for WebSocket APIs.
  public requestParameters?: Array<apigatewayv2_RouteRequestParameter>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "operationName",
        "Operation name for the route. Must be between 1 and 64 characters in length.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "routeKey",
        "Route key for the route. For HTTP APIs, the route key can be either `$default`, or a combination of an HTTP method and resource path, for example, `GET /pets`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "modelSelectionExpression",
        "The [model selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-model-selection-expressions) for the route. Supported only for WebSocket APIs.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "target",
        "Target for the route, of the form `integrations/`*`IntegrationID`*, where *`IntegrationID`* is the identifier of an `aws.apigatewayv2.Integration` resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "authorizationScopes",
        "Authorization scopes supported by this route. The scopes are used with a JWT authorizer to authorize the method invocation.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "authorizationType",
        "Authorization type for the route.\nFor WebSocket APIs, valid values are `NONE` for open access, `AWS_IAM` for using AWS IAM permissions, and `CUSTOM` for using a Lambda authorizer.\nFor HTTP APIs, valid values are `NONE` for open access, `JWT` for using JSON Web Tokens, `AWS_IAM` for using AWS IAM permissions, and `CUSTOM` for using a Lambda authorizer.\nDefaults to `NONE`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "routeResponseSelectionExpression",
        "The [route response selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-route-response-selection-expressions) for the route. Supported only for WebSocket APIs.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "apiKeyRequired",
        "Boolean whether an API key is required for the route. Defaults to `false`. Supported only for WebSocket APIs.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "requestModels",
        "Request models for the route. Supported only for WebSocket APIs.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "requestParameters",
        "Request parameters for the route. Supported only for WebSocket APIs.",
        apigatewayv2_RouteRequestParameter_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "apiId",
        "API identifier.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "authorizerId",
        "Identifier of the `aws.apigatewayv2.Authorizer` resource to be associated with this route.",
        [],
        false,
        false,
      ),
    ];
  }
}
