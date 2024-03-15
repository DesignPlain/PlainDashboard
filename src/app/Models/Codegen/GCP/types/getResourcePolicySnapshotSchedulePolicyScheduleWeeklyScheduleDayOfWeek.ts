export interface getResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeek {
  // The day of the week to create the snapshot. e.g. MONDAY Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  Day?: string;

  /*
Time within the window to start the operations.
It must be in format "HH:MM", where HH : [00-23] and MM : [00-00] GMT.
*/
  StartTime?: string;
}
