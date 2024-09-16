import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  compute_ResourcePolicySnapshotSchedulePolicyRetentionPolicy,
  compute_ResourcePolicySnapshotSchedulePolicyRetentionPolicy_GetTypes,
} from './compute_ResourcePolicySnapshotSchedulePolicyRetentionPolicy';
import {
  compute_ResourcePolicySnapshotSchedulePolicySchedule,
  compute_ResourcePolicySnapshotSchedulePolicySchedule_GetTypes,
} from './compute_ResourcePolicySnapshotSchedulePolicySchedule';
import {
  compute_ResourcePolicySnapshotSchedulePolicySnapshotProperties,
  compute_ResourcePolicySnapshotSchedulePolicySnapshotProperties_GetTypes,
} from './compute_ResourcePolicySnapshotSchedulePolicySnapshotProperties';

export interface compute_ResourcePolicySnapshotSchedulePolicy {
  /*
Retention policy applied to snapshots created by this resource policy.
Structure is documented below.
*/
  retentionPolicy?: compute_ResourcePolicySnapshotSchedulePolicyRetentionPolicy;

  /*
Contains one of an `hourlySchedule`, `dailySchedule`, or `weeklySchedule`.
Structure is documented below.
*/
  schedule?: compute_ResourcePolicySnapshotSchedulePolicySchedule;

  /*
Properties with which the snapshots are created, such as labels.
Structure is documented below.
*/
  snapshotProperties?: compute_ResourcePolicySnapshotSchedulePolicySnapshotProperties;
}

export function compute_ResourcePolicySnapshotSchedulePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'retentionPolicy',
      'Retention policy applied to snapshots created by this resource policy.\nStructure is documented below.',
      () =>
        compute_ResourcePolicySnapshotSchedulePolicyRetentionPolicy_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'schedule',
      'Contains one of an `hourlySchedule`, `dailySchedule`, or `weeklySchedule`.\nStructure is documented below.',
      () => compute_ResourcePolicySnapshotSchedulePolicySchedule_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'snapshotProperties',
      'Properties with which the snapshots are created, such as labels.\nStructure is documented below.',
      () =>
        compute_ResourcePolicySnapshotSchedulePolicySnapshotProperties_GetTypes(),
      false,
      true,
    ),
  ];
}
