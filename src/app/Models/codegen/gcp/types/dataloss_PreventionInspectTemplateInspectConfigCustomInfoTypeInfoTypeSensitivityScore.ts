import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeInfoTypeSensitivityScore {
  /*
The sensitivity score applied to the resource.
Possible values are: `SENSITIVITY_LOW`, `SENSITIVITY_MODERATE`, `SENSITIVITY_HIGH`.
*/
  score?: string;
}

export function dataloss_PreventionInspectTemplateInspectConfigCustomInfoTypeInfoTypeSensitivityScore_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'score',
      'The sensitivity score applied to the resource.\nPossible values are: `SENSITIVITY_LOW`, `SENSITIVITY_MODERATE`, `SENSITIVITY_HIGH`.',
      () => [],
      true,
      false,
    ),
  ];
}
