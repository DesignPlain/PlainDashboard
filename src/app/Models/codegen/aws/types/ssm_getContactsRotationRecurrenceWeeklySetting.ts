import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ssm_getContactsRotationRecurrenceWeeklySettingHandOffTime,
  ssm_getContactsRotationRecurrenceWeeklySettingHandOffTime_GetTypes,
} from './ssm_getContactsRotationRecurrenceWeeklySettingHandOffTime';

export interface ssm_getContactsRotationRecurrenceWeeklySetting {
  //
  dayOfWeek?: string;

  //
  handOffTimes?: Array<ssm_getContactsRotationRecurrenceWeeklySettingHandOffTime>;
}

export function ssm_getContactsRotationRecurrenceWeeklySetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'dayOfWeek',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'handOffTimes',
      '',
      () =>
        ssm_getContactsRotationRecurrenceWeeklySettingHandOffTime_GetTypes(),
      true,
      false,
    ),
  ];
}
