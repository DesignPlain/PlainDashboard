import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface pipes_PipeTargetParametersHttpParameters {
  // Key-value mapping of the query strings that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination.
  queryStringParameters?: Map<string, string>;

  // Key-value mapping of the headers that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination.
  headerParameters?: Map<string, string>;

  // The path parameter values to be used to populate API Gateway REST API or EventBridge ApiDestination path wildcards ("-").
  pathParameterValues?: string;
}

export function pipes_PipeTargetParametersHttpParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "queryStringParameters",
      "Key-value mapping of the query strings that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "headerParameters",
      "Key-value mapping of the headers that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "pathParameterValues",
      'The path parameter values to be used to populate API Gateway REST API or EventBridge ApiDestination path wildcards ("*").',
      [],
      false,
      false,
    ),
  ];
}
