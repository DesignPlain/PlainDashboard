import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudrunv2_getJobLatestCreatedExecution {
  /*
Completion timestamp of the execution.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  completionTime?: string;

  /*
Creation timestamp of the execution.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  createTime?: string;

  // The name of the Cloud Run v2 Job.
  name?: string;
}

export function cloudrunv2_getJobLatestCreatedExecution_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the Cloud Run v2 Job.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "completionTime",
      'Completion timestamp of the execution.\n\nA timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "createTime",
      'Creation timestamp of the execution.\n\nA timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".',
      [],
      true,
      false,
    ),
  ];
}
