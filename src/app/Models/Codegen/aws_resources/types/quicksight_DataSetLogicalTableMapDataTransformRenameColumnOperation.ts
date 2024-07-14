import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface quicksight_DataSetLogicalTableMapDataTransformRenameColumnOperation {
  // Column to be renamed.
  columnName?: string;

  // New name for the column.
  newColumnName?: string;
}

export function quicksight_DataSetLogicalTableMapDataTransformRenameColumnOperation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "columnName",
      "Column to be renamed.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "newColumnName",
      "New name for the column.",
      [],
      true,
      false,
    ),
  ];
}
