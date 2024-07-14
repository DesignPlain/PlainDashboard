import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRule,
  dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRule_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRule";
import {
  dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleHotwordRule,
  dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleHotwordRule_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleHotwordRule";

export interface dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRule {
  /*
The rule that specifies conditions when findings of infoTypes specified in InspectionRuleSet are removed from results.
Structure is documented below.
*/
  exclusionRule?: dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRule;

  /*
Hotword-based detection rule.
Structure is documented below.
*/
  hotwordRule?: dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleHotwordRule;
}

export function dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "exclusionRule",
      "The rule that specifies conditions when findings of infoTypes specified in InspectionRuleSet are removed from results.\nStructure is documented below.",
      dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "hotwordRule",
      "Hotword-based detection rule.\nStructure is documented below.",
      dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleHotwordRule_GetTypes(),
      false,
      false,
    ),
  ];
}
