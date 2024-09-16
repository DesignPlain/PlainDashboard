import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface quicksight_getDataSetLogicalTableMapDataTransformUntagColumnOperation {
  //
  columnName?: string;

  //
  tagNames?: Array<string>;
}

export function quicksight_getDataSetLogicalTableMapDataTransformUntagColumnOperation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'columnName',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'tagNames',
      '',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
