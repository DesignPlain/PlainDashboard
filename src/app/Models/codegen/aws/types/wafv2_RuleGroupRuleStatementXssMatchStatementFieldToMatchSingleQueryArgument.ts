import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument {
  // The name of the query header to inspect. This setting must be provided as lower case characters.
  name?: string;
}

export function wafv2_RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the query header to inspect. This setting must be provided as lower case characters.',
      () => [],
      true,
      false,
    ),
  ];
}
