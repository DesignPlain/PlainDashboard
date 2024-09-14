import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appautoscaling_ScheduledActionScalableTargetAction,
  appautoscaling_ScheduledActionScalableTargetAction_GetTypes,
} from "../types/appautoscaling_ScheduledActionScalableTargetAction";

export interface ScheduledActionArgs {
  // Namespace of the AWS service. Documentation can be found in the `ServiceNamespace` parameter at: [AWS Application Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_PutScheduledAction.html) Example: ecs
  serviceNamespace?: string;

  // Name of the scheduled action.
  name?: string;

  // Identifier of the resource associated with the scheduled action. Documentation can be found in the `ResourceId` parameter at: [AWS Application Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_PutScheduledAction.html)
  resourceId?: string;

  // Scalable dimension. Documentation can be found in the `ScalableDimension` parameter at: [AWS Application Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_PutScheduledAction.html) Example: ecs:service:DesiredCount
  scalableDimension?: string;

  // Date and time for the scheduled action to start in RFC 3339 format. The timezone is not affected by the setting of `timezone`.
  startTime?: string;

  // Time zone used when setting a scheduled action by using an at or cron expression. Does not affect timezone for `start_time` and `end_time`. Valid values are the [canonical names of the IANA time zones supported by Joda-Time](https://www.joda.org/joda-time/timezones.html), such as `Etc/GMT+9` or `Pacific/Tahiti`. Default is `UTC`.
  timezone?: string;

  // Date and time for the scheduled action to end in RFC 3339 format. The timezone is not affected by the setting of `timezone`.
  endTime?: string;

  // New minimum and maximum capacity. You can set both values or just one. See below
  scalableTargetAction?: appautoscaling_ScheduledActionScalableTargetAction;

  // Schedule for this action. The following formats are supported: At expressions - at(yyyy-mm-ddThh:mm:ss), Rate expressions - rate(valueunit), Cron expressions - cron(fields). Times for at expressions and cron expressions are evaluated using the time zone configured in `timezone`. Documentation can be found in the `Timezone` parameter at: [AWS Application Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_PutScheduledAction.html)
  schedule?: string;
}
export class ScheduledAction extends DS_Resource {
  // Schedule for this action. The following formats are supported: At expressions - at(yyyy-mm-ddThh:mm:ss), Rate expressions - rate(valueunit), Cron expressions - cron(fields). Times for at expressions and cron expressions are evaluated using the time zone configured in `timezone`. Documentation can be found in the `Timezone` parameter at: [AWS Application Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_PutScheduledAction.html)
  public schedule?: string;

  // Namespace of the AWS service. Documentation can be found in the `ServiceNamespace` parameter at: [AWS Application Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_PutScheduledAction.html) Example: ecs
  public serviceNamespace?: string;

  // Time zone used when setting a scheduled action by using an at or cron expression. Does not affect timezone for `start_time` and `end_time`. Valid values are the [canonical names of the IANA time zones supported by Joda-Time](https://www.joda.org/joda-time/timezones.html), such as `Etc/GMT+9` or `Pacific/Tahiti`. Default is `UTC`.
  public timezone?: string;

  // ARN of the scheduled action.
  public arn?: string;

  // Date and time for the scheduled action to end in RFC 3339 format. The timezone is not affected by the setting of `timezone`.
  public endTime?: string;

  // Scalable dimension. Documentation can be found in the `ScalableDimension` parameter at: [AWS Application Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_PutScheduledAction.html) Example: ecs:service:DesiredCount
  public scalableDimension?: string;

  // Date and time for the scheduled action to start in RFC 3339 format. The timezone is not affected by the setting of `timezone`.
  public startTime?: string;

  // Name of the scheduled action.
  public name?: string;

  // Identifier of the resource associated with the scheduled action. Documentation can be found in the `ResourceId` parameter at: [AWS Application Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_PutScheduledAction.html)
  public resourceId?: string;

  // New minimum and maximum capacity. You can set both values or just one. See below
  public scalableTargetAction?: appautoscaling_ScheduledActionScalableTargetAction;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "schedule",
        "Schedule for this action. The following formats are supported: At expressions - at(yyyy-mm-ddThh:mm:ss), Rate expressions - rate(valueunit), Cron expressions - cron(fields). Times for at expressions and cron expressions are evaluated using the time zone configured in `timezone`. Documentation can be found in the `Timezone` parameter at: [AWS Application Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_PutScheduledAction.html)",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the scheduled action.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "startTime",
        "Date and time for the scheduled action to start in RFC 3339 format. The timezone is not affected by the setting of `timezone`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "endTime",
        "Date and time for the scheduled action to end in RFC 3339 format. The timezone is not affected by the setting of `timezone`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "scalableTargetAction",
        "New minimum and maximum capacity. You can set both values or just one. See below",
        () => appautoscaling_ScheduledActionScalableTargetAction_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceNamespace",
        "Namespace of the AWS service. Documentation can be found in the `ServiceNamespace` parameter at: [AWS Application Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_PutScheduledAction.html) Example: ecs",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "resourceId",
        "Identifier of the resource associated with the scheduled action. Documentation can be found in the `ResourceId` parameter at: [AWS Application Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_PutScheduledAction.html)",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "scalableDimension",
        "Scalable dimension. Documentation can be found in the `ScalableDimension` parameter at: [AWS Application Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_PutScheduledAction.html) Example: ecs:service:DesiredCount",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "timezone",
        "Time zone used when setting a scheduled action by using an at or cron expression. Does not affect timezone for `start_time` and `end_time`. Valid values are the [canonical names of the IANA time zones supported by Joda-Time](https://www.joda.org/joda-time/timezones.html), such as `Etc/GMT+9` or `Pacific/Tahiti`. Default is `UTC`.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
