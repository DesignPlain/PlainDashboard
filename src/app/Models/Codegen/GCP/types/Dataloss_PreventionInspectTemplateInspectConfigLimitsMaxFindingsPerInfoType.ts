import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataloss_PreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType,
  dataloss_PreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType_GetTypes,
} from "./dataloss_PreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType";

export interface dataloss_PreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType {
  /*
Type of information the findings limit applies to. Only one limit per infoType should be provided. If InfoTypeLimit does
not have an infoType, the DLP API applies the limit against all infoTypes that are found but not
specified in another InfoTypeLimit.
Structure is documented below.
*/
  infoType?: dataloss_PreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType;

  // Max findings limit for the given infoType.
  maxFindings?: number;
}

export function dataloss_PreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxFindings",
      "Max findings limit for the given infoType.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "infoType",
      "Type of information the findings limit applies to. Only one limit per infoType should be provided. If InfoTypeLimit does\nnot have an infoType, the DLP API applies the limit against all infoTypes that are found but not\nspecified in another InfoTypeLimit.\nStructure is documented below.",
      dataloss_PreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType_GetTypes(),
      true,
      false,
    ),
  ];
}
