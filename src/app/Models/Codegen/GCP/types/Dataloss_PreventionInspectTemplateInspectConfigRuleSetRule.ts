import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRule,
  Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRule_GetTypes,
} from "./Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRule";
import {
  Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleHotwordRule,
  Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleHotwordRule_GetTypes,
} from "./Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleHotwordRule";

export interface Dataloss_PreventionInspectTemplateInspectConfigRuleSetRule {
  /*
The rule that specifies conditions when findings of infoTypes specified in InspectionRuleSet are removed from results.
Structure is documented below.
*/
  ExclusionRule?: Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRule;

  /*
Hotword-based detection rule.
Structure is documented below.
*/
  HotwordRule?: Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleHotwordRule;
}

export function Dataloss_PreventionInspectTemplateInspectConfigRuleSetRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ExclusionRule",
      "The rule that specifies conditions when findings of infoTypes specified in InspectionRuleSet are removed from results.\nStructure is documented below.",
      Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "HotwordRule",
      "Hotword-based detection rule.\nStructure is documented below.",
      Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleHotwordRule_GetTypes(),
      false,
      false,
    ),
  ];
}
