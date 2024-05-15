import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Bigquery_TableRangePartitioningRange {
  // End of the range partitioning, exclusive.
  End?: number;

  // The width of each range within the partition.
  Interval?: number;

  // Start of the range partitioning, inclusive.
  Start?: number;
}

export function Bigquery_TableRangePartitioningRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "End",
      "End of the range partitioning, exclusive.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Interval",
      "The width of each range within the partition.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Start",
      "Start of the range partitioning, inclusive.",
      [],
      true,
      false,
    ),
  ];
}
