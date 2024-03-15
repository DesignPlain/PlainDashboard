import { PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationInfoTypeSensitivityScore } from "./PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationInfoTypeSensitivityScore";

export interface PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationInfoType {
  // Name of the information type.
  Name?: string;

  /*
Optional custom sensitivity for this InfoType. This only applies to data profiling.
Structure is documented below.
*/
  SensitivityScore?: PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationInfoTypeSensitivityScore;

  // Version name for this InfoType.
  Version?: string;
}
