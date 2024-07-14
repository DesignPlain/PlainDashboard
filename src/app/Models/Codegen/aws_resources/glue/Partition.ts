import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  glue_PartitionStorageDescriptor,
  glue_PartitionStorageDescriptor_GetTypes,
} from "../types/glue_PartitionStorageDescriptor";

export interface PartitionArgs {
  // ID of the Glue Catalog and database to create the table in. If omitted, this defaults to the AWS Account ID plus the database name.
  catalogId?: string;

  // Name of the metadata database where the table metadata resides. For Hive compatibility, this must be all lowercase.
  databaseName?: string;

  // Properties associated with this table, as a list of key-value pairs.
  parameters?: Map<string, string>;

  // The values that define the partition.
  partitionValues?: Array<string>;

  // A storage descriptor object containing information about the physical storage of this table. You can refer to the [Glue Developer Guide](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-StorageDescriptor) for a full explanation of this object.
  storageDescriptor?: glue_PartitionStorageDescriptor;

  //
  tableName?: string;
}
export class Partition extends Resource {
  // A storage descriptor object containing information about the physical storage of this table. You can refer to the [Glue Developer Guide](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-StorageDescriptor) for a full explanation of this object.
  public storageDescriptor?: glue_PartitionStorageDescriptor;

  // ID of the Glue Catalog and database to create the table in. If omitted, this defaults to the AWS Account ID plus the database name.
  public catalogId?: string;

  // Name of the metadata database where the table metadata resides. For Hive compatibility, this must be all lowercase.
  public databaseName?: string;

  // The last time at which the partition was accessed.
  public lastAccessedTime?: string;

  // The values that define the partition.
  public partitionValues?: Array<string>;

  //
  public tableName?: string;

  // The time at which the partition was created.
  public creationTime?: string;

  // The last time at which column statistics were computed for this partition.
  public lastAnalyzedTime?: string;

  // Properties associated with this table, as a list of key-value pairs.
  public parameters?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "catalogId",
        "ID of the Glue Catalog and database to create the table in. If omitted, this defaults to the AWS Account ID plus the database name.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "databaseName",
        "Name of the metadata database where the table metadata resides. For Hive compatibility, this must be all lowercase.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "parameters",
        "Properties associated with this table, as a list of key-value pairs.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "partitionValues",
        "The values that define the partition.",
        InputType_String_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "storageDescriptor",
        "A storage descriptor object containing information about the physical storage of this table. You can refer to the [Glue Developer Guide](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-StorageDescriptor) for a full explanation of this object.",
        glue_PartitionStorageDescriptor_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(InputType.String, "tableName", "", [], true, true),
    ];
  }
}
