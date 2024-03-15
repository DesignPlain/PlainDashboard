import { PreventionInspectTemplateInspectConfigCustomInfoTypeSurrogateType } from "./PreventionInspectTemplateInspectConfigCustomInfoTypeSurrogateType";
import { PreventionInspectTemplateInspectConfigCustomInfoTypeDictionary } from "./PreventionInspectTemplateInspectConfigCustomInfoTypeDictionary";
import { PreventionInspectTemplateInspectConfigCustomInfoTypeInfoType } from "./PreventionInspectTemplateInspectConfigCustomInfoTypeInfoType";
import { PreventionInspectTemplateInspectConfigCustomInfoTypeRegex } from "./PreventionInspectTemplateInspectConfigCustomInfoTypeRegex";
import { PreventionInspectTemplateInspectConfigCustomInfoTypeSensitivityScore } from "./PreventionInspectTemplateInspectConfigCustomInfoTypeSensitivityScore";
import { PreventionInspectTemplateInspectConfigCustomInfoTypeStoredType } from "./PreventionInspectTemplateInspectConfigCustomInfoTypeStoredType";

export interface PreventionInspectTemplateInspectConfigCustomInfoType {
  /*
Regular expression which defines the rule.
Structure is documented below.
*/
  Regex?: PreventionInspectTemplateInspectConfigCustomInfoTypeRegex;

  /*
Optional custom sensitivity for this InfoType. This only applies to data profiling.
Structure is documented below.
*/
  SensitivityScore?: PreventionInspectTemplateInspectConfigCustomInfoTypeSensitivityScore;

  /*
A reference to a StoredInfoType to use with scanning.
Structure is documented below.
*/
  StoredType?: PreventionInspectTemplateInspectConfigCustomInfoTypeStoredType;

  // Message for detecting output from deidentification transformations that support reversing.
  SurrogateType?: PreventionInspectTemplateInspectConfigCustomInfoTypeSurrogateType;

  /*
Dictionary which defines the rule.
Structure is documented below.
*/
  Dictionary?: PreventionInspectTemplateInspectConfigCustomInfoTypeDictionary;

  /*
If set to EXCLUSION_TYPE_EXCLUDE this infoType will not cause a finding to be returned. It still can be used for rules matching.
Possible values are: `EXCLUSION_TYPE_EXCLUDE`.
*/
  ExclusionType?: string;

  /*
CustomInfoType can either be a new infoType, or an extension of built-in infoType, when the name matches one of existing
infoTypes and that infoType is specified in `info_types` field. Specifying the latter adds findings to the
one detected by the system. If built-in info type is not specified in `info_types` list then the name is
treated as a custom info type.
Structure is documented below.
*/
  InfoType?: PreventionInspectTemplateInspectConfigCustomInfoTypeInfoType;

  /*
Likelihood to return for this CustomInfoType. This base value can be altered by a detection rule if the finding meets the criteria
specified by the rule.
Default value is `VERY_LIKELY`.
Possible values are: `VERY_UNLIKELY`, `UNLIKELY`, `POSSIBLE`, `LIKELY`, `VERY_LIKELY`.
*/
  Likelihood?: string;
}
