import { PreventionJobTriggerInspectJobInspectConfigCustomInfoType } from "./PreventionJobTriggerInspectJobInspectConfigCustomInfoType";
import { PreventionJobTriggerInspectJobInspectConfigInfoType } from "./PreventionJobTriggerInspectJobInspectConfigInfoType";
import { PreventionJobTriggerInspectJobInspectConfigLimits } from "./PreventionJobTriggerInspectJobInspectConfigLimits";
import { PreventionJobTriggerInspectJobInspectConfigRuleSet } from "./PreventionJobTriggerInspectJobInspectConfigRuleSet";

export interface PreventionJobTriggerInspectJobInspectConfig {
  /*
Custom info types to be used. See https://cloud.google.com/dlp/docs/creating-custom-infotypes to learn more.
Structure is documented below.
*/
  CustomInfoTypes?: Array<PreventionJobTriggerInspectJobInspectConfigCustomInfoType>;

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
  InfoTypes?: Array<PreventionJobTriggerInspectJobInspectConfigInfoType>;

  /*
Configuration to control the number of findings returned.
Structure is documented below.
*/
  Limits?: PreventionJobTriggerInspectJobInspectConfigLimits;

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
  RuleSets?: Array<PreventionJobTriggerInspectJobInspectConfigRuleSet>;
}
