import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dynamodb_TableReplica,
  dynamodb_TableReplica_GetTypes,
} from "../types/dynamodb_TableReplica";
import {
  dynamodb_TableLocalSecondaryIndex,
  dynamodb_TableLocalSecondaryIndex_GetTypes,
} from "../types/dynamodb_TableLocalSecondaryIndex";
import {
  dynamodb_TableServerSideEncryption,
  dynamodb_TableServerSideEncryption_GetTypes,
} from "../types/dynamodb_TableServerSideEncryption";
import {
  dynamodb_TableTtl,
  dynamodb_TableTtl_GetTypes,
} from "../types/dynamodb_TableTtl";
import {
  dynamodb_TablePointInTimeRecovery,
  dynamodb_TablePointInTimeRecovery_GetTypes,
} from "../types/dynamodb_TablePointInTimeRecovery";
import {
  dynamodb_TableAttribute,
  dynamodb_TableAttribute_GetTypes,
} from "../types/dynamodb_TableAttribute";
import {
  dynamodb_TableGlobalSecondaryIndex,
  dynamodb_TableGlobalSecondaryIndex_GetTypes,
} from "../types/dynamodb_TableGlobalSecondaryIndex";
import {
  dynamodb_TableImportTable,
  dynamodb_TableImportTable_GetTypes,
} from "../types/dynamodb_TableImportTable";

export interface TableArgs {
  // Whether Streams are enabled.
  streamEnabled?: boolean;

  // Controls how you are charged for read and write throughput and how you manage capacity. The valid values are `PROVISIONED` and `PAY_PER_REQUEST`. Defaults to `PROVISIONED`.
  billingMode?: string;

  // Enables deletion protection for table. Defaults to `false`.
  deletionProtectionEnabled?: boolean;

  // Describe an LSI on the table; these can only be allocated _at creation_ so you cannot change this definition after you have created the resource. See below.
  localSecondaryIndexes?: Array<dynamodb_TableLocalSecondaryIndex>;

  /*
Unique within a region name of the table.

Optional arguments:
*/
  name?: string;

  // Attribute to use as the range (sort) key. Must also be defined as an `attribute`, see below.
  rangeKey?: string;

  // If set, restores table to the most recent point-in-time recovery point.
  restoreToLatestTime?: boolean;

  // Encryption at rest options. AWS DynamoDB tables are automatically encrypted at rest with an AWS-owned Customer Master Key if this argument isn't specified. See below.
  serverSideEncryption?: dynamodb_TableServerSideEncryption;

  // When an item in the table is modified, StreamViewType determines what information is written to the table's stream. Valid values are `KEYS_ONLY`, `NEW_IMAGE`, `OLD_IMAGE`, `NEW_AND_OLD_IMAGES`.
  streamViewType?: string;

  /*
Storage class of the table.
Valid values are `STANDARD` and `STANDARD_INFREQUENT_ACCESS`.
Default value is `STANDARD`.
*/
  tableClass?: string;

  // Configuration block for TTL. See below.
  ttl?: dynamodb_TableTtl;

  // Number of write units for this table. If the `billing_mode` is `PROVISIONED`, this field is required.
  writeCapacity?: number;

  // Enable point-in-time recovery options. See below.
  pointInTimeRecovery?: dynamodb_TablePointInTimeRecovery;

  // A map of tags to populate on the created table. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Set of nested attribute definitions. Only required for `hash_key` and `range_key` attributes. See below.
  attributes?: Array<dynamodb_TableAttribute>;

  // Describe a GSI for the table; subject to the normal limits on the number of GSIs, projected attributes, etc. See below.
  globalSecondaryIndexes?: Array<dynamodb_TableGlobalSecondaryIndex>;

  // Import Amazon S3 data into a new table. See below.
  importTable?: dynamodb_TableImportTable;

  // Configuration block(s) with [DynamoDB Global Tables V2 (version 2019.11.21)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html) replication configurations. See below.
  replicas?: Array<dynamodb_TableReplica>;

  // Time of the point-in-time recovery point to restore.
  restoreDateTime?: string;

  // Attribute to use as the hash (partition) key. Must also be defined as an `attribute`. See below.
  hashKey?: string;

  // Number of read units for this table. If the `billing_mode` is `PROVISIONED`, this field is required.
  readCapacity?: number;

  // Name of the table to restore. Must match the name of an existing table.
  restoreSourceName?: string;
}
export class Table extends Resource {
  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Configuration block(s) with [DynamoDB Global Tables V2 (version 2019.11.21)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html) replication configurations. See below.
  public replicas?: Array<dynamodb_TableReplica>;

  // Whether Streams are enabled.
  public streamEnabled?: boolean;

  // When an item in the table is modified, StreamViewType determines what information is written to the table's stream. Valid values are `KEYS_ONLY`, `NEW_IMAGE`, `OLD_IMAGE`, `NEW_AND_OLD_IMAGES`.
  public streamViewType?: string;

  // A map of tags to populate on the created table. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Number of write units for this table. If the `billing_mode` is `PROVISIONED`, this field is required.
  public writeCapacity?: number;

  // Describe an LSI on the table; these can only be allocated _at creation_ so you cannot change this definition after you have created the resource. See below.
  public localSecondaryIndexes?: Array<dynamodb_TableLocalSecondaryIndex>;

  /*
Unique within a region name of the table.

Optional arguments:
*/
  public name?: string;

