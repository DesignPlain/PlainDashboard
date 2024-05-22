import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface quicksight_DataSetLogicalTableMapDataTransformCastColumnTypeOperation {
  // Column name.
  columnName?: string;

  // When casting a column from string to datetime type, you can supply a string in a format supported by Amazon QuickSight to denote the source data format.
  format?: string;

  // New column data type. Valid values are `STRING`, `INTEGER`, `DECIMAL`, `DATETIME`.
  newColumnType?: string;
}

export function quicksight_DataSetLogicalTableMapDataTransformCastColumnTypeOperation_GetTypes(): DynamicUIProps[] {
  return [
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
      "format",
      "When casting a column from string to datetime type, you can supply a string in a format supported by Amazon QuickSight to denote the source data format.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "newColumnType",
      "New column data type. Valid values are `STRING`, `INTEGER`, `DECIMAL`, `DATETIME`.",
      [],
      true,
      false,
    ),
  ];
}
