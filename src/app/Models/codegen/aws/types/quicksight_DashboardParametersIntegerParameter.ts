import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface quicksight_DashboardParametersIntegerParameter {
  // Display name for the dashboard.
  name?: string;

  //
  values?: Array<number>;
}

export function quicksight_DashboardParametersIntegerParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'Display name for the dashboard.',
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
