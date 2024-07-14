import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  waf_RegexMatchSetRegexMatchTuple,
  waf_RegexMatchSetRegexMatchTuple_GetTypes,
} from "../types/waf_RegexMatchSetRegexMatchTuple";

export interface RegexMatchSetArgs {
  // The name or description of the Regex Match Set.
  name?: string;

  // The regular expression pattern that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings. See below.
  regexMatchTuples?: Array<waf_RegexMatchSetRegexMatchTuple>;
}
export class RegexMatchSet extends Resource {
  // Amazon Resource Name (ARN)
  public arn?: string;

  // The name or description of the Regex Match Set.
  public name?: string;

  // The regular expression pattern that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings. See below.
  public regexMatchTuples?: Array<waf_RegexMatchSetRegexMatchTuple>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name or description of the Regex Match Set.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "regexMatchTuples",
        "The regular expression pattern that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings. See below.",
        waf_RegexMatchSetRegexMatchTuple_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
