import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appengine_FlexibleAppVersionAutomaticScalingCpuUtilization {
  // Period of time over which CPU utilization is calculated.
  aggregationWindowLength?: string;

  // Target CPU utilization ratio to maintain when scaling. Must be between 0 and 1.
  targetUtilization?: number;
}

export function appengine_FlexibleAppVersionAutomaticScalingCpuUtilization_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "targetUtilization",
      "Target CPU utilization ratio to maintain when scaling. Must be between 0 and 1.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "aggregationWindowLength",
      "Period of time over which CPU utilization is calculated.",
      [],
      false,
      false,
    ),
  ];
}
