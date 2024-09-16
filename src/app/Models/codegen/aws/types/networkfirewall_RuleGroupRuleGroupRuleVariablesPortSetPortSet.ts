import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface networkfirewall_RuleGroupRuleGroupRuleVariablesPortSetPortSet {
  // Set of port ranges.
  definitions?: Array<string>;
}

export function networkfirewall_RuleGroupRuleGroupRuleVariablesPortSetPortSet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'definitions',
      'Set of port ranges.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
