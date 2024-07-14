import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  lambda_EventSourceMappingSourceAccessConfiguration,
  lambda_EventSourceMappingSourceAccessConfiguration_GetTypes,
} from "../types/lambda_EventSourceMappingSourceAccessConfiguration";
import {
  lambda_EventSourceMappingSelfManagedEventSource,
  lambda_EventSourceMappingSelfManagedEventSource_GetTypes,
} from "../types/lambda_EventSourceMappingSelfManagedEventSource";
import {
  lambda_EventSourceMappingAmazonManagedKafkaEventSourceConfig,
  lambda_EventSourceMappingAmazonManagedKafkaEventSourceConfig_GetTypes,
} from "../types/lambda_EventSourceMappingAmazonManagedKafkaEventSourceConfig";
import {
  lambda_EventSourceMappingDestinationConfig,
  lambda_EventSourceMappingDestinationConfig_GetTypes,
} from "../types/lambda_EventSourceMappingDestinationConfig";
import {
  lambda_EventSourceMappingSelfManagedKafkaEventSourceConfig,
  lambda_EventSourceMappingSelfManagedKafkaEventSourceConfig_GetTypes,
} from "../types/lambda_EventSourceMappingSelfManagedKafkaEventSourceConfig";
import {
  lambda_EventSourceMappingDocumentDbEventSourceConfig,
  lambda_EventSourceMappingDocumentDbEventSourceConfig_GetTypes,
} from "../types/lambda_EventSourceMappingDocumentDbEventSourceConfig";
import {
  lambda_EventSourceMappingFilterCriteria,
  lambda_EventSourceMappingFilterCriteria_GetTypes,
} from "../types/lambda_EventSourceMappingFilterCriteria";
import {
  lambda_EventSourceMappingScalingConfig,
  lambda_EventSourceMappingScalingConfig_GetTypes,
} from "../types/lambda_EventSourceMappingScalingConfig";

export interface EventSourceMappingArgs {
  // The duration in seconds of a processing window for [AWS Lambda streaming analytics](https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-windows). The range is between 1 second up to 900 seconds. Only available for stream sources (DynamoDB and Kinesis).
  tumblingWindowInSeconds?: number;

  // - (Optional) If the function returns an error, split the batch in two and retry. Only available for stream sources (DynamoDB and Kinesis). Defaults to `false`.
  bisectBatchOnFunctionError?: boolean;

  // A list of current response type enums applied to the event source mapping for [AWS Lambda checkpointing](https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-ddb-batchfailurereporting). Only available for SQS and stream sources (DynamoDB and Kinesis). Valid values: `ReportBatchItemFailures`.
  functionResponseTypes?: Array<string>;

  // - (Optional) The maximum number of times to retry when the function returns an error. Only available for stream sources (DynamoDB and Kinesis). Minimum and default of -1 (forever), maximum of 10000.
  maximumRetryAttempts?: number;

  // - (Optional) The number of batches to process from each shard concurrently. Only available for stream sources (DynamoDB and Kinesis). Minimum and default of 1, maximum of 10.
  parallelizationFactor?: number;

  // - (Optional) For Self Managed Kafka sources, the location of the self managed cluster. If set, configuration must also include `source_access_configuration`. Detailed below.
  selfManagedEventSource?: lambda_EventSourceMappingSelfManagedEventSource;

  // Additional configuration block for Amazon Managed Kafka sources. Incompatible with "self_managed_event_source" and "self_managed_kafka_event_source_config". Detailed below.
  amazonManagedKafkaEventSourceConfig?: lambda_EventSourceMappingAmazonManagedKafkaEventSourceConfig;

  // - (Optional) An Amazon SQS queue, Amazon SNS topic or Amazon S3 bucket (only available for Kafka sources) destination for failed records. Only available for stream sources (DynamoDB and Kinesis) and Kafka sources (Amazon MSK and Self-managed Apache Kafka). Detailed below.
  destinationConfig?: lambda_EventSourceMappingDestinationConfig;

  // The name or the ARN of the Lambda function that will be subscribing to events.
  functionName?: string;

  // A timestamp in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8) of the data record which to start reading when using `starting_position` set to `AT_TIMESTAMP`. If a record with this exact timestamp does not exist, the next later record is chosen. If the timestamp is older than the current trim horizon, the oldest available record is chosen.
  startingPositionTimestamp?: string;

  // The name of the Amazon MQ broker destination queue to consume. Only available for MQ sources. The list must contain exactly one queue name.
  queues?: string;

  // Additional configuration block for Self Managed Kafka sources. Incompatible with "event_source_arn" and "amazon_managed_kafka_event_source_config". Detailed below.
  selfManagedKafkaEventSourceConfig?: lambda_EventSourceMappingSelfManagedKafkaEventSourceConfig;

