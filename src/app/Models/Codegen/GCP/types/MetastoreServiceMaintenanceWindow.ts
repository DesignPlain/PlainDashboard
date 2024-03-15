export interface MetastoreServiceMaintenanceWindow {
  /*
The day of week, when the window starts.
Possible values are: `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY`, `SATURDAY`, `SUNDAY`.
*/
  DayOfWeek?: string;

  // The hour of day (0-23) when the window starts.
  HourOfDay?: number;
}
