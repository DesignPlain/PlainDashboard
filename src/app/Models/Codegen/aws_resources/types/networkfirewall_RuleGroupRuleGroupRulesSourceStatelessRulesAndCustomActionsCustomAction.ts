import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition,
  networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition_GetTypes,
} from "./networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition";

export interface networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction {
  // A configuration block describing the custom action associated with the `action_name`. See Action Definition below for details.
  actionDefinition?: networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition;

  // A friendly name of the custom action.
  actionName?: string;
}

export function networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "actionName",
      "A friendly name of the custom action.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "actionDefinition",
      "A configuration block describing the custom action associated with the `action_name`. See Action Definition below for details.",
      networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition_GetTypes(),
      true,
      false,
    ),
  ];
}
