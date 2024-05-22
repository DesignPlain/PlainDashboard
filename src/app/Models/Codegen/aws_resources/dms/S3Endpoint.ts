import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface S3EndpointArgs {
  // SSL mode to use for the connection. Valid values are `none`, `require`, `verify-ca`, `verify-full`. (AWS default is `none`.)
  sslMode?: string;

  // Predefined (canned) access control list for objects created in an S3 bucket. Valid values include `none`, `private`, `public-read`, `public-read-write`, `authenticated-read`, `aws-exec-read`, `bucket-owner-read`, and `bucket-owner-full-control`. Default is `none`.
  cannedAclForObjects?: string;

  // Whether to write insert operations to .csv or .parquet output files. Default is `false`.
  cdcInsertsOnly?: boolean;

  // Minimum file size condition as defined in kilobytes to output a file to Amazon S3. (AWS default is 32000 KB.)
  cdcMinFileSize?: number;

  // Set to compress target files. Valid values are `GZIP` and `NONE`. Default is `NONE`. (Ignored for source endpoints.)
  compressionType?: string;

  // Size of one data page in bytes. (AWS default is 1 MiB, _i.e._, `1048576`.)
  dataPageSize?: number;

  // Date separating delimiter to use during folder partitioning. Valid values are `SLASH`, `UNDERSCORE`, `DASH`, and `NONE`. (AWS default is `SLASH`.) (Ignored for source endpoints.)
  datePartitionDelimiter?: string;

  // Date format to use during folder partitioning. Use this parameter when `date_partition_enabled` is set to true. Valid values are `YYYYMMDD`, `YYYYMMDDHH`, `YYYYMM`, `MMYYYYDD`, and `DDMMYYYY`. (AWS default is `YYYYMMDD`.) (Ignored for source endpoints.)
  datePartitionSequence?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Whether to add padding. Default is `false`. (Ignored for source endpoints.)
  addTrailingPaddingCharacter?: boolean;

  // Delimiter used to separate rows in the source files. Default is newline (_i.e._, `\n`).
  csvRowDelimiter?: string;

  // Whether to enable statistics for Parquet pages and row groups. Default is `true`.
  enableStatistics?: boolean;

  // Type of encoding to use. Value values are `rle_dictionary`, `plain`, and `plain_dictionary`. (AWS default is `rle_dictionary`.)
  encodingType?: string;

  // Database endpoint identifier. Identifiers must contain from 1 to 255 alphanumeric characters or hyphens, begin with a letter, contain only ASCII letters, digits, and hyphens, not end with a hyphen, and not contain two consecutive hyphens.
  endpointId?: string;

  // Number of rows in a row group. (AWS default is `10000`.)
  rowGroupLength?: number;

  // Column to add with timestamp information to the endpoint data for an Amazon S3 target.
  timestampColumnName?: string;

  // Server-side encryption mode that you want to encrypt your .csv or .parquet object files copied to S3. Valid values are `SSE_S3` and `SSE_KMS`. (AWS default is `SSE_S3`.) (Ignored for source endpoints -- only `SSE_S3` is valid.)
  encryptionMode?: string;

  // Whether to integrate AWS Glue Data Catalog with an Amazon S3 target. See [Using AWS Glue Data Catalog with an Amazon S3 target for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.GlueCatalog) for more information. Default is `false`.
  glueCatalogGeneration?: boolean;

  // Maximum size (in KB) of any .csv file to be created while migrating to an S3 target during full load. Valid values are from `1` to `1048576`. (AWS default is 1 GB, _i.e._, `1048576`.)
  maxFileSize?: number;

  // Whether to write insert and update operations to .csv or .parquet output files. Default is `false`.
  cdcInsertsAndUpdates?: boolean;

  // Folder path of CDC files. If `cdc_path` is set, AWS DMS reads CDC files from this path and replicates the data changes to the target endpoint. Supported in AWS DMS versions 3.4.2 and later.
  cdcPath?: string;

  // Partition S3 bucket folders based on transaction commit dates. Default is `false`. (Ignored for source endpoints.)
  datePartitionEnabled?: boolean;

  // ARN for the KMS key that will be used to encrypt the connection parameters. If you do not specify a value for `kms_key_arn`, then AWS DMS will use your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS region.
  kmsKeyArn?: string;

  // Version of the .parquet file format. Valid values are `parquet-1-0` and `parquet-2-0`. (AWS default is `parquet-1-0`.) (Ignored for source endpoints.)
  parquetVersion?: string;

  // Only applies if output files for a CDC load are written in .csv format. If `use_csv_no_sup_value` is set to `true`, string to use for all columns not included in the supplemental log. If you do not specify a string value, DMS uses the null value for these columns regardless of `use_csv_no_sup_value`. (Ignored for source endpoints.)
  csvNoSupValue?: string;

  // Maximum size in bytes of an encoded dictionary page of a column. (AWS default is 1 MiB, _i.e._, `1048576`.)
  dictPageSizeLimit?: number;

  // When this value is set to `1`, DMS ignores the first row header in a .csv file. (AWS default is `0`.)
  ignoreHeaderRows?: number;

  // Whether to enable a full load to write INSERT operations to the .csv output files only to indicate how the rows were added to the source database. Default is `false`.
  includeOpForFullLoad?: boolean;

  // Specifies the precision of any TIMESTAMP column values written to an S3 object file in .parquet format. Default is `false`. (Ignored for source endpoints.)
  parquetTimestampInMillisecond?: boolean;

  /*
ARN of the IAM role with permissions to the S3 Bucket.

The following arguments are optional:
*/
  serviceAccessRoleArn?: string;

  // S3 object prefix.
  bucketFolder?: string;

  // String to as null when writing to the target. (AWS default is `NULL`.)
  csvNullValue?: string;

  // Type of endpoint. Valid values are `source`, `target`.
  endpointType?: string;

  // Bucket owner to prevent sniping. Value is an AWS account ID.
  expectedBucketOwner?: string;

  // JSON document that describes how AWS DMS should interpret the data.
  externalTableDefinition?: string;

  // Whether to use `csv_no_sup_value` for columns not included in the supplemental log. (Ignored for source endpoints.)
  useCsvNoSupValue?: boolean;

  // Whether to add column name information to the .csv output file. Default is `false`.
  addColumnName?: boolean;

  // S3 bucket name.
  bucketName?: string;

  // Delimiter used to separate columns in the source files. Default is `,`.
  csvDelimiter?: string;

  // Convert the current UTC time to a timezone. The conversion occurs when a date partition folder is created and a CDC filename is generated. The timezone format is Area/Location (_e.g._, `Europe/Paris`). Use this when `date_partition_enabled` is `true`. (Ignored for source endpoints.)
  datePartitionTimezone?: string;

  // Undocumented argument for use as directed by AWS Support.
  detachTargetOnLobLookupFailureParquet?: boolean;

  // Whether DMS saves the transaction order for a CDC load on the S3 target specified by `cdc_path`. Default is `false`. (Ignored for source endpoints.)
  preserveTransactions?: boolean;

  // For an S3 source, whether each leading double quotation mark has to be followed by an ending double quotation mark. Default is `true`.
  rfc4180?: boolean;

  // Maximum length of the interval, defined in seconds, after which to output a file to Amazon S3. (AWS default is `60`.)
  cdcMaxBatchInterval?: number;

  // ARN for the certificate.
  certificateArn?: string;

  // Output format for the files that AWS DMS uses to create S3 objects. Valid values are `csv` and `parquet`.  (Ignored for source endpoints -- only `csv` is valid.)
  dataFormat?: string;

  // When `encryption_mode` is `SSE_KMS`, ARN for the AWS KMS key. (Ignored for source endpoints -- only `SSE_S3` `encryption_mode` is valid.)
  serverSideEncryptionKmsKeyId?: string;

  // When set to `true`, uses the task start time as the timestamp column value instead of the time data is written to target. For full load, when set to `true`, each row of the timestamp column contains the task start time. For CDC loads, each row of the timestamp column contains the transaction commit time.When set to false, the full load timestamp in the timestamp column increments with the time data arrives at the target. Default is `false`.
  useTaskStartTimeForFullLoadTimestamp?: boolean;
}
export class S3Endpoint extends Resource {
  // ARN for the KMS key that will be used to encrypt the connection parameters. If you do not specify a value for `kms_key_arn`, then AWS DMS will use your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS region.
  public kmsKeyArn?: string;

