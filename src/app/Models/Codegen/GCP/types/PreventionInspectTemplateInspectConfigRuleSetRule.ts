import { PreventionInspectTemplateInspectConfigRuleSetRuleHotwordRule } from "./PreventionInspectTemplateInspectConfigRuleSetRuleHotwordRule";
import { PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRule } from "./PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRule";

export interface PreventionInspectTemplateInspectConfigRuleSetRule {
  /*
The rule that specifies conditions when findings of infoTypes specified in InspectionRuleSet are removed from results.
Structure is documented below.
*/
  ExclusionRule?: PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRule;

  /*
Hotword-based detection rule.
Structure is documented below.
*/
  HotwordRule?: PreventionInspectTemplateInspectConfigRuleSetRuleHotwordRule;
}
