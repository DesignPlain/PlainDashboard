import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionInspectTemplateInspectConfigInfoTypeSensitivityScore,
  Dataloss_PreventionInspectTemplateInspectConfigInfoTypeSensitivityScore_GetTypes,
} from "./Dataloss_PreventionInspectTemplateInspectConfigInfoTypeSensitivityScore";

export interface Dataloss_PreventionInspectTemplateInspectConfigInfoType {
  /*
Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed
at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.
*/
  Name?: string;

  /*
Optional custom sensitivity for this InfoType. This only applies to data profiling.
Structure is documented below.
*/
  SensitivityScore?: Dataloss_PreventionInspectTemplateInspectConfigInfoTypeSensitivityScore;

  // Version name for this InfoType.
  Version?: string;
}

export function Dataloss_PreventionInspectTemplateInspectConfigInfoType_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed\nat https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SensitivityScore",
      "Optional custom sensitivity for this InfoType. This only applies to data profiling.\nStructure is documented below.",
      Dataloss_PreventionInspectTemplateInspectConfigInfoTypeSensitivityScore_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Version",
      "Version name for this InfoType.",
      [],
      false,
      false,
    ),
  ];
}
