import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface autoscaling_GroupInstanceRefreshPreferences {
  // Specifies the lower limit on the number of instances that must be in the InService state with a healthy status during an instance replacement activity.
  minHealthyPercentage?: number;

  // Behavior when encountering instances protected from scale in are found. Available behaviors are `Refresh`, `Ignore`, and `Wait`. Default is `Ignore`.
  scaleInProtectedInstances?: string;

  // Behavior when encountering instances in the `Standby` state in are found. Available behaviors are `Terminate`, `Ignore`, and `Wait`. Default is `Ignore`.
  standbyInstances?: string;

  // Automatically rollback if instance refresh fails. Defaults to `false`. This option may only be set to `true` when specifying a `launch_template` or `mixed_instances_policy`.
  autoRollback?: boolean;

  // List of percentages for each checkpoint. Values must be unique and in ascending order. To replace all instances, the final number must be `100`.
  checkpointPercentages?: Array<number>;

  // Number of seconds until a newly launched instance is configured and ready to use. Default behavior is to use the Auto Scaling Group's health check grace period.
  instanceWarmup?: string;

  // Specifies the upper limit on the number of instances that are in the InService or Pending state with a healthy status during an instance replacement activity.
  maxHealthyPercentage?: number;

  // Replace instances that already have your desired configuration. Defaults to `false`.
  skipMatching?: boolean;

  // Number of seconds to wait after a checkpoint. Defaults to `3600`.
  checkpointDelay?: string;
}

export function autoscaling_GroupInstanceRefreshPreferences_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "instanceWarmup",
      "Number of seconds until a newly launched instance is configured and ready to use. Default behavior is to use the Auto Scaling Group's health check grace period.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxHealthyPercentage",
      "Specifies the upper limit on the number of instances that are in the InService or Pending state with a healthy status during an instance replacement activity.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "checkpointDelay",
      "Number of seconds to wait after a checkpoint. Defaults to `3600`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "scaleInProtectedInstances",
      "Behavior when encountering instances protected from scale in are found. Available behaviors are `Refresh`, `Ignore`, and `Wait`. Default is `Ignore`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "autoRollback",
      "Automatically rollback if instance refresh fails. Defaults to `false`. This option may only be set to `true` when specifying a `launch_template` or `mixed_instances_policy`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "checkpointPercentages",
      "List of percentages for each checkpoint. Values must be unique and in ascending order. To replace all instances, the final number must be `100`.",
      InputType_Number_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minHealthyPercentage",
      "Specifies the lower limit on the number of instances that must be in the InService state with a healthy status during an instance replacement activity.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "standbyInstances",
      "Behavior when encountering instances in the `Standby` state in are found. Available behaviors are `Terminate`, `Ignore`, and `Wait`. Default is `Ignore`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "skipMatching",
      "Replace instances that already have your desired configuration. Defaults to `false`.",
      [],
      false,
      false,
    ),
  ];
}
