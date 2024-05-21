import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleRegex,
  dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleRegex_GetTypes,
} from "./dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleRegex";
import {
  dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionary,
  dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionary_GetTypes,
} from "./dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionary";
import {
  dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeByHotword,
  dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeByHotword_GetTypes,
} from "./dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeByHotword";
import {
  dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeInfoTypes,
  dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeInfoTypes_GetTypes,
} from "./dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeInfoTypes";

export interface dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRule {
  /*
Regular expression which defines the rule.
Structure is documented below.
*/
  regex?: dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleRegex;

  /*
Dictionary which defines the rule.
Structure is documented below.
*/
  dictionary?: dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionary;

  /*
Drop if the hotword rule is contained in the proximate context.
For tabular data, the context includes the column name.
Structure is documented below.
*/
  excludeByHotword?: dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeByHotword;

  /*
Set of infoTypes for which findings would affect this rule.
Structure is documented below.
*/
  excludeInfoTypes?: dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeInfoTypes;

  /*
How the rule is applied. See the documentation for more information: https://cloud.google.com/dlp/docs/reference/rest/v2/InspectConfig#MatchingType
Possible values are: `MATCHING_TYPE_FULL_MATCH`, `MATCHING_TYPE_PARTIAL_MATCH`, `MATCHING_TYPE_INVERSE_MATCH`.
*/
  matchingType?: string;
}

export function dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "excludeByHotword",
      "Drop if the hotword rule is contained in the proximate context.\nFor tabular data, the context includes the column name.\nStructure is documented below.",
      dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeByHotword_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "excludeInfoTypes",
      "Set of infoTypes for which findings would affect this rule.\nStructure is documented below.",
      dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeInfoTypes_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "matchingType",
      "How the rule is applied. See the documentation for more information: https://cloud.google.com/dlp/docs/reference/rest/v2/InspectConfig#MatchingType\nPossible values are: `MATCHING_TYPE_FULL_MATCH`, `MATCHING_TYPE_PARTIAL_MATCH`, `MATCHING_TYPE_INVERSE_MATCH`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "regex",
      "Regular expression which defines the rule.\nStructure is documented below.",
      dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleRegex_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dictionary",
      "Dictionary which defines the rule.\nStructure is documented below.",
      dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionary_GetTypes(),
      false,
      false,
    ),
  ];
}
