import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  wafregional_ByteMatchSetByteMatchTuple,
  wafregional_ByteMatchSetByteMatchTuple_GetTypes,
} from '../types/wafregional_ByteMatchSetByteMatchTuple';

export interface ByteMatchSetArgs {
  // The name or description of the ByteMatchSet.
  name?: string;

  // Settings for the ByteMatchSet, such as the bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to search for in web requests. ByteMatchTuple documented below.
  byteMatchTuples?: Array<wafregional_ByteMatchSetByteMatchTuple>;
}
export class ByteMatchSet extends DS_Resource {
  // The name or description of the ByteMatchSet.
  public name?: string;

  // Settings for the ByteMatchSet, such as the bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to search for in web requests. ByteMatchTuple documented below.
  public byteMatchTuples?: Array<wafregional_ByteMatchSetByteMatchTuple>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name or description of the ByteMatchSet.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'byteMatchTuples',
        'Settings for the ByteMatchSet, such as the bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to search for in web requests. ByteMatchTuple documented below.',
        () => wafregional_ByteMatchSetByteMatchTuple_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
