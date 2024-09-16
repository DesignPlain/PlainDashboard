import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb {
  // Maximum. May be a decimal number, e.g. `0.5`.
  max?: number;

  // Minimum. May be a decimal number, e.g. `0.5`.
  min?: number;
}

export function ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'max',
      'Maximum. May be a decimal number, e.g. `0.5`.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      'min',
      'Minimum. May be a decimal number, e.g. `0.5`.',
      () => [],
      false,
      true,
    ),
  ];
}
