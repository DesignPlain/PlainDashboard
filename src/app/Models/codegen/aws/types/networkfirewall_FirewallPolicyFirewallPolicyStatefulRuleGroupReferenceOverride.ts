import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface networkfirewall_FirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride {
  // The action that changes the rule group from DROP to ALERT . This only applies to managed rule groups.
  action?: string;
}

export function networkfirewall_FirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'action',
      'The action that changes the rule group from DROP to ALERT . This only applies to managed rule groups.',
      () => [],
      false,
      false,
    ),
  ];
}