  // The largest number of records that Lambda will retrieve from your event source at the time of invocation. Defaults to `100` for DynamoDB, Kinesis, MQ and MSK, `10` for SQS.
  batchSize?: number;

  // - (Optional) Configuration settings for a DocumentDB event source. Detailed below.
  documentDbEventSourceConfig?: lambda_EventSourceMappingDocumentDbEventSourceConfig;

  // The criteria to use for [event filtering](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html) Kinesis stream, DynamoDB stream, SQS queue event sources. Detailed below.
  filterCriteria?: lambda_EventSourceMappingFilterCriteria;

  // The maximum amount of time to gather records before invoking the function, in seconds (between 0 and 300). Records will continue to buffer (or accumulate in the case of an SQS queue event source) until either `maximum_batching_window_in_seconds` expires or `batch_size` has been met. For streaming event sources, defaults to as soon as records are available in the stream. If the batch it reads from the stream/queue only has one record in it, Lambda only sends one record to the function. Only available for stream sources (DynamoDB and Kinesis) and SQS standard queues.
  maximumBatchingWindowInSeconds?: number;

  // - (Optional) The maximum age of a record that Lambda sends to a function for processing. Only available for stream sources (DynamoDB and Kinesis). Must be either -1 (forever, and the default value) or between 60 and 604800 (inclusive).
  maximumRecordAgeInSeconds?: number;

  // The name of the Kafka topics. Only available for MSK sources. A single topic name must be specified.
  topics?: Array<string>;

  // Determines if the mapping will be enabled on creation. Defaults to `true`.
  enabled?: boolean;

  // The event source ARN - this is required for Kinesis stream, DynamoDB stream, SQS queue, MQ broker, MSK cluster or DocumentDB change stream.  It is incompatible with a Self Managed Kafka source.
  eventSourceArn?: string;

  // Scaling configuration of the event source. Only available for SQS queues. Detailed below.
  scalingConfig?: lambda_EventSourceMappingScalingConfig;

  // For Self Managed Kafka sources, the access configuration for the source. If set, configuration must also include `self_managed_event_source`. Detailed below.
  sourceAccessConfigurations?: Array<lambda_EventSourceMappingSourceAccessConfiguration>;

  // The position in the stream where AWS Lambda should start reading. Must be one of `AT_TIMESTAMP` (Kinesis only), `LATEST` or `TRIM_HORIZON` if getting events from Kinesis, DynamoDB, MSK or Self Managed Apache Kafka. Must not be provided if getting events from SQS. More information about these positions can be found in the [AWS DynamoDB Streams API Reference](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_GetShardIterator.html) and [AWS Kinesis API Reference](https://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetShardIterator.html#Kinesis-GetShardIterator-request-ShardIteratorType).
  startingPosition?: string;
}
export class EventSourceMapping extends Resource {
  // The name of the Kafka topics. Only available for MSK sources. A single topic name must be specified.
  public topics?: Array<string>;

  // - (Optional) Configuration settings for a DocumentDB event source. Detailed below.
  public documentDbEventSourceConfig?: lambda_EventSourceMappingDocumentDbEventSourceConfig;

  // The name or the ARN of the Lambda function that will be subscribing to events.
  public functionName?: string;

  // Scaling configuration of the event source. Only available for SQS queues. Detailed below.
  public scalingConfig?: lambda_EventSourceMappingScalingConfig;

  // The maximum amount of time to gather records before invoking the function, in seconds (between 0 and 300). Records will continue to buffer (or accumulate in the case of an SQS queue event source) until either `maximum_batching_window_in_seconds` expires or `batch_size` has been met. For streaming event sources, defaults to as soon as records are available in the stream. If the batch it reads from the stream/queue only has one record in it, Lambda only sends one record to the function. Only available for stream sources (DynamoDB and Kinesis) and SQS standard queues.
  public maximumBatchingWindowInSeconds?: number;

  // The name of the Amazon MQ broker destination queue to consume. Only available for MQ sources. The list must contain exactly one queue name.
  public queues?: string;

  // - (Optional) For Self Managed Kafka sources, the location of the self managed cluster. If set, configuration must also include `source_access_configuration`. Detailed below.
  public selfManagedEventSource?: lambda_EventSourceMappingSelfManagedEventSource;

  // Determines if the mapping will be enabled on creation. Defaults to `true`.
  public enabled?: boolean;

  // The the ARN of the Lambda function the event source mapping is sending events to. (Note: this is a computed value that differs from `function_name` above.)
  public functionArn?: string;

  // A list of current response type enums applied to the event source mapping for [AWS Lambda checkpointing](https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-ddb-batchfailurereporting). Only available for SQS and stream sources (DynamoDB and Kinesis). Valid values: `ReportBatchItemFailures`.
  public functionResponseTypes?: Array<string>;

  // The state of the event source mapping.
  public state?: string;

