import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface quicksight_getDataSetLogicalTableMapDataTransformCastColumnTypeOperation {
  //
  columnName?: string;

  //
  format?: string;

  //
  newColumnType?: string;
}

export function quicksight_getDataSetLogicalTableMapDataTransformCastColumnTypeOperation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'columnName',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'format', '', () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      'newColumnType',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
