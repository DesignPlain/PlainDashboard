import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  networkfirewall_RuleGroupRuleGroupRuleVariables,
  networkfirewall_RuleGroupRuleGroupRuleVariables_GetTypes,
} from "./networkfirewall_RuleGroupRuleGroupRuleVariables";
import {
  networkfirewall_RuleGroupRuleGroupRulesSource,
  networkfirewall_RuleGroupRuleGroupRulesSource_GetTypes,
} from "./networkfirewall_RuleGroupRuleGroupRulesSource";
import {
  networkfirewall_RuleGroupRuleGroupStatefulRuleOptions,
  networkfirewall_RuleGroupRuleGroupStatefulRuleOptions_GetTypes,
} from "./networkfirewall_RuleGroupRuleGroupStatefulRuleOptions";
import {
  networkfirewall_RuleGroupRuleGroupReferenceSets,
  networkfirewall_RuleGroupRuleGroupReferenceSets_GetTypes,
} from "./networkfirewall_RuleGroupRuleGroupReferenceSets";

export interface networkfirewall_RuleGroupRuleGroup {
  // A configuration block that defines stateful rule options for the rule group. See Stateful Rule Options below for details.
  statefulRuleOptions?: networkfirewall_RuleGroupRuleGroupStatefulRuleOptions;

  // A configuration block that defines the IP Set References for the rule group. See Reference Sets below for details. Please notes that there can only be a maximum of 5 `reference_sets` in a `rule_group`. See the [AWS documentation](https://docs.aws.amazon.com/network-firewall/latest/developerguide/rule-groups-ip-set-references.html#rule-groups-ip-set-reference-limits) for details.
  referenceSets?: networkfirewall_RuleGroupRuleGroupReferenceSets;

  // A configuration block that defines additional settings available to use in the rules defined in the rule group. Can only be specified for --stateful-- rule groups. See Rule Variables below for details.
  ruleVariables?: networkfirewall_RuleGroupRuleGroupRuleVariables;

  // A configuration block that defines the stateful or stateless rules for the rule group. See Rules Source below for details.
  rulesSource?: networkfirewall_RuleGroupRuleGroupRulesSource;
}

export function networkfirewall_RuleGroupRuleGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "referenceSets",
      "A configuration block that defines the IP Set References for the rule group. See Reference Sets below for details. Please notes that there can only be a maximum of 5 `reference_sets` in a `rule_group`. See the [AWS documentation](https://docs.aws.amazon.com/network-firewall/latest/developerguide/rule-groups-ip-set-references.html#rule-groups-ip-set-reference-limits) for details.",
      () => networkfirewall_RuleGroupRuleGroupReferenceSets_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ruleVariables",
      "A configuration block that defines additional settings available to use in the rules defined in the rule group. Can only be specified for **stateful** rule groups. See Rule Variables below for details.",
      () => networkfirewall_RuleGroupRuleGroupRuleVariables_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "rulesSource",
      "A configuration block that defines the stateful or stateless rules for the rule group. See Rules Source below for details.",
      () => networkfirewall_RuleGroupRuleGroupRulesSource_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "statefulRuleOptions",
      "A configuration block that defines stateful rule options for the rule group. See Stateful Rule Options below for details.",
      () => networkfirewall_RuleGroupRuleGroupStatefulRuleOptions_GetTypes(),
      false,
      false,
    ),
  ];
}
