import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetInfoType,
  Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetInfoType_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetInfoType";
import {
  Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRule,
  Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRule_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRule";

export interface Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSet {
  /*
List of infoTypes this rule set is applied to.
Structure is documented below.
*/
  InfoTypes?: Array<Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetInfoType>;

  /*
Set of rules to be applied to infoTypes. The rules are applied in order.
Structure is documented below.
*/
  Rules?: Array<Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRule>;
}

export function Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "InfoTypes",
      "List of infoTypes this rule set is applied to.\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetInfoType_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Rules",
      "Set of rules to be applied to infoTypes. The rules are applied in order.\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRule_GetTypes(),
      true,
      false,
    ),
  ];
}
