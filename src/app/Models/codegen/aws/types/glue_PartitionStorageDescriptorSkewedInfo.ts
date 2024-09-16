import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface glue_PartitionStorageDescriptorSkewedInfo {
  // A list of names of columns that contain skewed values.
  skewedColumnNames?: Array<string>;

  // A list of values that appear so frequently as to be considered skewed.
  skewedColumnValueLocationMaps?: Map<string, string>;

  // A map of skewed values to the columns that contain them.
  skewedColumnValues?: Array<string>;
}

export function glue_PartitionStorageDescriptorSkewedInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      'skewedColumnValueLocationMaps',
      'A list of values that appear so frequently as to be considered skewed.',
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'skewedColumnValues',
      'A map of skewed values to the columns that contain them.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'skewedColumnNames',
      'A list of names of columns that contain skewed values.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
