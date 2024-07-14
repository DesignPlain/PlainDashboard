import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  networkfirewall_RuleGroupRuleGroupRuleVariablesIpSet,
  networkfirewall_RuleGroupRuleGroupRuleVariablesIpSet_GetTypes,
} from "./networkfirewall_RuleGroupRuleGroupRuleVariablesIpSet";
import {
  networkfirewall_RuleGroupRuleGroupRuleVariablesPortSet,
  networkfirewall_RuleGroupRuleGroupRuleVariablesPortSet_GetTypes,
} from "./networkfirewall_RuleGroupRuleGroupRuleVariablesPortSet";

export interface networkfirewall_RuleGroupRuleGroupRuleVariables {
  // Set of configuration blocks that define IP address information. See IP Sets below for details.
  ipSets?: Array<networkfirewall_RuleGroupRuleGroupRuleVariablesIpSet>;

  // Set of configuration blocks that define port range information. See Port Sets below for details.
  portSets?: Array<networkfirewall_RuleGroupRuleGroupRuleVariablesPortSet>;
}

export function networkfirewall_RuleGroupRuleGroupRuleVariables_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "portSets",
      "Set of configuration blocks that define port range information. See Port Sets below for details.",
      networkfirewall_RuleGroupRuleGroupRuleVariablesPortSet_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ipSets",
      "Set of configuration blocks that define IP address information. See IP Sets below for details.",
      networkfirewall_RuleGroupRuleGroupRuleVariablesIpSet_GetTypes(),
      false,
      false,
    ),
  ];
}
