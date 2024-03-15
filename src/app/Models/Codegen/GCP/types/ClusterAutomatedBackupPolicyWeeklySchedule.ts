import { ClusterAutomatedBackupPolicyWeeklyScheduleStartTime } from "./ClusterAutomatedBackupPolicyWeeklyScheduleStartTime";

export interface ClusterAutomatedBackupPolicyWeeklySchedule {
  /*
The days of the week to perform a backup. At least one day of the week must be provided.
Each value may be one of: `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY`, `SATURDAY`, `SUNDAY`.
*/
  DaysOfWeeks?: Array<string>;

  /*
The times during the day to start a backup. At least one start time must be provided. The start times are assumed to be in UTC and to be an exact hour (e.g., 04:00:00).
Structure is documented below.
*/
  StartTimes?: Array<ClusterAutomatedBackupPolicyWeeklyScheduleStartTime>;
}
