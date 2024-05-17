import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeploymentPhaseConfigPostdeploy {
  // Optional. A sequence of skaffold custom actions to invoke during execution of the postdeploy job.
  Actions?: Array<string>;
}

export function Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeploymentPhaseConfigPostdeploy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Actions",
      "Optional. A sequence of skaffold custom actions to invoke during execution of the postdeploy job.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
