import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll,
  wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll_GetTypes,
} from './wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll';

export interface wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern {
  // An empty configuration block that is used for inspecting all headers.
  all?: wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll;

  //
  excludedCookies?: Array<string>;

  //
  includedCookies?: Array<string>;
}

export function wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'all',
      'An empty configuration block that is used for inspecting all headers.',
      () =>
        wafv2_RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'excludedCookies',
      '',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'includedCookies',
      '',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
