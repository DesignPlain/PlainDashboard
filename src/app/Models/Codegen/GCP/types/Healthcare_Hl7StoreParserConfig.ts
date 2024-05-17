import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Healthcare_Hl7StoreParserConfig {
  // Determines whether messages with no header are allowed.
  AllowNullHeader?: boolean;

  /*
JSON encoded string for schemas used to parse messages in this
store if schematized parsing is desired.
*/
  Schema?: string;

  /*
Byte(s) to be used as the segment terminator. If this is unset, '\r' will be used as segment terminator.
A base64-encoded string.
*/
  SegmentTerminator?: string;

  /*
The version of the unschematized parser to be used when a custom `schema` is not set.
Default value is `V1`.
Possible values are: `V1`, `V2`, `V3`.
*/
  Version?: string;
}

export function Healthcare_Hl7StoreParserConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "SegmentTerminator",
      "Byte(s) to be used as the segment terminator. If this is unset, '\\r' will be used as segment terminator.\nA base64-encoded string.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Version",
      "The version of the unschematized parser to be used when a custom `schema` is not set.\nDefault value is `V1`.\nPossible values are: `V1`, `V2`, `V3`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "AllowNullHeader",
      "Determines whether messages with no header are allowed.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Schema",
      "JSON encoded string for schemas used to parse messages in this\nstore if schematized parsing is desired.",
      [],
      false,
      false,
    ),
  ];
}
