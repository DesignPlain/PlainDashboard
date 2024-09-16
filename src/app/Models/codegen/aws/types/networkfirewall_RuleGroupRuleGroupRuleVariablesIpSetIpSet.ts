import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface networkfirewall_RuleGroupRuleGroupRuleVariablesIpSetIpSet {
  // Set of IP addresses and address ranges, in CIDR notation.
  definitions?: Array<string>;
}

export function networkfirewall_RuleGroupRuleGroupRuleVariablesIpSetIpSet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'definitions',
      'Set of IP addresses and address ranges, in CIDR notation.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
