import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface glue_PartitionStorageDescriptorSortColumn {
  // The name of the column.
  column?: string;

  // Indicates that the column is sorted in ascending order (== 1), or in descending order (==0).
  sortOrder?: number;
}

export function glue_PartitionStorageDescriptorSortColumn_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "column",
      "The name of the column.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "sortOrder",
      "Indicates that the column is sorted in ascending order (== 1), or in descending order (==0).",
      () => [],
      true,
      false,
    ),
  ];
}
