import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction,
  networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction_GetTypes,
} from "./networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction";
import {
  networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule,
  networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule_GetTypes,
} from "./networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule";

export interface networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions {
  // Set of configuration blocks containing custom action definitions that are available for use by the set of `stateless rule`. See Custom Action below for details.
  customActions?: Array<networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction>;

  // Set of configuration blocks containing the stateless rules for use in the stateless rule group. See Stateless Rule below for details.
  statelessRules?: Array<networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule>;
}

export function networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "customActions",
      "Set of configuration blocks containing custom action definitions that are available for use by the set of `stateless rule`. See Custom Action below for details.",
      () =>
        networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "statelessRules",
      "Set of configuration blocks containing the stateless rules for use in the stateless rule group. See Stateless Rule below for details.",
      () =>
        networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule_GetTypes(),
      true,
      false,
    ),
  ];
}
