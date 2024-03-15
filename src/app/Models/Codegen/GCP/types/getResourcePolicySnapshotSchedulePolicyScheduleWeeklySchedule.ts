import { getResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeek } from "./getResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeek";

export interface getResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule {
  // May contain up to seven (one for each day of the week) snapshot times.
  DayOfWeeks?: Array<getResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeek>;
}
