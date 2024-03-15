export interface getInstanceMaintenanceSchedule {
  /*
Output only. The end time of any upcoming scheduled maintenance for this instance.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
resolution and up to nine fractional digits.
*/
  EndTime?: string;

  /*
Output only. The deadline that the maintenance schedule start time
can not go beyond, including reschedule.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
resolution and up to nine fractional digits.
*/
  ScheduleDeadlineTime?: string;

  /*
Output only. The start time of any upcoming scheduled maintenance for this instance.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
resolution and up to nine fractional digits.
*/
  StartTime?: string;
}
