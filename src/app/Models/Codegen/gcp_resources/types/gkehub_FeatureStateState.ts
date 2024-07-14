import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface gkehub_FeatureStateState {
  /*
(Output)
The high-level, machine-readable status of this Feature.
*/
  code?: string;

  /*
(Output)
A human-readable description of the current status.
*/
  description?: string;

  /*
(Output)
The time this status and any related Feature-specific details were updated. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z"
*/
  updateTime?: string;
}

export function gkehub_FeatureStateState_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "code",
      "(Output)\nThe high-level, machine-readable status of this Feature.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "(Output)\nA human-readable description of the current status.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "updateTime",
      '(Output)\nThe time this status and any related Feature-specific details were updated. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z"',
      [],
      false,
      false,
    ),
  ];
}
