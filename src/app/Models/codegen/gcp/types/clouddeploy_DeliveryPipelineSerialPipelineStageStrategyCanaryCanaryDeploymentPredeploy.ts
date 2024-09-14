import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeploymentPredeploy {
  // Optional. A sequence of skaffold custom actions to invoke during execution of the predeploy job.
  actions?: Array<string>;
}

export function clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeploymentPredeploy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "actions",
      "Optional. A sequence of skaffold custom actions to invoke during execution of the predeploy job.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
