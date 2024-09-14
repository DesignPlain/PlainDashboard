import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface memcache_InstanceMaintenanceSchedule {
  /*
(Output)
Output only. The end time of any upcoming scheduled maintenance for this instance.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
resolution and up to nine fractional digits.
*/
  endTime?: string;

  /*
(Output)
Output only. The deadline that the maintenance schedule start time
can not go beyond, including reschedule.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
resolution and up to nine fractional digits.
*/
  scheduleDeadlineTime?: string;

  /*
Required. Start time of the window in UTC time.
Structure is documented below.
*/
  startTime?: string;
}

export function memcache_InstanceMaintenanceSchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "endTime",
      '(Output)\nOutput only. The end time of any upcoming scheduled maintenance for this instance.\nA timestamp in RFC3339 UTC "Zulu" format, with nanosecond\nresolution and up to nine fractional digits.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "scheduleDeadlineTime",
      '(Output)\nOutput only. The deadline that the maintenance schedule start time\ncan not go beyond, including reschedule.\nA timestamp in RFC3339 UTC "Zulu" format, with nanosecond\nresolution and up to nine fractional digits.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "startTime",
      "Required. Start time of the window in UTC time.\nStructure is documented below.",
      () => [],
      false,
      false,
    ),
  ];
}
