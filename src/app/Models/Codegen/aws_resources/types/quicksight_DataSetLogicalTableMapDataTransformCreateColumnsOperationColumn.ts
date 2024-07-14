import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface quicksight_DataSetLogicalTableMapDataTransformCreateColumnsOperationColumn {
  // A unique ID to identify a calculated column. During a dataset update, if the column ID of a calculated column matches that of an existing calculated column, Amazon QuickSight preserves the existing calculated column.
  columnId?: string;

  // Column name.
  columnName?: string;

  // An expression that defines the calculated column.
  expression?: string;
}

export function quicksight_DataSetLogicalTableMapDataTransformCreateColumnsOperationColumn_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "columnId",
      "A unique ID to identify a calculated column. During a dataset update, if the column ID of a calculated column matches that of an existing calculated column, Amazon QuickSight preserves the existing calculated column.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "columnName",
      "Column name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "expression",
      "An expression that defines the calculated column.",
      [],
      true,
      false,
    ),
  ];
}
