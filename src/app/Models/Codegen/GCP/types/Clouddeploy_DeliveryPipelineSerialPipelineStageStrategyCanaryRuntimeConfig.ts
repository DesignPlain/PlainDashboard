import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigCloudRun,
  Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigCloudRun_GetTypes,
} from "./Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigCloudRun";
import {
  Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigKubernetes,
  Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigKubernetes_GetTypes,
} from "./Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigKubernetes";

export interface Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfig {
  // Cloud Run runtime configuration.
  CloudRun?: Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigCloudRun;

  // Kubernetes runtime configuration.
  Kubernetes?: Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigKubernetes;
}

export function Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "CloudRun",
      "Cloud Run runtime configuration.",
      Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigCloudRun_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Kubernetes",
      "Kubernetes runtime configuration.",
      Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigKubernetes_GetTypes(),
      false,
      false,
    ),
  ];
}
