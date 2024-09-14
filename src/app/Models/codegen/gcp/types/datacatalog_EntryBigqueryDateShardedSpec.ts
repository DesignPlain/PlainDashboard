import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface datacatalog_EntryBigqueryDateShardedSpec {
  /*
(Output)
The table name prefix of the shards. The name of any given shard is [tablePrefix]YYYYMMDD,
for example, for shard MyTable20180101, the tablePrefix is MyTable.
*/
  tablePrefix?: string;

  /*
(Output)
The Data Catalog resource name of the dataset entry the current table belongs to, for example,
projects/{project_id}/locations/{location}/entrygroups/{entryGroupId}/entries/{entryId}
*/
  dataset?: string;

  /*
(Output)
Total number of shards.
*/
  shardCount?: number;
}

export function datacatalog_EntryBigqueryDateShardedSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "tablePrefix",
      "(Output)\nThe table name prefix of the shards. The name of any given shard is [tablePrefix]YYYYMMDD,\nfor example, for shard MyTable20180101, the tablePrefix is MyTable.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dataset",
      "(Output)\nThe Data Catalog resource name of the dataset entry the current table belongs to, for example,\nprojects/{project_id}/locations/{location}/entrygroups/{entryGroupId}/entries/{entryId}",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "shardCount",
      "(Output)\nTotal number of shards.",
      () => [],
      false,
      false,
    ),
  ];
}
