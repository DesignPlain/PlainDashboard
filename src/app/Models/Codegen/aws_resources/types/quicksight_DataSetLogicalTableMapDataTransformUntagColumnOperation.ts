import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface quicksight_DataSetLogicalTableMapDataTransformUntagColumnOperation {
  // Column name.
  columnName?: string;

  // The column tags to remove from this column.
  tagNames?: Array<string>;
}

export function quicksight_DataSetLogicalTableMapDataTransformUntagColumnOperation_GetTypes(): DynamicUIProps[] {
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
      InputType.Array,
      "tagNames",
      "The column tags to remove from this column.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
