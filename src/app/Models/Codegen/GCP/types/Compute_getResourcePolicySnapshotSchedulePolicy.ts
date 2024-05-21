import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_getResourcePolicySnapshotSchedulePolicySnapshotProperty,
  compute_getResourcePolicySnapshotSchedulePolicySnapshotProperty_GetTypes,
} from "./compute_getResourcePolicySnapshotSchedulePolicySnapshotProperty";
import {
  compute_getResourcePolicySnapshotSchedulePolicyRetentionPolicy,
  compute_getResourcePolicySnapshotSchedulePolicyRetentionPolicy_GetTypes,
} from "./compute_getResourcePolicySnapshotSchedulePolicyRetentionPolicy";
import {
  compute_getResourcePolicySnapshotSchedulePolicySchedule,
  compute_getResourcePolicySnapshotSchedulePolicySchedule_GetTypes,
} from "./compute_getResourcePolicySnapshotSchedulePolicySchedule";

export interface compute_getResourcePolicySnapshotSchedulePolicy {
  // Properties with which the snapshots are created, such as labels.
  snapshotProperties?: Array<compute_getResourcePolicySnapshotSchedulePolicySnapshotProperty>;

  // Retention policy applied to snapshots created by this resource policy.
  retentionPolicies?: Array<compute_getResourcePolicySnapshotSchedulePolicyRetentionPolicy>;

  // Contains one of an 'hourlySchedule', 'dailySchedule', or 'weeklySchedule'.
  schedules?: Array<compute_getResourcePolicySnapshotSchedulePolicySchedule>;
}

export function compute_getResourcePolicySnapshotSchedulePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "snapshotProperties",
      "Properties with which the snapshots are created, such as labels.",
      compute_getResourcePolicySnapshotSchedulePolicySnapshotProperty_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "retentionPolicies",
      "Retention policy applied to snapshots created by this resource policy.",
      compute_getResourcePolicySnapshotSchedulePolicyRetentionPolicy_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "schedules",
      "Contains one of an 'hourlySchedule', 'dailySchedule', or 'weeklySchedule'.",
      compute_getResourcePolicySnapshotSchedulePolicySchedule_GetTypes(),
      true,
      false,
    ),
  ];
}
