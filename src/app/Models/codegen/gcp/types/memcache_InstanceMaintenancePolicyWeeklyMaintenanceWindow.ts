import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  memcache_InstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime,
  memcache_InstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime_GetTypes,
} from './memcache_InstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime';

export interface memcache_InstanceMaintenancePolicyWeeklyMaintenanceWindow {
  /*
Required. The day of week that maintenance updates occur.
- DAY_OF_WEEK_UNSPECIFIED: The day of the week is unspecified.
- MONDAY: Monday
- TUESDAY: Tuesday
- WEDNESDAY: Wednesday
- THURSDAY: Thursday
- FRIDAY: Friday
- SATURDAY: Saturday
- SUNDAY: Sunday
Possible values are: `DAY_OF_WEEK_UNSPECIFIED`, `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY`, `SATURDAY`, `SUNDAY`.
*/
  day?: string;

  /*
Required. The length of the maintenance window, ranging from 3 hours to 8 hours.
A duration in seconds with up to nine fractional digits,
terminated by 's'. Example: "3.5s".
*/
  duration?: string;

  /*
Required. Start time of the window in UTC time.
Structure is documented below.
*/
  startTime?: memcache_InstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime;
}

export function memcache_InstanceMaintenancePolicyWeeklyMaintenanceWindow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'day',
      'Required. The day of week that maintenance updates occur.\n- DAY_OF_WEEK_UNSPECIFIED: The day of the week is unspecified.\n- MONDAY: Monday\n- TUESDAY: Tuesday\n- WEDNESDAY: Wednesday\n- THURSDAY: Thursday\n- FRIDAY: Friday\n- SATURDAY: Saturday\n- SUNDAY: Sunday\nPossible values are: `DAY_OF_WEEK_UNSPECIFIED`, `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY`, `SATURDAY`, `SUNDAY`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'duration',
      'Required. The length of the maintenance window, ranging from 3 hours to 8 hours.\nA duration in seconds with up to nine fractional digits,\nterminated by \'s\'. Example: "3.5s".',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'startTime',
      'Required. Start time of the window in UTC time.\nStructure is documented below.',
      () =>
        memcache_InstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime_GetTypes(),
      true,
      false,
    ),
  ];
}