  // Whether to add padding. Default is `false`. (Ignored for source endpoints.)
  public addTrailingPaddingCharacter?: boolean;

  // Partition S3 bucket folders based on transaction commit dates. Default is `false`. (Ignored for source endpoints.)
  public datePartitionEnabled?: boolean;

  // Whether to enable statistics for Parquet pages and row groups. Default is `true`.
  public enableStatistics?: boolean;

  // ARN for the endpoint.
  public endpointArn?: string;

  // Status of the endpoint.
  public status?: string;

  // Server-side encryption mode that you want to encrypt your .csv or .parquet object files copied to S3. Valid values are `SSE_S3` and `SSE_KMS`. (AWS default is `SSE_S3`.) (Ignored for source endpoints -- only `SSE_S3` is valid.)
  public encryptionMode?: string;

  // Specifies the precision of any TIMESTAMP column values written to an S3 object file in .parquet format. Default is `false`. (Ignored for source endpoints.)
  public parquetTimestampInMillisecond?: boolean;

  // When `encryption_mode` is `SSE_KMS`, ARN for the AWS KMS key. (Ignored for source endpoints -- only `SSE_S3` `encryption_mode` is valid.)
  public serverSideEncryptionKmsKeyId?: string;

  // Whether DMS saves the transaction order for a CDC load on the S3 target specified by `cdc_path`. Default is `false`. (Ignored for source endpoints.)
  public preserveTransactions?: boolean;

