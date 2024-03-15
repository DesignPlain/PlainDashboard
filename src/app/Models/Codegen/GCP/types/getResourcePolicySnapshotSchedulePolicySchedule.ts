import { getResourcePolicySnapshotSchedulePolicyScheduleDailySchedule } from "./getResourcePolicySnapshotSchedulePolicyScheduleDailySchedule";
import { getResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule } from "./getResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule";
import { getResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule } from "./getResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule";

export interface getResourcePolicySnapshotSchedulePolicySchedule {
  // The policy will execute every nth day at the specified time.
  DailySchedules?: Array<getResourcePolicySnapshotSchedulePolicyScheduleDailySchedule>;

  // The policy will execute every nth hour starting at the specified time.
  HourlySchedules?: Array<getResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule>;

  // Allows specifying a snapshot time for each day of the week.
  WeeklySchedules?: Array<getResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule>;
}
