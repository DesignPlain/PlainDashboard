import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetInfoType,
  dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetInfoType_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetInfoType";
import {
  dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRule,
  dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRule_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRule";

export interface dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSet {
  /*
List of infoTypes this rule set is applied to.
Structure is documented below.
*/
  infoTypes?: Array<dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetInfoType>;

  /*
Set of rules to be applied to infoTypes. The rules are applied in order.
Structure is documented below.
*/
  rules?: Array<dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRule>;
}

export function dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "infoTypes",
      "List of infoTypes this rule set is applied to.\nStructure is documented below.",
      dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetInfoType_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "rules",
      "Set of rules to be applied to infoTypes. The rules are applied in order.\nStructure is documented below.",
      dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRule_GetTypes(),
      true,
      false,
    ),
  ];
}
