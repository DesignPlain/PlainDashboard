import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface autoscaling_getGroupInstanceMaintenancePolicy {
  // Specifies the upper limit on the number of instances that are in the InService or Pending state with a healthy status during an instance replacement activity.
  maxHealthyPercentage?: number;

  // Specifies the lower limit on the number of instances that must be in the InService state with a healthy status during an instance replacement activity.
  minHealthyPercentage?: number;
}

export function autoscaling_getGroupInstanceMaintenancePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxHealthyPercentage",
      "Specifies the upper limit on the number of instances that are in the InService or Pending state with a healthy status during an instance replacement activity.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minHealthyPercentage",
      "Specifies the lower limit on the number of instances that must be in the InService state with a healthy status during an instance replacement activity.",
      [],
      true,
      false,
    ),
  ];
}
