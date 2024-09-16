import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  networkfirewall_FirewallPolicyFirewallPolicyStatelessCustomAction,
  networkfirewall_FirewallPolicyFirewallPolicyStatelessCustomAction_GetTypes,
} from './networkfirewall_FirewallPolicyFirewallPolicyStatelessCustomAction';
import {
  networkfirewall_FirewallPolicyFirewallPolicyStatefulEngineOptions,
  networkfirewall_FirewallPolicyFirewallPolicyStatefulEngineOptions_GetTypes,
} from './networkfirewall_FirewallPolicyFirewallPolicyStatefulEngineOptions';
import {
  networkfirewall_FirewallPolicyFirewallPolicyStatelessRuleGroupReference,
  networkfirewall_FirewallPolicyFirewallPolicyStatelessRuleGroupReference_GetTypes,
} from './networkfirewall_FirewallPolicyFirewallPolicyStatelessRuleGroupReference';
import {
  networkfirewall_FirewallPolicyFirewallPolicyPolicyVariables,
  networkfirewall_FirewallPolicyFirewallPolicyPolicyVariables_GetTypes,
} from './networkfirewall_FirewallPolicyFirewallPolicyPolicyVariables';
import {
  networkfirewall_FirewallPolicyFirewallPolicyStatefulRuleGroupReference,
  networkfirewall_FirewallPolicyFirewallPolicyStatefulRuleGroupReference_GetTypes,
} from './networkfirewall_FirewallPolicyFirewallPolicyStatefulRuleGroupReference';

export interface networkfirewall_FirewallPolicyFirewallPolicy {
  /*
Set of actions to take on a fragmented packet if it does not match any of the stateless rules in the policy. You must specify one of the standard actions including: `aws:drop`, `aws:pass`, or `aws:forward_to_sfe`.
In addition, you can specify custom actions that are compatible with your standard action choice. If you want non-matching packets to be forwarded for stateful inspection, specify `aws:forward_to_sfe`.
*/
  statelessFragmentDefaultActions?: Array<string>;

  // Set of configuration blocks containing references to the stateless rule groups that are used in the policy. See Stateless Rule Group Reference below for details.
  statelessRuleGroupReferences?: Array<networkfirewall_FirewallPolicyFirewallPolicyStatelessRuleGroupReference>;

  // . Contains variables that you can use to override default Suricata settings in your firewall policy. See Rule Variables for details.
  policyVariables?: networkfirewall_FirewallPolicyFirewallPolicyPolicyVariables;

  // Set of actions to take on a packet if it does not match any stateful rules in the policy. This can only be specified if the policy has a `stateful_engine_options` block with a `rule_order` value of `STRICT_ORDER`. You can specify one of either or neither values of `aws:drop_strict` or `aws:drop_established`, as well as any combination of `aws:alert_strict` and `aws:alert_established`.
  statefulDefaultActions?: Array<string>;

  // Set of configuration blocks containing references to the stateful rule groups that are used in the policy. See Stateful Rule Group Reference below for details.
  statefulRuleGroupReferences?: Array<networkfirewall_FirewallPolicyFirewallPolicyStatefulRuleGroupReference>;

  // Set of configuration blocks describing the custom action definitions that are available for use in the firewall policy's `stateless_default_actions`. See Stateless Custom Action below for details.
  statelessCustomActions?: Array<networkfirewall_FirewallPolicyFirewallPolicyStatelessCustomAction>;

  /*
Set of actions to take on a packet if it does not match any of the stateless rules in the policy. You must specify one of the standard actions including: `aws:drop`, `aws:pass`, or `aws:forward_to_sfe`.
In addition, you can specify custom actions that are compatible with your standard action choice. If you want non-matching packets to be forwarded for stateful inspection, specify `aws:forward_to_sfe`.
*/
  statelessDefaultActions?: Array<string>;

  // A configuration block that defines options on how the policy handles stateful rules. See Stateful Engine Options below for details.
  statefulEngineOptions?: networkfirewall_FirewallPolicyFirewallPolicyStatefulEngineOptions;

  // The (ARN) of the TLS Inspection policy to attach to the FW Policy.  This must be added at creation of the resource per AWS documentation. "You can only add a TLS inspection configuration to a new policy, not to an existing policy."  This cannot be removed from a FW Policy.
  tlsInspectionConfigurationArn?: string;
}

export function networkfirewall_FirewallPolicyFirewallPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'policyVariables',
      '. Contains variables that you can use to override default Suricata settings in your firewall policy. See Rule Variables for details.',
      () =>
        networkfirewall_FirewallPolicyFirewallPolicyPolicyVariables_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'statefulDefaultActions',
      'Set of actions to take on a packet if it does not match any stateful rules in the policy. This can only be specified if the policy has a `stateful_engine_options` block with a `rule_order` value of `STRICT_ORDER`. You can specify one of either or neither values of `aws:drop_strict` or `aws:drop_established`, as well as any combination of `aws:alert_strict` and `aws:alert_established`.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'tlsInspectionConfigurationArn',
      'The (ARN) of the TLS Inspection policy to attach to the FW Policy.  This must be added at creation of the resource per AWS documentation. "You can only add a TLS inspection configuration to a new policy, not to an existing policy."  This cannot be removed from a FW Policy.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'statelessFragmentDefaultActions',
      'Set of actions to take on a fragmented packet if it does not match any of the stateless rules in the policy. You must specify one of the standard actions including: `aws:drop`, `aws:pass`, or `aws:forward_to_sfe`.\nIn addition, you can specify custom actions that are compatible with your standard action choice. If you want non-matching packets to be forwarded for stateful inspection, specify `aws:forward_to_sfe`.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'statelessRuleGroupReferences',
      'Set of configuration blocks containing references to the stateless rule groups that are used in the policy. See Stateless Rule Group Reference below for details.',
      () =>
        networkfirewall_FirewallPolicyFirewallPolicyStatelessRuleGroupReference_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'statelessDefaultActions',
      'Set of actions to take on a packet if it does not match any of the stateless rules in the policy. You must specify one of the standard actions including: `aws:drop`, `aws:pass`, or `aws:forward_to_sfe`.\nIn addition, you can specify custom actions that are compatible with your standard action choice. If you want non-matching packets to be forwarded for stateful inspection, specify `aws:forward_to_sfe`.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'statefulEngineOptions',
      'A configuration block that defines options on how the policy handles stateful rules. See Stateful Engine Options below for details.',
      () =>
        networkfirewall_FirewallPolicyFirewallPolicyStatefulEngineOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'statefulRuleGroupReferences',
      'Set of configuration blocks containing references to the stateful rule groups that are used in the policy. See Stateful Rule Group Reference below for details.',
      () =>
        networkfirewall_FirewallPolicyFirewallPolicyStatefulRuleGroupReference_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'statelessCustomActions',
      "Set of configuration blocks describing the custom action definitions that are available for use in the firewall policy's `stateless_default_actions`. See Stateless Custom Action below for details.",
      () =>
        networkfirewall_FirewallPolicyFirewallPolicyStatelessCustomAction_GetTypes(),
      false,
      false,
    ),
  ];
}
