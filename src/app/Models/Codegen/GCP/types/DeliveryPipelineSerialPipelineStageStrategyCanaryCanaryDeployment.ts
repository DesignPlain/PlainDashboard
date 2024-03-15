import { DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeploymentPostdeploy } from "./DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeploymentPostdeploy";
import { DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeploymentPredeploy } from "./DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeploymentPredeploy";

export interface DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeployment {
  // Required. The percentage based deployments that will occur as a part of a `Rollout`. List is expected in ascending order and each integer n is 0 <= n < 100.
  Percentages?: Array<number>;

  // Optional. Configuration for the postdeploy job of the last phase. If this is not configured, postdeploy job will not be present.
  Postdeploy?: DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeploymentPostdeploy;

  // Optional. Configuration for the predeploy job of the first phase. If this is not configured, predeploy job will not be present.
  Predeploy?: DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeploymentPredeploy;

  // Whether to run verify tests after each percentage deployment.
  Verify?: boolean;
}
