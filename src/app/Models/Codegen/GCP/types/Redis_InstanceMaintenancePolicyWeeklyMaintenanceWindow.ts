import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  redis_InstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime,
  redis_InstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime_GetTypes,
} from "./redis_InstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime";

export interface redis_InstanceMaintenancePolicyWeeklyMaintenanceWindow {
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
(Output)
Output only. Duration of the maintenance window.
The current window is fixed at 1 hour.
A duration in seconds with up to nine fractional digits,
terminated by 's'. Example: "3.5s".
*/
  duration?: string;

  /*
Required. Start time of the window in UTC time.
Structure is documented below.
*/
  startTime?: redis_InstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime;
}

export function redis_InstanceMaintenancePolicyWeeklyMaintenanceWindow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "day",
      "Required. The day of week that maintenance updates occur.\n- DAY_OF_WEEK_UNSPECIFIED: The day of the week is unspecified.\n- MONDAY: Monday\n- TUESDAY: Tuesday\n- WEDNESDAY: Wednesday\n- THURSDAY: Thursday\n- FRIDAY: Friday\n- SATURDAY: Saturday\n- SUNDAY: Sunday\nPossible values are: `DAY_OF_WEEK_UNSPECIFIED`, `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY`, `SATURDAY`, `SUNDAY`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "duration",
      "(Output)\nOutput only. Duration of the maintenance window.\nThe current window is fixed at 1 hour.\nA duration in seconds with up to nine fractional digits,\nterminated by 's'. Example: \"3.5s\".",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "startTime",
      "Required. Start time of the window in UTC time.\nStructure is documented below.",
      redis_InstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime_GetTypes(),
      true,
      false,
    ),
  ];
}
