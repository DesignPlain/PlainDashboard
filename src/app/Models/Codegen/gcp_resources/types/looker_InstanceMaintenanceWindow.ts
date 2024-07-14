import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  looker_InstanceMaintenanceWindowStartTime,
  looker_InstanceMaintenanceWindowStartTime_GetTypes,
} from "./looker_InstanceMaintenanceWindowStartTime";

export interface looker_InstanceMaintenanceWindow {
  /*
Required. Day of the week for this MaintenanceWindow (in UTC).
- MONDAY: Monday
- TUESDAY: Tuesday
- WEDNESDAY: Wednesday
- THURSDAY: Thursday
- FRIDAY: Friday
- SATURDAY: Saturday
- SUNDAY: Sunday
Possible values are: `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY`, `SATURDAY`, `SUNDAY`.
*/
  dayOfWeek?: string;

  /*
Required. Start time of the window in UTC time.
Structure is documented below.
*/
  startTime?: looker_InstanceMaintenanceWindowStartTime;
}

export function looker_InstanceMaintenanceWindow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "startTime",
      "Required. Start time of the window in UTC time.\nStructure is documented below.",
      looker_InstanceMaintenanceWindowStartTime_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dayOfWeek",
      "Required. Day of the week for this MaintenanceWindow (in UTC).\n- MONDAY: Monday\n- TUESDAY: Tuesday\n- WEDNESDAY: Wednesday\n- THURSDAY: Thursday\n- FRIDAY: Friday\n- SATURDAY: Saturday\n- SUNDAY: Sunday\nPossible values are: `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY`, `SATURDAY`, `SUNDAY`.",
      [],
      true,
      false,
    ),
  ];
}
