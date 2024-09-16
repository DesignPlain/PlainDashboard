import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface quicksight_DataSetOutputColumn {
  // Field folder description.
  description?: string;

  // Display name for the dataset.
  name?: string;

  //
  type?: string;
}

export function quicksight_DataSetOutputColumn_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'description',
      'Field folder description.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'Display name for the dataset.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, 'type', '', () => [], false, false),
  ];
}
