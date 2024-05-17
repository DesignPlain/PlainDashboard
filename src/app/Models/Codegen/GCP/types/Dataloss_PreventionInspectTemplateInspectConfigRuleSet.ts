import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionInspectTemplateInspectConfigRuleSetInfoType,
  Dataloss_PreventionInspectTemplateInspectConfigRuleSetInfoType_GetTypes,
} from "./Dataloss_PreventionInspectTemplateInspectConfigRuleSetInfoType";
import {
  Dataloss_PreventionInspectTemplateInspectConfigRuleSetRule,
  Dataloss_PreventionInspectTemplateInspectConfigRuleSetRule_GetTypes,
} from "./Dataloss_PreventionInspectTemplateInspectConfigRuleSetRule";

export interface Dataloss_PreventionInspectTemplateInspectConfigRuleSet {
  /*
List of infoTypes this rule set is applied to.
Structure is documented below.
*/
  InfoTypes?: Array<Dataloss_PreventionInspectTemplateInspectConfigRuleSetInfoType>;

  /*
Set of rules to be applied to infoTypes. The rules are applied in order.
Structure is documented below.
*/
  Rules?: Array<Dataloss_PreventionInspectTemplateInspectConfigRuleSetRule>;
}

export function Dataloss_PreventionInspectTemplateInspectConfigRuleSet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "InfoTypes",
      "List of infoTypes this rule set is applied to.\nStructure is documented below.",
      Dataloss_PreventionInspectTemplateInspectConfigRuleSetInfoType_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Rules",
      "Set of rules to be applied to infoTypes. The rules are applied in order.\nStructure is documented below.",
      Dataloss_PreventionInspectTemplateInspectConfigRuleSetRule_GetTypes(),
      true,
      false,
    ),
  ];
}
