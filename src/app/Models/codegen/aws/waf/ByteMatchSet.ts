import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  waf_ByteMatchSetByteMatchTuple,
  waf_ByteMatchSetByteMatchTuple_GetTypes,
} from "../types/waf_ByteMatchSetByteMatchTuple";

export interface ByteMatchSetArgs {
  /*
Specifies the bytes (typically a string that corresponds
with ASCII characters) that you want to search for in web requests,
the location in requests that you want to search, and other settings.
*/
  byteMatchTuples?: Array<waf_ByteMatchSetByteMatchTuple>;

  // The name or description of the Byte Match Set.
  name?: string;
}
export class ByteMatchSet extends DS_Resource {
  /*
Specifies the bytes (typically a string that corresponds
with ASCII characters) that you want to search for in web requests,
the location in requests that you want to search, and other settings.
*/
  public byteMatchTuples?: Array<waf_ByteMatchSetByteMatchTuple>;

  // The name or description of the Byte Match Set.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "byteMatchTuples",
        "Specifies the bytes (typically a string that corresponds\nwith ASCII characters) that you want to search for in web requests,\nthe location in requests that you want to search, and other settings.",
        () => waf_ByteMatchSetByteMatchTuple_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name or description of the Byte Match Set.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
