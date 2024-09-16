import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementNetworkInterfaceCount {
  // Maximum.
  max?: number;

  // Minimum.
  min?: number;
}

export function autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementNetworkInterfaceCount_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'max',
      'Maximum.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'min',
      'Minimum.',
      () => [],
      true,
      false,
    ),
  ];
}
