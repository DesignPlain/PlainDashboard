import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransform,
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransform_GetTypes,
} from "./Dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransform";

export interface Dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformations {
  /*
For determination of how redaction of images should occur.
Structure is documented below.
*/
  Transforms?: Array<Dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransform>;
}

export function Dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformations_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Transforms",
      "For determination of how redaction of images should occur.\nStructure is documented below.",
      Dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransform_GetTypes(),
      true,
      false,
    ),
  ];
}
