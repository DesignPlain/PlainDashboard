import { ResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeek } from "./ResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeek";

export interface ResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule {
  /*
May contain up to seven (one for each day of the week) snapshot times.
Structure is documented below.
*/
  DayOfWeeks?: Array<ResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeek>;
}
