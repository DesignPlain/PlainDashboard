import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Bigquery_TableRangePartitioningRange,
  Bigquery_TableRangePartitioningRange_GetTypes,
} from "./Bigquery_TableRangePartitioningRange";

export interface Bigquery_TableRangePartitioning {
  /*
The field used to determine how to create a range-based
partition.
*/
  Field?: string;

  /*
Information required to partition based on ranges.
Structure is documented below.
*/
  Range?: Bigquery_TableRangePartitioningRange;
}

export function Bigquery_TableRangePartitioning_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Field",
      "The field used to determine how to create a range-based\npartition.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Range",
      "Information required to partition based on ranges.\nStructure is documented below.",
      Bigquery_TableRangePartitioningRange_GetTypes(),
      true,
      false,
    ),
  ];
}
