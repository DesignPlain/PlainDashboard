import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  compute_RouterNatRuleAction,
  compute_RouterNatRuleAction_GetTypes,
} from "./compute_RouterNatRuleAction";

export interface compute_RouterNatRule {
  /*
The action to be enforced for traffic that matches this rule.
Structure is documented below.
*/
  action?: compute_RouterNatRuleAction;

  // An optional description of this rule.
  description?: string;

  /*
CEL expression that specifies the match condition that egress traffic from a VM is evaluated against.
If it evaluates to true, the corresponding action is enforced.
The following examples are valid match expressions for public NAT:
"inIpRange(destination.ip, '1.1.0.0/16') || inIpRange(destination.ip, '2.2.0.0/16')"
"destination.ip == '1.1.0.1' || destination.ip == '8.8.8.8'"
The following example is a valid match expression for private NAT:
"nexthop.hub == 'https://networkconnectivity.googleapis.com/v1alpha1/projects/my-project/global/hub/hub-1'"
*/
  match?: string;

  /*
An integer uniquely identifying a rule in the list.
The rule number must be a positive value between 0 and 65000, and must be unique among rules within a NAT.
*/
  ruleNumber?: number;
}

export function compute_RouterNatRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "action",
      "The action to be enforced for traffic that matches this rule.\nStructure is documented below.",
      compute_RouterNatRuleAction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "An optional description of this rule.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "match",
      "CEL expression that specifies the match condition that egress traffic from a VM is evaluated against.\nIf it evaluates to true, the corresponding action is enforced.\nThe following examples are valid match expressions for public NAT:\n\"inIpRange(destination.ip, '1.1.0.0/16') || inIpRange(destination.ip, '2.2.0.0/16')\"\n\"destination.ip == '1.1.0.1' || destination.ip == '8.8.8.8'\"\nThe following example is a valid match expression for private NAT:\n\"nexthop.hub == 'https://networkconnectivity.googleapis.com/v1alpha1/projects/my-project/global/hub/hub-1'\"",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ruleNumber",
      "An integer uniquely identifying a rule in the list.\nThe rule number must be a positive value between 0 and 65000, and must be unique among rules within a NAT.",
      [],
      true,
      false,
    ),
  ];
}
