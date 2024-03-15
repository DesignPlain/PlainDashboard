import { PreventionInspectTemplateInspectConfigRuleSetInfoType } from "./PreventionInspectTemplateInspectConfigRuleSetInfoType";
import { PreventionInspectTemplateInspectConfigRuleSetRule } from "./PreventionInspectTemplateInspectConfigRuleSetRule";

export interface PreventionInspectTemplateInspectConfigRuleSet {
  /*
List of infoTypes this rule set is applied to.
Structure is documented below.
*/
  InfoTypes?: Array<PreventionInspectTemplateInspectConfigRuleSetInfoType>;

  /*
Set of rules to be applied to infoTypes. The rules are applied in order.
Structure is documented below.
*/
  Rules?: Array<PreventionInspectTemplateInspectConfigRuleSetRule>;
}
