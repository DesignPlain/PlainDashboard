import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeStoredType,
  dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeStoredType_GetTypes,
} from "./dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeStoredType";
import {
  dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeSurrogateType,
  dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeSurrogateType_GetTypes,
} from "./dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeSurrogateType";
import {
  dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeDictionary,
  dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeDictionary_GetTypes,
} from "./dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeDictionary";
import {
  dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeInfoType,
  dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeInfoType_GetTypes,
} from "./dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeInfoType";
import {
  dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeRegex,
  dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeRegex_GetTypes,
} from "./dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeRegex";
import {
  dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeSensitivityScore,
  dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeSensitivityScore_GetTypes,
} from "./dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeSensitivityScore";

export interface dataloss_PreventionInspectTemplateInspectConfigCustomInfoType {
  /*
Optional custom sensitivity for this InfoType. This only applies to data profiling.
Structure is documented below.
*/
  sensitivityScore?: dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeSensitivityScore;

  /*
A reference to a StoredInfoType to use with scanning.
Structure is documented below.
*/
  storedType?: dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeStoredType;

  // Message for detecting output from deidentification transformations that support reversing.
  surrogateType?: dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeSurrogateType;

  /*
Dictionary which defines the rule.
Structure is documented below.
*/
  dictionary?: dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeDictionary;

  /*
If set to EXCLUSION_TYPE_EXCLUDE this infoType will not cause a finding to be returned. It still can be used for rules matching.
Possible values are: `EXCLUSION_TYPE_EXCLUDE`.
*/
  exclusionType?: string;

  /*
CustomInfoType can either be a new infoType, or an extension of built-in infoType, when the name matches one of existing
infoTypes and that infoType is specified in `info_types` field. Specifying the latter adds findings to the
one detected by the system. If built-in info type is not specified in `info_types` list then the name is
treated as a custom info type.
Structure is documented below.
*/
  infoType?: dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeInfoType;

  /*
Likelihood to return for this CustomInfoType. This base value can be altered by a detection rule if the finding meets the criteria
specified by the rule.
Default value is `VERY_LIKELY`.
Possible values are: `VERY_UNLIKELY`, `UNLIKELY`, `POSSIBLE`, `LIKELY`, `VERY_LIKELY`.
*/
  likelihood?: string;

  /*
Regular expression which defines the rule.
Structure is documented below.
*/
  regex?: dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeRegex;
}

export function dataloss_PreventionInspectTemplateInspectConfigCustomInfoType_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "dictionary",
      "Dictionary which defines the rule.\nStructure is documented below.",
      dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeDictionary_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "exclusionType",
      "If set to EXCLUSION_TYPE_EXCLUDE this infoType will not cause a finding to be returned. It still can be used for rules matching.\nPossible values are: `EXCLUSION_TYPE_EXCLUDE`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "infoType",
      "CustomInfoType can either be a new infoType, or an extension of built-in infoType, when the name matches one of existing\ninfoTypes and that infoType is specified in `info_types` field. Specifying the latter adds findings to the\none detected by the system. If built-in info type is not specified in `info_types` list then the name is\ntreated as a custom info type.\nStructure is documented below.",
      dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeInfoType_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "likelihood",
      "Likelihood to return for this CustomInfoType. This base value can be altered by a detection rule if the finding meets the criteria\nspecified by the rule.\nDefault value is `VERY_LIKELY`.\nPossible values are: `VERY_UNLIKELY`, `UNLIKELY`, `POSSIBLE`, `LIKELY`, `VERY_LIKELY`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "regex",
      "Regular expression which defines the rule.\nStructure is documented below.",
      dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeRegex_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sensitivityScore",
      "Optional custom sensitivity for this InfoType. This only applies to data profiling.\nStructure is documented below.",
      dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeSensitivityScore_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "storedType",
      "A reference to a StoredInfoType to use with scanning.\nStructure is documented below.",
      dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeStoredType_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "surrogateType",
      "Message for detecting output from deidentification transformations that support reversing.",
      dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeSurrogateType_GetTypes(),
      false,
      true,
    ),
  ];
}
