import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchBody {
  //
  oversizeHandling?: string;
}

export function wafv2_RuleGroupRuleStatementSqliMatchStatementFieldToMatchBody_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'oversizeHandling',
      '',
      () => [],
      false,
      false,
    ),
  ];
}
