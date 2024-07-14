import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  networkfirewall_FirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride,
  networkfirewall_FirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride_GetTypes,
} from "./networkfirewall_FirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride";

export interface networkfirewall_FirewallPolicyFirewallPolicyStatefulRuleGroupReference {
  // Configuration block for override values
  override?: networkfirewall_FirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride;

  // An integer setting that indicates the order in which to apply the stateful rule groups in a single policy. This argument must be specified if the policy has a `stateful_engine_options` block with a `rule_order` value of `STRICT_ORDER`. AWS Network Firewall applies each stateful rule group to a packet starting with the group that has the lowest priority setting.
  priority?: number;

  // The Amazon Resource Name (ARN) of the stateful rule group.
  resourceArn?: string;
}

export function networkfirewall_FirewallPolicyFirewallPolicyStatefulRuleGroupReference_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "override",
      "Configuration block for override values",
      networkfirewall_FirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "priority",
      "An integer setting that indicates the order in which to apply the stateful rule groups in a single policy. This argument must be specified if the policy has a `stateful_engine_options` block with a `rule_order` value of `STRICT_ORDER`. AWS Network Firewall applies each stateful rule group to a packet starting with the group that has the lowest priority setting.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "resourceArn",
      "The Amazon Resource Name (ARN) of the stateful rule group.",
      [],
      true,
      false,
    ),
  ];
}
