import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface glue_PartitionIndexPartitionIndex {
  //
  indexStatus?: string;

  // Keys for the partition index.
  keys?: Array<string>;

  // Name of the partition index.
  indexName?: string;
}

export function glue_PartitionIndexPartitionIndex_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "indexStatus", "", [], false, false),
    new DynamicUIProps(
      InputType.Array,
      "keys",
      "Keys for the partition index.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "indexName",
      "Name of the partition index.",
      [],
      false,
      true,
    ),
  ];
}
