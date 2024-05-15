import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRule,
  Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRule_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRule";
import {
  Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleHotwordRule,
  Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleHotwordRule_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleHotwordRule";

export interface Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRule {
  /*
The rule that specifies conditions when findings of infoTypes specified in InspectionRuleSet are removed from results.
Structure is documented below.
*/
  ExclusionRule?: Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRule;

  /*
Hotword-based detection rule.
Structure is documented below.
*/
  HotwordRule?: Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleHotwordRule;
}

export function Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ExclusionRule",
      "The rule that specifies conditions when findings of infoTypes specified in InspectionRuleSet are removed from results.\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "HotwordRule",
      "Hotword-based detection rule.\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleHotwordRule_GetTypes(),
      false,
      false,
    ),
  ];
}
