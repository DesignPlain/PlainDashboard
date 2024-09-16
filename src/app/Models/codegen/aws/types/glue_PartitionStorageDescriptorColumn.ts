import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface glue_PartitionStorageDescriptorColumn {
  // The datatype of data in the Column.
  type?: string;

  // Free-form text comment.
  comment?: string;

  //
  name?: string;
}

export function glue_PartitionStorageDescriptorColumn_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'type',
      'The datatype of data in the Column.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'comment',
      'Free-form text comment.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, 'name', '', () => [], true, false),
  ];
}
