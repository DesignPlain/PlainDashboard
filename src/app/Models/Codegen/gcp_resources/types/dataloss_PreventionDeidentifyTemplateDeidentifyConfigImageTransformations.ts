import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransform,
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransform_GetTypes,
} from "./dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransform";

export interface dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformations {
  /*
For determination of how redaction of images should occur.
Structure is documented below.
*/
  transforms?: Array<dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransform>;
}

export function dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformations_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "transforms",
      "For determination of how redaction of images should occur.\nStructure is documented below.",
      dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransform_GetTypes(),
      true,
      false,
    ),
  ];
}
