import { PreventionInspectTemplateInspectConfigRuleSetInfoTypeSensitivityScore } from "./PreventionInspectTemplateInspectConfigRuleSetInfoTypeSensitivityScore";

export interface PreventionInspectTemplateInspectConfigRuleSetInfoType {
  /*
Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed
at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.
*/
  Name?: string;

  /*
Optional custom sensitivity for this InfoType. This only applies to data profiling.
Structure is documented below.
*/
  SensitivityScore?: PreventionInspectTemplateInspectConfigRuleSetInfoTypeSensitivityScore;

  // Version name for this InfoType.
  Version?: string;
}