  // Only applies if output files for a CDC load are written in .csv format. If `use_csv_no_sup_value` is set to `true`, string to use for all columns not included in the supplemental log. If you do not specify a string value, DMS uses the null value for these columns regardless of `use_csv_no_sup_value`. (Ignored for source endpoints.)
  public csvNoSupValue?: string;

  // Expanded name for the engine name.
  public engineDisplayName?: string;

  // Folder path of CDC files. If `cdc_path` is set, AWS DMS reads CDC files from this path and replicates the data changes to the target endpoint. Supported in AWS DMS versions 3.4.2 and later.
  public cdcPath?: string;

  // Bucket owner to prevent sniping. Value is an AWS account ID.
  public expectedBucketOwner?: string;

  // Whether to enable a full load to write INSERT operations to the .csv output files only to indicate how the rows were added to the source database. Default is `false`.
  public includeOpForFullLoad?: boolean;

  // Maximum size (in KB) of any .csv file to be created while migrating to an S3 target during full load. Valid values are from `1` to `1048576`. (AWS default is 1 GB, _i.e._, `1048576`.)
  public maxFileSize?: number;

  // Column to add with timestamp information to the endpoint data for an Amazon S3 target.
  public timestampColumnName?: string;

  // Predefined (canned) access control list for objects created in an S3 bucket. Valid values include `none`, `private`, `public-read`, `public-read-write`, `authenticated-read`, `aws-exec-read`, `bucket-owner-read`, and `bucket-owner-full-control`. Default is `none`.
  public cannedAclForObjects?: string;

  // Minimum file size condition as defined in kilobytes to output a file to Amazon S3. (AWS default is 32000 KB.)
  public cdcMinFileSize?: number;

  // Convert the current UTC time to a timezone. The conversion occurs when a date partition folder is created and a CDC filename is generated. The timezone format is Area/Location (_e.g._, `Europe/Paris`). Use this when `date_partition_enabled` is `true`. (Ignored for source endpoints.)
  public datePartitionTimezone?: string;

  // JSON document that describes how AWS DMS should interpret the data.
  public externalTableDefinition?: string;

  // S3 object prefix.
  public bucketFolder?: string;

  // Maximum size in bytes of an encoded dictionary page of a column. (AWS default is 1 MiB, _i.e._, `1048576`.)
  public dictPageSizeLimit?: number;

