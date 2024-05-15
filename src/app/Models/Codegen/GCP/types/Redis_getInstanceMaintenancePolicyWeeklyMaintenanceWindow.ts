import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Redis_getInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime,
  Redis_getInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime_GetTypes,
} from "./Redis_getInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime";

export interface Redis_getInstanceMaintenancePolicyWeeklyMaintenanceWindow {
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
  Day?: string;

  /*
Output only. Duration of the maintenance window.
The current window is fixed at 1 hour.
A duration in seconds with up to nine fractional digits,
terminated by 's'. Example: "3.5s".
*/
  Duration?: string;

  // Required. Start time of the window in UTC time.
  StartTimes?: Array<Redis_getInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime>;
}

export function Redis_getInstanceMaintenancePolicyWeeklyMaintenanceWindow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Day",
      'Required. The day of week that maintenance updates occur.\n\n- DAY_OF_WEEK_UNSPECIFIED: The day of the week is unspecified.\n- MONDAY: Monday\n- TUESDAY: Tuesday\n- WEDNESDAY: Wednesday\n- THURSDAY: Thursday\n- FRIDAY: Friday\n- SATURDAY: Saturday\n- SUNDAY: Sunday Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Duration",
      "Output only. Duration of the maintenance window.\nThe current window is fixed at 1 hour.\nA duration in seconds with up to nine fractional digits,\nterminated by 's'. Example: \"3.5s\".",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "StartTimes",
      "Required. Start time of the window in UTC time.",
      Redis_getInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime_GetTypes(),
      true,
      false,
    ),
  ];
}
