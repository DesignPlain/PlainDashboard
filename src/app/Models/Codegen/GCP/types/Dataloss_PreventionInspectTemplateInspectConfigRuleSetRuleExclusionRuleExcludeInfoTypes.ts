import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeInfoTypesInfoType,
  Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeInfoTypesInfoType_GetTypes,
} from "./Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeInfoTypesInfoType";

export interface Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeInfoTypes {
  /*
If a finding is matched by any of the infoType detectors listed here, the finding will be excluded from the scan results.
Structure is documented below.
*/
  InfoTypes?: Array<Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeInfoTypesInfoType>;
}

export function Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeInfoTypes_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "InfoTypes",
      "If a finding is matched by any of the infoType detectors listed here, the finding will be excluded from the scan results.\nStructure is documented below.",
      Dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleExclusionRuleExcludeInfoTypesInfoType_GetTypes(),
      true,
      false,
    ),
  ];
}
