import { PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformation } from "./PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformation";

export interface PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformations {
  /*
Transformation for each infoType. Cannot specify more than one for a given infoType.
Structure is documented below.
*/
  Transformations?: Array<PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformation>;
}