  // Number of read units for this table. If the `billing_mode` is `PROVISIONED`, this field is required.
  public readCapacity?: number;

  // Describe a GSI for the table; subject to the normal limits on the number of GSIs, projected attributes, etc. See below.
  public globalSecondaryIndexes?: Array<dynamodb_TableGlobalSecondaryIndex>;

  // Attribute to use as the hash (partition) key. Must also be defined as an `attribute`. See below.
  public hashKey?: string;

  // Enable point-in-time recovery options. See below.
  public pointInTimeRecovery?: dynamodb_TablePointInTimeRecovery;

  // Time of the point-in-time recovery point to restore.
  public restoreDateTime?: string;

  // Name of the table to restore. Must match the name of an existing table.
  public restoreSourceName?: string;

  // ARN of the table
  public arn?: string;

  // Set of nested attribute definitions. Only required for `hash_key` and `range_key` attributes. See below.
  public attributes?: Array<dynamodb_TableAttribute>;

  // Controls how you are charged for read and write throughput and how you manage capacity. The valid values are `PROVISIONED` and `PAY_PER_REQUEST`. Defaults to `PROVISIONED`.
  public billingMode?: string;

  // If set, restores table to the most recent point-in-time recovery point.
  public restoreToLatestTime?: boolean;

  // Encryption at rest options. AWS DynamoDB tables are automatically encrypted at rest with an AWS-owned Customer Master Key if this argument isn't specified. See below.
  public serverSideEncryption?: dynamodb_TableServerSideEncryption;

  // ARN of the Table Stream. Only available when `stream_enabled = true`
  public streamArn?: string;

  // Timestamp, in ISO 8601 format, for this stream. Note that this timestamp is not a unique identifier for the stream on its own. However, the combination of AWS customer ID, table name and this field is guaranteed to be unique. It can be used for creating CloudWatch Alarms. Only available when `stream_enabled = true`.
  public streamLabel?: string;

  /*
Storage class of the table.
Valid values are `STANDARD` and `STANDARD_INFREQUENT_ACCESS`.
Default value is `STANDARD`.
*/
  public tableClass?: string;

  // Configuration block for TTL. See below.
  public ttl?: dynamodb_TableTtl;

  // Enables deletion protection for table. Defaults to `false`.
  public deletionProtectionEnabled?: boolean;

  // Import Amazon S3 data into a new table. See below.
  public importTable?: dynamodb_TableImportTable;

  // Attribute to use as the range (sort) key. Must also be defined as an `attribute`, see below.
  public rangeKey?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "restoreToLatestTime",
        "If set, restores table to the most recent point-in-time recovery point.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "streamViewType",
        "When an item in the table is modified, StreamViewType determines what information is written to the table's stream. Valid values are `KEYS_ONLY`, `NEW_IMAGE`, `OLD_IMAGE`, `NEW_AND_OLD_IMAGES`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "attributes",
        "Set of nested attribute definitions. Only required for `hash_key` and `range_key` attributes. See below.",
        dynamodb_TableAttribute_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "replicas",
        "Configuration block(s) with [DynamoDB Global Tables V2 (version 2019.11.21)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html) replication configurations. See below.",
        dynamodb_TableReplica_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "restoreSourceName",
        "Name of the table to restore. Must match the name of an existing table.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "importTable",
        "Import Amazon S3 data into a new table. See below.",
        dynamodb_TableImportTable_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "restoreDateTime",
        "Time of the point-in-time recovery point to restore.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "readCapacity",
        "Number of read units for this table. If the `billing_mode` is `PROVISIONED`, this field is required.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "billingMode",
        "Controls how you are charged for read and write throughput and how you manage capacity. The valid values are `PROVISIONED` and `PAY_PER_REQUEST`. Defaults to `PROVISIONED`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "localSecondaryIndexes",
        "Describe an LSI on the table; these can only be allocated _at creation_ so you cannot change this definition after you have created the resource. See below.",
        dynamodb_TableLocalSecondaryIndex_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Unique within a region name of the table.\n\nOptional arguments:",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "rangeKey",
        "Attribute to use as the range (sort) key. Must also be defined as an `attribute`, see below.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "pointInTimeRecovery",
        "Enable point-in-time recovery options. See below.",
        dynamodb_TablePointInTimeRecovery_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "globalSecondaryIndexes",
        "Describe a GSI for the table; subject to the normal limits on the number of GSIs, projected attributes, etc. See below.",
        dynamodb_TableGlobalSecondaryIndex_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "hashKey",
        "Attribute to use as the hash (partition) key. Must also be defined as an `attribute`. See below.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "streamEnabled",
        "Whether Streams are enabled.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "deletionProtectionEnabled",
        "Enables deletion protection for table. Defaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "serverSideEncryption",
        "Encryption at rest options. AWS DynamoDB tables are automatically encrypted at rest with an AWS-owned Customer Master Key if this argument isn't specified. See below.",
        dynamodb_TableServerSideEncryption_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "tableClass",
        "Storage class of the table.\nValid values are `STANDARD` and `STANDARD_INFREQUENT_ACCESS`.\nDefault value is `STANDARD`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ttl",
        "Configuration block for TTL. See below.",
        dynamodb_TableTtl_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "writeCapacity",
        "Number of write units for this table. If the `billing_mode` is `PROVISIONED`, this field is required.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to populate on the created table. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