  // Version of the .parquet file format. Valid values are `parquet-1-0` and `parquet-2-0`. (AWS default is `parquet-1-0`.) (Ignored for source endpoints.)
  public parquetVersion?: string;

  // Whether to write insert and update operations to .csv or .parquet output files. Default is `false`.
  public cdcInsertsAndUpdates?: boolean;

  // Size of one data page in bytes. (AWS default is 1 MiB, _i.e._, `1048576`.)
  public dataPageSize?: number;

  // When this value is set to `1`, DMS ignores the first row header in a .csv file. (AWS default is `0`.)
  public ignoreHeaderRows?: number;

  // Number of rows in a row group. (AWS default is `10000`.)
  public rowGroupLength?: number;

  // For an S3 source, whether each leading double quotation mark has to be followed by an ending double quotation mark. Default is `true`.
  public rfc4180?: boolean;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  /*
ARN of the IAM role with permissions to the S3 Bucket.

The following arguments are optional:
*/
  public serviceAccessRoleArn?: string;

  // S3 bucket name.
  public bucketName?: string;

  // ARN for the certificate.
  public certificateArn?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Delimiter used to separate rows in the source files. Default is newline (_i.e._, `\n`).
  public csvRowDelimiter?: string;

  // Database endpoint identifier. Identifiers must contain from 1 to 255 alphanumeric characters or hyphens, begin with a letter, contain only ASCII letters, digits, and hyphens, not end with a hyphen, and not contain two consecutive hyphens.
  public endpointId?: string;

  // Type of endpoint. Valid values are `source`, `target`.
  public endpointType?: string;

  // Whether to write insert operations to .csv or .parquet output files. Default is `false`.
  public cdcInsertsOnly?: boolean;

  // Set to compress target files. Valid values are `GZIP` and `NONE`. Default is `NONE`. (Ignored for source endpoints.)
  public compressionType?: string;

  // Output format for the files that AWS DMS uses to create S3 objects. Valid values are `csv` and `parquet`.  (Ignored for source endpoints -- only `csv` is valid.)
  public dataFormat?: string;

  // Whether to integrate AWS Glue Data Catalog with an Amazon S3 target. See [Using AWS Glue Data Catalog with an Amazon S3 target for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.GlueCatalog) for more information. Default is `false`.
  public glueCatalogGeneration?: boolean;

  // Delimiter used to separate columns in the source files. Default is `,`.
  public csvDelimiter?: string;

  // Can be used for cross-account validation. Use it in another account with `aws.dms.S3Endpoint` to create the endpoint cross-account.
  public externalId?: string;

  // When set to `true`, uses the task start time as the timestamp column value instead of the time data is written to target. For full load, when set to `true`, each row of the timestamp column contains the task start time. For CDC loads, each row of the timestamp column contains the transaction commit time.When set to false, the full load timestamp in the timestamp column increments with the time data arrives at the target. Default is `false`.
  public useTaskStartTimeForFullLoadTimestamp?: boolean;

  // Type of encoding to use. Value values are `rle_dictionary`, `plain`, and `plain_dictionary`. (AWS default is `rle_dictionary`.)
  public encodingType?: string;

  // Maximum length of the interval, defined in seconds, after which to output a file to Amazon S3. (AWS default is `60`.)
  public cdcMaxBatchInterval?: number;

  // String to as null when writing to the target. (AWS default is `NULL`.)
  public csvNullValue?: string;

  // SSL mode to use for the connection. Valid values are `none`, `require`, `verify-ca`, `verify-full`. (AWS default is `none`.)
  public sslMode?: string;

  // Undocumented argument for use as directed by AWS Support.
  public detachTargetOnLobLookupFailureParquet?: boolean;

  // Whether to use `csv_no_sup_value` for columns not included in the supplemental log. (Ignored for source endpoints.)
  public useCsvNoSupValue?: boolean;

  // Whether to add column name information to the .csv output file. Default is `false`.
  public addColumnName?: boolean;

  // Date separating delimiter to use during folder partitioning. Valid values are `SLASH`, `UNDERSCORE`, `DASH`, and `NONE`. (AWS default is `SLASH`.) (Ignored for source endpoints.)
  public datePartitionDelimiter?: string;

