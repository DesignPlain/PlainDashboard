import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  wafregional_RegexMatchSetRegexMatchTuple,
  wafregional_RegexMatchSetRegexMatchTuple_GetTypes,
} from '../types/wafregional_RegexMatchSetRegexMatchTuple';

export interface RegexMatchSetArgs {
  // The name or description of the Regex Match Set.
  name?: string;

  // The regular expression pattern that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings. See below.
  regexMatchTuples?: Array<wafregional_RegexMatchSetRegexMatchTuple>;
}
export class RegexMatchSet extends DS_Resource {
  // The name or description of the Regex Match Set.
  public name?: string;

  // The regular expression pattern that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings. See below.
  public regexMatchTuples?: Array<wafregional_RegexMatchSetRegexMatchTuple>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name or description of the Regex Match Set.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'regexMatchTuples',
        'The regular expression pattern that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings. See below.',
        () => wafregional_RegexMatchSetRegexMatchTuple_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
