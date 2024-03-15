import { PreventionJobTriggerInspectJobInspectConfigRuleSetInfoType } from "./PreventionJobTriggerInspectJobInspectConfigRuleSetInfoType";
import { PreventionJobTriggerInspectJobInspectConfigRuleSetRule } from "./PreventionJobTriggerInspectJobInspectConfigRuleSetRule";

export interface PreventionJobTriggerInspectJobInspectConfigRuleSet {
  /*
List of infoTypes this rule set is applied to.
Structure is documented below.
*/
  InfoTypes?: Array<PreventionJobTriggerInspectJobInspectConfigRuleSetInfoType>;

  /*
Set of rules to be applied to infoTypes. The rules are applied in order.
Structure is documented below.
*/
  Rules?: Array<PreventionJobTriggerInspectJobInspectConfigRuleSetRule>;
}
