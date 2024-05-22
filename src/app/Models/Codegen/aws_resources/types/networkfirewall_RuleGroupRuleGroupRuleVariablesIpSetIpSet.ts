import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface networkfirewall_RuleGroupRuleGroupRuleVariablesIpSetIpSet {
  // Set of IP addresses and address ranges, in CIDR notation.
  definitions?: Array<string>;
}

export function networkfirewall_RuleGroupRuleGroupRuleVariablesIpSetIpSet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "definitions",
      "Set of IP addresses and address ranges, in CIDR notation.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
