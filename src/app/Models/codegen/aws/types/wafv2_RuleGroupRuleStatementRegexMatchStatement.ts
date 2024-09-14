import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatch,
  wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatch_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatch";
import {
  wafv2_RuleGroupRuleStatementRegexMatchStatementTextTransformation,
  wafv2_RuleGroupRuleStatementRegexMatchStatementTextTransformation_GetTypes,
} from "./wafv2_RuleGroupRuleStatementRegexMatchStatementTextTransformation";

export interface wafv2_RuleGroupRuleStatementRegexMatchStatement {
  // The part of a web request that you want AWS WAF to inspect. See Field to Match below for details.
  fieldToMatch?: wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatch;

  // The string representing the regular expression. --Note:-- The fixed quota for the maximum number of characters in each regex pattern is 200, which can't be changed. See [AWS WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) for details.
  regexString?: string;

  /*
Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
At least one required.
See Text Transformation below for details.
*/
  textTransformations?: Array<wafv2_RuleGroupRuleStatementRegexMatchStatementTextTransformation>;
}

export function wafv2_RuleGroupRuleStatementRegexMatchStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "regexString",
      "The string representing the regular expression. **Note:** The fixed quota for the maximum number of characters in each regex pattern is 200, which can't be changed. See [AWS WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) for details.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "textTransformations",
      "Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.\nAt least one required.\nSee Text Transformation below for details.",
      () =>
        wafv2_RuleGroupRuleStatementRegexMatchStatementTextTransformation_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "fieldToMatch",
      "The part of a web request that you want AWS WAF to inspect. See Field to Match below for details.",
      () =>
        wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatch_GetTypes(),
      false,
      false,
    ),
  ];
}
