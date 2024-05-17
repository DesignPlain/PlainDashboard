import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoType,
  Dataloss_PreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoType_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoType";

export interface Dataloss_PreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoType {
  /*
Type of information the findings limit applies to. Only one limit per infoType should be provided. If InfoTypeLimit does
not have an infoType, the DLP API applies the limit against all infoTypes that are found but not
specified in another InfoTypeLimit.
Structure is documented below.
*/
  InfoType?: Dataloss_PreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoType;

  // Max findings limit for the given infoType.
  MaxFindings?: number;
}

export function Dataloss_PreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoType_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "InfoType",
      "Type of information the findings limit applies to. Only one limit per infoType should be provided. If InfoTypeLimit does\nnot have an infoType, the DLP API applies the limit against all infoTypes that are found but not\nspecified in another InfoTypeLimit.\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoType_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxFindings",
      "Max findings limit for the given infoType.",
      [],
      false,
      false,
    ),
  ];
}
