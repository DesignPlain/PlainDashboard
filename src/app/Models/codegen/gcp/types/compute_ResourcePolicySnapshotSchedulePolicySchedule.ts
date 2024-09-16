import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  compute_ResourcePolicySnapshotSchedulePolicyScheduleDailySchedule,
  compute_ResourcePolicySnapshotSchedulePolicyScheduleDailySchedule_GetTypes,
} from './compute_ResourcePolicySnapshotSchedulePolicyScheduleDailySchedule';
import {
  compute_ResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule,
  compute_ResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule_GetTypes,
} from './compute_ResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule';
import {
  compute_ResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule,
  compute_ResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule_GetTypes,
} from './compute_ResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule';

export interface compute_ResourcePolicySnapshotSchedulePolicySchedule {
  /*
The policy will execute every nth day at the specified time.
Structure is documented below.
*/
  dailySchedule?: compute_ResourcePolicySnapshotSchedulePolicyScheduleDailySchedule;

  /*
The policy will execute every nth hour starting at the specified time.
Structure is documented below.
*/
  hourlySchedule?: compute_ResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule;

  /*
Allows specifying a snapshot time for each day of the week.
Structure is documented below.
*/
  weeklySchedule?: compute_ResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule;
}

export function compute_ResourcePolicySnapshotSchedulePolicySchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'dailySchedule',
      'The policy will execute every nth day at the specified time.\nStructure is documented below.',
      () =>
        compute_ResourcePolicySnapshotSchedulePolicyScheduleDailySchedule_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'hourlySchedule',
      'The policy will execute every nth hour starting at the specified time.\nStructure is documented below.',
      () =>
        compute_ResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'weeklySchedule',
      'Allows specifying a snapshot time for each day of the week.\nStructure is documented below.',
      () =>
        compute_ResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule_GetTypes(),
      false,
      true,
    ),
  ];
}
