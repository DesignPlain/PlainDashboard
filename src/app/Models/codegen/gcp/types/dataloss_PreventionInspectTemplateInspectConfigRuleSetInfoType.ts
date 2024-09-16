import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dataloss_PreventionInspectTemplateInspectConfigRuleSetInfoTypeSensitivityScore,
  dataloss_PreventionInspectTemplateInspectConfigRuleSetInfoTypeSensitivityScore_GetTypes,
} from './dataloss_PreventionInspectTemplateInspectConfigRuleSetInfoTypeSensitivityScore';

export interface dataloss_PreventionInspectTemplateInspectConfigRuleSetInfoType {
  // Version name for this InfoType.
  version?: string;

  /*
Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed
at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.
*/
  name?: string;

  /*
Optional custom sensitivity for this InfoType. This only applies to data profiling.
Structure is documented below.
*/
  sensitivityScore?: dataloss_PreventionInspectTemplateInspectConfigRuleSetInfoTypeSensitivityScore;
}

export function dataloss_PreventionInspectTemplateInspectConfigRuleSetInfoType_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'version',
      'Version name for this InfoType.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed\nat https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'sensitivityScore',
      'Optional custom sensitivity for this InfoType. This only applies to data profiling.\nStructure is documented below.',
      () =>
        dataloss_PreventionInspectTemplateInspectConfigRuleSetInfoTypeSensitivityScore_GetTypes(),
      false,
      false,
    ),
  ];
}
