import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  compute_ResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeek,
  compute_ResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeek_GetTypes,
} from './compute_ResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeek';

export interface compute_ResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule {
  /*
May contain up to seven (one for each day of the week) snapshot times.
Structure is documented below.
*/
  dayOfWeeks?: Array<compute_ResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeek>;
}

export function compute_ResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'dayOfWeeks',
      'May contain up to seven (one for each day of the week) snapshot times.\nStructure is documented below.',
      () =>
        compute_ResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeek_GetTypes(),
      true,
      true,
    ),
  ];
}
