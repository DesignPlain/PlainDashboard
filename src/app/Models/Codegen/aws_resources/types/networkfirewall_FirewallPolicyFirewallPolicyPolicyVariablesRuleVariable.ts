import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  networkfirewall_FirewallPolicyFirewallPolicyPolicyVariablesRuleVariableIpSet,
  networkfirewall_FirewallPolicyFirewallPolicyPolicyVariablesRuleVariableIpSet_GetTypes,
} from "./networkfirewall_FirewallPolicyFirewallPolicyPolicyVariablesRuleVariableIpSet";

export interface networkfirewall_FirewallPolicyFirewallPolicyPolicyVariablesRuleVariable {
  // A configuration block that defines a set of IP addresses. See IP Set below for details.
  ipSet?: networkfirewall_FirewallPolicyFirewallPolicyPolicyVariablesRuleVariableIpSet;

  // An alphanumeric string to identify the `ip_set`. Valid values: `HOME_NET`
  key?: string;
}

export function networkfirewall_FirewallPolicyFirewallPolicyPolicyVariablesRuleVariable_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ipSet",
      "A configuration block that defines a set of IP addresses. See IP Set below for details.",
      networkfirewall_FirewallPolicyFirewallPolicyPolicyVariablesRuleVariableIpSet_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "An alphanumeric string to identify the `ip_set`. Valid values: `HOME_NET`",
      [],
      true,
      false,
    ),
  ];
}
