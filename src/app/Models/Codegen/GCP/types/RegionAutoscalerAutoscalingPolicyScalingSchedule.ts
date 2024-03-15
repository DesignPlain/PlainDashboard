export interface RegionAutoscalerAutoscalingPolicyScalingSchedule {
  // An optional description of this resource.
  Description?: string;

  // A boolean value that specifies if a scaling schedule can influence autoscaler recommendations. If set to true, then a scaling schedule has no effect.
  Disabled?: boolean;

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
}
