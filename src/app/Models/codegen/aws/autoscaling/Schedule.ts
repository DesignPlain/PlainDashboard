import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ScheduleArgs {
  // The initial capacity of the Auto Scaling group after the scheduled action runs and the capacity it attempts to maintain. Set to `-1` if you don't want to change the desired capacity at the scheduled time. Defaults to `0`.
  desiredCapacity?: number;

  // The date and time for the recurring schedule to end, in UTC with the format `"YYYY-MM-DDThh:mm:ssZ"` (e.g. `"2021-06-01T00:00:00Z"`).
  endTime?: string;

  // The minimum size of the Auto Scaling group. Set to `-1` if you don't want to change the minimum size at the scheduled time. Defaults to `0`.
  minSize?: number;

  // The date and time for the recurring schedule to start, in UTC with the format `"YYYY-MM-DDThh:mm:ssZ"` (e.g. `"2021-06-01T00:00:00Z"`).
  startTime?: string;

  /*
Specifies the time zone for a cron expression. Valid values are the canonical names of the IANA time zones (such as `Etc/GMT+9` or `Pacific/Tahiti`).

> --NOTE:-- When `start_time` and `end_time` are specified with `recurrence` , they form the boundaries of when the recurring action will start and stop.
*/
  timeZone?: string;

  // The name of the Auto Scaling group.
  autoscalingGroupName?: string;

  // The maximum size of the Auto Scaling group. Set to `-1` if you don't want to change the maximum size at the scheduled time. Defaults to `0`.
  maxSize?: number;

  // The recurring schedule for this action specified using the Unix cron syntax format.
  recurrence?: string;

  /*
The name of this scaling action.

The following arguments are optional:
*/
  scheduledActionName?: string;
}
export class Schedule extends DS_Resource {
  /*
Specifies the time zone for a cron expression. Valid values are the canonical names of the IANA time zones (such as `Etc/GMT+9` or `Pacific/Tahiti`).

> --NOTE:-- When `start_time` and `end_time` are specified with `recurrence` , they form the boundaries of when the recurring action will start and stop.
*/
  public timeZone?: string;

  // ARN assigned by AWS to the autoscaling schedule.
  public arn?: string;

  // The initial capacity of the Auto Scaling group after the scheduled action runs and the capacity it attempts to maintain. Set to `-1` if you don't want to change the desired capacity at the scheduled time. Defaults to `0`.
  public desiredCapacity?: number;

  // The maximum size of the Auto Scaling group. Set to `-1` if you don't want to change the maximum size at the scheduled time. Defaults to `0`.
  public maxSize?: number;

  // The minimum size of the Auto Scaling group. Set to `-1` if you don't want to change the minimum size at the scheduled time. Defaults to `0`.
  public minSize?: number;

  // The recurring schedule for this action specified using the Unix cron syntax format.
  public recurrence?: string;

  // The date and time for the recurring schedule to start, in UTC with the format `"YYYY-MM-DDThh:mm:ssZ"` (e.g. `"2021-06-01T00:00:00Z"`).
  public startTime?: string;

  // The name of the Auto Scaling group.
  public autoscalingGroupName?: string;

  // The date and time for the recurring schedule to end, in UTC with the format `"YYYY-MM-DDThh:mm:ssZ"` (e.g. `"2021-06-01T00:00:00Z"`).
  public endTime?: string;

  /*
The name of this scaling action.

The following arguments are optional:
*/
  public scheduledActionName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "minSize",
        "The minimum size of the Auto Scaling group. Set to `-1` if you don't want to change the minimum size at the scheduled time. Defaults to `0`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "timeZone",
        "Specifies the time zone for a cron expression. Valid values are the canonical names of the IANA time zones (such as `Etc/GMT+9` or `Pacific/Tahiti`).\n\n> **NOTE:** When `start_time` and `end_time` are specified with `recurrence` , they form the boundaries of when the recurring action will start and stop.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "autoscalingGroupName",
        "The name of the Auto Scaling group.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "maxSize",
        "The maximum size of the Auto Scaling group. Set to `-1` if you don't want to change the maximum size at the scheduled time. Defaults to `0`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "recurrence",
        "The recurring schedule for this action specified using the Unix cron syntax format.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "scheduledActionName",
        "The name of this scaling action.\n\nThe following arguments are optional:",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "desiredCapacity",
        "The initial capacity of the Auto Scaling group after the scheduled action runs and the capacity it attempts to maintain. Set to `-1` if you don't want to change the desired capacity at the scheduled time. Defaults to `0`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "endTime",
        'The date and time for the recurring schedule to end, in UTC with the format `"YYYY-MM-DDThh:mm:ssZ"` (e.g. `"2021-06-01T00:00:00Z"`).',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "startTime",
        'The date and time for the recurring schedule to start, in UTC with the format `"YYYY-MM-DDThh:mm:ssZ"` (e.g. `"2021-06-01T00:00:00Z"`).',
        () => [],
        false,
        false,
      ),
    ];
  }
}
