import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  networkfirewall_getFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride,
  networkfirewall_getFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride_GetTypes,
} from './networkfirewall_getFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride';

export interface networkfirewall_getFirewallPolicyFirewallPolicyStatefulRuleGroupReference {
  //
  overrides?: Array<networkfirewall_getFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride>;

  //
  priority?: number;

  //
  resourceArn?: string;
}

export function networkfirewall_getFirewallPolicyFirewallPolicyStatefulRuleGroupReference_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'overrides',
      '',
      () =>
        networkfirewall_getFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.Number, 'priority', '', () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      'resourceArn',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
