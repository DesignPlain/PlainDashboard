import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface healthcare_Hl7StoreParserConfig {
  // Determines whether messages with no header are allowed.
  allowNullHeader?: boolean;

  /*
JSON encoded string for schemas used to parse messages in this
store if schematized parsing is desired.
*/
  schema?: string;

  /*
Byte(s) to be used as the segment terminator. If this is unset, '\r' will be used as segment terminator.
A base64-encoded string.
*/
  segmentTerminator?: string;

  /*
The version of the unschematized parser to be used when a custom `schema` is not set.
Default value is `V1`.
Possible values are: `V1`, `V2`, `V3`.
*/
  version?: string;
}

export function healthcare_Hl7StoreParserConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "version",
      "The version of the unschematized parser to be used when a custom `schema` is not set.\nDefault value is `V1`.\nPossible values are: `V1`, `V2`, `V3`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "allowNullHeader",
      "Determines whether messages with no header are allowed.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "schema",
      "JSON encoded string for schemas used to parse messages in this\nstore if schematized parsing is desired.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "segmentTerminator",
      "Byte(s) to be used as the segment terminator. If this is unset, '\\r' will be used as segment terminator.\nA base64-encoded string.",
      [],
      false,
      false,
    ),
  ];
}
