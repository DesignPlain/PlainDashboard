import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface RouteResponseArgs {
  // API identifier.
  apiId?: string;

  // The [model selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-model-selection-expressions) for the route response.
  modelSelectionExpression?: string;

  // Response models for the route response.
  responseModels?: Map<string, string>;

  // Identifier of the `aws.apigatewayv2.Route`.
  routeId?: string;

  // Route response key.
  routeResponseKey?: string;
}
export class RouteResponse extends Resource {
  // The [model selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-model-selection-expressions) for the route response.
  public modelSelectionExpression?: string;

  // Response models for the route response.
  public responseModels?: Map<string, string>;

  // Identifier of the `aws.apigatewayv2.Route`.
  public routeId?: string;

  // Route response key.
  public routeResponseKey?: string;

  // API identifier.
  public apiId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "modelSelectionExpression",
        "The [model selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-model-selection-expressions) for the route response.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "responseModels",
        "Response models for the route response.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "routeId",
        "Identifier of the `aws.apigatewayv2.Route`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "routeResponseKey",
        "Route response key.",
        [],
        true,
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
    ];
  }
}
