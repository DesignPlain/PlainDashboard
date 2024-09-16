import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll,
  wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll_GetTypes,
} from './wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll';

export interface wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern {
  // An empty configuration block that is used for inspecting all headers.
  all?: wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll;

  //
  includedPaths?: Array<string>;
}

export function wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'all',
      'An empty configuration block that is used for inspecting all headers.',
      () =>
        wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'includedPaths',
      '',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
