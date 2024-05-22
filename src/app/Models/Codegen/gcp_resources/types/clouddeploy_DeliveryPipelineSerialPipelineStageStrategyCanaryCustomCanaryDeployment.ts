import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeploymentPhaseConfig,
  clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeploymentPhaseConfig_GetTypes,
} from "./clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeploymentPhaseConfig";

export interface clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeployment {
  // Required. Configuration for each phase in the canary deployment in the order executed.
  phaseConfigs?: Array<clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeploymentPhaseConfig>;
}

export function clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeployment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "phaseConfigs",
      "Required. Configuration for each phase in the canary deployment in the order executed.",
      clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeploymentPhaseConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
