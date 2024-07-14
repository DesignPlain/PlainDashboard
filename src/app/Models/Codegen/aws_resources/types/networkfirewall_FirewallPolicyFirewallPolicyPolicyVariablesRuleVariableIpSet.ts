import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface networkfirewall_FirewallPolicyFirewallPolicyPolicyVariablesRuleVariableIpSet {
  // Set of IPv4 or IPv6 addresses in CIDR notation to use for the Suricata `HOME_NET` variable.
  definitions?: Array<string>;
}

export function networkfirewall_FirewallPolicyFirewallPolicyPolicyVariablesRuleVariableIpSet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "definitions",
      "Set of IPv4 or IPv6 addresses in CIDR notation to use for the Suricata `HOME_NET` variable.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
