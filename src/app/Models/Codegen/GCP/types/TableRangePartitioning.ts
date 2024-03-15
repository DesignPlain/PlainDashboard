import { TableRangePartitioningRange } from "./TableRangePartitioningRange";

export interface TableRangePartitioning {
  /*
The field used to determine how to create a range-based
partition.
*/
  Field?: string;

  /*
Information required to partition based on ranges.
Structure is documented below.
*/
  Range?: TableRangePartitioningRange;
}
