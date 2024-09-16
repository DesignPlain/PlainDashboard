import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeployment,
  clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeployment_GetTypes,
} from './clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeployment';
import {
  clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeployment,
  clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeployment_GetTypes,
} from './clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeployment';
import {
  clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfig,
  clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfig_GetTypes,
} from './clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfig';

export interface clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanary {
  // Configures the progressive based deployment for a Target.
  canaryDeployment?: clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeployment;

  // Configures the progressive based deployment for a Target, but allows customizing at the phase level where a phase represents each of the percentage deployments.
  customCanaryDeployment?: clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeployment;

  // Optional. Runtime specific configurations for the deployment strategy. The runtime configuration is used to determine how Cloud Deploy will split traffic to enable a progressive deployment.
  runtimeConfig?: clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfig;
}

export function clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanary_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'canaryDeployment',
      'Configures the progressive based deployment for a Target.',
      () =>
        clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeployment_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'customCanaryDeployment',
      'Configures the progressive based deployment for a Target, but allows customizing at the phase level where a phase represents each of the percentage deployments.',
      () =>
        clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeployment_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'runtimeConfig',
      'Optional. Runtime specific configurations for the deployment strategy. The runtime configuration is used to determine how Cloud Deploy will split traffic to enable a progressive deployment.',
      () =>
        clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
