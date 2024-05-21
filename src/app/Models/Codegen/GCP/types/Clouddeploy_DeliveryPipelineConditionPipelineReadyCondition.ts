import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface clouddeploy_DeliveryPipelineConditionPipelineReadyCondition {
  // True if the Pipeline is in a valid state. Otherwise at least one condition in `PipelineCondition` is in an invalid state. Iterate over those conditions and see which condition(s) has status = false to find out what is wrong with the Pipeline.
  status?: boolean;

  // Output only. Most recent time at which the pipeline was updated.
  updateTime?: string;
}

export function clouddeploy_DeliveryPipelineConditionPipelineReadyCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "status",
      "True if the Pipeline is in a valid state. Otherwise at least one condition in `PipelineCondition` is in an invalid state. Iterate over those conditions and see which condition(s) has status = false to find out what is wrong with the Pipeline.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "updateTime",
      "Output only. Most recent time at which the pipeline was updated.",
      [],
      false,
      false,
    ),
  ];
}
