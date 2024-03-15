import { DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeployment } from "./DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeployment";
import { DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfig } from "./DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfig";
import { DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeployment } from "./DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeployment";

export interface DeliveryPipelineSerialPipelineStageStrategyCanary {
  // Configures the progressive based deployment for a Target.
  CanaryDeployment?: DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeployment;

  // Configures the progressive based deployment for a Target, but allows customizing at the phase level where a phase represents each of the percentage deployments.
  CustomCanaryDeployment?: DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeployment;

  // Optional. Runtime specific configurations for the deployment strategy. The runtime configuration is used to determine how Cloud Deploy will split traffic to enable a progressive deployment.
  RuntimeConfig?: DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfig;
}
