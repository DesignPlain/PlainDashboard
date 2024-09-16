import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface guardduty_DetectorFeatureAdditionalConfiguration {
  // The name of the additional configuration for a feature. Valid values: `EKS_ADDON_MANAGEMENT`, `ECS_FARGATE_AGENT_MANAGEMENT`, `EC2_AGENT_MANAGEMENT`. Refer to the [AWS Documentation](https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DetectorAdditionalConfiguration.html) for the current list of supported values.
  name?: string;

  // The status of the additional configuration. Valid values: `ENABLED`, `DISABLED`.
  status?: string;
}

export function guardduty_DetectorFeatureAdditionalConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the additional configuration for a feature. Valid values: `EKS_ADDON_MANAGEMENT`, `ECS_FARGATE_AGENT_MANAGEMENT`, `EC2_AGENT_MANAGEMENT`. Refer to the [AWS Documentation](https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DetectorAdditionalConfiguration.html) for the current list of supported values.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'status',
      'The status of the additional configuration. Valid values: `ENABLED`, `DISABLED`.',
      () => [],
      true,
      false,
    ),
  ];
}
