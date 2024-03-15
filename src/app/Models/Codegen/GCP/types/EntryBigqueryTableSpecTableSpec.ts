export interface EntryBigqueryTableSpecTableSpec {
  /*
(Output)
If the table is a dated shard, i.e., with name pattern [prefix]YYYYMMDD, groupedEntry is the
Data Catalog resource name of the date sharded grouped entry, for example,
projects/{project_id}/locations/{location}/entrygroups/{entryGroupId}/entries/{entryId}.
Otherwise, groupedEntry is empty.
*/
  GroupedEntry?: string;
}
