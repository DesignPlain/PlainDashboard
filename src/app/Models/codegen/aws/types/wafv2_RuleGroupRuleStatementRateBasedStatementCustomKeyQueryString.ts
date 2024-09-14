import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyQueryStringTextTransformation,
  wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyQueryStringTextTransformation_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyQueryStringTextTransformation";

export interface wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyQueryString {
  // Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. They are used in rate-based rule statements, to transform request components before using them as custom aggregation keys. Atleast one transformation is required. See Text Transformation above for details.
  textTransformations?: Array<wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyQueryStringTextTransformation>;
}

export function wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyQueryString_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "textTransformations",
      "Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. They are used in rate-based rule statements, to transform request components before using them as custom aggregation keys. Atleast one transformation is required. See Text Transformation above for details.",
      () =>
        wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyQueryStringTextTransformation_GetTypes(),
      true,
      false,
    ),
  ];
}
