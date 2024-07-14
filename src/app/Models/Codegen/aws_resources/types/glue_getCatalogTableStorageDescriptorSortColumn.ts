import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface glue_getCatalogTableStorageDescriptorSortColumn {
  // Name of the column.
  column?: string;

  // Whether the column is sorted in ascending (`1`) or descending order (`0`).
  sortOrder?: number;
}

export function glue_getCatalogTableStorageDescriptorSortColumn_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "column",
      "Name of the column.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "sortOrder",
      "Whether the column is sorted in ascending (`1`) or descending order (`0`).",
      [],
      true,
      false,
    ),
  ];
}
