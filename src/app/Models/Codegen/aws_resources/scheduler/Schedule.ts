import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  scheduler_ScheduleFlexibleTimeWindow,
  scheduler_ScheduleFlexibleTimeWindow_GetTypes,
} from "../types/scheduler_ScheduleFlexibleTimeWindow";
import {
  scheduler_ScheduleTarget,
  scheduler_ScheduleTarget_GetTypes,
} from "../types/scheduler_ScheduleTarget";

export interface ScheduleArgs {
  // Configures a time window during which EventBridge Scheduler invokes the schedule. Detailed below.
  flexibleTimeWindow?: scheduler_ScheduleFlexibleTimeWindow;

  // Name of the schedule. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`.
  name?: string;

  // Defines when the schedule runs. Read more in [Schedule types on EventBridge Scheduler](https://docs.aws.amazon.com/scheduler/latest/UserGuide/schedule-types.html).
  scheduleExpression?: string;

  // Specifies whether the schedule is enabled or disabled. One of: `ENABLED` (default), `DISABLED`.
  state?: string;

  /*
Configures the target of the schedule. Detailed below.

The following arguments are optional:
*/
  target?: scheduler_ScheduleTarget;

  // Timezone in which the scheduling expression is evaluated. Defaults to `UTC`. Example: `Australia/Sydney`.
  scheduleExpressionTimezone?: string;

  // The date, in UTC, after which the schedule can begin invoking its target. Depending on the schedule's recurrence expression, invocations might occur on, or after, the start date you specify. EventBridge Scheduler ignores the start date for one-time schedules. Example: `2030-01-01T01:00:00Z`.
  startDate?: string;

  // Brief description of the schedule.
  description?: string;

  // The date, in UTC, before which the schedule can invoke its target. Depending on the schedule's recurrence expression, invocations might stop on, or before, the end date you specify. EventBridge Scheduler ignores the end date for one-time schedules. Example: `2030-01-01T01:00:00Z`.
  endDate?: string;

  // Name of the schedule group to associate with this schedule. When omitted, the `default` schedule group is used.
  groupName?: string;

  // ARN for the customer managed KMS key that EventBridge Scheduler will use to encrypt and decrypt your data.
  kmsKeyArn?: string;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  namePrefix?: string;
}
export class Schedule extends Resource {
  // Timezone in which the scheduling expression is evaluated. Defaults to `UTC`. Example: `Australia/Sydney`.
  public scheduleExpressionTimezone?: string;

  // Specifies whether the schedule is enabled or disabled. One of: `ENABLED` (default), `DISABLED`.
  public state?: string;

  // ARN of the SQS queue specified as the destination for the dead-letter queue.
  public arn?: string;

  // The date, in UTC, before which the schedule can invoke its target. Depending on the schedule's recurrence expression, invocations might stop on, or before, the end date you specify. EventBridge Scheduler ignores the end date for one-time schedules. Example: `2030-01-01T01:00:00Z`.
  public endDate?: string;

  // Name of the schedule group to associate with this schedule. When omitted, the `default` schedule group is used.
  public groupName?: string;

  // ARN for the customer managed KMS key that EventBridge Scheduler will use to encrypt and decrypt your data.
  public kmsKeyArn?: string;

  // Name of the schedule. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`.
  public name?: string;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  public namePrefix?: string;

  // Defines when the schedule runs. Read more in [Schedule types on EventBridge Scheduler](https://docs.aws.amazon.com/scheduler/latest/UserGuide/schedule-types.html).
  public scheduleExpression?: string;

  // The date, in UTC, after which the schedule can begin invoking its target. Depending on the schedule's recurrence expression, invocations might occur on, or after, the start date you specify. EventBridge Scheduler ignores the start date for one-time schedules. Example: `2030-01-01T01:00:00Z`.
  public startDate?: string;

  // Brief description of the schedule.
  public description?: string;

  // Configures a time window during which EventBridge Scheduler invokes the schedule. Detailed below.
  public flexibleTimeWindow?: scheduler_ScheduleFlexibleTimeWindow;

  /*
Configures the target of the schedule. Detailed below.

The following arguments are optional:
*/
  public target?: scheduler_ScheduleTarget;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "kmsKeyArn",
        "ARN for the customer managed KMS key that EventBridge Scheduler will use to encrypt and decrypt your data.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "flexibleTimeWindow",
        "Configures a time window during which EventBridge Scheduler invokes the schedule. Detailed below.",
        scheduler_ScheduleFlexibleTimeWindow_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "scheduleExpression",
        "Defines when the schedule runs. Read more in [Schedule types on EventBridge Scheduler](https://docs.aws.amazon.com/scheduler/latest/UserGuide/schedule-types.html).",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Brief description of the schedule.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "endDate",
        "The date, in UTC, before which the schedule can invoke its target. Depending on the schedule's recurrence expression, invocations might stop on, or before, the end date you specify. EventBridge Scheduler ignores the end date for one-time schedules. Example: `2030-01-01T01:00:00Z`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "startDate",
        "The date, in UTC, after which the schedule can begin invoking its target. Depending on the schedule's recurrence expression, invocations might occur on, or after, the start date you specify. EventBridge Scheduler ignores the start date for one-time schedules. Example: `2030-01-01T01:00:00Z`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "groupName",
        "Name of the schedule group to associate with this schedule. When omitted, the `default` schedule group is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "namePrefix",
        "Creates a unique name beginning with the specified prefix. Conflicts with `name`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the schedule. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "state",
        "Specifies whether the schedule is enabled or disabled. One of: `ENABLED` (default), `DISABLED`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "target",
        "Configures the target of the schedule. Detailed below.\n\nThe following arguments are optional:",
        scheduler_ScheduleTarget_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "scheduleExpressionTimezone",
        "Timezone in which the scheduling expression is evaluated. Defaults to `UTC`. Example: `Australia/Sydney`.",
        [],
        false,
        false,
      ),
    ];
  }
}
