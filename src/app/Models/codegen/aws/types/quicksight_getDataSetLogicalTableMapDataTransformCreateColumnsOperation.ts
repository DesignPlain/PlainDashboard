import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  quicksight_getDataSetLogicalTableMapDataTransformCreateColumnsOperationColumn,
  quicksight_getDataSetLogicalTableMapDataTransformCreateColumnsOperationColumn_GetTypes,
} from './quicksight_getDataSetLogicalTableMapDataTransformCreateColumnsOperationColumn';

export interface quicksight_getDataSetLogicalTableMapDataTransformCreateColumnsOperation {
  //
  columns?: Array<quicksight_getDataSetLogicalTableMapDataTransformCreateColumnsOperationColumn>;
}

export function quicksight_getDataSetLogicalTableMapDataTransformCreateColumnsOperation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'columns',
      '',
      () =>
        quicksight_getDataSetLogicalTableMapDataTransformCreateColumnsOperationColumn_GetTypes(),
      true,
      false,
    ),
  ];
}
