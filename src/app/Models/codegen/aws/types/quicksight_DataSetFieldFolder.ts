import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface quicksight_DataSetFieldFolder {
  // An array of column names to add to the folder. A column can only be in one folder.
  columns?: Array<string>;

  // Field folder description.
  description?: string;

  // Key of the field folder map.
  fieldFoldersId?: string;
}

export function quicksight_DataSetFieldFolder_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'fieldFoldersId',
      'Key of the field folder map.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'columns',
      'An array of column names to add to the folder. A column can only be in one folder.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'description',
      'Field folder description.',
      () => [],
      false,
      false,
    ),
  ];
}
