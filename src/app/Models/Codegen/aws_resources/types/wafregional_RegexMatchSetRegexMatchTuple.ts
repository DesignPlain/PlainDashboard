import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafregional_RegexMatchSetRegexMatchTupleFieldToMatch,
  wafregional_RegexMatchSetRegexMatchTupleFieldToMatch_GetTypes,
} from "./wafregional_RegexMatchSetRegexMatchTupleFieldToMatch";

export interface wafregional_RegexMatchSetRegexMatchTuple {
  // The ID of a Regex Pattern Set.
  regexPatternSetId?: string;

  /*
Text transformations used to eliminate unusual formatting that attackers use in web requests in an effort to bypass AWS WAF.
e.g., `CMD_LINE`, `HTML_ENTITY_DECODE` or `NONE`.
See [docs](http://docs.aws.amazon.com/waf/latest/APIReference/API_ByteMatchTuple.html#WAF-Type-ByteMatchTuple-TextTransformation)
for all supported values.
*/
  textTransformation?: string;

  // The part of a web request that you want to search, such as a specified header or a query string.
  fieldToMatch?: wafregional_RegexMatchSetRegexMatchTupleFieldToMatch;
}

export function wafregional_RegexMatchSetRegexMatchTuple_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "textTransformation",
      "Text transformations used to eliminate unusual formatting that attackers use in web requests in an effort to bypass AWS WAF.\ne.g., `CMD_LINE`, `HTML_ENTITY_DECODE` or `NONE`.\nSee [docs](http://docs.aws.amazon.com/waf/latest/APIReference/API_ByteMatchTuple.html#WAF-Type-ByteMatchTuple-TextTransformation)\nfor all supported values.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "fieldToMatch",
      "The part of a web request that you want to search, such as a specified header or a query string.",
      wafregional_RegexMatchSetRegexMatchTupleFieldToMatch_GetTypes(),
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
  ];
}
