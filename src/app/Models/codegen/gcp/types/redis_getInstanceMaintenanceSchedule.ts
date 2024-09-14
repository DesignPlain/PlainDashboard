import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface redis_getInstanceMaintenanceSchedule {
  /*
Output only. The deadline that the maintenance schedule start time
can not go beyond, including reschedule.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
resolution and up to nine fractional digits.
*/
  scheduleDeadlineTime?: string;

  /*
Output only. The start time of any upcoming scheduled maintenance for this instance.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
resolution and up to nine fractional digits.
*/
  startTime?: string;

  /*
Output only. The end time of any upcoming scheduled maintenance for this instance.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
resolution and up to nine fractional digits.
*/
  endTime?: string;
}

export function redis_getInstanceMaintenanceSchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "scheduleDeadlineTime",
      'Output only. The deadline that the maintenance schedule start time\ncan not go beyond, including reschedule.\nA timestamp in RFC3339 UTC "Zulu" format, with nanosecond\nresolution and up to nine fractional digits.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "startTime",
      'Output only. The start time of any upcoming scheduled maintenance for this instance.\nA timestamp in RFC3339 UTC "Zulu" format, with nanosecond\nresolution and up to nine fractional digits.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "endTime",
      'Output only. The end time of any upcoming scheduled maintenance for this instance.\nA timestamp in RFC3339 UTC "Zulu" format, with nanosecond\nresolution and up to nine fractional digits.',
      () => [],
      true,
      false,
    ),
  ];
}
