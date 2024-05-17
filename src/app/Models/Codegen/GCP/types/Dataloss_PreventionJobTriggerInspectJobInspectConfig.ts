import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionJobTriggerInspectJobInspectConfigInfoType,
  Dataloss_PreventionJobTriggerInspectJobInspectConfigInfoType_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobInspectConfigInfoType";
import {
  Dataloss_PreventionJobTriggerInspectJobInspectConfigLimits,
  Dataloss_PreventionJobTriggerInspectJobInspectConfigLimits_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobInspectConfigLimits";
import {
  Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSet,
  Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSet_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSet";
import {
  Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoType,
  Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoType_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoType";

export interface Dataloss_PreventionJobTriggerInspectJobInspectConfig {
  /*
Custom info types to be used. See https://cloud.google.com/dlp/docs/creating-custom-infotypes to learn more.
Structure is documented below.
*/
  CustomInfoTypes?: Array<Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoType>;

  // When true, excludes type information of the findings.
  ExcludeInfoTypes?: boolean;

  // When true, a contextual quote from the data that triggered a finding is included in the response.
  IncludeQuote?: boolean;

  /*
Restricts what infoTypes to look for. The values must correspond to InfoType values returned by infoTypes.list
or listed at https://cloud.google.com/dlp/docs/infotypes-reference.
When no InfoTypes or CustomInfoTypes are specified in a request, the system may automatically choose what detectors to run.
By default this may be all types, but may change over time as detectors are updated.
Structure is documented below.
*/
  InfoTypes?: Array<Dataloss_PreventionJobTriggerInspectJobInspectConfigInfoType>;

  /*
Configuration to control the number of findings returned.
Structure is documented below.
*/
  Limits?: Dataloss_PreventionJobTriggerInspectJobInspectConfigLimits;

  /*
Only returns findings equal or above this threshold. See https://cloud.google.com/dlp/docs/likelihood for more info
Default value is `POSSIBLE`.
Possible values are: `VERY_UNLIKELY`, `UNLIKELY`, `POSSIBLE`, `LIKELY`, `VERY_LIKELY`.
*/
  MinLikelihood?: string;

  /*
Set of rules to apply to the findings for this InspectConfig. Exclusion rules, contained in the set are executed in the end,
other rules are executed in the order they are specified for each info type.
Structure is documented below.
*/
  RuleSets?: Array<Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSet>;
}

export function Dataloss_PreventionJobTriggerInspectJobInspectConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "CustomInfoTypes",
      "Custom info types to be used. See https://cloud.google.com/dlp/docs/creating-custom-infotypes to learn more.\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoType_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "ExcludeInfoTypes",
      "When true, excludes type information of the findings.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "IncludeQuote",
      "When true, a contextual quote from the data that triggered a finding is included in the response.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "InfoTypes",
      "Restricts what infoTypes to look for. The values must correspond to InfoType values returned by infoTypes.list\nor listed at https://cloud.google.com/dlp/docs/infotypes-reference.\nWhen no InfoTypes or CustomInfoTypes are specified in a request, the system may automatically choose what detectors to run.\nBy default this may be all types, but may change over time as detectors are updated.\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobInspectConfigInfoType_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Limits",
      "Configuration to control the number of findings returned.\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobInspectConfigLimits_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MinLikelihood",
      "Only returns findings equal or above this threshold. See https://cloud.google.com/dlp/docs/likelihood for more info\nDefault value is `POSSIBLE`.\nPossible values are: `VERY_UNLIKELY`, `UNLIKELY`, `POSSIBLE`, `LIKELY`, `VERY_LIKELY`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "RuleSets",
      "Set of rules to apply to the findings for this InspectConfig. Exclusion rules, contained in the set are executed in the end,\nother rules are executed in the order they are specified for each info type.\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSet_GetTypes(),
      false,
      false,
    ),
  ];
}
