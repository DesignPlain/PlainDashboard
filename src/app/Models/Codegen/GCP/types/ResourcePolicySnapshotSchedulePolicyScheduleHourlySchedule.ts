export interface ResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule {
  // The number of hours between snapshots.
  HoursInCycle?: number;

  /*
Time within the window to start the operations.
It must be in an hourly format "HH:MM",
where HH : [00-23] and MM : [00] GMT.
eg: 21:00
*/
  StartTime?: string;
}
