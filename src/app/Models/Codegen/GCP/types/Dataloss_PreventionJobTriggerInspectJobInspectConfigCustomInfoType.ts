import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeSensitivityScore,
  Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeSensitivityScore_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeSensitivityScore";
import {
  Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeStoredType,
  Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeStoredType_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeStoredType";
import {
  Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeSurrogateType,
  Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeSurrogateType_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeSurrogateType";
import {
  Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeDictionary,
  Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeDictionary_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeDictionary";
import {
  Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeInfoType,
  Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeInfoType_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeInfoType";
import {
  Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeRegex,
  Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeRegex_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeRegex";

export interface Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoType {
  /*
Likelihood to return for this CustomInfoType. This base value can be altered by a detection rule if the finding meets the criteria
specified by the rule.
Default value is `VERY_LIKELY`.
Possible values are: `VERY_UNLIKELY`, `UNLIKELY`, `POSSIBLE`, `LIKELY`, `VERY_LIKELY`.
*/
  Likelihood?: string;

  /*
Regular expression which defines the rule.
Structure is documented below.
*/
  Regex?: Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeRegex;

  /*
Optional custom sensitivity for this InfoType. This only applies to data profiling.
Structure is documented below.
*/
  SensitivityScore?: Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeSensitivityScore;

  /*
A reference to a StoredInfoType to use with scanning.
Structure is documented below.
*/
  StoredType?: Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeStoredType;

  // Message for detecting output from deidentification transformations that support reversing.
  SurrogateType?: Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeSurrogateType;

  /*
Dictionary which defines the rule.
Structure is documented below.
*/
  Dictionary?: Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeDictionary;

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
  InfoType?: Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeInfoType;
}

export function Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoType_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "SensitivityScore",
      "Optional custom sensitivity for this InfoType. This only applies to data profiling.\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeSensitivityScore_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "StoredType",
      "A reference to a StoredInfoType to use with scanning.\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeStoredType_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SurrogateType",
      "Message for detecting output from deidentification transformations that support reversing.",
      Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeSurrogateType_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Dictionary",
      "Dictionary which defines the rule.\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeDictionary_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ExclusionType",
      "If set to EXCLUSION_TYPE_EXCLUDE this infoType will not cause a finding to be returned. It still can be used for rules matching.\nPossible values are: `EXCLUSION_TYPE_EXCLUDE`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "InfoType",
      "CustomInfoType can either be a new infoType, or an extension of built-in infoType, when the name matches one of existing\ninfoTypes and that infoType is specified in `info_types` field. Specifying the latter adds findings to the\none detected by the system. If built-in info type is not specified in `info_types` list then the name is\ntreated as a custom info type.\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeInfoType_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Likelihood",
      "Likelihood to return for this CustomInfoType. This base value can be altered by a detection rule if the finding meets the criteria\nspecified by the rule.\nDefault value is `VERY_LIKELY`.\nPossible values are: `VERY_UNLIKELY`, `UNLIKELY`, `POSSIBLE`, `LIKELY`, `VERY_LIKELY`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Regex",
      "Regular expression which defines the rule.\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeRegex_GetTypes(),
      false,
      false,
    ),
  ];
}
