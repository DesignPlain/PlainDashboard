import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Redis_InstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime,
  Redis_InstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime_GetTypes,
} from "./Redis_InstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime";

export interface Redis_InstanceMaintenancePolicyWeeklyMaintenanceWindow {
  /*
Required. Start time of the window in UTC time.
Structure is documented below.
*/
  StartTime?: Redis_InstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime;

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
(Output)
Output only. Duration of the maintenance window.
The current window is fixed at 1 hour.
A duration in seconds with up to nine fractional digits,
terminated by 's'. Example: "3.5s".
*/
  Duration?: string;
}

export function Redis_InstanceMaintenancePolicyWeeklyMaintenanceWindow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "StartTime",
      "Required. Start time of the window in UTC time.\nStructure is documented below.",
      Redis_InstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime_GetTypes(),
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
    new DynamicUIProps(
      InputType.String,
      "Duration",
      "(Output)\nOutput only. Duration of the maintenance window.\nThe current window is fixed at 1 hour.\nA duration in seconds with up to nine fractional digits,\nterminated by 's'. Example: \"3.5s\".",
      [],
      false,
      false,
    ),
  ];
}
