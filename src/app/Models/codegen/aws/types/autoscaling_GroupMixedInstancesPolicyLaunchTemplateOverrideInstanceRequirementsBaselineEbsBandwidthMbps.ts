import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps {
  //
  max?: number;

  //
  min?: number;
}

export function autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, 'max', '', () => [], false, false),
    new DynamicUIProps(InputType.Number, 'min', '', () => [], false, false),
  ];
}
