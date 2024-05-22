import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  waf_RegexMatchSetRegexMatchTupleFieldToMatch,
  waf_RegexMatchSetRegexMatchTupleFieldToMatch_GetTypes,
} from "./waf_RegexMatchSetRegexMatchTupleFieldToMatch";

export interface waf_RegexMatchSetRegexMatchTuple {
  // The part of a web request that you want to search, such as a specified header or a query string.
  fieldToMatch?: waf_RegexMatchSetRegexMatchTupleFieldToMatch;

  // The ID of a Regex Pattern Set.
  regexPatternSetId?: string;

  /*
Text transformations used to eliminate unusual formatting that attackers use in web requests in an effort to bypass AWS WAF.
e.g., `CMD_LINE`, `HTML_ENTITY_DECODE` or `NONE`.
See [docs](http://docs.aws.amazon.com/waf/latest/APIReference/API_ByteMatchTuple.html#WAF-Type-ByteMatchTuple-TextTransformation)
for all supported values.
*/
  textTransformation?: string;
}

export function waf_RegexMatchSetRegexMatchTuple_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "fieldToMatch",
      "The part of a web request that you want to search, such as a specified header or a query string.",
      waf_RegexMatchSetRegexMatchTupleFieldToMatch_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "regexPatternSetId",
      "The ID of a Regex Pattern Set.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "textTransformation",
      "Text transformations used to eliminate unusual formatting that attackers use in web requests in an effort to bypass AWS WAF.\ne.g., `CMD_LINE`, `HTML_ENTITY_DECODE` or `NONE`.\nSee [docs](http://docs.aws.amazon.com/waf/latest/APIReference/API_ByteMatchTuple.html#WAF-Type-ByteMatchTuple-TextTransformation)\nfor all supported values.",
      [],
      true,
      false,
    ),
  ];
}
