import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource {
  // An IP address or a block of IP addresses in CIDR notation. AWS Network Firewall supports all address ranges for IPv4.
  addressDefinition?: string;
}

export function networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "addressDefinition",
      "An IP address or a block of IP addresses in CIDR notation. AWS Network Firewall supports all address ranges for IPv4.",
      [],
      true,
      false,
    ),
  ];
}
