import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface wafv2_RuleGroupRuleStatementLabelMatchStatement {
  // The string to match against.
  key?: string;

  // Specify whether you want to match using the label name or just the namespace. Valid values are `LABEL` or `NAMESPACE`.
  scope?: string;
}

export function wafv2_RuleGroupRuleStatementLabelMatchStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'key',
      'The string to match against.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'scope',
      'Specify whether you want to match using the label name or just the namespace. Valid values are `LABEL` or `NAMESPACE`.',
      () => [],
      true,
      false,
    ),
  ];
}
