import { PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformSelectedInfoTypesInfoType } from "./PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformSelectedInfoTypesInfoType";

export interface PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformSelectedInfoTypes {
  /*
InfoTypes to apply the transformation to. Leaving this empty will apply the transformation to apply to
all findings that correspond to infoTypes that were requested in InspectConfig.
Structure is documented below.
*/
  InfoTypes?: Array<PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformSelectedInfoTypesInfoType>;
}
