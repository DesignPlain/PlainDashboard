import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformAllInfoTypes,
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformAllInfoTypes_GetTypes,
} from "./dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformAllInfoTypes";
import {
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformAllText,
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformAllText_GetTypes,
} from "./dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformAllText";
import {
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformRedactionColor,
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformRedactionColor_GetTypes,
} from "./dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformRedactionColor";
import {
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformSelectedInfoTypes,
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformSelectedInfoTypes_GetTypes,
} from "./dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformSelectedInfoTypes";

export interface dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransform {
  // Apply transformation to all text that doesn't match an infoType.
  allText?: dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformAllText;

  /*
The color to use when redacting content from an image. If not specified, the default is black.
Structure is documented below.
*/
  redactionColor?: dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformRedactionColor;

  /*
Apply transformation to the selected infoTypes.
Structure is documented below.
*/
  selectedInfoTypes?: dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformSelectedInfoTypes;

  // Apply transformation to all findings not specified in other ImageTransformation's selectedInfoTypes.
  allInfoTypes?: dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformAllInfoTypes;
}

export function dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransform_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "selectedInfoTypes",
      "Apply transformation to the selected infoTypes.\nStructure is documented below.",
      () =>
        dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformSelectedInfoTypes_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "allInfoTypes",
      "Apply transformation to all findings not specified in other ImageTransformation's selectedInfoTypes.",
      () =>
        dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformAllInfoTypes_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "allText",
      "Apply transformation to all text that doesn't match an infoType.",
      () =>
        dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformAllText_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "redactionColor",
      "The color to use when redacting content from an image. If not specified, the default is black.\nStructure is documented below.",
      () =>
        dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformRedactionColor_GetTypes(),
      false,
      false,
    ),
  ];
}
