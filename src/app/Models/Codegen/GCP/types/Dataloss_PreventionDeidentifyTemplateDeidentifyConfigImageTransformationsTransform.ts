import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformAllInfoTypes,
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformAllInfoTypes_GetTypes,
} from "./Dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformAllInfoTypes";
import {
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformAllText,
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformAllText_GetTypes,
} from "./Dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformAllText";
import {
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformRedactionColor,
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformRedactionColor_GetTypes,
} from "./Dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformRedactionColor";
import {
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformSelectedInfoTypes,
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformSelectedInfoTypes_GetTypes,
} from "./Dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformSelectedInfoTypes";

export interface Dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransform {
  // Apply transformation to all findings not specified in other ImageTransformation's selectedInfoTypes.
  AllInfoTypes?: Dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformAllInfoTypes;

  // Apply transformation to all text that doesn't match an infoType.
  AllText?: Dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformAllText;

  /*
The color to use when redacting content from an image. If not specified, the default is black.
Structure is documented below.
*/
  RedactionColor?: Dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformRedactionColor;

  /*
Apply transformation to the selected infoTypes.
Structure is documented below.
*/
  SelectedInfoTypes?: Dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformSelectedInfoTypes;
}

export function Dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransform_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "AllInfoTypes",
      "Apply transformation to all findings not specified in other ImageTransformation's selectedInfoTypes.",
      Dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformAllInfoTypes_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "AllText",
      "Apply transformation to all text that doesn't match an infoType.",
      Dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformAllText_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "RedactionColor",
      "The color to use when redacting content from an image. If not specified, the default is black.\nStructure is documented below.",
      Dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformRedactionColor_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SelectedInfoTypes",
      "Apply transformation to the selected infoTypes.\nStructure is documented below.",
      Dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformSelectedInfoTypes_GetTypes(),
      false,
      false,
    ),
  ];
}
