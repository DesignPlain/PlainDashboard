import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appengine_StandardAppVersionAutomaticScalingStandardSchedulerSettings {
  // Maximum number of instances to run for this version. Set to zero to disable maxInstances configuration.
  maxInstances?: number;

  // Minimum number of instances to run for this version. Set to zero to disable minInstances configuration.
  minInstances?: number;

  // Target CPU utilization ratio to maintain when scaling. Should be a value in the range [0.50, 0.95], zero, or a negative value.
  targetCpuUtilization?: number;

  // Target throughput utilization ratio to maintain when scaling. Should be a value in the range [0.50, 0.95], zero, or a negative value.
  targetThroughputUtilization?: number;
}

export function appengine_StandardAppVersionAutomaticScalingStandardSchedulerSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "minInstances",
      "Minimum number of instances to run for this version. Set to zero to disable minInstances configuration.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "targetCpuUtilization",
      "Target CPU utilization ratio to maintain when scaling. Should be a value in the range [0.50, 0.95], zero, or a negative value.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "targetThroughputUtilization",
      "Target throughput utilization ratio to maintain when scaling. Should be a value in the range [0.50, 0.95], zero, or a negative value.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxInstances",
      "Maximum number of instances to run for this version. Set to zero to disable maxInstances configuration.",
      () => [],
      false,
      false,
    ),
  ];
}
