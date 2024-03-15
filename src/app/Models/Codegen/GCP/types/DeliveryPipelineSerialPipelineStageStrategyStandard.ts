import { DeliveryPipelineSerialPipelineStageStrategyStandardPostdeploy } from "./DeliveryPipelineSerialPipelineStageStrategyStandardPostdeploy";
import { DeliveryPipelineSerialPipelineStageStrategyStandardPredeploy } from "./DeliveryPipelineSerialPipelineStageStrategyStandardPredeploy";

export interface DeliveryPipelineSerialPipelineStageStrategyStandard {
  // Optional. Configuration for the postdeploy job. If this is not configured, postdeploy job will not be present.
  Postdeploy?: DeliveryPipelineSerialPipelineStageStrategyStandardPostdeploy;

  // Optional. Configuration for the predeploy job. If this is not configured, predeploy job will not be present.
  Predeploy?: DeliveryPipelineSerialPipelineStageStrategyStandardPredeploy;

  // Whether to verify a deployment.
  Verify?: boolean;
}
