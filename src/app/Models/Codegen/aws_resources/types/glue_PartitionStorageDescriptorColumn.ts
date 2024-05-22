import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface glue_PartitionStorageDescriptorColumn {
  // Free-form text comment.
  comment?: string;

  // The name of the Column.
  name?: string;

  // The datatype of data in the Column.
  type?: string;
}

export function glue_PartitionStorageDescriptorColumn_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "comment",
      "Free-form text comment.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the Column.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The datatype of data in the Column.",
      [],
      false,
      false,
    ),
  ];
}
