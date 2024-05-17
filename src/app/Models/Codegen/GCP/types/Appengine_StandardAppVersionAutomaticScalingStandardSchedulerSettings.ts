import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Appengine_StandardAppVersionAutomaticScalingStandardSchedulerSettings {
  // Maximum number of instances to run for this version. Set to zero to disable maxInstances configuration.
  MaxInstances?: number;

  // Minimum number of instances to run for this version. Set to zero to disable minInstances configuration.
  MinInstances?: number;

  // Target CPU utilization ratio to maintain when scaling. Should be a value in the range [0.50, 0.95], zero, or a negative value.
  TargetCpuUtilization?: number;

  // Target throughput utilization ratio to maintain when scaling. Should be a value in the range [0.50, 0.95], zero, or a negative value.
  TargetThroughputUtilization?: number;
}

export function Appengine_StandardAppVersionAutomaticScalingStandardSchedulerSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "MaxInstances",
      "Maximum number of instances to run for this version. Set to zero to disable maxInstances configuration.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MinInstances",
      "Minimum number of instances to run for this version. Set to zero to disable minInstances configuration.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "TargetCpuUtilization",
      "Target CPU utilization ratio to maintain when scaling. Should be a value in the range [0.50, 0.95], zero, or a negative value.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "TargetThroughputUtilization",
      "Target throughput utilization ratio to maintain when scaling. Should be a value in the range [0.50, 0.95], zero, or a negative value.",
      [],
      false,
      false,
    ),
  ];
}
