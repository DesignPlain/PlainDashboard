import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  networkfirewall_FirewallPolicyFirewallPolicyPolicyVariablesRuleVariable,
  networkfirewall_FirewallPolicyFirewallPolicyPolicyVariablesRuleVariable_GetTypes,
} from "./networkfirewall_FirewallPolicyFirewallPolicyPolicyVariablesRuleVariable";

export interface networkfirewall_FirewallPolicyFirewallPolicyPolicyVariables {
  //
  ruleVariables?: Array<networkfirewall_FirewallPolicyFirewallPolicyPolicyVariablesRuleVariable>;
}

export function networkfirewall_FirewallPolicyFirewallPolicyPolicyVariables_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ruleVariables",
      "",
      () =>
        networkfirewall_FirewallPolicyFirewallPolicyPolicyVariablesRuleVariable_GetTypes(),
      false,
      false,
    ),
  ];
}
