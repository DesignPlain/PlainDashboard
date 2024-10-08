import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  compute_getResourcePolicySnapshotSchedulePolicyRetentionPolicy,
  compute_getResourcePolicySnapshotSchedulePolicyRetentionPolicy_GetTypes,
} from './compute_getResourcePolicySnapshotSchedulePolicyRetentionPolicy';
import {
  compute_getResourcePolicySnapshotSchedulePolicySchedule,
  compute_getResourcePolicySnapshotSchedulePolicySchedule_GetTypes,
} from './compute_getResourcePolicySnapshotSchedulePolicySchedule';
import {
  compute_getResourcePolicySnapshotSchedulePolicySnapshotProperty,
  compute_getResourcePolicySnapshotSchedulePolicySnapshotProperty_GetTypes,
} from './compute_getResourcePolicySnapshotSchedulePolicySnapshotProperty';

export interface compute_getResourcePolicySnapshotSchedulePolicy {
  // Retention policy applied to snapshots created by this resource policy.
  retentionPolicies?: Array<compute_getResourcePolicySnapshotSchedulePolicyRetentionPolicy>;

  // Contains one of an 'hourlySchedule', 'dailySchedule', or 'weeklySchedule'.
  schedules?: Array<compute_getResourcePolicySnapshotSchedulePolicySchedule>;

  // Properties with which the snapshots are created, such as labels.
  snapshotProperties?: Array<compute_getResourcePolicySnapshotSchedulePolicySnapshotProperty>;
}

export function compute_getResourcePolicySnapshotSchedulePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'schedules',
      "Contains one of an 'hourlySchedule', 'dailySchedule', or 'weeklySchedule'.",
      () => compute_getResourcePolicySnapshotSchedulePolicySchedule_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'snapshotProperties',
      'Properties with which the snapshots are created, such as labels.',
      () =>
        compute_getResourcePolicySnapshotSchedulePolicySnapshotProperty_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'retentionPolicies',
      'Retention policy applied to snapshots created by this resource policy.',
      () =>
        compute_getResourcePolicySnapshotSchedulePolicyRetentionPolicy_GetTypes(),
      true,
      false,
    ),
  ];
}
