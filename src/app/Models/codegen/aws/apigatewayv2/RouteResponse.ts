import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface RouteResponseArgs {
  // Route response key.
  routeResponseKey?: string;

  // API identifier.
  apiId?: string;

  // The [model selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-model-selection-expressions) for the route response.
  modelSelectionExpression?: string;

  // Response models for the route response.
  responseModels?: Map<string, string>;

  // Identifier of the `aws.apigatewayv2.Route`.
  routeId?: string;
}
export class RouteResponse extends DS_Resource {
  // API identifier.
  public apiId?: string;

  // The [model selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-model-selection-expressions) for the route response.
  public modelSelectionExpression?: string;

  // Response models for the route response.
  public responseModels?: Map<string, string>;

  // Identifier of the `aws.apigatewayv2.Route`.
  public routeId?: string;

  // Route response key.
  public routeResponseKey?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'routeResponseKey',
        'Route response key.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'apiId',
        'API identifier.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'modelSelectionExpression',
        'The [model selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-model-selection-expressions) for the route response.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'responseModels',
        'Response models for the route response.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'routeId',
        'Identifier of the `aws.apigatewayv2.Route`.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
