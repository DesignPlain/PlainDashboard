import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface opsworks_CustomLayerLoadBasedAutoScalingDownscaling {
  // The number of instances to add or remove when the load exceeds a threshold.
  instanceCount?: number;

  // The load threshold. A value of -1 disables the threshold.
  loadThreshold?: number;

  // The memory utilization threshold, as a percent of the available memory. A value of -1 disables the threshold.
  memoryThreshold?: number;

  // The amount of time, in minutes, that the load must exceed a threshold before more instances are added or removed.
  thresholdsWaitTime?: number;

  // Custom Cloudwatch auto scaling alarms, to be used as thresholds. This parameter takes a list of up to five alarm names, which are case sensitive and must be in the same region as the stack.
  alarms?: Array<string>;

  // The CPU utilization threshold, as a percent of the available CPU. A value of -1 disables the threshold.
  cpuThreshold?: number;

  // The amount of time (in minutes) after a scaling event occurs that AWS OpsWorks Stacks should ignore metrics and suppress additional scaling events.
  ignoreMetricsTime?: number;
}

export function opsworks_CustomLayerLoadBasedAutoScalingDownscaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'cpuThreshold',
      'The CPU utilization threshold, as a percent of the available CPU. A value of -1 disables the threshold.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'ignoreMetricsTime',
      'The amount of time (in minutes) after a scaling event occurs that AWS OpsWorks Stacks should ignore metrics and suppress additional scaling events.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'instanceCount',
      'The number of instances to add or remove when the load exceeds a threshold.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'loadThreshold',
      'The load threshold. A value of -1 disables the threshold.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'memoryThreshold',
      'The memory utilization threshold, as a percent of the available memory. A value of -1 disables the threshold.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'thresholdsWaitTime',
      'The amount of time, in minutes, that the load must exceed a threshold before more instances are added or removed.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'alarms',
      'Custom Cloudwatch auto scaling alarms, to be used as thresholds. This parameter takes a list of up to five alarm names, which are case sensitive and must be in the same region as the stack.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
