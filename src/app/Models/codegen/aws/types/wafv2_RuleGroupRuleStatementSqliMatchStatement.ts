import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatch,
  wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatch_GetTypes,
} from "./wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatch";
import {
  wafv2_RuleGroupRuleStatementSqliMatchStatementTextTransformation,
  wafv2_RuleGroupRuleStatementSqliMatchStatementTextTransformation_GetTypes,
} from "./wafv2_RuleGroupRuleStatementSqliMatchStatementTextTransformation";

export interface wafv2_RuleGroupRuleStatementSqliMatchStatement {
  // The part of a web request that you want AWS WAF to inspect. See Field to Match below for details.
  fieldToMatch?: wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatch;

  // Sensitivity that you want AWS WAF to use to inspect for SQL injection attacks. Valid values include: `LOW`, `HIGH`.
  sensitivityLevel?: string;

  /*
Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
At least one required.
See Text Transformation below for details.
*/
  textTransformations?: Array<wafv2_RuleGroupRuleStatementSqliMatchStatementTextTransformation>;
}

export function wafv2_RuleGroupRuleStatementSqliMatchStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "sensitivityLevel",
      "Sensitivity that you want AWS WAF to use to inspect for SQL injection attacks. Valid values include: `LOW`, `HIGH`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "textTransformations",
      "Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.\nAt least one required.\nSee Text Transformation below for details.",
      () =>
        wafv2_RuleGroupRuleStatementSqliMatchStatementTextTransformation_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "fieldToMatch",
      "The part of a web request that you want AWS WAF to inspect. See Field to Match below for details.",
      () =>
        wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatch_GetTypes(),
      false,
      false,
    ),
  ];
}
