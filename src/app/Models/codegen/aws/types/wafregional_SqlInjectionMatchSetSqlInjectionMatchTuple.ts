import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  wafregional_SqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch,
  wafregional_SqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch_GetTypes,
} from "./wafregional_SqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch";

export interface wafregional_SqlInjectionMatchSetSqlInjectionMatchTuple {
  // Specifies where in a web request to look for snippets of malicious SQL code.
  fieldToMatch?: wafregional_SqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch;

  /*
Text transformations used to eliminate unusual formatting that attackers use in web requests in an effort to bypass AWS WAF.
If you specify a transformation, AWS WAF performs the transformation on `field_to_match` before inspecting a request for a match.
e.g., `CMD_LINE`, `HTML_ENTITY_DECODE` or `NONE`.
See [docs](https://docs.aws.amazon.com/waf/latest/APIReference/API_regional_SqlInjectionMatchTuple.html#WAF-Type-regional_SqlInjectionMatchTuple-TextTransformation)
for all supported values.
*/
  textTransformation?: string;
}

export function wafregional_SqlInjectionMatchSetSqlInjectionMatchTuple_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "fieldToMatch",
      "Specifies where in a web request to look for snippets of malicious SQL code.",
      () =>
        wafregional_SqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "textTransformation",
      "Text transformations used to eliminate unusual formatting that attackers use in web requests in an effort to bypass AWS WAF.\nIf you specify a transformation, AWS WAF performs the transformation on `field_to_match` before inspecting a request for a match.\ne.g., `CMD_LINE`, `HTML_ENTITY_DECODE` or `NONE`.\nSee [docs](https://docs.aws.amazon.com/waf/latest/APIReference/API_regional_SqlInjectionMatchTuple.html#WAF-Type-regional_SqlInjectionMatchTuple-TextTransformation)\nfor all supported values.",
      () => [],
      true,
      false,
    ),
  ];
}
