import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  redis_getInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime,
  redis_getInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime_GetTypes,
} from "./redis_getInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime";

export interface redis_getInstanceMaintenancePolicyWeeklyMaintenanceWindow {
  /*
Required. The day of week that maintenance updates occur.

- DAY_OF_WEEK_UNSPECIFIED: The day of the week is unspecified.
- MONDAY: Monday
- TUESDAY: Tuesday
- WEDNESDAY: Wednesday
- THURSDAY: Thursday
- FRIDAY: Friday
- SATURDAY: Saturday
- SUNDAY: Sunday Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
*/
  day?: string;

  /*
Output only. Duration of the maintenance window.
The current window is fixed at 1 hour.
A duration in seconds with up to nine fractional digits,
terminated by 's'. Example: "3.5s".
*/
  duration?: string;

  // Required. Start time of the window in UTC time.
  startTimes?: Array<redis_getInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime>;
}

export function redis_getInstanceMaintenancePolicyWeeklyMaintenanceWindow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "day",
      'Required. The day of week that maintenance updates occur.\n\n- DAY_OF_WEEK_UNSPECIFIED: The day of the week is unspecified.\n- MONDAY: Monday\n- TUESDAY: Tuesday\n- WEDNESDAY: Wednesday\n- THURSDAY: Thursday\n- FRIDAY: Friday\n- SATURDAY: Saturday\n- SUNDAY: Sunday Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "duration",
      "Output only. Duration of the maintenance window.\nThe current window is fixed at 1 hour.\nA duration in seconds with up to nine fractional digits,\nterminated by 's'. Example: \"3.5s\".",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "startTimes",
      "Required. Start time of the window in UTC time.",
      () =>
        redis_getInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime_GetTypes(),
      true,
      false,
    ),
  ];
}
