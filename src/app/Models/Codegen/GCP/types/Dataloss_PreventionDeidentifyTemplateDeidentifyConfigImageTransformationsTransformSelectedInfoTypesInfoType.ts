import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformSelectedInfoTypesInfoTypeSensitivityScore,
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformSelectedInfoTypesInfoTypeSensitivityScore_GetTypes,
} from "./dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformSelectedInfoTypesInfoTypeSensitivityScore";

export interface dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformSelectedInfoTypesInfoType {
  // Name of the information type.
  name?: string;

  /*
Optional custom sensitivity for this InfoType. This only applies to data profiling.
Structure is documented below.
*/
  sensitivityScore?: dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformSelectedInfoTypesInfoTypeSensitivityScore;

  // Version name for this InfoType.
  version?: string;
}

export function dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformSelectedInfoTypesInfoType_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "version",
      "Version name for this InfoType.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the information type.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sensitivityScore",
      "Optional custom sensitivity for this InfoType. This only applies to data profiling.\nStructure is documented below.",
      dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformSelectedInfoTypesInfoTypeSensitivityScore_GetTypes(),
      false,
      false,
    ),
  ];
}
