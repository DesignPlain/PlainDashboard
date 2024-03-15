import { ResourcePolicySnapshotSchedulePolicyRetentionPolicy } from "./ResourcePolicySnapshotSchedulePolicyRetentionPolicy";
import { ResourcePolicySnapshotSchedulePolicySchedule } from "./ResourcePolicySnapshotSchedulePolicySchedule";
import { ResourcePolicySnapshotSchedulePolicySnapshotProperties } from "./ResourcePolicySnapshotSchedulePolicySnapshotProperties";

export interface ResourcePolicySnapshotSchedulePolicy {
  /*
Retention policy applied to snapshots created by this resource policy.
Structure is documented below.
*/
  RetentionPolicy?: ResourcePolicySnapshotSchedulePolicyRetentionPolicy;

  /*
Contains one of an `hourlySchedule`, `dailySchedule`, or `weeklySchedule`.
Structure is documented below.
*/
  Schedule?: ResourcePolicySnapshotSchedulePolicySchedule;

  /*
Properties with which the snapshots are created, such as labels.
Structure is documented below.
*/
  SnapshotProperties?: ResourcePolicySnapshotSchedulePolicySnapshotProperties;
}
