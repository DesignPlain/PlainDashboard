import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  dataloss_PreventionJobTriggerInspectJobInspectConfigInfoType,
  dataloss_PreventionJobTriggerInspectJobInspectConfigInfoType_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobInspectConfigInfoType";
import {
  dataloss_PreventionJobTriggerInspectJobInspectConfigLimits,
  dataloss_PreventionJobTriggerInspectJobInspectConfigLimits_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobInspectConfigLimits";
import {
  dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSet,
  dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSet_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSet";
import {
  dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoType,
  dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoType_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoType";

export interface dataloss_PreventionJobTriggerInspectJobInspectConfig {
  /*
Configuration to control the number of findings returned.
Structure is documented below.
*/
  limits?: dataloss_PreventionJobTriggerInspectJobInspectConfigLimits;

  /*
Only returns findings equal or above this threshold. See https://cloud.google.com/dlp/docs/likelihood for more info
Default value is `POSSIBLE`.
Possible values are: `VERY_UNLIKELY`, `UNLIKELY`, `POSSIBLE`, `LIKELY`, `VERY_LIKELY`.
*/
  minLikelihood?: string;

  /*
Set of rules to apply to the findings for this InspectConfig. Exclusion rules, contained in the set are executed in the end,
other rules are executed in the order they are specified for each info type.
Structure is documented below.
*/
  ruleSets?: Array<dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSet>;

  /*
Custom info types to be used. See https://cloud.google.com/dlp/docs/creating-custom-infotypes to learn more.
Structure is documented below.
*/
  customInfoTypes?: Array<dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoType>;

  // When true, excludes type information of the findings.
  excludeInfoTypes?: boolean;

  // When true, a contextual quote from the data that triggered a finding is included in the response.
  includeQuote?: boolean;

  /*
Restricts what infoTypes to look for. The values must correspond to InfoType values returned by infoTypes.list
or listed at https://cloud.google.com/dlp/docs/infotypes-reference.
When no InfoTypes or CustomInfoTypes are specified in a request, the system may automatically choose what detectors to run.
By default this may be all types, but may change over time as detectors are updated.
Structure is documented below.
*/
  infoTypes?: Array<dataloss_PreventionJobTriggerInspectJobInspectConfigInfoType>;
}

export function dataloss_PreventionJobTriggerInspectJobInspectConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "includeQuote",
      "When true, a contextual quote from the data that triggered a finding is included in the response.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "infoTypes",
      "Restricts what infoTypes to look for. The values must correspond to InfoType values returned by infoTypes.list\nor listed at https://cloud.google.com/dlp/docs/infotypes-reference.\nWhen no InfoTypes or CustomInfoTypes are specified in a request, the system may automatically choose what detectors to run.\nBy default this may be all types, but may change over time as detectors are updated.\nStructure is documented below.",
      () =>
        dataloss_PreventionJobTriggerInspectJobInspectConfigInfoType_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "limits",
      "Configuration to control the number of findings returned.\nStructure is documented below.",
      () =>
        dataloss_PreventionJobTriggerInspectJobInspectConfigLimits_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "minLikelihood",
      "Only returns findings equal or above this threshold. See https://cloud.google.com/dlp/docs/likelihood for more info\nDefault value is `POSSIBLE`.\nPossible values are: `VERY_UNLIKELY`, `UNLIKELY`, `POSSIBLE`, `LIKELY`, `VERY_LIKELY`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ruleSets",
      "Set of rules to apply to the findings for this InspectConfig. Exclusion rules, contained in the set are executed in the end,\nother rules are executed in the order they are specified for each info type.\nStructure is documented below.",
      () =>
        dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSet_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "customInfoTypes",
      "Custom info types to be used. See https://cloud.google.com/dlp/docs/creating-custom-infotypes to learn more.\nStructure is documented below.",
      () =>
        dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoType_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "excludeInfoTypes",
      "When true, excludes type information of the findings.",
      () => [],
      false,
      false,
    ),
  ];
}
