import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetInfoTypeSensitivityScore,
  Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetInfoTypeSensitivityScore_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetInfoTypeSensitivityScore";

export interface Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetInfoType {
  /*
Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed
at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.
*/
  Name?: string;

  /*
Optional custom sensitivity for this InfoType. This only applies to data profiling.
Structure is documented below.
*/
  SensitivityScore?: Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetInfoTypeSensitivityScore;

  // Version of the information type to use. By default, the version is set to stable.
  Version?: string;
}

export function Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetInfoType_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "SensitivityScore",
      "Optional custom sensitivity for this InfoType. This only applies to data profiling.\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetInfoTypeSensitivityScore_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Version",
      "Version of the information type to use. By default, the version is set to stable.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed\nat https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.",
      [],
      true,
      false,
    ),
  ];
}
