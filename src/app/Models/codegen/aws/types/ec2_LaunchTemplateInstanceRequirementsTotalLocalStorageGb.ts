import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_LaunchTemplateInstanceRequirementsTotalLocalStorageGb {
  // Minimum. May be a decimal number, e.g. `0.5`.
  min?: number;

  // Maximum. May be a decimal number, e.g. `0.5`.
  max?: number;
}

export function ec2_LaunchTemplateInstanceRequirementsTotalLocalStorageGb_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "min",
      "Minimum. May be a decimal number, e.g. `0.5`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "max",
      "Maximum. May be a decimal number, e.g. `0.5`.",
      () => [],
      false,
      false,
    ),
  ];
}
