import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  waf_ByteMatchSetByteMatchTupleFieldToMatch,
  waf_ByteMatchSetByteMatchTupleFieldToMatch_GetTypes,
} from "./waf_ByteMatchSetByteMatchTupleFieldToMatch";

export interface waf_ByteMatchSetByteMatchTuple {
  /*
Text transformations used to eliminate unusual formatting that attackers use in web requests in an effort to bypass AWS WAF.
If you specify a transformation, AWS WAF performs the transformation on `target_string` before inspecting a request for a match.
e.g., `CMD_LINE`, `HTML_ENTITY_DECODE` or `NONE`.
See [docs](http://docs.aws.amazon.com/waf/latest/APIReference/API_ByteMatchTuple.html#WAF-Type-ByteMatchTuple-TextTransformation)
for all supported values.
*/
  textTransformation?: string;

  // The part of a web request that you want to search, such as a specified header or a query string.
  fieldToMatch?: waf_ByteMatchSetByteMatchTupleFieldToMatch;

  /*
Within the portion of a web request that you want to search
(for example, in the query string, if any), specify where you want to search.
e.g., `CONTAINS`, `CONTAINS_WORD` or `EXACTLY`.
See [docs](http://docs.aws.amazon.com/waf/latest/APIReference/API_ByteMatchTuple.html#WAF-Type-ByteMatchTuple-PositionalConstraint)
for all supported values.
*/
  positionalConstraint?: string;

  /*
The value that you want to search for within the field specified by `field_to_match`, e.g., `badrefer1`.
See [docs](https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ByteMatchTuple.html)
for all supported values.
*/
  targetString?: string;
}

export function waf_ByteMatchSetByteMatchTuple_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "fieldToMatch",
      "The part of a web request that you want to search, such as a specified header or a query string.",
      waf_ByteMatchSetByteMatchTupleFieldToMatch_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "positionalConstraint",
      "Within the portion of a web request that you want to search\n(for example, in the query string, if any), specify where you want to search.\ne.g., `CONTAINS`, `CONTAINS_WORD` or `EXACTLY`.\nSee [docs](http://docs.aws.amazon.com/waf/latest/APIReference/API_ByteMatchTuple.html#WAF-Type-ByteMatchTuple-PositionalConstraint)\nfor all supported values.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "targetString",
      "The value that you want to search for within the field specified by `field_to_match`, e.g., `badrefer1`.\nSee [docs](https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ByteMatchTuple.html)\nfor all supported values.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "textTransformation",
      "Text transformations used to eliminate unusual formatting that attackers use in web requests in an effort to bypass AWS WAF.\nIf you specify a transformation, AWS WAF performs the transformation on `target_string` before inspecting a request for a match.\ne.g., `CMD_LINE`, `HTML_ENTITY_DECODE` or `NONE`.\nSee [docs](http://docs.aws.amazon.com/waf/latest/APIReference/API_ByteMatchTuple.html#WAF-Type-ByteMatchTuple-TextTransformation)\nfor all supported values.",
      [],
      true,
      false,
    ),
  ];
}
