import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleHotwordRuleProximity,
  dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleHotwordRuleProximity_GetTypes,
} from './dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleHotwordRuleProximity';
import {
  dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleHotwordRuleHotwordRegex,
  dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleHotwordRuleHotwordRegex_GetTypes,
} from './dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleHotwordRuleHotwordRegex';
import {
  dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleHotwordRuleLikelihoodAdjustment,
  dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleHotwordRuleLikelihoodAdjustment_GetTypes,
} from './dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleHotwordRuleLikelihoodAdjustment';

export interface dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleHotwordRule {
  /*
Proximity of the finding within which the entire hotword must reside. The total length of the window cannot
exceed 1000 characters. Note that the finding itself will be included in the window, so that hotwords may be
used to match substrings of the finding itself. For example, the certainty of a phone number regex
`(\d{3}) \d{3}-\d{4}` could be adjusted upwards if the area code is known to be the local area code of a company
office using the hotword regex `(xxx)`, where `xxx` is the area code in question.
Structure is documented below.
*/
  proximity?: dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleHotwordRuleProximity;

  /*
Regular expression pattern defining what qualifies as a hotword.
Structure is documented below.
*/
  hotwordRegex?: dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleHotwordRuleHotwordRegex;

  /*
Likelihood adjustment to apply to all matching findings.
Structure is documented below.
*/
  likelihoodAdjustment?: dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleHotwordRuleLikelihoodAdjustment;
}

export function dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleHotwordRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'proximity',
      'Proximity of the finding within which the entire hotword must reside. The total length of the window cannot\nexceed 1000 characters. Note that the finding itself will be included in the window, so that hotwords may be\nused to match substrings of the finding itself. For example, the certainty of a phone number regex\n`(\\d{3}) \\d{3}-\\d{4}` could be adjusted upwards if the area code is known to be the local area code of a company\noffice using the hotword regex `(xxx)`, where `xxx` is the area code in question.\nStructure is documented below.',
      () =>
        dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleHotwordRuleProximity_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'hotwordRegex',
      'Regular expression pattern defining what qualifies as a hotword.\nStructure is documented below.',
      () =>
        dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleHotwordRuleHotwordRegex_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'likelihoodAdjustment',
      'Likelihood adjustment to apply to all matching findings.\nStructure is documented below.',
      () =>
        dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleHotwordRuleLikelihoodAdjustment_GetTypes(),
      true,
      false,
    ),
  ];
}
