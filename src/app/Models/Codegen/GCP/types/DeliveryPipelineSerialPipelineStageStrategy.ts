import { DeliveryPipelineSerialPipelineStageStrategyCanary } from "./DeliveryPipelineSerialPipelineStageStrategyCanary";
import { DeliveryPipelineSerialPipelineStageStrategyStandard } from "./DeliveryPipelineSerialPipelineStageStrategyStandard";

export interface DeliveryPipelineSerialPipelineStageStrategy {
  // Canary deployment strategy provides progressive percentage based deployments to a Target.
  Canary?: DeliveryPipelineSerialPipelineStageStrategyCanary;

  // Standard deployment strategy executes a single deploy and allows verifying the deployment.
  Standard?: DeliveryPipelineSerialPipelineStageStrategyStandard;
}
