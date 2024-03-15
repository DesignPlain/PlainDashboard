import { DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeploymentPhaseConfig } from "./DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeploymentPhaseConfig";

export interface DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeployment {
  // Required. Configuration for each phase in the canary deployment in the order executed.
  PhaseConfigs?: Array<DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeploymentPhaseConfig>;
}
