export interface InstanceMaintenanceWindowStartTime {
  // Seconds of minutes of the time. Must normally be from 0 to 59.
  Seconds?: number;

  // Hours of day in 24 hour format. Should be from 0 to 23.
  Hours?: number;

  // Minutes of hour of day. Must be from 0 to 59.
  Minutes?: number;

  // Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  Nanos?: number;
}
