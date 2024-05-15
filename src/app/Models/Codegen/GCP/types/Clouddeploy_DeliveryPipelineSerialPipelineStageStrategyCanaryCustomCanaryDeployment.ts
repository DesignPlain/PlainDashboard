import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeploymentPhaseConfig,
  Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeploymentPhaseConfig_GetTypes,
} from "./Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeploymentPhaseConfig";

export interface Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeployment {
  // Required. Configuration for each phase in the canary deployment in the order executed.
  PhaseConfigs?: Array<Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeploymentPhaseConfig>;
}

export function Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeployment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "PhaseConfigs",
      "Required. Configuration for each phase in the canary deployment in the order executed.",
      Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeploymentPhaseConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