  // Date format to use during folder partitioning. Use this parameter when `date_partition_enabled` is set to true. Valid values are `YYYYMMDD`, `YYYYMMDDHH`, `YYYYMM`, `MMYYYYDD`, and `DDMMYYYY`. (AWS default is `YYYYMMDD`.) (Ignored for source endpoints.)
  public datePartitionSequence?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "endpointType",
        "Type of endpoint. Valid values are `source`, `target`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "externalTableDefinition",
        "JSON document that describes how AWS DMS should interpret the data.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "useCsvNoSupValue",
        "Whether to use `csv_no_sup_value` for columns not included in the supplemental log. (Ignored for source endpoints.)",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "csvDelimiter",
        "Delimiter used to separate columns in the source files. Default is `,`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceAccessRoleArn",
        "ARN of the IAM role with permissions to the S3 Bucket.\n\nThe following arguments are optional:",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "rowGroupLength",
        "Number of rows in a row group. (AWS default is `10000`.)",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "glueCatalogGeneration",
        "Whether to integrate AWS Glue Data Catalog with an Amazon S3 target. See [Using AWS Glue Data Catalog with an Amazon S3 target for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.GlueCatalog) for more information. Default is `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "cdcPath",
        "Folder path of CDC files. If `cdc_path` is set, AWS DMS reads CDC files from this path and replicates the data changes to the target endpoint. Supported in AWS DMS versions 3.4.2 and later.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "csvNullValue",
        "String to as null when writing to the target. (AWS default is `NULL`.)",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "addColumnName",
        "Whether to add column name information to the .csv output file. Default is `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "rfc4180",
        "For an S3 source, whether each leading double quotation mark has to be followed by an ending double quotation mark. Default is `true`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "sslMode",
        "SSL mode to use for the connection. Valid values are `none`, `require`, `verify-ca`, `verify-full`. (AWS default is `none`.)",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "cdcMinFileSize",
        "Minimum file size condition as defined in kilobytes to output a file to Amazon S3. (AWS default is 32000 KB.)",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "useTaskStartTimeForFullLoadTimestamp",
        "When set to `true`, uses the task start time as the timestamp column value instead of the time data is written to target. For full load, when set to `true`, each row of the timestamp column contains the task start time. For CDC loads, each row of the timestamp column contains the transaction commit time.When set to false, the full load timestamp in the timestamp column increments with the time data arrives at the target. Default is `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "csvRowDelimiter",
        "Delimiter used to separate rows in the source files. Default is newline (_i.e._, `\\n`).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "timestampColumnName",
        "Column to add with timestamp information to the endpoint data for an Amazon S3 target.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "cdcInsertsAndUpdates",
        "Whether to write insert and update operations to .csv or .parquet output files. Default is `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "datePartitionEnabled",
        "Partition S3 bucket folders based on transaction commit dates. Default is `false`. (Ignored for source endpoints.)",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "dictPageSizeLimit",
        "Maximum size in bytes of an encoded dictionary page of a column. (AWS default is 1 MiB, _i.e._, `1048576`.)",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "datePartitionTimezone",
        "Convert the current UTC time to a timezone. The conversion occurs when a date partition folder is created and a CDC filename is generated. The timezone format is Area/Location (_e.g._, `Europe/Paris`). Use this when `date_partition_enabled` is `true`. (Ignored for source endpoints.)",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "compressionType",
        "Set to compress target files. Valid values are `GZIP` and `NONE`. Default is `NONE`. (Ignored for source endpoints.)",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "addTrailingPaddingCharacter",
        "Whether to add padding. Default is `false`. (Ignored for source endpoints.)",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "cdcMaxBatchInterval",
        "Maximum length of the interval, defined in seconds, after which to output a file to Amazon S3. (AWS default is `60`.)",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "serverSideEncryptionKmsKeyId",
        "When `encryption_mode` is `SSE_KMS`, ARN for the AWS KMS key. (Ignored for source endpoints -- only `SSE_S3` `encryption_mode` is valid.)",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "parquetTimestampInMillisecond",
        "Specifies the precision of any TIMESTAMP column values written to an S3 object file in .parquet format. Default is `false`. (Ignored for source endpoints.)",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "bucketName",
        "S3 bucket name.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "certificateArn",
        "ARN for the certificate.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "dataFormat",
        "Output format for the files that AWS DMS uses to create S3 objects. Valid values are `csv` and `parquet`.  (Ignored for source endpoints -- only `csv` is valid.)",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "cdcInsertsOnly",
        "Whether to write insert operations to .csv or .parquet output files. Default is `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "parquetVersion",
        "Version of the .parquet file format. Valid values are `parquet-1-0` and `parquet-2-0`. (AWS default is `parquet-1-0`.) (Ignored for source endpoints.)",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "ignoreHeaderRows",
        "When this value is set to `1`, DMS ignores the first row header in a .csv file. (AWS default is `0`.)",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "expectedBucketOwner",
        "Bucket owner to prevent sniping. Value is an AWS account ID.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "detachTargetOnLobLookupFailureParquet",
        "Undocumented argument for use as directed by AWS Support.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "preserveTransactions",
        "Whether DMS saves the transaction order for a CDC load on the S3 target specified by `cdc_path`. Default is `false`. (Ignored for source endpoints.)",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "encryptionMode",
        "Server-side encryption mode that you want to encrypt your .csv or .parquet object files copied to S3. Valid values are `SSE_S3` and `SSE_KMS`. (AWS default is `SSE_S3`.) (Ignored for source endpoints -- only `SSE_S3` is valid.)",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "csvNoSupValue",
        "Only applies if output files for a CDC load are written in .csv format. If `use_csv_no_sup_value` is set to `true`, string to use for all columns not included in the supplemental log. If you do not specify a string value, DMS uses the null value for these columns regardless of `use_csv_no_sup_value`. (Ignored for source endpoints.)",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "endpointId",
        "Database endpoint identifier. Identifiers must contain from 1 to 255 alphanumeric characters or hyphens, begin with a letter, contain only ASCII letters, digits, and hyphens, not end with a hyphen, and not contain two consecutive hyphens.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyArn",
        "ARN for the KMS key that will be used to encrypt the connection parameters. If you do not specify a value for `kms_key_arn`, then AWS DMS will use your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS region.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "includeOpForFullLoad",
        "Whether to enable a full load to write INSERT operations to the .csv output files only to indicate how the rows were added to the source database. Default is `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "datePartitionSequence",
        "Date format to use during folder partitioning. Use this parameter when `date_partition_enabled` is set to true. Valid values are `YYYYMMDD`, `YYYYMMDDHH`, `YYYYMM`, `MMYYYYDD`, and `DDMMYYYY`. (AWS default is `YYYYMMDD`.) (Ignored for source endpoints.)",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableStatistics",
        "Whether to enable statistics for Parquet pages and row groups. Default is `true`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "datePartitionDelimiter",
        "Date separating delimiter to use during folder partitioning. Valid values are `SLASH`, `UNDERSCORE`, `DASH`, and `NONE`. (AWS default is `SLASH`.) (Ignored for source endpoints.)",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "encodingType",
        "Type of encoding to use. Value values are `rle_dictionary`, `plain`, and `plain_dictionary`. (AWS default is `rle_dictionary`.)",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "maxFileSize",
        "Maximum size (in KB) of any .csv file to be created while migrating to an S3 target during full load. Valid values are from `1` to `1048576`. (AWS default is 1 GB, _i.e._, `1048576`.)",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "bucketFolder",
        "S3 object prefix.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "cannedAclForObjects",
        "Predefined (canned) access control list for objects created in an S3 bucket. Valid values include `none`, `private`, `public-read`, `public-read-write`, `authenticated-read`, `aws-exec-read`, `bucket-owner-read`, and `bucket-owner-full-control`. Default is `none`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "dataPageSize",
        "Size of one data page in bytes. (AWS default is 1 MiB, _i.e._, `1048576`.)",
        [],
        false,
        false,
      ),
    ];
  }
}
