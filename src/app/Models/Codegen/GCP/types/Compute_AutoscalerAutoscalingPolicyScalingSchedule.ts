import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_AutoscalerAutoscalingPolicyScalingSchedule {
  // The duration of time intervals (in seconds) for which this scaling schedule will be running. The minimum allowed value is 300.
  DurationSec?: number;

  // Minimum number of VM instances that autoscaler will recommend in time intervals starting according to schedule.
  MinRequiredReplicas?: number;

  // The identifier for this object. Format specified above.
  Name?: string;

  // The start timestamps of time intervals when this scaling schedule should provide a scaling signal. This field uses the extended cron format (with an optional year field).
  Schedule?: string;

  // The time zone to be used when interpreting the schedule. The value of this field must be a time zone name from the tz database: http://en.wikipedia.org/wiki/Tz_database.
  TimeZone?: string;

  // An optional description of this resource.
  Description?: string;

  // A boolean value that specifies if a scaling schedule can influence autoscaler recommendations. If set to true, then a scaling schedule has no effect.
  Disabled?: boolean;
}

export function Compute_AutoscalerAutoscalingPolicyScalingSchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "TimeZone",
      "The time zone to be used when interpreting the schedule. The value of this field must be a time zone name from the tz database: http://en.wikipedia.org/wiki/Tz_database.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Description",
      "An optional description of this resource.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Disabled",
      "A boolean value that specifies if a scaling schedule can influence autoscaler recommendations. If set to true, then a scaling schedule has no effect.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "DurationSec",
      "The duration of time intervals (in seconds) for which this scaling schedule will be running. The minimum allowed value is 300.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MinRequiredReplicas",
      "Minimum number of VM instances that autoscaler will recommend in time intervals starting according to schedule.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The identifier for this object. Format specified above.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Schedule",
      "The start timestamps of time intervals when this scaling schedule should provide a scaling signal. This field uses the extended cron format (with an optional year field).",
      [],
      true,
      false,
    ),
  ];
}
