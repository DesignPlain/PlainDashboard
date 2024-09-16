import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface alloydb_ClusterAutomatedBackupPolicyWeeklyScheduleStartTime {
  // Fractions of seconds in nanoseconds. Currently, only the value 0 is supported.
  nanos?: number;

  // Seconds of minutes of the time. Currently, only the value 0 is supported.
  seconds?: number;

  // Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  hours?: number;

  // Minutes of hour of day. Currently, only the value 0 is supported.
  minutes?: number;
}

export function alloydb_ClusterAutomatedBackupPolicyWeeklyScheduleStartTime_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'seconds',
      'Seconds of minutes of the time. Currently, only the value 0 is supported.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'hours',
      'Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'minutes',
      'Minutes of hour of day. Currently, only the value 0 is supported.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'nanos',
      'Fractions of seconds in nanoseconds. Currently, only the value 0 is supported.',
      () => [],
      false,
      false,
    ),
  ];
}
