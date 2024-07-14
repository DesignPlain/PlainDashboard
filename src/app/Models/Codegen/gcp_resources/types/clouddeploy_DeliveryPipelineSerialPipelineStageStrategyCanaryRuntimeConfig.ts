import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigCloudRun,
  clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigCloudRun_GetTypes,
} from "./clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigCloudRun";
import {
  clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigKubernetes,
  clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigKubernetes_GetTypes,
} from "./clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigKubernetes";

export interface clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfig {
  // Cloud Run runtime configuration.
  cloudRun?: clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigCloudRun;

  // Kubernetes runtime configuration.
  kubernetes?: clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigKubernetes;
}

export function clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "cloudRun",
      "Cloud Run runtime configuration.",
      clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigCloudRun_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "kubernetes",
      "Kubernetes runtime configuration.",
      clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigKubernetes_GetTypes(),
      false,
      false,
    ),
  ];
}
