import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType,
  Dataloss_PreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType_GetTypes,
} from "./Dataloss_PreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType";

export interface Dataloss_PreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType {
  // Max findings limit for the given infoType.
  MaxFindings?: number;

  /*
Type of information the findings limit applies to. Only one limit per infoType should be provided. If InfoTypeLimit does
not have an infoType, the DLP API applies the limit against all infoTypes that are found but not
specified in another InfoTypeLimit.
Structure is documented below.
*/
  InfoType?: Dataloss_PreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType;
}

export function Dataloss_PreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "MaxFindings",
      "Max findings limit for the given infoType.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "InfoType",
      "Type of information the findings limit applies to. Only one limit per infoType should be provided. If InfoTypeLimit does\nnot have an infoType, the DLP API applies the limit against all infoTypes that are found but not\nspecified in another InfoTypeLimit.\nStructure is documented below.",
      Dataloss_PreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType_GetTypes(),
      true,
      false,
    ),
  ];
}
