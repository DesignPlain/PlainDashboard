import { PreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoType } from "./PreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoType";

export interface PreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoType {
  /*
Type of information the findings limit applies to. Only one limit per infoType should be provided. If InfoTypeLimit does
not have an infoType, the DLP API applies the limit against all infoTypes that are found but not
specified in another InfoTypeLimit.
Structure is documented below.
*/
  InfoType?: PreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoType;

  // Max findings limit for the given infoType.
  MaxFindings?: number;
}
