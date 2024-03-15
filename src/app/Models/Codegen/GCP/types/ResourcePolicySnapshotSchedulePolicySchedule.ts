import { ResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule } from "./ResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule";
import { ResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule } from "./ResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule";
import { ResourcePolicySnapshotSchedulePolicyScheduleDailySchedule } from "./ResourcePolicySnapshotSchedulePolicyScheduleDailySchedule";

export interface ResourcePolicySnapshotSchedulePolicySchedule {
  /*
The policy will execute every nth day at the specified time.
Structure is documented below.
*/
  DailySchedule?: ResourcePolicySnapshotSchedulePolicyScheduleDailySchedule;

  /*
The policy will execute every nth hour starting at the specified time.
Structure is documented below.
*/
  HourlySchedule?: ResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule;

  /*
Allows specifying a snapshot time for each day of the week.
Structure is documented below.
*/
  WeeklySchedule?: ResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule;
}
