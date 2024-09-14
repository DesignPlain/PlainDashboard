import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface apigatewayv2_RouteRequestParameter {
  // Request parameter key. This is a [request data mapping parameter](https://docs.aws.amazon.com/apigateway/latest/developerguide/websocket-api-data-mapping.html#websocket-mapping-request-parameters).
  requestParameterKey?: string;

  // Boolean whether or not the parameter is required.
  required?: boolean;
}

export function apigatewayv2_RouteRequestParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "requestParameterKey",
      "Request parameter key. This is a [request data mapping parameter](https://docs.aws.amazon.com/apigateway/latest/developerguide/websocket-api-data-mapping.html#websocket-mapping-request-parameters).",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "required",
      "Boolean whether or not the parameter is required.",
      () => [],
      true,
      false,
    ),
  ];
}
