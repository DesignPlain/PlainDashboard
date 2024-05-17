import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Memcache_InstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime,
  Memcache_InstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime_GetTypes,
} from "./Memcache_InstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime";

export interface Memcache_InstanceMaintenancePolicyWeeklyMaintenanceWindow {
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
  Day?: string;

  /*
Required. The length of the maintenance window, ranging from 3 hours to 8 hours.
A duration in seconds with up to nine fractional digits,
terminated by 's'. Example: "3.5s".
*/
  Duration?: string;

  /*
Required. Start time of the window in UTC time.
Structure is documented below.
*/
  StartTime?: Memcache_InstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime;
}

export function Memcache_InstanceMaintenancePolicyWeeklyMaintenanceWindow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Duration",
      "Required. The length of the maintenance window, ranging from 3 hours to 8 hours.\nA duration in seconds with up to nine fractional digits,\nterminated by 's'. Example: \"3.5s\".",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "StartTime",
      "Required. Start time of the window in UTC time.\nStructure is documented below.",
      Memcache_InstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Day",
      "Required. The day of week that maintenance updates occur.\n- DAY_OF_WEEK_UNSPECIFIED: The day of the week is unspecified.\n- MONDAY: Monday\n- TUESDAY: Tuesday\n- WEDNESDAY: Wednesday\n- THURSDAY: Thursday\n- FRIDAY: Friday\n- SATURDAY: Saturday\n- SUNDAY: Sunday\nPossible values are: `DAY_OF_WEEK_UNSPECIFIED`, `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY`, `SATURDAY`, `SUNDAY`.",
      [],
      true,
      false,
    ),
  ];
}
