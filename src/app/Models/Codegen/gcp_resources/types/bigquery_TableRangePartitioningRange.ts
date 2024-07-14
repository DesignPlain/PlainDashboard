import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface bigquery_TableRangePartitioningRange {
  // The width of each range within the partition.
  interval?: number;

  // Start of the range partitioning, inclusive.
  start?: number;

  // End of the range partitioning, exclusive.
  end?: number;
}

export function bigquery_TableRangePartitioningRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "interval",
      "The width of each range within the partition.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "start",
      "Start of the range partitioning, inclusive.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "end",
      "End of the range partitioning, exclusive.",
      [],
      true,
      false,
    ),
  ];
}
