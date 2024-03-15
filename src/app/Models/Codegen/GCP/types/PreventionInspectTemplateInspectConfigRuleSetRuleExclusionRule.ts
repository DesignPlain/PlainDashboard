import { PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionary } from "./PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionary";
import { PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeByHotword } from "./PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeByHotword";
import { PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeInfoTypes } from "./PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeInfoTypes";
import { PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleRegex } from "./PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleRegex";

export interface PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRule {
  /*
Dictionary which defines the rule.
Structure is documented below.
*/
  Dictionary?: PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionary;

  /*
Drop if the hotword rule is contained in the proximate context.
For tabular data, the context includes the column name.
Structure is documented below.
*/
  ExcludeByHotword?: PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeByHotword;

  /*
Set of infoTypes for which findings would affect this rule.
Structure is documented below.
*/
  ExcludeInfoTypes?: PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeInfoTypes;

  /*
How the rule is applied. See the documentation for more information: https://cloud.google.com/dlp/docs/reference/rest/v2/InspectConfig#MatchingType
Possible values are: `MATCHING_TYPE_FULL_MATCH`, `MATCHING_TYPE_PARTIAL_MATCH`, `MATCHING_TYPE_INVERSE_MATCH`.
*/
  MatchingType?: string;

  /*
Regular expression which defines the rule.
Structure is documented below.
*/
  Regex?: PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleRegex;
}