  // Additional configuration block for Self Managed Kafka sources. Incompatible with "event_source_arn" and "amazon_managed_kafka_event_source_config". Detailed below.
  public selfManagedKafkaEventSourceConfig?: lambda_EventSourceMappingSelfManagedKafkaEventSourceConfig;

  // A timestamp in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8) of the data record which to start reading when using `starting_position` set to `AT_TIMESTAMP`. If a record with this exact timestamp does not exist, the next later record is chosen. If the timestamp is older than the current trim horizon, the oldest available record is chosen.
  public startingPositionTimestamp?: string;

  // The largest number of records that Lambda will retrieve from your event source at the time of invocation. Defaults to `100` for DynamoDB, Kinesis, MQ and MSK, `10` for SQS.
  public batchSize?: number;

  // The date this resource was last modified.
  public lastModified?: string;

  // The position in the stream where AWS Lambda should start reading. Must be one of `AT_TIMESTAMP` (Kinesis only), `LATEST` or `TRIM_HORIZON` if getting events from Kinesis, DynamoDB, MSK or Self Managed Apache Kafka. Must not be provided if getting events from SQS. More information about these positions can be found in the [AWS DynamoDB Streams API Reference](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_GetShardIterator.html) and [AWS Kinesis API Reference](https://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetShardIterator.html#Kinesis-GetShardIterator-request-ShardIteratorType).
  public startingPosition?: string;

  // - (Optional) The number of batches to process from each shard concurrently. Only available for stream sources (DynamoDB and Kinesis). Minimum and default of 1, maximum of 10.
  public parallelizationFactor?: number;

  // The reason the event source mapping is in its current state.
  public stateTransitionReason?: string;

  // The duration in seconds of a processing window for [AWS Lambda streaming analytics](https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-windows). The range is between 1 second up to 900 seconds. Only available for stream sources (DynamoDB and Kinesis).
  public tumblingWindowInSeconds?: number;

  // Additional configuration block for Amazon Managed Kafka sources. Incompatible with "self_managed_event_source" and "self_managed_kafka_event_source_config". Detailed below.
  public amazonManagedKafkaEventSourceConfig?: lambda_EventSourceMappingAmazonManagedKafkaEventSourceConfig;

  // - (Optional) If the function returns an error, split the batch in two and retry. Only available for stream sources (DynamoDB and Kinesis). Defaults to `false`.
  public bisectBatchOnFunctionError?: boolean;

  // - (Optional) An Amazon SQS queue, Amazon SNS topic or Amazon S3 bucket (only available for Kafka sources) destination for failed records. Only available for stream sources (DynamoDB and Kinesis) and Kafka sources (Amazon MSK and Self-managed Apache Kafka). Detailed below.
  public destinationConfig?: lambda_EventSourceMappingDestinationConfig;

  // - (Optional) The maximum age of a record that Lambda sends to a function for processing. Only available for stream sources (DynamoDB and Kinesis). Must be either -1 (forever, and the default value) or between 60 and 604800 (inclusive).
  public maximumRecordAgeInSeconds?: number;

  // - (Optional) The maximum number of times to retry when the function returns an error. Only available for stream sources (DynamoDB and Kinesis). Minimum and default of -1 (forever), maximum of 10000.
  public maximumRetryAttempts?: number;

  // For Self Managed Kafka sources, the access configuration for the source. If set, configuration must also include `self_managed_event_source`. Detailed below.
  public sourceAccessConfigurations?: Array<lambda_EventSourceMappingSourceAccessConfiguration>;

  // The UUID of the created event source mapping.
  public uuid?: string;

  // The event source ARN - this is required for Kinesis stream, DynamoDB stream, SQS queue, MQ broker, MSK cluster or DocumentDB change stream.  It is incompatible with a Self Managed Kafka source.
  public eventSourceArn?: string;

  // The criteria to use for [event filtering](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html) Kinesis stream, DynamoDB stream, SQS queue event sources. Detailed below.
  public filterCriteria?: lambda_EventSourceMappingFilterCriteria;

