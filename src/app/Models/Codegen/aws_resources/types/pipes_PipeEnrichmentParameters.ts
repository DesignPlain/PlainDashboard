import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  pipes_PipeEnrichmentParametersHttpParameters,
  pipes_PipeEnrichmentParametersHttpParameters_GetTypes,
} from "./pipes_PipeEnrichmentParametersHttpParameters";

export interface pipes_PipeEnrichmentParameters {
  // Contains the HTTP parameters to use when the target is a API Gateway REST endpoint or EventBridge ApiDestination. If you specify an API Gateway REST API or EventBridge ApiDestination as a target, you can use this parameter to specify headers, path parameters, and query string keys/values as part of your target invoking request. If you're using ApiDestinations, the corresponding Connection can also have these values configured. In case of any conflicting keys, values from the Connection take precedence. Detailed below.
  httpParameters?: pipes_PipeEnrichmentParametersHttpParameters;

  // Valid JSON text passed to the target. In this case, nothing from the event itself is passed to the target. Maximum length of 8192 characters.
  inputTemplate?: string;
}

export function pipes_PipeEnrichmentParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "httpParameters",
      "Contains the HTTP parameters to use when the target is a API Gateway REST endpoint or EventBridge ApiDestination. If you specify an API Gateway REST API or EventBridge ApiDestination as a target, you can use this parameter to specify headers, path parameters, and query string keys/values as part of your target invoking request. If you're using ApiDestinations, the corresponding Connection can also have these values configured. In case of any conflicting keys, values from the Connection take precedence. Detailed below.",
      pipes_PipeEnrichmentParametersHttpParameters_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "inputTemplate",
      "Valid JSON text passed to the target. In this case, nothing from the event itself is passed to the target. Maximum length of 8192 characters.",
      [],
      false,
      false,
    ),
  ];
}
