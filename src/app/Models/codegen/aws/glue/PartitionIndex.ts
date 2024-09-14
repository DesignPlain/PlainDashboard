import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  glue_PartitionIndexPartitionIndex,
  glue_PartitionIndexPartitionIndex_GetTypes,
} from "../types/glue_PartitionIndexPartitionIndex";

export interface PartitionIndexArgs {
  // Name of the table. For Hive compatibility, this must be entirely lowercase.
  tableName?: string;

  // The catalog ID where the table resides.
  catalogId?: string;

  // Name of the metadata database where the table metadata resides. For Hive compatibility, this must be all lowercase.
  databaseName?: string;

  // Configuration block for a partition index. See `partition_index` below.
  partitionIndex?: glue_PartitionIndexPartitionIndex;
}
export class PartitionIndex extends DS_Resource {
  // The catalog ID where the table resides.
  public catalogId?: string;

  // Name of the metadata database where the table metadata resides. For Hive compatibility, this must be all lowercase.
  public databaseName?: string;

  // Configuration block for a partition index. See `partition_index` below.
  public partitionIndex?: glue_PartitionIndexPartitionIndex;

  // Name of the table. For Hive compatibility, this must be entirely lowercase.
  public tableName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "catalogId",
        "The catalog ID where the table resides.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "databaseName",
        "Name of the metadata database where the table metadata resides. For Hive compatibility, this must be all lowercase.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "partitionIndex",
        "Configuration block for a partition index. See `partition_index` below.",
        () => glue_PartitionIndexPartitionIndex_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "tableName",
        "Name of the table. For Hive compatibility, this must be entirely lowercase.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