  // The result of the last AWS Lambda invocation of your Lambda function.
  public lastProcessingResult?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "sourceAccessConfigurations",
        "For Self Managed Kafka sources, the access configuration for the source. If set, configuration must also include `self_managed_event_source`. Detailed below.",
        lambda_EventSourceMappingSourceAccessConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "bisectBatchOnFunctionError",
        "- (Optional) If the function returns an error, split the batch in two and retry. Only available for stream sources (DynamoDB and Kinesis). Defaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "startingPositionTimestamp",
        "A timestamp in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8) of the data record which to start reading when using `starting_position` set to `AT_TIMESTAMP`. If a record with this exact timestamp does not exist, the next later record is chosen. If the timestamp is older than the current trim horizon, the oldest available record is chosen.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "filterCriteria",
        "The criteria to use for [event filtering](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html) Kinesis stream, DynamoDB stream, SQS queue event sources. Detailed below.",
        lambda_EventSourceMappingFilterCriteria_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "maximumBatchingWindowInSeconds",
        "The maximum amount of time to gather records before invoking the function, in seconds (between 0 and 300). Records will continue to buffer (or accumulate in the case of an SQS queue event source) until either `maximum_batching_window_in_seconds` expires or `batch_size` has been met. For streaming event sources, defaults to as soon as records are available in the stream. If the batch it reads from the stream/queue only has one record in it, Lambda only sends one record to the function. Only available for stream sources (DynamoDB and Kinesis) and SQS standard queues.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "topics",
        "The name of the Kafka topics. Only available for MSK sources. A single topic name must be specified.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "eventSourceArn",
        "The event source ARN - this is required for Kinesis stream, DynamoDB stream, SQS queue, MQ broker, MSK cluster or DocumentDB change stream.  It is incompatible with a Self Managed Kafka source.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "maximumRetryAttempts",
        "- (Optional) The maximum number of times to retry when the function returns an error. Only available for stream sources (DynamoDB and Kinesis). Minimum and default of -1 (forever), maximum of 10000.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "parallelizationFactor",
        "- (Optional) The number of batches to process from each shard concurrently. Only available for stream sources (DynamoDB and Kinesis). Minimum and default of 1, maximum of 10.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "selfManagedEventSource",
        "- (Optional) For Self Managed Kafka sources, the location of the self managed cluster. If set, configuration must also include `source_access_configuration`. Detailed below.",
        lambda_EventSourceMappingSelfManagedEventSource_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "functionName",
        "The name or the ARN of the Lambda function that will be subscribing to events.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "scalingConfig",
        "Scaling configuration of the event source. Only available for SQS queues. Detailed below.",
        lambda_EventSourceMappingScalingConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "startingPosition",
        "The position in the stream where AWS Lambda should start reading. Must be one of `AT_TIMESTAMP` (Kinesis only), `LATEST` or `TRIM_HORIZON` if getting events from Kinesis, DynamoDB, MSK or Self Managed Apache Kafka. Must not be provided if getting events from SQS. More information about these positions can be found in the [AWS DynamoDB Streams API Reference](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_GetShardIterator.html) and [AWS Kinesis API Reference](https://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetShardIterator.html#Kinesis-GetShardIterator-request-ShardIteratorType).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "maximumRecordAgeInSeconds",
        "- (Optional) The maximum age of a record that Lambda sends to a function for processing. Only available for stream sources (DynamoDB and Kinesis). Must be either -1 (forever, and the default value) or between 60 and 604800 (inclusive).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enabled",
        "Determines if the mapping will be enabled on creation. Defaults to `true`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "tumblingWindowInSeconds",
        "The duration in seconds of a processing window for [AWS Lambda streaming analytics](https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-windows). The range is between 1 second up to 900 seconds. Only available for stream sources (DynamoDB and Kinesis).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "amazonManagedKafkaEventSourceConfig",
        'Additional configuration block for Amazon Managed Kafka sources. Incompatible with "self_managed_event_source" and "self_managed_kafka_event_source_config". Detailed below.',
        lambda_EventSourceMappingAmazonManagedKafkaEventSourceConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "destinationConfig",
        "- (Optional) An Amazon SQS queue, Amazon SNS topic or Amazon S3 bucket (only available for Kafka sources) destination for failed records. Only available for stream sources (DynamoDB and Kinesis) and Kafka sources (Amazon MSK and Self-managed Apache Kafka). Detailed below.",
        lambda_EventSourceMappingDestinationConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "selfManagedKafkaEventSourceConfig",
        'Additional configuration block for Self Managed Kafka sources. Incompatible with "event_source_arn" and "amazon_managed_kafka_event_source_config". Detailed below.',
        lambda_EventSourceMappingSelfManagedKafkaEventSourceConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "batchSize",
        "The largest number of records that Lambda will retrieve from your event source at the time of invocation. Defaults to `100` for DynamoDB, Kinesis, MQ and MSK, `10` for SQS.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "documentDbEventSourceConfig",
        "- (Optional) Configuration settings for a DocumentDB event source. Detailed below.",
        lambda_EventSourceMappingDocumentDbEventSourceConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "functionResponseTypes",
        "A list of current response type enums applied to the event source mapping for [AWS Lambda checkpointing](https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-ddb-batchfailurereporting). Only available for SQS and stream sources (DynamoDB and Kinesis). Valid values: `ReportBatchItemFailures`.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "queues",
        "The name of the Amazon MQ broker destination queue to consume. Only available for MQ sources. The list must contain exactly one queue name.",
        [],
        false,
        true,
      ),
    ];
  }
}
