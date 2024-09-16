import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dataloss_PreventionInspectTemplateInspectConfigLimits,
  dataloss_PreventionInspectTemplateInspectConfigLimits_GetTypes,
} from './dataloss_PreventionInspectTemplateInspectConfigLimits';
import {
  dataloss_PreventionInspectTemplateInspectConfigRuleSet,
  dataloss_PreventionInspectTemplateInspectConfigRuleSet_GetTypes,
} from './dataloss_PreventionInspectTemplateInspectConfigRuleSet';
import {
  dataloss_PreventionInspectTemplateInspectConfigCustomInfoType,
  dataloss_PreventionInspectTemplateInspectConfigCustomInfoType_GetTypes,
} from './dataloss_PreventionInspectTemplateInspectConfigCustomInfoType';
import {
  dataloss_PreventionInspectTemplateInspectConfigInfoType,
  dataloss_PreventionInspectTemplateInspectConfigInfoType_GetTypes,
} from './dataloss_PreventionInspectTemplateInspectConfigInfoType';

export interface dataloss_PreventionInspectTemplateInspectConfig {
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
  ruleSets?: Array<dataloss_PreventionInspectTemplateInspectConfigRuleSet>;

  /*
List of options defining data content to scan. If empty, text, images, and other content will be included.
Each value may be one of: `CONTENT_TEXT`, `CONTENT_IMAGE`.
*/
  contentOptions?: Array<string>;

  /*
Custom info types to be used. See https://cloud.google.com/dlp/docs/creating-custom-infotypes to learn more.
Structure is documented below.
*/
  customInfoTypes?: Array<dataloss_PreventionInspectTemplateInspectConfigCustomInfoType>;

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
  infoTypes?: Array<dataloss_PreventionInspectTemplateInspectConfigInfoType>;

  /*
Configuration to control the number of findings returned.
Structure is documented below.
*/
  limits?: dataloss_PreventionInspectTemplateInspectConfigLimits;
}

export function dataloss_PreventionInspectTemplateInspectConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'limits',
      'Configuration to control the number of findings returned.\nStructure is documented below.',
      () => dataloss_PreventionInspectTemplateInspectConfigLimits_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'minLikelihood',
      'Only returns findings equal or above this threshold. See https://cloud.google.com/dlp/docs/likelihood for more info\nDefault value is `POSSIBLE`.\nPossible values are: `VERY_UNLIKELY`, `UNLIKELY`, `POSSIBLE`, `LIKELY`, `VERY_LIKELY`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'ruleSets',
      'Set of rules to apply to the findings for this InspectConfig. Exclusion rules, contained in the set are executed in the end,\nother rules are executed in the order they are specified for each info type.\nStructure is documented below.',
      () => dataloss_PreventionInspectTemplateInspectConfigRuleSet_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'contentOptions',
      'List of options defining data content to scan. If empty, text, images, and other content will be included.\nEach value may be one of: `CONTENT_TEXT`, `CONTENT_IMAGE`.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'customInfoTypes',
      'Custom info types to be used. See https://cloud.google.com/dlp/docs/creating-custom-infotypes to learn more.\nStructure is documented below.',
      () =>
        dataloss_PreventionInspectTemplateInspectConfigCustomInfoType_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'excludeInfoTypes',
      'When true, excludes type information of the findings.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'includeQuote',
      'When true, a contextual quote from the data that triggered a finding is included in the response.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'infoTypes',
      'Restricts what infoTypes to look for. The values must correspond to InfoType values returned by infoTypes.list\nor listed at https://cloud.google.com/dlp/docs/infotypes-reference.\nWhen no InfoTypes or CustomInfoTypes are specified in a request, the system may automatically choose what detectors to run.\nBy default this may be all types, but may change over time as detectors are updated.\nStructure is documented below.',
      () => dataloss_PreventionInspectTemplateInspectConfigInfoType_GetTypes(),
      false,
      false,
    ),
  ];
}
