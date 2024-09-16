import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  sagemaker_EndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize,
  sagemaker_EndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize_GetTypes,
} from './sagemaker_EndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize';
import {
  sagemaker_EndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize,
  sagemaker_EndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize_GetTypes,
} from './sagemaker_EndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize';

export interface sagemaker_EndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration {
  // The waiting time (in seconds) between incremental steps to turn on traffic on the new endpoint fleet. Valid values are between `0` and `3600`.
  waitIntervalInSeconds?: number;

  // Batch size for the first step to turn on traffic on the new endpoint fleet. Value must be less than or equal to 50%!o(MISSING)f the variant's total instance count. See Canary Size.
  canarySize?: sagemaker_EndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize;

  // Batch size for each step to turn on traffic on the new endpoint fleet. Value must be 10-50%!o(MISSING)f the variant's total instance count. See Linear Step Size.
  linearStepSize?: sagemaker_EndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize;

  // Traffic routing strategy type. Valid values are: `ALL_AT_ONCE`, `CANARY`, and `LINEAR`.
  type?: string;
}

export function sagemaker_EndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'canarySize',
      "Batch size for the first step to turn on traffic on the new endpoint fleet. Value must be less than or equal to 50% of the variant's total instance count. See Canary Size.",
      () =>
        sagemaker_EndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'linearStepSize',
      "Batch size for each step to turn on traffic on the new endpoint fleet. Value must be 10-50% of the variant's total instance count. See Linear Step Size.",
      () =>
        sagemaker_EndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      'Traffic routing strategy type. Valid values are: `ALL_AT_ONCE`, `CANARY`, and `LINEAR`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'waitIntervalInSeconds',
      'The waiting time (in seconds) between incremental steps to turn on traffic on the new endpoint fleet. Valid values are between `0` and `3600`.',
      () => [],
      true,
      false,
    ),
  ];
}
