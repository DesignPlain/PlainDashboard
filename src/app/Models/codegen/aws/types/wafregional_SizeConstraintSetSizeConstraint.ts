import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  wafregional_SizeConstraintSetSizeConstraintFieldToMatch,
  wafregional_SizeConstraintSetSizeConstraintFieldToMatch_GetTypes,
} from "./wafregional_SizeConstraintSetSizeConstraintFieldToMatch";

export interface wafregional_SizeConstraintSetSizeConstraint {
  /*
Text transformations used to eliminate unusual formatting that attackers use in web requests in an effort to bypass AWS WAF.
If you specify a transformation, AWS WAF performs the transformation on `field_to_match` before inspecting a request for a match.
e.g., `CMD_LINE`, `HTML_ENTITY_DECODE` or `NONE`.
See [docs](http://docs.aws.amazon.com/waf/latest/APIReference/API_SizeConstraint.html#WAF-Type-SizeConstraint-TextTransformation)
for all supported values.
--Note:-- if you choose `BODY` as `type`, you must choose `NONE` because CloudFront forwards only the first 8192 bytes for inspection.
*/
  textTransformation?: string;

  /*
The type of comparison you want to perform.
e.g., `EQ`, `NE`, `LT`, `GT`.
See [docs](https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_SizeConstraint.html) for all supported values.
*/
  comparisonOperator?: string;

  // Specifies where in a web request to look for the size constraint.
  fieldToMatch?: wafregional_SizeConstraintSetSizeConstraintFieldToMatch;

  /*
The size in bytes that you want to compare against the size of the specified `field_to_match`.
Valid values are between 0 - 21474836480 bytes (0 - 20 GB).
*/
  size?: number;
}

export function wafregional_SizeConstraintSetSizeConstraint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "textTransformation",
      "Text transformations used to eliminate unusual formatting that attackers use in web requests in an effort to bypass AWS WAF.\nIf you specify a transformation, AWS WAF performs the transformation on `field_to_match` before inspecting a request for a match.\ne.g., `CMD_LINE`, `HTML_ENTITY_DECODE` or `NONE`.\nSee [docs](http://docs.aws.amazon.com/waf/latest/APIReference/API_SizeConstraint.html#WAF-Type-SizeConstraint-TextTransformation)\nfor all supported values.\n**Note:** if you choose `BODY` as `type`, you must choose `NONE` because CloudFront forwards only the first 8192 bytes for inspection.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "comparisonOperator",
      "The type of comparison you want to perform.\ne.g., `EQ`, `NE`, `LT`, `GT`.\nSee [docs](https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_SizeConstraint.html) for all supported values.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "fieldToMatch",
      "Specifies where in a web request to look for the size constraint.",
      () => wafregional_SizeConstraintSetSizeConstraintFieldToMatch_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "size",
      "The size in bytes that you want to compare against the size of the specified `field_to_match`.\nValid values are between 0 - 21474836480 bytes (0 - 20 GB).",
      () => [],
      true,
      false,
    ),
  ];
}
