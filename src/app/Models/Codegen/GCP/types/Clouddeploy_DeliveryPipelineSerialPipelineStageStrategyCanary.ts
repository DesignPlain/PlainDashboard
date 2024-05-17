import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfig,
  Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfig_GetTypes,
} from "./Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfig";
import {
  Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeployment,
  Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeployment_GetTypes,
} from "./Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeployment";
import {
  Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeployment,
  Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeployment_GetTypes,
} from "./Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeployment";

export interface Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanary {
  // Optional. Runtime specific configurations for the deployment strategy. The runtime configuration is used to determine how Cloud Deploy will split traffic to enable a progressive deployment.
  RuntimeConfig?: Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfig;

  // Configures the progressive based deployment for a Target.
  CanaryDeployment?: Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeployment;

  // Configures the progressive based deployment for a Target, but allows customizing at the phase level where a phase represents each of the percentage deployments.
  CustomCanaryDeployment?: Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeployment;
}

export function Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanary_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "CanaryDeployment",
      "Configures the progressive based deployment for a Target.",
      Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeployment_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "CustomCanaryDeployment",
      "Configures the progressive based deployment for a Target, but allows customizing at the phase level where a phase represents each of the percentage deployments.",
      Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeployment_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "RuntimeConfig",
      "Optional. Runtime specific configurations for the deployment strategy. The runtime configuration is used to determine how Cloud Deploy will split traffic to enable a progressive deployment.",
      Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
