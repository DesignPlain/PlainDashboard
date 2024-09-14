import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  bigquery_TableRangePartitioningRange,
  bigquery_TableRangePartitioningRange_GetTypes,
} from "./bigquery_TableRangePartitioningRange";

export interface bigquery_TableRangePartitioning {
  /*
The field used to determine how to create a range-based
partition.
*/
  field?: string;

  /*
Information required to partition based on ranges.
Structure is documented below.
*/
  range?: bigquery_TableRangePartitioningRange;
}

export function bigquery_TableRangePartitioning_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "field",
      "The field used to determine how to create a range-based\npartition.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "range",
      "Information required to partition based on ranges.\nStructure is documented below.",
      () => bigquery_TableRangePartitioningRange_GetTypes(),
      true,
      false,
    ),
  ];
}
