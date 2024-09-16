import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatch,
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatch_GetTypes,
} from './wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatch';
import {
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementTextTransformation,
  wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementTextTransformation_GetTypes,
} from './wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementTextTransformation';

export interface wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatement {
  // The part of a web request that you want AWS WAF to inspect. See Field to Match below for details.
  fieldToMatch?: wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatch;

  // The string representing the regular expression. --Note:-- The fixed quota for the maximum number of characters in each regex pattern is 200, which can't be changed. See [AWS WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) for details.
  regexString?: string;

  /*
Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
At least one required.
See Text Transformation below for details.
*/
  textTransformations?: Array<wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementTextTransformation>;
}

export function wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'regexString',
      "The string representing the regular expression. **Note:** The fixed quota for the maximum number of characters in each regex pattern is 200, which can't be changed. See [AWS WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) for details.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'textTransformations',
      'Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.\nAt least one required.\nSee Text Transformation below for details.',
      () =>
        wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementTextTransformation_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'fieldToMatch',
      'The part of a web request that you want AWS WAF to inspect. See Field to Match below for details.',
      () =>
        wafv2_RuleGroupRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatch_GetTypes(),
      false,
      false,
    ),
  ];
}
