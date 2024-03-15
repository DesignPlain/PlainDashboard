export interface EntryBigqueryDateShardedSpec {
  /*
(Output)
The table name prefix of the shards. The name of any given shard is [tablePrefix]YYYYMMDD,
for example, for shard MyTable20180101, the tablePrefix is MyTable.
*/
  TablePrefix?: string;

  /*
(Output)
The Data Catalog resource name of the dataset entry the current table belongs to, for example,
projects/{project_id}/locations/{location}/entrygroups/{entryGroupId}/entries/{entryId}
*/
  Dataset?: string;

  /*
(Output)
Total number of shards.
*/
  ShardCount?: number;
}
