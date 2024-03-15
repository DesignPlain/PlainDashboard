import { VolumeSnapshotPolicyWeeklySchedule } from "./VolumeSnapshotPolicyWeeklySchedule";
import { VolumeSnapshotPolicyDailySchedule } from "./VolumeSnapshotPolicyDailySchedule";
import { VolumeSnapshotPolicyHourlySchedule } from "./VolumeSnapshotPolicyHourlySchedule";
import { VolumeSnapshotPolicyMonthlySchedule } from "./VolumeSnapshotPolicyMonthlySchedule";

export interface VolumeSnapshotPolicy {
  /*
Daily schedule policy.
Structure is documented below.
*/
  DailySchedule?: VolumeSnapshotPolicyDailySchedule;

  /*
Enables automated snapshot creation according to defined schedule. Default is false.
To disable automatic snapshot creation you have to remove the whole snapshot_policy block.
*/
  Enabled?: boolean;

  /*
Hourly schedule policy.
Structure is documented below.
*/
  HourlySchedule?: VolumeSnapshotPolicyHourlySchedule;

  /*
Monthly schedule policy.
Structure is documented below.
*/
  MonthlySchedule?: VolumeSnapshotPolicyMonthlySchedule;

  /*
Weekly schedule policy.
Structure is documented below.
*/
  WeeklySchedule?: VolumeSnapshotPolicyWeeklySchedule;
}
