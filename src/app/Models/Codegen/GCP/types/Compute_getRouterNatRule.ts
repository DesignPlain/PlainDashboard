import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_getRouterNatRuleAction,
  Compute_getRouterNatRuleAction_GetTypes,
} from "./Compute_getRouterNatRuleAction";

export interface Compute_getRouterNatRule {
  /*
An integer uniquely identifying a rule in the list.
The rule number must be a positive value between 0 and 65000, and must be unique among rules within a NAT.
*/
  RuleNumber?: number;

  // The action to be enforced for traffic that matches this rule.
  Actions?: Array<Compute_getRouterNatRuleAction>;

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
}

export function Compute_getRouterNatRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Description",
      "An optional description of this rule.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Match",
      "CEL expression that specifies the match condition that egress traffic from a VM is evaluated against.\nIf it evaluates to true, the corresponding action is enforced.\n\nThe following examples are valid match expressions for public NAT:\n\n\"inIpRange(destination.ip, '1.1.0.0/16') || inIpRange(destination.ip, '2.2.0.0/16')\"\n\n\"destination.ip == '1.1.0.1' || destination.ip == '8.8.8.8'\"\n\nThe following example is a valid match expression for private NAT:\n\n\"nexthop.hub == 'https://networkconnectivity.googleapis.com/v1alpha1/projects/my-project/global/hub/hub-1'\"",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "RuleNumber",
      "An integer uniquely identifying a rule in the list.\nThe rule number must be a positive value between 0 and 65000, and must be unique among rules within a NAT.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Actions",
      "The action to be enforced for traffic that matches this rule.",
      Compute_getRouterNatRuleAction_GetTypes(),
      true,
      false,
    ),
  ];
}
