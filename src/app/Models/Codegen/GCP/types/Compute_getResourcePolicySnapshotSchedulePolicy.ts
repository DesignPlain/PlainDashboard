import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_getResourcePolicySnapshotSchedulePolicyRetentionPolicy,
  Compute_getResourcePolicySnapshotSchedulePolicyRetentionPolicy_GetTypes,
} from "./Compute_getResourcePolicySnapshotSchedulePolicyRetentionPolicy";
import {
  Compute_getResourcePolicySnapshotSchedulePolicySchedule,
  Compute_getResourcePolicySnapshotSchedulePolicySchedule_GetTypes,
} from "./Compute_getResourcePolicySnapshotSchedulePolicySchedule";
import {
  Compute_getResourcePolicySnapshotSchedulePolicySnapshotProperty,
  Compute_getResourcePolicySnapshotSchedulePolicySnapshotProperty_GetTypes,
} from "./Compute_getResourcePolicySnapshotSchedulePolicySnapshotProperty";

export interface Compute_getResourcePolicySnapshotSchedulePolicy {
  // Retention policy applied to snapshots created by this resource policy.
  RetentionPolicies?: Array<Compute_getResourcePolicySnapshotSchedulePolicyRetentionPolicy>;

  // Contains one of an 'hourlySchedule', 'dailySchedule', or 'weeklySchedule'.
  Schedules?: Array<Compute_getResourcePolicySnapshotSchedulePolicySchedule>;

  // Properties with which the snapshots are created, such as labels.
  SnapshotProperties?: Array<Compute_getResourcePolicySnapshotSchedulePolicySnapshotProperty>;
}

export function Compute_getResourcePolicySnapshotSchedulePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "SnapshotProperties",
      "Properties with which the snapshots are created, such as labels.",
      Compute_getResourcePolicySnapshotSchedulePolicySnapshotProperty_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "RetentionPolicies",
      "Retention policy applied to snapshots created by this resource policy.",
      Compute_getResourcePolicySnapshotSchedulePolicyRetentionPolicy_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Schedules",
      "Contains one of an 'hourlySchedule', 'dailySchedule', or 'weeklySchedule'.",
      Compute_getResourcePolicySnapshotSchedulePolicySchedule_GetTypes(),
      true,
      false,
    ),
  ];
}
