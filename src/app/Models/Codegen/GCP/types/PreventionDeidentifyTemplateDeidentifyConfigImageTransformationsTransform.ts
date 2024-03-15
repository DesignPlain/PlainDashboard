import { PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformAllInfoTypes } from "./PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformAllInfoTypes";
import { PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformAllText } from "./PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformAllText";
import { PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformRedactionColor } from "./PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformRedactionColor";
import { PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformSelectedInfoTypes } from "./PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformSelectedInfoTypes";

export interface PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransform {
  // Apply transformation to all findings not specified in other ImageTransformation's selectedInfoTypes.
  AllInfoTypes?: PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformAllInfoTypes;

  // Apply transformation to all text that doesn't match an infoType.
  AllText?: PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformAllText;

  /*
The color to use when redacting content from an image. If not specified, the default is black.
Structure is documented below.
*/
  RedactionColor?: PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformRedactionColor;

  /*
Apply transformation to the selected infoTypes.
Structure is documented below.
*/
  SelectedInfoTypes?: PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformSelectedInfoTypes;
}
