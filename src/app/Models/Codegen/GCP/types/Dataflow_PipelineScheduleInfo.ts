import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataflow_PipelineScheduleInfo {
  /*
(Output)
When the next Scheduler job is going to run.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  NextJobTime?: string;

  // Unix-cron format of the schedule. This information is retrieved from the linked Cloud Scheduler.
  Schedule?: string;

  // Timezone ID. This matches the timezone IDs used by the Cloud Scheduler API. If empty, UTC time is assumed.
  TimeZone?: string;
}

export function Dataflow_PipelineScheduleInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Schedule",
      "Unix-cron format of the schedule. This information is retrieved from the linked Cloud Scheduler.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "TimeZone",
      "Timezone ID. This matches the timezone IDs used by the Cloud Scheduler API. If empty, UTC time is assumed.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "NextJobTime",
      '(Output)\nWhen the next Scheduler job is going to run.\nA timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".',
      [],
      false,
      false,
    ),
  ];
}
