import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  quicksight_getDataSetLogicalTableMapDataTransformTagColumnOperationTag,
  quicksight_getDataSetLogicalTableMapDataTransformTagColumnOperationTag_GetTypes,
} from './quicksight_getDataSetLogicalTableMapDataTransformTagColumnOperationTag';

export interface quicksight_getDataSetLogicalTableMapDataTransformTagColumnOperation {
  //
  columnName?: string;

  //
  tags?: Array<quicksight_getDataSetLogicalTableMapDataTransformTagColumnOperationTag>;
}

export function quicksight_getDataSetLogicalTableMapDataTransformTagColumnOperation_GetTypes(): DynamicUIProps[] {
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
      'tags',
      '',
      () =>
        quicksight_getDataSetLogicalTableMapDataTransformTagColumnOperationTag_GetTypes(),
      true,
      false,
    ),
  ];
}
