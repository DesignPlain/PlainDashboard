import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  networkfirewall_RuleGroupRuleGroupRuleVariablesIpSetIpSet,
  networkfirewall_RuleGroupRuleGroupRuleVariablesIpSetIpSet_GetTypes,
} from "./networkfirewall_RuleGroupRuleGroupRuleVariablesIpSetIpSet";

export interface networkfirewall_RuleGroupRuleGroupRuleVariablesIpSet {
  // A unique alphanumeric string to identify the `ip_set`.
  key?: string;

  // A configuration block that defines a set of IP addresses. See IP Set below for details.
  ipSet?: networkfirewall_RuleGroupRuleGroupRuleVariablesIpSetIpSet;
}

export function networkfirewall_RuleGroupRuleGroupRuleVariablesIpSet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "key",
      "A unique alphanumeric string to identify the `ip_set`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ipSet",
      "A configuration block that defines a set of IP addresses. See IP Set below for details.",
      networkfirewall_RuleGroupRuleGroupRuleVariablesIpSetIpSet_GetTypes(),
      true,
      false,
    ),
  ];
}
