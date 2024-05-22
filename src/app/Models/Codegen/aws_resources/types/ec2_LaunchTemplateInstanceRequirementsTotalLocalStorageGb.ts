import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2_LaunchTemplateInstanceRequirementsTotalLocalStorageGb {
  // Maximum.
  max?: number;

  // Minimum.
  min?: number;
}

export function ec2_LaunchTemplateInstanceRequirementsTotalLocalStorageGb_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "min", "Minimum.", [], false, false),
    new DynamicUIProps(InputType.Number, "max", "Maximum.", [], false, false),
  ];
}
