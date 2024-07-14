import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  glue_CatalogTablePartitionIndex,
  glue_CatalogTablePartitionIndex_GetTypes,
} from "../types/glue_CatalogTablePartitionIndex";
import {
  glue_CatalogTablePartitionKey,
  glue_CatalogTablePartitionKey_GetTypes,
} from "../types/glue_CatalogTablePartitionKey";
import {
  glue_CatalogTableStorageDescriptor,
  glue_CatalogTableStorageDescriptor_GetTypes,
} from "../types/glue_CatalogTableStorageDescriptor";
import {
  glue_CatalogTableTargetTable,
  glue_CatalogTableTargetTable_GetTypes,
} from "../types/glue_CatalogTableTargetTable";
import {
  glue_CatalogTableOpenTableFormatInput,
  glue_CatalogTableOpenTableFormatInput_GetTypes,
} from "../types/glue_CatalogTableOpenTableFormatInput";

export interface CatalogTableArgs {
  // Retention time for this table.
  retention?: number;

  // Type of this table (EXTERNAL_TABLE, VIRTUAL_VIEW, etc.). While optional, some Athena DDL queries such as `ALTER TABLE` and `SHOW CREATE TABLE` will fail if this argument is empty.
  tableType?: string;

  // Configuration block of a target table for resource linking. See `target_table` below.
  targetTable?: glue_CatalogTableTargetTable;

  // ID of the Glue Catalog and database to create the table in. If omitted, this defaults to the AWS Account ID plus the database name.
  catalogId?: string;

  // Name of the table. For Hive compatibility, this must be entirely lowercase.
  name?: string;

  // Configuration block for open table formats. See `open_table_format_input` below.
  openTableFormatInput?: glue_CatalogTableOpenTableFormatInput;

  // Owner of the table.
  owner?: string;

  // Configuration block for a maximum of 3 partition indexes. See `partition_index` below.
  partitionIndices?: Array<glue_CatalogTablePartitionIndex>;

  // If the table is a view, the expanded text of the view; otherwise null.
  viewExpandedText?: string;

  // Description of the table.
  description?: string;

  // Properties associated with this table, as a list of key-value pairs.
  parameters?: Map<string, string>;

  // Configuration block of columns by which the table is partitioned. Only primitive types are supported as partition keys. See `partition_keys` below.
  partitionKeys?: Array<glue_CatalogTablePartitionKey>;

  // Configuration block for information about the physical storage of this table. For more information, refer to the [Glue Developer Guide](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-StorageDescriptor). See `storage_descriptor` below.
  storageDescriptor?: glue_CatalogTableStorageDescriptor;

  // If the table is a view, the original text of the view; otherwise null.
  viewOriginalText?: string;

  /*
Name of the metadata database where the table metadata resides. For Hive compatibility, this must be all lowercase.

The follow arguments are optional:
*/
  databaseName?: string;
}
export class CatalogTable extends Resource {
  // Properties associated with this table, as a list of key-value pairs.
  public parameters?: Map<string, string>;

  // Configuration block for a maximum of 3 partition indexes. See `partition_index` below.
  public partitionIndices?: Array<glue_CatalogTablePartitionIndex>;

  // Type of this table (EXTERNAL_TABLE, VIRTUAL_VIEW, etc.). While optional, some Athena DDL queries such as `ALTER TABLE` and `SHOW CREATE TABLE` will fail if this argument is empty.
  public tableType?: string;

  // Configuration block of a target table for resource linking. See `target_table` below.
  public targetTable?: glue_CatalogTableTargetTable;

  // If the table is a view, the original text of the view; otherwise null.
  public viewOriginalText?: string;

  // The ARN of the Glue Table.
  public arn?: string;

  /*
Name of the metadata database where the table metadata resides. For Hive compatibility, this must be all lowercase.

The follow arguments are optional:
*/
  public databaseName?: string;

  // Configuration block for open table formats. See `open_table_format_input` below.
  public openTableFormatInput?: glue_CatalogTableOpenTableFormatInput;

  // Retention time for this table.
  public retention?: number;

  // Configuration block for information about the physical storage of this table. For more information, refer to the [Glue Developer Guide](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-StorageDescriptor). See `storage_descriptor` below.
  public storageDescriptor?: glue_CatalogTableStorageDescriptor;

  // Name of the table. For Hive compatibility, this must be entirely lowercase.
  public name?: string;

  // Owner of the table.
  public owner?: string;

  // Configuration block of columns by which the table is partitioned. Only primitive types are supported as partition keys. See `partition_keys` below.
  public partitionKeys?: Array<glue_CatalogTablePartitionKey>;

  // If the table is a view, the expanded text of the view; otherwise null.
  public viewExpandedText?: string;

  // ID of the Glue Catalog and database to create the table in. If omitted, this defaults to the AWS Account ID plus the database name.
  public catalogId?: string;

  // Description of the table.
  public description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "targetTable",
        "Configuration block of a target table for resource linking. See `target_table` below.",
        glue_CatalogTableTargetTable_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "databaseName",
        "Name of the metadata database where the table metadata resides. For Hive compatibility, this must be all lowercase.\n\nThe follow arguments are optional:",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "partitionIndices",
        "Configuration block for a maximum of 3 partition indexes. See `partition_index` below.",
        glue_CatalogTablePartitionIndex_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "viewExpandedText",
        "If the table is a view, the expanded text of the view; otherwise null.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "retention",
        "Retention time for this table.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "openTableFormatInput",
        "Configuration block for open table formats. See `open_table_format_input` below.",
        glue_CatalogTableOpenTableFormatInput_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "owner",
        "Owner of the table.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "tableType",
        "Type of this table (EXTERNAL_TABLE, VIRTUAL_VIEW, etc.). While optional, some Athena DDL queries such as `ALTER TABLE` and `SHOW CREATE TABLE` will fail if this argument is empty.",
        [],
        false,
        false,
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
        "partitionKeys",
        "Configuration block of columns by which the table is partitioned. Only primitive types are supported as partition keys. See `partition_keys` below.",
        glue_CatalogTablePartitionKey_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "storageDescriptor",
        "Configuration block for information about the physical storage of this table. For more information, refer to the [Glue Developer Guide](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-StorageDescriptor). See `storage_descriptor` below.",
        glue_CatalogTableStorageDescriptor_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "viewOriginalText",
        "If the table is a view, the original text of the view; otherwise null.",
        [],
        false,
        false,
      ),
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
        "name",
        "Name of the table. For Hive compatibility, this must be entirely lowercase.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the table.",
        [],
        false,
        false,
      ),
    ];
  }
}
