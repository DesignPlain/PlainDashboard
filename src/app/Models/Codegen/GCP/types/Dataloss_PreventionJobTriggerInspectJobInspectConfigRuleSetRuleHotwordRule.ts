import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleHotwordRuleHotwordRegex,
  Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleHotwordRuleHotwordRegex_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleHotwordRuleHotwordRegex";
import {
  Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleHotwordRuleLikelihoodAdjustment,
  Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleHotwordRuleLikelihoodAdjustment_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleHotwordRuleLikelihoodAdjustment";
import {
  Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleHotwordRuleProximity,
  Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleHotwordRuleProximity_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleHotwordRuleProximity";

export interface Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleHotwordRule {
  /*
Regular expression pattern defining what qualifies as a hotword.
Structure is documented below.
*/
  HotwordRegex?: Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleHotwordRuleHotwordRegex;

  /*
Likelihood adjustment to apply to all matching findings.
Structure is documented below.
*/
  LikelihoodAdjustment?: Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleHotwordRuleLikelihoodAdjustment;

  /*
Proximity of the finding within which the entire hotword must reside. The total length of the window cannot
exceed 1000 characters. Note that the finding itself will be included in the window, so that hotwords may be
used to match substrings of the finding itself. For example, the certainty of a phone number regex
`(\d{3}) \d{3}-\d{4}` could be adjusted upwards if the area code is known to be the local area code of a company
office using the hotword regex `(xxx)`, where `xxx` is the area code in question.
Structure is documented below.
*/
  Proximity?: Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleHotwordRuleProximity;
}

export function Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleHotwordRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "HotwordRegex",
      "Regular expression pattern defining what qualifies as a hotword.\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleHotwordRuleHotwordRegex_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "LikelihoodAdjustment",
      "Likelihood adjustment to apply to all matching findings.\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleHotwordRuleLikelihoodAdjustment_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Proximity",
      "Proximity of the finding within which the entire hotword must reside. The total length of the window cannot\nexceed 1000 characters. Note that the finding itself will be included in the window, so that hotwords may be\nused to match substrings of the finding itself. For example, the certainty of a phone number regex\n`(\\d{3}) \\d{3}-\\d{4}` could be adjusted upwards if the area code is known to be the local area code of a company\noffice using the hotword regex `(xxx)`, where `xxx` is the area code in question.\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleHotwordRuleProximity_GetTypes(),
      false,
      false,
    ),
  ];
}
