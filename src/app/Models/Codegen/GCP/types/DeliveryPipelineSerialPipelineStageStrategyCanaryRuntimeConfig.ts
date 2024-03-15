import { DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigKubernetes } from "./DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigKubernetes";
import { DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigCloudRun } from "./DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigCloudRun";

export interface DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfig {
  // Cloud Run runtime configuration.
  CloudRun?: DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigCloudRun;

  // Kubernetes runtime configuration.
  Kubernetes?: DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigKubernetes;
}
