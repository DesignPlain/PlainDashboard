import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  networkfirewall_RuleGroupRuleGroupRulesSourceStatefulRuleHeader,
  networkfirewall_RuleGroupRuleGroupRulesSourceStatefulRuleHeader_GetTypes,
} from "./networkfirewall_RuleGroupRuleGroupRulesSourceStatefulRuleHeader";
import {
  networkfirewall_RuleGroupRuleGroupRulesSourceStatefulRuleRuleOption,
  networkfirewall_RuleGroupRuleGroupRulesSourceStatefulRuleRuleOption_GetTypes,
} from "./networkfirewall_RuleGroupRuleGroupRulesSourceStatefulRuleRuleOption";

export interface networkfirewall_RuleGroupRuleGroupRulesSourceStatefulRule {
  // Action to take with packets in a traffic flow when the flow matches the stateful rule criteria. For all actions, AWS Network Firewall performs the specified action and discontinues stateful inspection of the traffic flow. Valid values: `ALERT`, `DROP`, `PASS`, or `REJECT`.
  action?: string;

  // A configuration block containing the stateful 5-tuple inspection criteria for the rule, used to inspect traffic flows. See Header below for details.
  header?: networkfirewall_RuleGroupRuleGroupRulesSourceStatefulRuleHeader;

  // Set of configuration blocks containing additional settings for a stateful rule. See Rule Option below for details.
  ruleOptions?: Array<networkfirewall_RuleGroupRuleGroupRulesSourceStatefulRuleRuleOption>;
}

export function networkfirewall_RuleGroupRuleGroupRulesSourceStatefulRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "action",
      "Action to take with packets in a traffic flow when the flow matches the stateful rule criteria. For all actions, AWS Network Firewall performs the specified action and discontinues stateful inspection of the traffic flow. Valid values: `ALERT`, `DROP`, `PASS`, or `REJECT`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "header",
      "A configuration block containing the stateful 5-tuple inspection criteria for the rule, used to inspect traffic flows. See Header below for details.",
      networkfirewall_RuleGroupRuleGroupRulesSourceStatefulRuleHeader_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ruleOptions",
      "Set of configuration blocks containing additional settings for a stateful rule. See Rule Option below for details.",
      networkfirewall_RuleGroupRuleGroupRulesSourceStatefulRuleRuleOption_GetTypes(),
      true,
      false,
    ),
  ];
}
