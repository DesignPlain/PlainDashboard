import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  wafv2_WebAclRuleStatement,
  wafv2_WebAclRuleStatement_GetTypes,
} from './wafv2_WebAclRuleStatement';

export interface wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementNotStatement {
  // The statements to combine.
  statements?: Array<wafv2_WebAclRuleStatement>;
}

export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementNotStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'statements',
      'The statements to combine.',
      () => wafv2_WebAclRuleStatement_GetTypes(),
      true,
      false,
    ),
  ];
}
