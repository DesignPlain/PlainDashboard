import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  waf_XssMatchSetXssMatchTupleFieldToMatch,
  waf_XssMatchSetXssMatchTupleFieldToMatch_GetTypes,
} from "./waf_XssMatchSetXssMatchTupleFieldToMatch";

export interface waf_XssMatchSetXssMatchTuple {
  // Specifies where in a web request to look for cross-site scripting attacks.
  fieldToMatch?: waf_XssMatchSetXssMatchTupleFieldToMatch;

  /*
Text transformations used to eliminate unusual formatting that attackers use in web requests in an effort to bypass AWS WAF.
If you specify a transformation, AWS WAF performs the transformation on `target_string` before inspecting a request for a match.
e.g., `CMD_LINE`, `HTML_ENTITY_DECODE` or `NONE`.
See [docs](http://docs.aws.amazon.com/waf/latest/APIReference/API_XssMatchTuple.html#WAF-Type-XssMatchTuple-TextTransformation)
for all supported values.
*/
  textTransformation?: string;
}

export function waf_XssMatchSetXssMatchTuple_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "fieldToMatch",
      "Specifies where in a web request to look for cross-site scripting attacks.",
      waf_XssMatchSetXssMatchTupleFieldToMatch_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "textTransformation",
      "Text transformations used to eliminate unusual formatting that attackers use in web requests in an effort to bypass AWS WAF.\nIf you specify a transformation, AWS WAF performs the transformation on `target_string` before inspecting a request for a match.\ne.g., `CMD_LINE`, `HTML_ENTITY_DECODE` or `NONE`.\nSee [docs](http://docs.aws.amazon.com/waf/latest/APIReference/API_XssMatchTuple.html#WAF-Type-XssMatchTuple-TextTransformation)\nfor all supported values.",
      [],
      true,
      false,
    ),
  ];
}
