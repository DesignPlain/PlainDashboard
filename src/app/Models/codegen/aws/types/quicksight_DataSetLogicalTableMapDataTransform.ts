import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  quicksight_DataSetLogicalTableMapDataTransformCreateColumnsOperation,
  quicksight_DataSetLogicalTableMapDataTransformCreateColumnsOperation_GetTypes,
} from "./quicksight_DataSetLogicalTableMapDataTransformCreateColumnsOperation";
import {
  quicksight_DataSetLogicalTableMapDataTransformFilterOperation,
  quicksight_DataSetLogicalTableMapDataTransformFilterOperation_GetTypes,
} from "./quicksight_DataSetLogicalTableMapDataTransformFilterOperation";
import {
  quicksight_DataSetLogicalTableMapDataTransformProjectOperation,
  quicksight_DataSetLogicalTableMapDataTransformProjectOperation_GetTypes,
} from "./quicksight_DataSetLogicalTableMapDataTransformProjectOperation";
import {
  quicksight_DataSetLogicalTableMapDataTransformRenameColumnOperation,
  quicksight_DataSetLogicalTableMapDataTransformRenameColumnOperation_GetTypes,
} from "./quicksight_DataSetLogicalTableMapDataTransformRenameColumnOperation";
import {
  quicksight_DataSetLogicalTableMapDataTransformTagColumnOperation,
  quicksight_DataSetLogicalTableMapDataTransformTagColumnOperation_GetTypes,
} from "./quicksight_DataSetLogicalTableMapDataTransformTagColumnOperation";
import {
  quicksight_DataSetLogicalTableMapDataTransformUntagColumnOperation,
  quicksight_DataSetLogicalTableMapDataTransformUntagColumnOperation_GetTypes,
} from "./quicksight_DataSetLogicalTableMapDataTransformUntagColumnOperation";
import {
  quicksight_DataSetLogicalTableMapDataTransformCastColumnTypeOperation,
  quicksight_DataSetLogicalTableMapDataTransformCastColumnTypeOperation_GetTypes,
} from "./quicksight_DataSetLogicalTableMapDataTransformCastColumnTypeOperation";

export interface quicksight_DataSetLogicalTableMapDataTransform {
  // An operation that filters rows based on some condition. See filter_operation.
  filterOperation?: quicksight_DataSetLogicalTableMapDataTransformFilterOperation;

  // An operation that projects columns. Operations that come after a projection can only refer to projected columns. See project_operation.
  projectOperation?: quicksight_DataSetLogicalTableMapDataTransformProjectOperation;

  // An operation that renames a column. See rename_column_operation.
  renameColumnOperation?: quicksight_DataSetLogicalTableMapDataTransformRenameColumnOperation;

  // An operation that tags a column with additional information. See tag_column_operation.
  tagColumnOperation?: quicksight_DataSetLogicalTableMapDataTransformTagColumnOperation;

  // A transform operation that removes tags associated with a column. See untag_column_operation.
  untagColumnOperation?: quicksight_DataSetLogicalTableMapDataTransformUntagColumnOperation;

  // A transform operation that casts a column to a different type. See cast_column_type_operation.
  castColumnTypeOperation?: quicksight_DataSetLogicalTableMapDataTransformCastColumnTypeOperation;

  // An operation that creates calculated columns. Columns created in one such operation form a lexical closure. See create_columns_operation.
  createColumnsOperation?: quicksight_DataSetLogicalTableMapDataTransformCreateColumnsOperation;
}

export function quicksight_DataSetLogicalTableMapDataTransform_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "tagColumnOperation",
      "An operation that tags a column with additional information. See tag_column_operation.",
      () =>
        quicksight_DataSetLogicalTableMapDataTransformTagColumnOperation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "untagColumnOperation",
      "A transform operation that removes tags associated with a column. See untag_column_operation.",
      () =>
        quicksight_DataSetLogicalTableMapDataTransformUntagColumnOperation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "castColumnTypeOperation",
      "A transform operation that casts a column to a different type. See cast_column_type_operation.",
      () =>
        quicksight_DataSetLogicalTableMapDataTransformCastColumnTypeOperation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "createColumnsOperation",
      "An operation that creates calculated columns. Columns created in one such operation form a lexical closure. See create_columns_operation.",
      () =>
        quicksight_DataSetLogicalTableMapDataTransformCreateColumnsOperation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "filterOperation",
      "An operation that filters rows based on some condition. See filter_operation.",
      () =>
        quicksight_DataSetLogicalTableMapDataTransformFilterOperation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "projectOperation",
      "An operation that projects columns. Operations that come after a projection can only refer to projected columns. See project_operation.",
      () =>
        quicksight_DataSetLogicalTableMapDataTransformProjectOperation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "renameColumnOperation",
      "An operation that renames a column. See rename_column_operation.",
      () =>
        quicksight_DataSetLogicalTableMapDataTransformRenameColumnOperation_GetTypes(),
      false,
      false,
    ),
  ];
}
