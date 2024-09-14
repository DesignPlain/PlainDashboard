import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  dataloss_PreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType,
  dataloss_PreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType_GetTypes,
} from "./dataloss_PreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType";

export interface dataloss_PreventionInspectTemplateInspectConfigLimits {
  // Max number of findings that will be returned per request/job. The maximum returned is 2000.
  maxFindingsPerRequest?: number;

  /*
Configuration of findings limit given for specified infoTypes.
Structure is documented below.
*/
  maxFindingsPerInfoTypes?: Array<dataloss_PreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType>;

  // Max number of findings that will be returned for each item scanned. The maximum returned is 2000.
  maxFindingsPerItem?: number;
}

export function dataloss_PreventionInspectTemplateInspectConfigLimits_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxFindingsPerRequest",
      "Max number of findings that will be returned per request/job. The maximum returned is 2000.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "maxFindingsPerInfoTypes",
      "Configuration of findings limit given for specified infoTypes.\nStructure is documented below.",
      () =>
        dataloss_PreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxFindingsPerItem",
      "Max number of findings that will be returned for each item scanned. The maximum returned is 2000.",
      () => [],
      true,
      false,
    ),
  ];
}
