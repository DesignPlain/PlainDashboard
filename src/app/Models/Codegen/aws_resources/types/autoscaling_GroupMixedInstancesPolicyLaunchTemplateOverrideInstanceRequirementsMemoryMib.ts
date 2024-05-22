import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib {
  // Minimum.
  min?: number;

  // Maximum.
  max?: number;
}

export function autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "min", "Minimum.", [], false, false),
    new DynamicUIProps(InputType.Number, "max", "Maximum.", [], false, false),
  ];
}
