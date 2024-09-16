import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface quicksight_DataSourceParametersAthena {
  // The work-group to which to connect.
  workGroup?: string;
}

export function quicksight_DataSourceParametersAthena_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'workGroup',
      'The work-group to which to connect.',
      () => [],
      false,
      false,
    ),
  ];
}
