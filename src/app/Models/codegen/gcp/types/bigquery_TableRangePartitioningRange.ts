import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface bigquery_TableRangePartitioningRange {
  // End of the range partitioning, exclusive.
  end?: number;

  // The width of each range within the partition.
  interval?: number;

  // Start of the range partitioning, inclusive.
  start?: number;
}

export function bigquery_TableRangePartitioningRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'interval',
      'The width of each range within the partition.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'start',
      'Start of the range partitioning, inclusive.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'end',
      'End of the range partitioning, exclusive.',
      () => [],
      true,
      false,
    ),
  ];
}
