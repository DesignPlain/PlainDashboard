import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2_LaunchTemplateInstanceRequirementsAcceleratorCount {
  // Maximum. Set to `0` to exclude instance types with accelerators.
  max?: number;

  // Minimum.
  min?: number;
}

export function ec2_LaunchTemplateInstanceRequirementsAcceleratorCount_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'max',
      'Maximum. Set to `0` to exclude instance types with accelerators.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'min',
      'Minimum.',
      () => [],
      false,
      false,
    ),
  ];
}
