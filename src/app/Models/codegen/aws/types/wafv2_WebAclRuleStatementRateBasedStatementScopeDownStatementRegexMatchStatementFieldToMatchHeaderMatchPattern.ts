import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderMatchPatternAll,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderMatchPatternAll_GetTypes,
} from './wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderMatchPatternAll';

export interface wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderMatchPattern {
  // An array of strings that will be used for inspecting headers that do not have a key that matches one of the provided values.
  excludedHeaders?: Array<string>;

  // An array of strings that will be used for inspecting headers that have a key that matches one of the provided values.
  includedHeaders?: Array<string>;

  // An empty configuration block that is used for inspecting all headers.
  all?: wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderMatchPatternAll;
}

export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderMatchPattern_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'includedHeaders',
      'An array of strings that will be used for inspecting headers that have a key that matches one of the provided values.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'all',
      'An empty configuration block that is used for inspecting all headers.',
      () =>
        wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementRegexMatchStatementFieldToMatchHeaderMatchPatternAll_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'excludedHeaders',
      'An array of strings that will be used for inspecting headers that do not have a key that matches one of the provided values.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
