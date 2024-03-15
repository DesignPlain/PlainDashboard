export interface Hl7StoreParserConfig {
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
