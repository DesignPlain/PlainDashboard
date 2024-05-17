import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformation,
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformation_GetTypes,
} from "./Dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformation";

export interface Dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformations {
  /*
Transformation for each infoType. Cannot specify more than one for a given infoType.
Structure is documented below.
*/
  Transformations?: Array<Dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformation>;
}

export function Dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformations_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Transformations",
      "Transformation for each infoType. Cannot specify more than one for a given infoType.\nStructure is documented below.",
      Dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformation_GetTypes(),
      true,
      false,
    ),
  ];
}
