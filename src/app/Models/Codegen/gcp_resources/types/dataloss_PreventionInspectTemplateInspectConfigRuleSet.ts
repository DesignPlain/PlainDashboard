import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dataloss_PreventionInspectTemplateInspectConfigRuleSetInfoType,
  dataloss_PreventionInspectTemplateInspectConfigRuleSetInfoType_GetTypes,
} from "./dataloss_PreventionInspectTemplateInspectConfigRuleSetInfoType";
import {
  dataloss_PreventionInspectTemplateInspectConfigRuleSetRule,
  dataloss_PreventionInspectTemplateInspectConfigRuleSetRule_GetTypes,
} from "./dataloss_PreventionInspectTemplateInspectConfigRuleSetRule";

export interface dataloss_PreventionInspectTemplateInspectConfigRuleSet {
  /*
List of infoTypes this rule set is applied to.
Structure is documented below.
*/
  infoTypes?: Array<dataloss_PreventionInspectTemplateInspectConfigRuleSetInfoType>;

  /*
Set of rules to be applied to infoTypes. The rules are applied in order.
Structure is documented below.
*/
  rules?: Array<dataloss_PreventionInspectTemplateInspectConfigRuleSetRule>;
}

export function dataloss_PreventionInspectTemplateInspectConfigRuleSet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "rules",
      "Set of rules to be applied to infoTypes. The rules are applied in order.\nStructure is documented below.",
      dataloss_PreventionInspectTemplateInspectConfigRuleSetRule_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "infoTypes",
      "List of infoTypes this rule set is applied to.\nStructure is documented below.",
      dataloss_PreventionInspectTemplateInspectConfigRuleSetInfoType_GetTypes(),
      true,
      false,
    ),
  ];
}
