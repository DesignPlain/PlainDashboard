import { PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationInfoType } from "./PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationInfoType";
import { PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformation } from "./PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformation";

export interface PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformation {
  /*
InfoTypes to apply the transformation to. Leaving this empty will apply the transformation to apply to
all findings that correspond to infoTypes that were requested in InspectConfig.
Structure is documented below.
*/
  InfoTypes?: Array<PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationInfoType>;

  /*
Apply the transformation to the entire field.
The `primitive_transformation` block must only contain one argument, corresponding to the type of transformation.
Structure is documented below.
*/
  PrimitiveTransformation?: PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformation;
}
