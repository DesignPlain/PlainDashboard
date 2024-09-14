import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions,
  kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions_GetTypes,
} from "./kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions";

export interface kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration {
  // The ARN of the S3 bucket
  bucketArn?: string;

  //
  bufferingSize?: number;

  /*
Specifies the KMS key ARN the stream will use to encrypt data. If not set, no encryption will
be used.
*/
  kmsKeyArn?: string;

  // Prefix added to failed records before writing them to S3. Not currently supported for `redshift` destination. This prefix appears immediately following the bucket name. For information about how to specify this prefix, see [Custom Prefixes for Amazon S3 Objects](https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html).
  errorOutputPrefix?: string;

  // The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered S3 files. You can specify an extra prefix to be added in front of the time format prefix. Note that if the prefix ends with a slash, it appears as a folder in the S3 bucket
  prefix?: string;

  //
  roleArn?: string;

  //
  bufferingInterval?: number;

  //
  cloudwatchLoggingOptions?: kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions;

  // The compression format. If no value is specified, the default is `UNCOMPRESSED`. Other supported values are `GZIP`, `ZIP`, `Snappy`, & `HADOOP_SNAPPY`.
  compressionFormat?: string;
}

export function kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "bufferingSize",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "roleArn", "", () => [], true, false),
    new DynamicUIProps(
      InputType.Object,
      "cloudwatchLoggingOptions",
      "",
      () =>
        kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "compressionFormat",
      "The compression format. If no value is specified, the default is `UNCOMPRESSED`. Other supported values are `GZIP`, `ZIP`, `Snappy`, & `HADOOP_SNAPPY`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucketArn",
      "The ARN of the S3 bucket",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyArn",
      "Specifies the KMS key ARN the stream will use to encrypt data. If not set, no encryption will\nbe used.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "errorOutputPrefix",
      "Prefix added to failed records before writing them to S3. Not currently supported for `redshift` destination. This prefix appears immediately following the bucket name. For information about how to specify this prefix, see [Custom Prefixes for Amazon S3 Objects](https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html).",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "prefix",
      'The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered S3 files. You can specify an extra prefix to be added in front of the time format prefix. Note that if the prefix ends with a slash, it appears as a folder in the S3 bucket',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "bufferingInterval",
      "",
      () => [],
      false,
      false,
    ),
  ];
}
