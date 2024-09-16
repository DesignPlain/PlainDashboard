import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib {
  // Maximum.
  max?: number;

  // Minimum.
  min?: number;
}

export function ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'max',
      'Maximum.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      'min',
      'Minimum.',
      () => [],
      false,
      true,
    ),
  ];
}
