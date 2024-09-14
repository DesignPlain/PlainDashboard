import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface glue_PartitionIndexPartitionIndex {
  // Name of the partition index.
  indexName?: string;

  //
  indexStatus?: string;

  // Keys for the partition index.
  keys?: Array<string>;
}

export function glue_PartitionIndexPartitionIndex_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "indexName",
      "Name of the partition index.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "indexStatus",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "keys",
      "Keys for the partition index.",
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
