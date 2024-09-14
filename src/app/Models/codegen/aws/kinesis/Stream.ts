import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  kinesis_StreamStreamModeDetails,
  kinesis_StreamStreamModeDetails_GetTypes,
} from "../types/kinesis_StreamStreamModeDetails";

export interface StreamArgs {
  // A list of shard-level CloudWatch metrics which can be enabled for the stream. See [Monitoring with CloudWatch](https://docs.aws.amazon.com/streams/latest/dev/monitoring-with-cloudwatch.html) for more. Note that the value ALL should not be used; instead you should provide an explicit list of metrics you wish to enable.
  shardLevelMetrics?: Array<string>;

  // The GUID for the customer-managed KMS key to use for encryption. You can also use a Kinesis-owned master key by specifying the alias `alias/aws/kinesis`.
  kmsKeyId?: string;

  // A name to identify the stream. This is unique to the AWS account and region the Stream is created in.
  name?: string;

  // Length of time data records are accessible after they are added to the stream. The maximum value of a stream's retention period is 8760 hours. Minimum value is 24. Default is 24.
  retentionPeriod?: number;

  /*
The number of shards that the stream will use. If the `stream_mode` is `PROVISIONED`, this field is required.
Amazon has guidelines for specifying the Stream size that should be referenced when creating a Kinesis stream. See [Amazon Kinesis Streams](https://docs.aws.amazon.com/kinesis/latest/dev/amazon-kinesis-streams.html) for more.
*/
  shardCount?: number;

  // Indicates the [capacity mode](https://docs.aws.amazon.com/streams/latest/dev/how-do-i-size-a-stream.html) of the data stream. Detailed below.
  streamModeDetails?: kinesis_StreamStreamModeDetails;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The Amazon Resource Name (ARN) specifying the Stream (same as `id`)
  arn?: string;

  // The encryption type to use. The only acceptable values are `NONE` or `KMS`. The default value is `NONE`.
  encryptionType?: string;

  // A boolean that indicates all registered consumers should be deregistered from the stream so that the stream can be destroyed without error. The default value is `false`.
  enforceConsumerDeletion?: boolean;
}
export class Stream extends DS_Resource {
  // The encryption type to use. The only acceptable values are `NONE` or `KMS`. The default value is `NONE`.
  public encryptionType?: string;

  // The GUID for the customer-managed KMS key to use for encryption. You can also use a Kinesis-owned master key by specifying the alias `alias/aws/kinesis`.
  public kmsKeyId?: string;

  /*
The number of shards that the stream will use. If the `stream_mode` is `PROVISIONED`, this field is required.
Amazon has guidelines for specifying the Stream size that should be referenced when creating a Kinesis stream. See [Amazon Kinesis Streams](https://docs.aws.amazon.com/kinesis/latest/dev/amazon-kinesis-streams.html) for more.
*/
  public shardCount?: number;

  // Indicates the [capacity mode](https://docs.aws.amazon.com/streams/latest/dev/how-do-i-size-a-stream.html) of the data stream. Detailed below.
  public streamModeDetails?: kinesis_StreamStreamModeDetails;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The Amazon Resource Name (ARN) specifying the Stream (same as `id`)
  public arn?: string;

  // A name to identify the stream. This is unique to the AWS account and region the Stream is created in.
  public name?: string;

  // Length of time data records are accessible after they are added to the stream. The maximum value of a stream's retention period is 8760 hours. Minimum value is 24. Default is 24.
  public retentionPeriod?: number;

  // A list of shard-level CloudWatch metrics which can be enabled for the stream. See [Monitoring with CloudWatch](https://docs.aws.amazon.com/streams/latest/dev/monitoring-with-cloudwatch.html) for more. Note that the value ALL should not be used; instead you should provide an explicit list of metrics you wish to enable.
  public shardLevelMetrics?: Array<string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // A boolean that indicates all registered consumers should be deregistered from the stream so that the stream can be destroyed without error. The default value is `false`.
  public enforceConsumerDeletion?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "kmsKeyId",
        "The GUID for the customer-managed KMS key to use for encryption. You can also use a Kinesis-owned master key by specifying the alias `alias/aws/kinesis`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "streamModeDetails",
        "Indicates the [capacity mode](https://docs.aws.amazon.com/streams/latest/dev/how-do-i-size-a-stream.html) of the data stream. Detailed below.",
        () => kinesis_StreamStreamModeDetails_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "arn",
        "The Amazon Resource Name (ARN) specifying the Stream (same as `id`)",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enforceConsumerDeletion",
        "A boolean that indicates all registered consumers should be deregistered from the stream so that the stream can be destroyed without error. The default value is `false`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "shardLevelMetrics",
        "A list of shard-level CloudWatch metrics which can be enabled for the stream. See [Monitoring with CloudWatch](https://docs.aws.amazon.com/streams/latest/dev/monitoring-with-cloudwatch.html) for more. Note that the value ALL should not be used; instead you should provide an explicit list of metrics you wish to enable.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "A name to identify the stream. This is unique to the AWS account and region the Stream is created in.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "retentionPeriod",
        "Length of time data records are accessible after they are added to the stream. The maximum value of a stream's retention period is 8760 hours. Minimum value is 24. Default is 24.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "shardCount",
        "The number of shards that the stream will use. If the `stream_mode` is `PROVISIONED`, this field is required.\nAmazon has guidelines for specifying the Stream size that should be referenced when creating a Kinesis stream. See [Amazon Kinesis Streams](https://docs.aws.amazon.com/kinesis/latest/dev/amazon-kinesis-streams.html) for more.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "encryptionType",
        "The encryption type to use. The only acceptable values are `NONE` or `KMS`. The default value is `NONE`.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
