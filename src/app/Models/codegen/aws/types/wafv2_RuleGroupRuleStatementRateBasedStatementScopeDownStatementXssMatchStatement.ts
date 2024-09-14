import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatch,
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatch_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatch";
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformation,
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformation_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformation";

export interface wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement {
  // The part of a web request that you want AWS WAF to inspect. See Field to Match below for details.
  fieldToMatch?: wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatch;

  /*
Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
At least one required.
See Text Transformation below for details.
*/
  textTransformations?: Array<wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformation>;
}

export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "fieldToMatch",
      "The part of a web request that you want AWS WAF to inspect. See Field to Match below for details.",
      () =>
        wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatch_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "textTransformations",
      "Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.\nAt least one required.\nSee Text Transformation below for details.",
      () =>
        wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformation_GetTypes(),
      true,
      false,
    ),
  ];
}
