import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeInfoTypesInfoType,
  dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeInfoTypesInfoType_GetTypes,
} from "./dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeInfoTypesInfoType";

export interface dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeInfoTypes {
  /*
If a finding is matched by any of the infoType detectors listed here, the finding will be excluded from the scan results.
Structure is documented below.
*/
  infoTypes?: Array<dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeInfoTypesInfoType>;
}

export function dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeInfoTypes_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "infoTypes",
      "If a finding is matched by any of the infoType detectors listed here, the finding will be excluded from the scan results.\nStructure is documented below.",
      dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeInfoTypesInfoType_GetTypes(),
      true,
      false,
    ),
  ];
}
