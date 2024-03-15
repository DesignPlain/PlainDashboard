import { PreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoType } from "./PreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoType";

export interface PreventionJobTriggerInspectJobInspectConfigLimits {
  /*
Configuration of findings limit given for specified infoTypes.
Structure is documented below.
*/
  MaxFindingsPerInfoTypes?: Array<PreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoType>;

  // Max number of findings that will be returned for each item scanned. The maximum returned is 2000.
  MaxFindingsPerItem?: number;

  // Max number of findings that will be returned per request/job. The maximum returned is 2000.
  MaxFindingsPerRequest?: number;
}
