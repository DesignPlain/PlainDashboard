import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataloss_PreventionJobTriggerInspectJobInspectConfigInfoTypeSensitivityScore,
  dataloss_PreventionJobTriggerInspectJobInspectConfigInfoTypeSensitivityScore_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobInspectConfigInfoTypeSensitivityScore";

export interface dataloss_PreventionJobTriggerInspectJobInspectConfigInfoType {
  /*
Optional custom sensitivity for this InfoType. This only applies to data profiling.
Structure is documented below.
*/
  sensitivityScore?: dataloss_PreventionJobTriggerInspectJobInspectConfigInfoTypeSensitivityScore;

  // Version of the information type to use. By default, the version is set to stable.
  version?: string;

  /*
Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed
at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.
*/
  name?: string;
}

export function dataloss_PreventionJobTriggerInspectJobInspectConfigInfoType_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "sensitivityScore",
      "Optional custom sensitivity for this InfoType. This only applies to data profiling.\nStructure is documented below.",
      dataloss_PreventionJobTriggerInspectJobInspectConfigInfoTypeSensitivityScore_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "version",
      "Version of the information type to use. By default, the version is set to stable.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed\nat https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.",
      [],
      true,
      false,
    ),
  ];
}
