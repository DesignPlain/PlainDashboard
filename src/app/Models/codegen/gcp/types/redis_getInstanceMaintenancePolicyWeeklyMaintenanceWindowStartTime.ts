import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface redis_getInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime {
  /*
Hours of day in 24 hour format. Should be from 0 to 23.
An API may choose to allow the value "24:00:00" for scenarios like business closing time.
*/
  hours?: number;

  // Minutes of hour of day. Must be from 0 to 59.
  minutes?: number;

  // Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  nanos?: number;

  /*
Seconds of minutes of the time. Must normally be from 0 to 59.
An API may allow the value 60 if it allows leap-seconds.
*/
  seconds?: number;
}

export function redis_getInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'seconds',
      'Seconds of minutes of the time. Must normally be from 0 to 59.\nAn API may allow the value 60 if it allows leap-seconds.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'hours',
      'Hours of day in 24 hour format. Should be from 0 to 23.\nAn API may choose to allow the value "24:00:00" for scenarios like business closing time.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'minutes',
      'Minutes of hour of day. Must be from 0 to 59.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'nanos',
      'Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.',
      () => [],
      true,
      false,
    ),
  ];
}
