import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeInfoTypeSensitivityScore,
  dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeInfoTypeSensitivityScore_GetTypes,
} from './dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeInfoTypeSensitivityScore';

export interface dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeInfoType {
  /*
Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names
listed at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.
*/
  name?: string;

  /*
Optional custom sensitivity for this InfoType. This only applies to data profiling.
Structure is documented below.
*/
  sensitivityScore?: dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeInfoTypeSensitivityScore;

  // Version name for this InfoType.
  version?: string;
}

export function dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeInfoType_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names\nlisted at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'sensitivityScore',
      'Optional custom sensitivity for this InfoType. This only applies to data profiling.\nStructure is documented below.',
      () =>
        dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeInfoTypeSensitivityScore_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'version',
      'Version name for this InfoType.',
      () => [],
      false,
      false,
    ),
  ];
}
