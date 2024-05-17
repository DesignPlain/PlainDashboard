import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Memcache_InstanceMaintenanceSchedule {
  /*
(Output)
Output only. The end time of any upcoming scheduled maintenance for this instance.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
resolution and up to nine fractional digits.
*/
  EndTime?: string;

  /*
(Output)
Output only. The deadline that the maintenance schedule start time
can not go beyond, including reschedule.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
resolution and up to nine fractional digits.
*/
  ScheduleDeadlineTime?: string;

  /*
Required. Start time of the window in UTC time.
Structure is documented below.
*/
  StartTime?: string;
}

export function Memcache_InstanceMaintenanceSchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "EndTime",
      '(Output)\nOutput only. The end time of any upcoming scheduled maintenance for this instance.\nA timestamp in RFC3339 UTC "Zulu" format, with nanosecond\nresolution and up to nine fractional digits.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ScheduleDeadlineTime",
      '(Output)\nOutput only. The deadline that the maintenance schedule start time\ncan not go beyond, including reschedule.\nA timestamp in RFC3339 UTC "Zulu" format, with nanosecond\nresolution and up to nine fractional digits.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "StartTime",
      "Required. Start time of the window in UTC time.\nStructure is documented below.",
      [],
      false,
      false,
    ),
  ];
}
