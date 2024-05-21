import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeByHotwordHotwordRegex,
  dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeByHotwordHotwordRegex_GetTypes,
} from "./dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeByHotwordHotwordRegex";
import {
  dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeByHotwordProximity,
  dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeByHotwordProximity_GetTypes,
} from "./dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeByHotwordProximity";

export interface dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeByHotword {
  /*
Regular expression pattern defining what qualifies as a hotword.
Structure is documented below.
*/
  hotwordRegex?: dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeByHotwordHotwordRegex;

  /*
Proximity of the finding within which the entire hotword must reside. The total length of the window cannot
exceed 1000 characters. Note that the finding itself will be included in the window, so that hotwords may be
used to match substrings of the finding itself. For example, the certainty of a phone number regex
`(\d{3}) \d{3}-\d{4}` could be adjusted upwards if the area code is known to be the local area code of a company
office using the hotword regex `(xxx)`, where `xxx` is the area code in question.
Structure is documented below.
*/
  proximity?: dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeByHotwordProximity;
}

export function dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeByHotword_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "proximity",
      "Proximity of the finding within which the entire hotword must reside. The total length of the window cannot\nexceed 1000 characters. Note that the finding itself will be included in the window, so that hotwords may be\nused to match substrings of the finding itself. For example, the certainty of a phone number regex\n`(\\d{3}) \\d{3}-\\d{4}` could be adjusted upwards if the area code is known to be the local area code of a company\noffice using the hotword regex `(xxx)`, where `xxx` is the area code in question.\nStructure is documented below.",
      dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeByHotwordProximity_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "hotwordRegex",
      "Regular expression pattern defining what qualifies as a hotword.\nStructure is documented below.",
      dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeByHotwordHotwordRegex_GetTypes(),
      true,
      false,
    ),
  ];
}
