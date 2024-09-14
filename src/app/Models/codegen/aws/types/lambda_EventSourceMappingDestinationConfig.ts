import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  lambda_EventSourceMappingDestinationConfigOnFailure,
  lambda_EventSourceMappingDestinationConfigOnFailure_GetTypes,
} from "./lambda_EventSourceMappingDestinationConfigOnFailure";

export interface lambda_EventSourceMappingDestinationConfig {
  // The destination configuration for failed invocations. Detailed below.
  onFailure?: lambda_EventSourceMappingDestinationConfigOnFailure;
}

export function lambda_EventSourceMappingDestinationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "onFailure",
      "The destination configuration for failed invocations. Detailed below.",
      () => lambda_EventSourceMappingDestinationConfigOnFailure_GetTypes(),
      false,
      false,
    ),
  ];
}
