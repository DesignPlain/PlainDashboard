import { getResourcePolicySnapshotSchedulePolicyRetentionPolicy } from "./getResourcePolicySnapshotSchedulePolicyRetentionPolicy";
import { getResourcePolicySnapshotSchedulePolicySchedule } from "./getResourcePolicySnapshotSchedulePolicySchedule";
import { getResourcePolicySnapshotSchedulePolicySnapshotProperty } from "./getResourcePolicySnapshotSchedulePolicySnapshotProperty";

export interface getResourcePolicySnapshotSchedulePolicy {
  // Properties with which the snapshots are created, such as labels.
  SnapshotProperties?: Array<getResourcePolicySnapshotSchedulePolicySnapshotProperty>;

  // Retention policy applied to snapshots created by this resource policy.
  RetentionPolicies?: Array<getResourcePolicySnapshotSchedulePolicyRetentionPolicy>;

  // Contains one of an 'hourlySchedule', 'dailySchedule', or 'weeklySchedule'.
  Schedules?: Array<getResourcePolicySnapshotSchedulePolicySchedule>;
}
