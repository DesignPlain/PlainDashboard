import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  autoscaling_GroupInstanceRefreshPreferencesAlarmSpecification,
  autoscaling_GroupInstanceRefreshPreferencesAlarmSpecification_GetTypes,
} from './autoscaling_GroupInstanceRefreshPreferencesAlarmSpecification';

export interface autoscaling_GroupInstanceRefreshPreferences {
  // Number of seconds until a newly launched instance is configured and ready to use. Default behavior is to use the Auto Scaling Group's health check grace period.
  instanceWarmup?: string;

  // Amount of capacity in the Auto Scaling group that can be in service and healthy, or pending, to support your workload when an instance refresh is in place, as a percentage of the desired capacity of the Auto Scaling group. Values must be between `100` and `200`, defaults to `100`.
  maxHealthyPercentage?: number;

  // Behavior when encountering instances protected from scale in are found. Available behaviors are `Refresh`, `Ignore`, and `Wait`. Default is `Ignore`.
  scaleInProtectedInstances?: string;

  // Replace instances that already have your desired configuration. Defaults to `false`.
  skipMatching?: boolean;

  // Behavior when encountering instances in the `Standby` state in are found. Available behaviors are `Terminate`, `Ignore`, and `Wait`. Default is `Ignore`.
  standbyInstances?: string;

  // List of percentages for each checkpoint. Values must be unique and in ascending order. To replace all instances, the final number must be `100`.
  checkpointPercentages?: Array<number>;

  // Automatically rollback if instance refresh fails. Defaults to `false`. This option may only be set to `true` when specifying a `launch_template` or `mixed_instances_policy`.
  autoRollback?: boolean;

  // Number of seconds to wait after a checkpoint. Defaults to `3600`.
  checkpointDelay?: string;

  // Amount of capacity in the Auto Scaling group that must remain healthy during an instance refresh to allow the operation to continue, as a percentage of the desired capacity of the Auto Scaling group. Defaults to `90`.
  minHealthyPercentage?: number;

  // Alarm Specification for Instance Refresh.
  alarmSpecification?: autoscaling_GroupInstanceRefreshPreferencesAlarmSpecification;
}

export function autoscaling_GroupInstanceRefreshPreferences_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'instanceWarmup',
      "Number of seconds until a newly launched instance is configured and ready to use. Default behavior is to use the Auto Scaling Group's health check grace period.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'maxHealthyPercentage',
      'Amount of capacity in the Auto Scaling group that can be in service and healthy, or pending, to support your workload when an instance refresh is in place, as a percentage of the desired capacity of the Auto Scaling group. Values must be between `100` and `200`, defaults to `100`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'skipMatching',
      'Replace instances that already have your desired configuration. Defaults to `false`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'autoRollback',
      'Automatically rollback if instance refresh fails. Defaults to `false`. This option may only be set to `true` when specifying a `launch_template` or `mixed_instances_policy`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'checkpointDelay',
      'Number of seconds to wait after a checkpoint. Defaults to `3600`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'alarmSpecification',
      'Alarm Specification for Instance Refresh.',
      () =>
        autoscaling_GroupInstanceRefreshPreferencesAlarmSpecification_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'scaleInProtectedInstances',
      'Behavior when encountering instances protected from scale in are found. Available behaviors are `Refresh`, `Ignore`, and `Wait`. Default is `Ignore`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'standbyInstances',
      'Behavior when encountering instances in the `Standby` state in are found. Available behaviors are `Terminate`, `Ignore`, and `Wait`. Default is `Ignore`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'checkpointPercentages',
      'List of percentages for each checkpoint. Values must be unique and in ascending order. To replace all instances, the final number must be `100`.',
      () => InputType_Number_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'minHealthyPercentage',
      'Amount of capacity in the Auto Scaling group that must remain healthy during an instance refresh to allow the operation to continue, as a percentage of the desired capacity of the Auto Scaling group. Defaults to `90`.',
      () => [],
      false,
      false,
    ),
  ];
}
