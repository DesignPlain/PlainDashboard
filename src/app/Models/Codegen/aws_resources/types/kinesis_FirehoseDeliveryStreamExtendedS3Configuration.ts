import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration,
  kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration_GetTypes,
} from "./kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration";
import {
  kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions,
  kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions_GetTypes,
} from "./kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions";
import {
  kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfiguration,
  kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfiguration_GetTypes,
} from "./kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfiguration";
import {
  kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration,
  kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration_GetTypes,
} from "./kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration";
import {
  kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration,
  kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration_GetTypes,
} from "./kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration";

export interface kinesis_FirehoseDeliveryStreamExtendedS3Configuration {
  // The configuration for dynamic partitioning. Required when using [dynamic partitioning](https://docs.aws.amazon.com/firehose/latest/dev/dynamic-partitioning.html). See `dynamic_partitioning_configuration` block below for details.
  dynamicPartitioningConfiguration?: kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfiguration;

  // Prefix added to failed records before writing them to S3. Not currently supported for `redshift` destination. This prefix appears immediately following the bucket name. For information about how to specify this prefix, see [Custom Prefixes for Amazon S3 Objects](https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html).
  errorOutputPrefix?: string;

  // The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered S3 files. You can specify an extra prefix to be added in front of the time format prefix. Note that if the prefix ends with a slash, it appears as a folder in the S3 bucket
  prefix?: string;

  // The data processing configuration.  See `processing_configuration` block below for details.
  processingConfiguration?: kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration;

  // Nested argument for the serializer, deserializer, and schema for converting data from the JSON format to the Parquet or ORC format before writing it to Amazon S3. See `data_format_conversion_configuration` block below for details.
  dataFormatConversionConfiguration?: kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration;

  // Buffer incoming data to the specified size, in MBs between 1 to 100, before delivering it to the destination.  The default value is 5MB.
  bufferingSize?: number;

  // The compression format. If no value is specified, the default is `UNCOMPRESSED`. Other supported values are `GZIP`, `ZIP`, `Snappy`, & `HADOOP_SNAPPY`.
  compressionFormat?: string;

  // The time zone you prefer. Valid values are `UTC` or a non-3-letter IANA time zones (for example, `America/Los_Angeles`). Default value is `UTC`.
  customTimeZone?: string;

  // The file extension to override the default file extension (for example, `.json`).
  fileExtension?: string;

  /*
Specifies the KMS key ARN the stream will use to encrypt data. If not set, no encryption will
be used.
*/
  kmsKeyArn?: string;

  // The configuration for backup in Amazon S3. Required if `s3_backup_mode` is `Enabled`. Supports the same fields as `s3_configuration` object.
  s3BackupConfiguration?: kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration;

  // Defines how documents should be delivered to Amazon S3.  Valid values are `FailedDocumentsOnly` and `AllDocuments`.  Default value is `FailedDocumentsOnly`.
  s3BackupMode?: string;

  // Buffer incoming data for the specified period of time, in seconds between 0 to 900, before delivering it to the destination.  The default value is 300s.
  bufferingInterval?: number;

  // The CloudWatch Logging Options for the delivery stream. See `cloudwatch_logging_options` block below for details.
  cloudwatchLoggingOptions?: kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions;

  // The ARN of the role used to access the Amazon MSK cluster.
  roleArn?: string;

  // The ARN of the S3 bucket
  bucketArn?: string;
}

export function kinesis_FirehoseDeliveryStreamExtendedS3Configuration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "prefix",
      'The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered S3 files. You can specify an extra prefix to be added in front of the time format prefix. Note that if the prefix ends with a slash, it appears as a folder in the S3 bucket',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "processingConfiguration",
      "The data processing configuration.  See `processing_configuration` block below for details.",
      kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "compressionFormat",
      "The compression format. If no value is specified, the default is `UNCOMPRESSED`. Other supported values are `GZIP`, `ZIP`, `Snappy`, & `HADOOP_SNAPPY`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyArn",
      "Specifies the KMS key ARN the stream will use to encrypt data. If not set, no encryption will\nbe used.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "fileExtension",
      "The file extension to override the default file extension (for example, `.json`).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "s3BackupConfiguration",
      "The configuration for backup in Amazon S3. Required if `s3_backup_mode` is `Enabled`. Supports the same fields as `s3_configuration` object.",
      kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "bufferingInterval",
      "Buffer incoming data for the specified period of time, in seconds between 0 to 900, before delivering it to the destination.  The default value is 300s.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "The ARN of the role used to access the Amazon MSK cluster.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dynamicPartitioningConfiguration",
      "The configuration for dynamic partitioning. Required when using [dynamic partitioning](https://docs.aws.amazon.com/firehose/latest/dev/dynamic-partitioning.html). See `dynamic_partitioning_configuration` block below for details.",
      kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfiguration_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "errorOutputPrefix",
      "Prefix added to failed records before writing them to S3. Not currently supported for `redshift` destination. This prefix appears immediately following the bucket name. For information about how to specify this prefix, see [Custom Prefixes for Amazon S3 Objects](https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "customTimeZone",
      "The time zone you prefer. Valid values are `UTC` or a non-3-letter IANA time zones (for example, `America/Los_Angeles`). Default value is `UTC`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucketArn",
      "The ARN of the S3 bucket",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dataFormatConversionConfiguration",
      "Nested argument for the serializer, deserializer, and schema for converting data from the JSON format to the Parquet or ORC format before writing it to Amazon S3. See `data_format_conversion_configuration` block below for details.",
      kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "bufferingSize",
      "Buffer incoming data to the specified size, in MBs between 1 to 100, before delivering it to the destination.  The default value is 5MB.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3BackupMode",
      "Defines how documents should be delivered to Amazon S3.  Valid values are `FailedDocumentsOnly` and `AllDocuments`.  Default value is `FailedDocumentsOnly`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "cloudwatchLoggingOptions",
      "The CloudWatch Logging Options for the delivery stream. See `cloudwatch_logging_options` block below for details.",
      kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions_GetTypes(),
      false,
      false,
    ),
  ];
}
