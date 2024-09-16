import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeploymentPostdeploy,
  clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeploymentPostdeploy_GetTypes,
} from './clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeploymentPostdeploy';
import {
  clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeploymentPredeploy,
  clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeploymentPredeploy_GetTypes,
} from './clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeploymentPredeploy';

export interface clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeployment {
  // Required. The percentage based deployments that will occur as a part of a `Rollout`. List is expected in ascending order and each integer n is 0 <= n < 100.
  percentages?: Array<number>;

  // Optional. Configuration for the postdeploy job of the last phase. If this is not configured, postdeploy job will not be present.
  postdeploy?: clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeploymentPostdeploy;

  // Optional. Configuration for the predeploy job of the first phase. If this is not configured, predeploy job will not be present.
  predeploy?: clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeploymentPredeploy;

  // Whether to run verify tests after each percentage deployment.
  verify?: boolean;
}

export function clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeployment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'predeploy',
      'Optional. Configuration for the predeploy job of the first phase. If this is not configured, predeploy job will not be present.',
      () =>
        clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeploymentPredeploy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'verify',
      'Whether to run verify tests after each percentage deployment.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'percentages',
      'Required. The percentage based deployments that will occur as a part of a `Rollout`. List is expected in ascending order and each integer n is 0 <= n < 100.',
      () => InputType_Number_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'postdeploy',
      'Optional. Configuration for the postdeploy job of the last phase. If this is not configured, postdeploy job will not be present.',
      () =>
        clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeploymentPostdeploy_GetTypes(),
      false,
      false,
    ),
  ];
}
