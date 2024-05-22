import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  kinesis_FirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptions,
  kinesis_FirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptions_GetTypes,
} from "./kinesis_FirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptions";

export interface kinesis_FirehoseDeliveryStreamOpensearchConfigurationS3Configuration {
  // The CloudWatch Logging Options for the delivery stream. See `cloudwatch_logging_options` block below for details.
  cloudwatchLoggingOptions?: kinesis_FirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptions;

  /*
Specifies the KMS key ARN the stream will use to encrypt data. If not set, no encryption will
be used.
*/
  kmsKeyArn?: string;

  // The ARN of the S3 bucket
  bucketArn?: string;

  // Buffer incoming data for the specified period of time, in seconds between 0 to 900, before delivering it to the destination.  The default value is 300s.
  bufferingInterval?: number;

  // Buffer incoming data to the specified size, in MBs between 1 to 100, before delivering it to the destination.  The default value is 5MB.
  bufferingSize?: number;

  // The compression format. If no value is specified, the default is `UNCOMPRESSED`. Other supported values are `GZIP`, `ZIP`, `Snappy`, & `HADOOP_SNAPPY`.
  compressionFormat?: string;

  // Prefix added to failed records before writing them to S3. Not currently supported for `redshift` destination. This prefix appears immediately following the bucket name. For information about how to specify this prefix, see [Custom Prefixes for Amazon S3 Objects](https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html).
  errorOutputPrefix?: string;

  // The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered S3 files. You can specify an extra prefix to be added in front of the time format prefix. Note that if the prefix ends with a slash, it appears as a folder in the S3 bucket
  prefix?: string;

  // The ARN of the role used to access the Amazon MSK cluster.
  roleArn?: string;
}

export function kinesis_FirehoseDeliveryStreamOpensearchConfigurationS3Configuration_GetTypes(): DynamicUIProps[] {
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
      "cloudwatchLoggingOptions",
      "The CloudWatch Logging Options for the delivery stream. See `cloudwatch_logging_options` block below for details.",
      kinesis_FirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptions_GetTypes(),
      false,
      false,
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
      InputType.Number,
      "bufferingInterval",
      "Buffer incoming data for the specified period of time, in seconds between 0 to 900, before delivering it to the destination.  The default value is 300s.",
      [],
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
      "compressionFormat",
      "The compression format. If no value is specified, the default is `UNCOMPRESSED`. Other supported values are `GZIP`, `ZIP`, `Snappy`, & `HADOOP_SNAPPY`.",
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
      InputType.String,
      "kmsKeyArn",
      "Specifies the KMS key ARN the stream will use to encrypt data. If not set, no encryption will\nbe used.",
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
  ];
}
