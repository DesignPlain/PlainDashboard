import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface sagemaker_DataQualityJobDefinitionStoppingCondition {
  // The maximum runtime allowed in seconds.
  maxRuntimeInSeconds?: number;
}

export function sagemaker_DataQualityJobDefinitionStoppingCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxRuntimeInSeconds",
      "The maximum runtime allowed in seconds.",
      () => [],
      false,
      true,
    ),
  ];
}
