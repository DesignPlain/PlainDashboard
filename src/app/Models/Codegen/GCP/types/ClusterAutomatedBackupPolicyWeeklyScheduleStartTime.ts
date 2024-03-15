export interface ClusterAutomatedBackupPolicyWeeklyScheduleStartTime {
  // Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  Hours?: number;

  // Minutes of hour of day. Currently, only the value 0 is supported.
  Minutes?: number;

  // Fractions of seconds in nanoseconds. Currently, only the value 0 is supported.
  Nanos?: number;

  // Seconds of minutes of the time. Currently, only the value 0 is supported.
  Seconds?: number;
}
