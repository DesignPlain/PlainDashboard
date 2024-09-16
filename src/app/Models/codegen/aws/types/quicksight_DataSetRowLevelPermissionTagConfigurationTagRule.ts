import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface quicksight_DataSetRowLevelPermissionTagConfigurationTagRule {
  // Column name that a tag key is assigned to.
  columnName?: string;

  // A string that you want to use to filter by all the values in a column in the dataset and don’t want to list the values one by one.
  matchAllValue?: string;

  // Unique key for a tag.
  tagKey?: string;

  // A string that you want to use to delimit the values when you pass the values at run time.
  tagMultiValueDelimiter?: string;
}

export function quicksight_DataSetRowLevelPermissionTagConfigurationTagRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'columnName',
      'Column name that a tag key is assigned to.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'matchAllValue',
      'A string that you want to use to filter by all the values in a column in the dataset and don’t want to list the values one by one.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'tagKey',
      'Unique key for a tag.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'tagMultiValueDelimiter',
      'A string that you want to use to delimit the values when you pass the values at run time.',
      () => [],
      false,
      false,
    ),
  ];
}
