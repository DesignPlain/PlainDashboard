import { getRouterNatRuleAction } from "./getRouterNatRuleAction";

export interface getRouterNatRule {
  // The action to be enforced for traffic that matches this rule.
  Actions?: Array<getRouterNatRuleAction>;

  // An optional description of this rule.
  Description?: string;

  /*
CEL expression that specifies the match condition that egress traffic from a VM is evaluated against.
If it evaluates to true, the corresponding action is enforced.

The following examples are valid match expressions for public NAT:

"inIpRange(destination.ip, '1.1.0.0/16') || inIpRange(destination.ip, '2.2.0.0/16')"

"destination.ip == '1.1.0.1' || destination.ip == '8.8.8.8'"

The following example is a valid match expression for private NAT:

"nexthop.hub == 'https://networkconnectivity.googleapis.com/v1alpha1/projects/my-project/global/hub/hub-1'"
*/
  Match?: string;

  /*
An integer uniquely identifying a rule in the list.
The rule number must be a positive value between 0 and 65000, and must be unique among rules within a NAT.
*/
  RuleNumber?: number;
}
