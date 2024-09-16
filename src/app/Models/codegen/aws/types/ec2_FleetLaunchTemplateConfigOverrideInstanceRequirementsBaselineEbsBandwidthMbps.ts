import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps {
  // The minimum baseline bandwidth, in Mbps. To specify no minimum limit, omit this parameter..
  min?: number;

  // The maximum baseline bandwidth, in Mbps. To specify no maximum limit, omit this parameter..
  max?: number;
}

export function ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'max',
      'The maximum baseline bandwidth, in Mbps. To specify no maximum limit, omit this parameter..',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'min',
      'The minimum baseline bandwidth, in Mbps. To specify no minimum limit, omit this parameter..',
      () => [],
      false,
      false,
    ),
  ];
}
