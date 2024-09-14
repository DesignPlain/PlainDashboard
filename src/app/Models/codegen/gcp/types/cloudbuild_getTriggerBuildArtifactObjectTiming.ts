import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudbuild_getTriggerBuildArtifactObjectTiming {
  /*
End of time span.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to
nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  endTime?: string;

  /*
Start of time span.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to
nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  startTime?: string;
}

export function cloudbuild_getTriggerBuildArtifactObjectTiming_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "endTime",
      'End of time span.\n\nA timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to\nnine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "startTime",
      'Start of time span.\n\nA timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to\nnine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".',
      () => [],
      true,
      false,
    ),
  ];
}
