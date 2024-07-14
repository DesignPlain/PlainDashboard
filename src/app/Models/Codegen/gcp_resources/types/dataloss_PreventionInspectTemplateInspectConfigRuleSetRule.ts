import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleHotwordRule,
  dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleHotwordRule_GetTypes,
} from "./dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleHotwordRule";
import {
  dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRule,
  dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRule_GetTypes,
} from "./dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRule";

export interface dataloss_PreventionInspectTemplateInspectConfigRuleSetRule {
  /*
The rule that specifies conditions when findings of infoTypes specified in InspectionRuleSet are removed from results.
Structure is documented below.
*/
  exclusionRule?: dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRule;

  /*
Hotword-based detection rule.
Structure is documented below.
*/
  hotwordRule?: dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleHotwordRule;
}

export function dataloss_PreventionInspectTemplateInspectConfigRuleSetRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "exclusionRule",
      "The rule that specifies conditions when findings of infoTypes specified in InspectionRuleSet are removed from results.\nStructure is documented below.",
      dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "hotwordRule",
      "Hotword-based detection rule.\nStructure is documented below.",
      dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleHotwordRule_GetTypes(),
      false,
      false,
    ),
  ];
}
