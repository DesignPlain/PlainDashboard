import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  netapp_VolumeSnapshotPolicyHourlySchedule,
  netapp_VolumeSnapshotPolicyHourlySchedule_GetTypes,
} from './netapp_VolumeSnapshotPolicyHourlySchedule';
import {
  netapp_VolumeSnapshotPolicyMonthlySchedule,
  netapp_VolumeSnapshotPolicyMonthlySchedule_GetTypes,
} from './netapp_VolumeSnapshotPolicyMonthlySchedule';
import {
  netapp_VolumeSnapshotPolicyWeeklySchedule,
  netapp_VolumeSnapshotPolicyWeeklySchedule_GetTypes,
} from './netapp_VolumeSnapshotPolicyWeeklySchedule';
import {
  netapp_VolumeSnapshotPolicyDailySchedule,
  netapp_VolumeSnapshotPolicyDailySchedule_GetTypes,
} from './netapp_VolumeSnapshotPolicyDailySchedule';

export interface netapp_VolumeSnapshotPolicy {
  /*
Enables automated snapshot creation according to defined schedule. Default is false.
To disable automatic snapshot creation you have to remove the whole snapshot_policy block.
*/
  enabled?: boolean;

  /*
Hourly schedule policy.
Structure is documented below.
*/
  hourlySchedule?: netapp_VolumeSnapshotPolicyHourlySchedule;

  /*
Monthly schedule policy.
Structure is documented below.
*/
  monthlySchedule?: netapp_VolumeSnapshotPolicyMonthlySchedule;

  /*
Weekly schedule policy.
Structure is documented below.
*/
  weeklySchedule?: netapp_VolumeSnapshotPolicyWeeklySchedule;

  /*
Daily schedule policy.
Structure is documented below.
*/
  dailySchedule?: netapp_VolumeSnapshotPolicyDailySchedule;
}

export function netapp_VolumeSnapshotPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Enables automated snapshot creation according to defined schedule. Default is false.\nTo disable automatic snapshot creation you have to remove the whole snapshot_policy block.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'hourlySchedule',
      'Hourly schedule policy.\nStructure is documented below.',
      () => netapp_VolumeSnapshotPolicyHourlySchedule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'monthlySchedule',
      'Monthly schedule policy.\nStructure is documented below.',
      () => netapp_VolumeSnapshotPolicyMonthlySchedule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'weeklySchedule',
      'Weekly schedule policy.\nStructure is documented below.',
      () => netapp_VolumeSnapshotPolicyWeeklySchedule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'dailySchedule',
      'Daily schedule policy.\nStructure is documented below.',
      () => netapp_VolumeSnapshotPolicyDailySchedule_GetTypes(),
      false,
      false,
    ),
  ];
}
