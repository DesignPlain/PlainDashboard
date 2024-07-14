import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface dataflow_PipelineScheduleInfo {
  // Timezone ID. This matches the timezone IDs used by the Cloud Scheduler API. If empty, UTC time is assumed.
  timeZone?: string;

  /*
(Output)
When the next Scheduler job is going to run.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  nextJobTime?: string;

  // Unix-cron format of the schedule. This information is retrieved from the linked Cloud Scheduler.
  schedule?: string;
}

export function dataflow_PipelineScheduleInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "timeZone",
      "Timezone ID. This matches the timezone IDs used by the Cloud Scheduler API. If empty, UTC time is assumed.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "nextJobTime",
      '(Output)\nWhen the next Scheduler job is going to run.\nA timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "schedule",
      "Unix-cron format of the schedule. This information is retrieved from the linked Cloud Scheduler.",
      [],
      false,
      false,
    ),
  ];
}
