import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType,
  Dataloss_PreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType_GetTypes,
} from "./Dataloss_PreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType";

export interface Dataloss_PreventionInspectTemplateInspectConfigLimits {
  /*
Configuration of findings limit given for specified infoTypes.
Structure is documented below.
*/
  MaxFindingsPerInfoTypes?: Array<Dataloss_PreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType>;

  // Max number of findings that will be returned for each item scanned. The maximum returned is 2000.
  MaxFindingsPerItem?: number;

  // Max number of findings that will be returned per request/job. The maximum returned is 2000.
  MaxFindingsPerRequest?: number;
}

export function Dataloss_PreventionInspectTemplateInspectConfigLimits_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "MaxFindingsPerItem",
      "Max number of findings that will be returned for each item scanned. The maximum returned is 2000.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxFindingsPerRequest",
      "Max number of findings that will be returned per request/job. The maximum returned is 2000.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "MaxFindingsPerInfoTypes",
      "Configuration of findings limit given for specified infoTypes.\nStructure is documented below.",
      Dataloss_PreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType_GetTypes(),
      false,
      false,
    ),
  ];
}
