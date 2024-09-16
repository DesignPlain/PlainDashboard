import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface networkfirewall_FirewallPolicyFirewallPolicyStatelessRuleGroupReference {
  // An integer setting that indicates the order in which to run the stateless rule groups in a single policy. AWS Network Firewall applies each stateless rule group to a packet starting with the group that has the lowest priority setting.
  priority?: number;

  // The Amazon Resource Name (ARN) of the stateless rule group.
  resourceArn?: string;
}

export function networkfirewall_FirewallPolicyFirewallPolicyStatelessRuleGroupReference_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'priority',
      'An integer setting that indicates the order in which to run the stateless rule groups in a single policy. AWS Network Firewall applies each stateless rule group to a packet starting with the group that has the lowest priority setting.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'resourceArn',
      'The Amazon Resource Name (ARN) of the stateless rule group.',
      () => [],
      true,
      false,
    ),
  ];
}
