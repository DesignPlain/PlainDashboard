import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  wafv2_RuleGroupRuleActionCountCustomRequestHandlingInsertHeader,
  wafv2_RuleGroupRuleActionCountCustomRequestHandlingInsertHeader_GetTypes,
} from './wafv2_RuleGroupRuleActionCountCustomRequestHandlingInsertHeader';

export interface wafv2_RuleGroupRuleActionCountCustomRequestHandling {
  // The `insert_header` blocks used to define HTTP headers added to the request. See Custom HTTP Header below for details.
  insertHeaders?: Array<wafv2_RuleGroupRuleActionCountCustomRequestHandlingInsertHeader>;
}

export function wafv2_RuleGroupRuleActionCountCustomRequestHandling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'insertHeaders',
      'The `insert_header` blocks used to define HTTP headers added to the request. See Custom HTTP Header below for details.',
      () =>
        wafv2_RuleGroupRuleActionCountCustomRequestHandlingInsertHeader_GetTypes(),
      true,
      false,
    ),
  ];
}
