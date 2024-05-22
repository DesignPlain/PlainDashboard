import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleDictionary,
  dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleDictionary_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleDictionary";
import {
  dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleExcludeByHotword,
  dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleExcludeByHotword_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleExcludeByHotword";
import {
  dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleExcludeInfoTypes,
  dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleExcludeInfoTypes_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleExcludeInfoTypes";
import {
  dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleRegex,
  dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleRegex_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleRegex";

export interface dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRule {
  /*
Dictionary which defines the rule.
Structure is documented below.
*/
  dictionary?: dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleDictionary;

  /*
Drop if the hotword rule is contained in the proximate context.
Structure is documented below.
*/
  excludeByHotword?: dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleExcludeByHotword;

  /*
Set of infoTypes for which findings would affect this rule.
Structure is documented below.
*/
  excludeInfoTypes?: dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleExcludeInfoTypes;

  /*
How the rule is applied. See the documentation for more information: https://cloud.google.com/dlp/docs/reference/rest/v2/InspectConfig#MatchingType
Possible values are: `MATCHING_TYPE_FULL_MATCH`, `MATCHING_TYPE_PARTIAL_MATCH`, `MATCHING_TYPE_INVERSE_MATCH`.
*/
  matchingType?: string;

  /*
Regular expression which defines the rule.
Structure is documented below.
*/
  regex?: dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleRegex;
}

export function dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "dictionary",
      "Dictionary which defines the rule.\nStructure is documented below.",
      dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleDictionary_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "excludeByHotword",
      "Drop if the hotword rule is contained in the proximate context.\nStructure is documented below.",
      dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleExcludeByHotword_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "excludeInfoTypes",
      "Set of infoTypes for which findings would affect this rule.\nStructure is documented below.",
      dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleExcludeInfoTypes_GetTypes(),
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
      dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleRegex_GetTypes(),
      false,
      false,
    ),
  ];
}
