import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudbuild_TriggerBuildArtifactsObjectsTiming {
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

export function cloudbuild_TriggerBuildArtifactsObjectsTiming_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "endTime",
      'End of time span.\nA timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to\nnine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "startTime",
      'Start of time span.\nA timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to\nnine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".',
      [],
      false,
      false,
    ),
  ];
}
