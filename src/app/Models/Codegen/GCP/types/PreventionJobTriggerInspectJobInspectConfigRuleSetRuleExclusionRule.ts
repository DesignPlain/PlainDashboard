import { PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleRegex } from "./PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleRegex";
import { PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleDictionary } from "./PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleDictionary";
import { PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleExcludeByHotword } from "./PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleExcludeByHotword";
import { PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleExcludeInfoTypes } from "./PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleExcludeInfoTypes";

export interface PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRule {
  /*
Dictionary which defines the rule.
Structure is documented below.
*/
  Dictionary?: PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleDictionary;

  /*
Drop if the hotword rule is contained in the proximate context.
Structure is documented below.
*/
  ExcludeByHotword?: PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleExcludeByHotword;

  /*
Set of infoTypes for which findings would affect this rule.
Structure is documented below.
*/
  ExcludeInfoTypes?: PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleExcludeInfoTypes;

  /*
How the rule is applied. See the documentation for more information: https://cloud.google.com/dlp/docs/reference/rest/v2/InspectConfig#MatchingType
Possible values are: `MATCHING_TYPE_FULL_MATCH`, `MATCHING_TYPE_PARTIAL_MATCH`, `MATCHING_TYPE_INVERSE_MATCH`.
*/
  MatchingType?: string;

  /*
Regular expression which defines the rule.
Structure is documented below.
*/
  Regex?: PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleRegex;
}
