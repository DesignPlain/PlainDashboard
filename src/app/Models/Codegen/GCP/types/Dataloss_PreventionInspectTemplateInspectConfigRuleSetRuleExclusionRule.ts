import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleRegex,
  Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleRegex_GetTypes,
} from "./Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleRegex";
import {
  Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionary,
  Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionary_GetTypes,
} from "./Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionary";
import {
  Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeByHotword,
  Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeByHotword_GetTypes,
} from "./Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeByHotword";
import {
  Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeInfoTypes,
  Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeInfoTypes_GetTypes,
} from "./Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeInfoTypes";

export interface Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRule {
  /*
Regular expression which defines the rule.
Structure is documented below.
*/
  Regex?: Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleRegex;

  /*
Dictionary which defines the rule.
Structure is documented below.
*/
  Dictionary?: Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionary;

  /*
Drop if the hotword rule is contained in the proximate context.
For tabular data, the context includes the column name.
Structure is documented below.
*/
  ExcludeByHotword?: Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeByHotword;

  /*
Set of infoTypes for which findings would affect this rule.
Structure is documented below.
*/
  ExcludeInfoTypes?: Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeInfoTypes;

  /*
How the rule is applied. See the documentation for more information: https://cloud.google.com/dlp/docs/reference/rest/v2/InspectConfig#MatchingType
Possible values are: `MATCHING_TYPE_FULL_MATCH`, `MATCHING_TYPE_PARTIAL_MATCH`, `MATCHING_TYPE_INVERSE_MATCH`.
*/
  MatchingType?: string;
}

export function Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Dictionary",
      "Dictionary which defines the rule.\nStructure is documented below.",
      Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleDictionary_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ExcludeByHotword",
      "Drop if the hotword rule is contained in the proximate context.\nFor tabular data, the context includes the column name.\nStructure is documented below.",
      Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeByHotword_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ExcludeInfoTypes",
      "Set of infoTypes for which findings would affect this rule.\nStructure is documented below.",
      Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeInfoTypes_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MatchingType",
      "How the rule is applied. See the documentation for more information: https://cloud.google.com/dlp/docs/reference/rest/v2/InspectConfig#MatchingType\nPossible values are: `MATCHING_TYPE_FULL_MATCH`, `MATCHING_TYPE_PARTIAL_MATCH`, `MATCHING_TYPE_INVERSE_MATCH`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Regex",
      "Regular expression which defines the rule.\nStructure is documented below.",
      Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleRegex_GetTypes(),
      false,
      false,
    ),
  ];
}
