import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface RegexPatternSetArgs {
  // The name or description of the Regex Pattern Set.
  name?: string;

  // A list of regular expression (regex) patterns that you want AWS WAF to search for, such as `B[a@]dB[o0]t`.
  regexPatternStrings?: Array<string>;
}
export class RegexPatternSet extends Resource {
  // Amazon Resource Name (ARN)
  public arn?: string;

  // The name or description of the Regex Pattern Set.
  public name?: string;

  // A list of regular expression (regex) patterns that you want AWS WAF to search for, such as `B[a@]dB[o0]t`.
  public regexPatternStrings?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name or description of the Regex Pattern Set.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "regexPatternStrings",
        "A list of regular expression (regex) patterns that you want AWS WAF to search for, such as `B[a@]dB[o0]t`.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
