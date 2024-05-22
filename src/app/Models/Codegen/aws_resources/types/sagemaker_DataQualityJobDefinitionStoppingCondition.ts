import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

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
      [],
      false,
      true,
    ),
  ];
}
