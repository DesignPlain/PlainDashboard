import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  quicksight_getDataSetLogicalTableMapDataTransformCreateColumnsOperation,
  quicksight_getDataSetLogicalTableMapDataTransformCreateColumnsOperation_GetTypes,
} from './quicksight_getDataSetLogicalTableMapDataTransformCreateColumnsOperation';
import {
  quicksight_getDataSetLogicalTableMapDataTransformFilterOperation,
  quicksight_getDataSetLogicalTableMapDataTransformFilterOperation_GetTypes,
} from './quicksight_getDataSetLogicalTableMapDataTransformFilterOperation';
import {
  quicksight_getDataSetLogicalTableMapDataTransformProjectOperation,
  quicksight_getDataSetLogicalTableMapDataTransformProjectOperation_GetTypes,
} from './quicksight_getDataSetLogicalTableMapDataTransformProjectOperation';
import {
  quicksight_getDataSetLogicalTableMapDataTransformRenameColumnOperation,
  quicksight_getDataSetLogicalTableMapDataTransformRenameColumnOperation_GetTypes,
} from './quicksight_getDataSetLogicalTableMapDataTransformRenameColumnOperation';
import {
  quicksight_getDataSetLogicalTableMapDataTransformTagColumnOperation,
  quicksight_getDataSetLogicalTableMapDataTransformTagColumnOperation_GetTypes,
} from './quicksight_getDataSetLogicalTableMapDataTransformTagColumnOperation';
import {
  quicksight_getDataSetLogicalTableMapDataTransformUntagColumnOperation,
  quicksight_getDataSetLogicalTableMapDataTransformUntagColumnOperation_GetTypes,
} from './quicksight_getDataSetLogicalTableMapDataTransformUntagColumnOperation';
import {
  quicksight_getDataSetLogicalTableMapDataTransformCastColumnTypeOperation,
  quicksight_getDataSetLogicalTableMapDataTransformCastColumnTypeOperation_GetTypes,
} from './quicksight_getDataSetLogicalTableMapDataTransformCastColumnTypeOperation';

export interface quicksight_getDataSetLogicalTableMapDataTransform {
  //
  filterOperations?: Array<quicksight_getDataSetLogicalTableMapDataTransformFilterOperation>;

  //
  projectOperations?: Array<quicksight_getDataSetLogicalTableMapDataTransformProjectOperation>;

  //
  renameColumnOperations?: Array<quicksight_getDataSetLogicalTableMapDataTransformRenameColumnOperation>;

  //
  tagColumnOperations?: Array<quicksight_getDataSetLogicalTableMapDataTransformTagColumnOperation>;

  //
  untagColumnOperations?: Array<quicksight_getDataSetLogicalTableMapDataTransformUntagColumnOperation>;

  //
  castColumnTypeOperations?: Array<quicksight_getDataSetLogicalTableMapDataTransformCastColumnTypeOperation>;

  //
  createColumnsOperations?: Array<quicksight_getDataSetLogicalTableMapDataTransformCreateColumnsOperation>;
}

export function quicksight_getDataSetLogicalTableMapDataTransform_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'castColumnTypeOperations',
      '',
      () =>
        quicksight_getDataSetLogicalTableMapDataTransformCastColumnTypeOperation_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'createColumnsOperations',
      '',
      () =>
        quicksight_getDataSetLogicalTableMapDataTransformCreateColumnsOperation_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'filterOperations',
      '',
      () =>
        quicksight_getDataSetLogicalTableMapDataTransformFilterOperation_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'projectOperations',
      '',
      () =>
        quicksight_getDataSetLogicalTableMapDataTransformProjectOperation_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'renameColumnOperations',
      '',
      () =>
        quicksight_getDataSetLogicalTableMapDataTransformRenameColumnOperation_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'tagColumnOperations',
      '',
      () =>
        quicksight_getDataSetLogicalTableMapDataTransformTagColumnOperation_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'untagColumnOperations',
      '',
      () =>
        quicksight_getDataSetLogicalTableMapDataTransformUntagColumnOperation_GetTypes(),
      true,
      false,
    ),
  ];
}
