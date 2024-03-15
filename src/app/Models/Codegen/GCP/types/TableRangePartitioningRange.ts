export interface TableRangePartitioningRange {
  // End of the range partitioning, exclusive.
  End?: number;

  // The width of each range within the partition.
  Interval?: number;

  // Start of the range partitioning, inclusive.
  Start?: number;
}
