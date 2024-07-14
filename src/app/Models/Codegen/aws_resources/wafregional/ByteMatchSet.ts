import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafregional_ByteMatchSetByteMatchTuple,
  wafregional_ByteMatchSetByteMatchTuple_GetTypes,
} from "../types/wafregional_ByteMatchSetByteMatchTuple";

export interface ByteMatchSetArgs {
  // Settings for the ByteMatchSet, such as the bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to search for in web requests. ByteMatchTuple documented below.
  byteMatchTuples?: Array<wafregional_ByteMatchSetByteMatchTuple>;

  // The name or description of the ByteMatchSet.
  name?: string;
}
export class ByteMatchSet extends Resource {
  // Settings for the ByteMatchSet, such as the bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to search for in web requests. ByteMatchTuple documented below.
  public byteMatchTuples?: Array<wafregional_ByteMatchSetByteMatchTuple>;

  // The name or description of the ByteMatchSet.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "byteMatchTuples",
        "Settings for the ByteMatchSet, such as the bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to search for in web requests. ByteMatchTuple documented below.",
        wafregional_ByteMatchSetByteMatchTuple_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name or description of the ByteMatchSet.",
        [],
        false,
        true,
      ),
    ];
  }
}
