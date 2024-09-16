import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudfront_ContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig,
  cloudfront_ContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig_GetTypes,
} from './cloudfront_ContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig';
import {
  cloudfront_ContinuousDeploymentPolicyTrafficConfigSingleWeightConfig,
  cloudfront_ContinuousDeploymentPolicyTrafficConfigSingleWeightConfig_GetTypes,
} from './cloudfront_ContinuousDeploymentPolicyTrafficConfigSingleWeightConfig';

export interface cloudfront_ContinuousDeploymentPolicyTrafficConfig {
  // Determines which HTTP requests are sent to the staging distribution. See `single_header_config`.
  singleHeaderConfig?: cloudfront_ContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig;

  // Contains the percentage of traffic to send to the staging distribution. See `single_weight_config`.
  singleWeightConfig?: cloudfront_ContinuousDeploymentPolicyTrafficConfigSingleWeightConfig;

  // Type of traffic configuration. Valid values are `SingleWeight` and `SingleHeader`.
  type?: string;
}

export function cloudfront_ContinuousDeploymentPolicyTrafficConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'singleHeaderConfig',
      'Determines which HTTP requests are sent to the staging distribution. See `single_header_config`.',
      () =>
        cloudfront_ContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'singleWeightConfig',
      'Contains the percentage of traffic to send to the staging distribution. See `single_weight_config`.',
      () =>
        cloudfront_ContinuousDeploymentPolicyTrafficConfigSingleWeightConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      'Type of traffic configuration. Valid values are `SingleWeight` and `SingleHeader`.',
      () => [],
      true,
      false,
    ),
  ];
}
