import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformation,
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformation_GetTypes,
} from "./dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformation";

export interface dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformations {
  /*
Transformation for each infoType. Cannot specify more than one for a given infoType.
Structure is documented below.
*/
  transformations?: Array<dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformation>;
}

export function dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformations_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "transformations",
      "Transformation for each infoType. Cannot specify more than one for a given infoType.\nStructure is documented below.",
      () =>
        dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformation_GetTypes(),
      true,
      false,
    ),
  ];
}
