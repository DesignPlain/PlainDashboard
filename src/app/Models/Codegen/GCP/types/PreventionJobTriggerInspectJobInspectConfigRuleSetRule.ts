import { PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRule } from "./PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRule";
import { PreventionJobTriggerInspectJobInspectConfigRuleSetRuleHotwordRule } from "./PreventionJobTriggerInspectJobInspectConfigRuleSetRuleHotwordRule";

export interface PreventionJobTriggerInspectJobInspectConfigRuleSetRule {
  /*
The rule that specifies conditions when findings of infoTypes specified in InspectionRuleSet are removed from results.
Structure is documented below.
*/
  ExclusionRule?: PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRule;

  /*
Hotword-based detection rule.
Structure is documented below.
*/
  HotwordRule?: PreventionJobTriggerInspectJobInspectConfigRuleSetRuleHotwordRule;
}
