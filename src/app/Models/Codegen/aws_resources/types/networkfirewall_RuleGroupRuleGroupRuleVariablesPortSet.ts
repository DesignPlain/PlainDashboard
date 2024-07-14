import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  networkfirewall_RuleGroupRuleGroupRuleVariablesPortSetPortSet,
  networkfirewall_RuleGroupRuleGroupRuleVariablesPortSetPortSet_GetTypes,
} from "./networkfirewall_RuleGroupRuleGroupRuleVariablesPortSetPortSet";

export interface networkfirewall_RuleGroupRuleGroupRuleVariablesPortSet {
  // An unique alphanumeric string to identify the `port_set`.
  key?: string;

  // A configuration block that defines a set of port ranges. See Port Set below for details.
  portSet?: networkfirewall_RuleGroupRuleGroupRuleVariablesPortSetPortSet;
}

export function networkfirewall_RuleGroupRuleGroupRuleVariablesPortSet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "key",
      "An unique alphanumeric string to identify the `port_set`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "portSet",
      "A configuration block that defines a set of port ranges. See Port Set below for details.",
      networkfirewall_RuleGroupRuleGroupRuleVariablesPortSetPortSet_GetTypes(),
      true,
      false,
    ),
  ];
}
