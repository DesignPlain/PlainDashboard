import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  waf_SqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch,
  waf_SqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch_GetTypes,
} from "./waf_SqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch";

export interface waf_SqlInjectionMatchSetSqlInjectionMatchTuple {
  // Specifies where in a web request to look for snippets of malicious SQL code.
  fieldToMatch?: waf_SqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch;

  /*
Text transformations used to eliminate unusual formatting that attackers use in web requests in an effort to bypass AWS WAF.
If you specify a transformation, AWS WAF performs the transformation on `field_to_match` before inspecting a request for a match.
e.g., `CMD_LINE`, `HTML_ENTITY_DECODE` or `NONE`.
See [docs](http://docs.aws.amazon.com/waf/latest/APIReference/API_SqlInjectionMatchTuple.html#WAF-Type-SqlInjectionMatchTuple-TextTransformation)
for all supported values.
*/
  textTransformation?: string;
}

export function waf_SqlInjectionMatchSetSqlInjectionMatchTuple_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "fieldToMatch",
      "Specifies where in a web request to look for snippets of malicious SQL code.",
      waf_SqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "textTransformation",
      "Text transformations used to eliminate unusual formatting that attackers use in web requests in an effort to bypass AWS WAF.\nIf you specify a transformation, AWS WAF performs the transformation on `field_to_match` before inspecting a request for a match.\ne.g., `CMD_LINE`, `HTML_ENTITY_DECODE` or `NONE`.\nSee [docs](http://docs.aws.amazon.com/waf/latest/APIReference/API_SqlInjectionMatchTuple.html#WAF-Type-SqlInjectionMatchTuple-TextTransformation)\nfor all supported values.",
      [],
      true,
      false,
    ),
  ];
}
