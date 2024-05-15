import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Appengine_FlexibleAppVersionAutomaticScalingCpuUtilization {
  // Period of time over which CPU utilization is calculated.
  AggregationWindowLength?: string;

  // Target CPU utilization ratio to maintain when scaling. Must be between 0 and 1.
  TargetUtilization?: number;
}

export function Appengine_FlexibleAppVersionAutomaticScalingCpuUtilization_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "AggregationWindowLength",
      "Period of time over which CPU utilization is calculated.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "TargetUtilization",
      "Target CPU utilization ratio to maintain when scaling. Must be between 0 and 1.",
      [],
      true,
      false,
    ),
  ];
}
