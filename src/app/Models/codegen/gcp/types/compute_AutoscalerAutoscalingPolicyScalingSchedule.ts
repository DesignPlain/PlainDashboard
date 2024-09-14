import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_AutoscalerAutoscalingPolicyScalingSchedule {
  // The duration of time intervals (in seconds) for which this scaling schedule will be running. The minimum allowed value is 300.
  durationSec?: number;

  // Minimum number of VM instances that autoscaler will recommend in time intervals starting according to schedule.
  minRequiredReplicas?: number;

  // The identifier for this object. Format specified above.
  name?: string;

  // The start timestamps of time intervals when this scaling schedule should provide a scaling signal. This field uses the extended cron format (with an optional year field).
  schedule?: string;

  // The time zone to be used when interpreting the schedule. The value of this field must be a time zone name from the tz database: http://en.wikipedia.org/wiki/Tz_database.
  timeZone?: string;

  // An optional description of this resource.
  description?: string;

  // A boolean value that specifies if a scaling schedule can influence autoscaler recommendations. If set to true, then a scaling schedule has no effect.
  disabled?: boolean;
}

export function compute_AutoscalerAutoscalingPolicyScalingSchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "timeZone",
      "The time zone to be used when interpreting the schedule. The value of this field must be a time zone name from the tz database: http://en.wikipedia.org/wiki/Tz_database.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "An optional description of this resource.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "disabled",
      "A boolean value that specifies if a scaling schedule can influence autoscaler recommendations. If set to true, then a scaling schedule has no effect.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "durationSec",
      "The duration of time intervals (in seconds) for which this scaling schedule will be running. The minimum allowed value is 300.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minRequiredReplicas",
      "Minimum number of VM instances that autoscaler will recommend in time intervals starting according to schedule.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The identifier for this object. Format specified above.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "schedule",
      "The start timestamps of time intervals when this scaling schedule should provide a scaling signal. This field uses the extended cron format (with an optional year field).",
      () => [],
      true,
      false,
    ),
  ];
}
