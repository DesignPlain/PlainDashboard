import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface quicksight_AnalysisParametersDecimalParameter {
  /*
Display name for the analysis.

The following arguments are optional:
*/
  name?: string;

  //
  values?: Array<number>;
}

export function quicksight_AnalysisParametersDecimalParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'Display name for the analysis.\n\nThe following arguments are optional:',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'values',
      '',
      () => InputType_Number_GetTypes(),
      true,
      false,
    ),
  ];
}
