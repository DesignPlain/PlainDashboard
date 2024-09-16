import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  kinesis_FirehoseDeliveryStreamKinesisSourceConfiguration,
  kinesis_FirehoseDeliveryStreamKinesisSourceConfiguration_GetTypes,
} from '../types/kinesis_FirehoseDeliveryStreamKinesisSourceConfiguration';
import {
  kinesis_FirehoseDeliveryStreamMskSourceConfiguration,
  kinesis_FirehoseDeliveryStreamMskSourceConfiguration_GetTypes,
} from '../types/kinesis_FirehoseDeliveryStreamMskSourceConfiguration';
import {
  kinesis_FirehoseDeliveryStreamOpensearchserverlessConfiguration,
  kinesis_FirehoseDeliveryStreamOpensearchserverlessConfiguration_GetTypes,
} from '../types/kinesis_FirehoseDeliveryStreamOpensearchserverlessConfiguration';
import {
  kinesis_FirehoseDeliveryStreamSplunkConfiguration,
  kinesis_FirehoseDeliveryStreamSplunkConfiguration_GetTypes,
} from '../types/kinesis_FirehoseDeliveryStreamSplunkConfiguration';
import {
  kinesis_FirehoseDeliveryStreamOpensearchConfiguration,
  kinesis_FirehoseDeliveryStreamOpensearchConfiguration_GetTypes,
} from '../types/kinesis_FirehoseDeliveryStreamOpensearchConfiguration';
import {
  kinesis_FirehoseDeliveryStreamExtendedS3Configuration,
  kinesis_FirehoseDeliveryStreamExtendedS3Configuration_GetTypes,
} from '../types/kinesis_FirehoseDeliveryStreamExtendedS3Configuration';
import {
  kinesis_FirehoseDeliveryStreamElasticsearchConfiguration,
  kinesis_FirehoseDeliveryStreamElasticsearchConfiguration_GetTypes,
} from '../types/kinesis_FirehoseDeliveryStreamElasticsearchConfiguration';
import {
  kinesis_FirehoseDeliveryStreamSnowflakeConfiguration,
  kinesis_FirehoseDeliveryStreamSnowflakeConfiguration_GetTypes,
} from '../types/kinesis_FirehoseDeliveryStreamSnowflakeConfiguration';
import {
  kinesis_FirehoseDeliveryStreamHttpEndpointConfiguration,
  kinesis_FirehoseDeliveryStreamHttpEndpointConfiguration_GetTypes,
} from '../types/kinesis_FirehoseDeliveryStreamHttpEndpointConfiguration';
import {
  kinesis_FirehoseDeliveryStreamRedshiftConfiguration,
  kinesis_FirehoseDeliveryStreamRedshiftConfiguration_GetTypes,
} from '../types/kinesis_FirehoseDeliveryStreamRedshiftConfiguration';
import {
  kinesis_FirehoseDeliveryStreamServerSideEncryption,
  kinesis_FirehoseDeliveryStreamServerSideEncryption_GetTypes,
} from '../types/kinesis_FirehoseDeliveryStreamServerSideEncryption';

export interface FirehoseDeliveryStreamArgs {
  // Configuration options when `destination` is `http_endpoint`. Requires the user to also specify an `s3_configuration` block.  See `http_endpoint_configuration` block below for details.
  httpEndpointConfiguration?: kinesis_FirehoseDeliveryStreamHttpEndpointConfiguration;

  // Configuration options when `destination` is `opensearch`. See `opensearch_configuration` block below for details.
  opensearchConfiguration?: kinesis_FirehoseDeliveryStreamOpensearchConfiguration;

  // Configuration options when `destination` is `redshift`. Requires the user to also specify an `s3_configuration` block. See `redshift_configuration` block below for details.
  redshiftConfiguration?: kinesis_FirehoseDeliveryStreamRedshiftConfiguration;

  // This is the destination to where the data is delivered. The only options are `s3` (Deprecated, use `extended_s3` instead), `extended_s3`, `redshift`, `elasticsearch`, `splunk`, `http_endpoint`, `opensearch`, `opensearchserverless` and `snowflake`.
  destination?: string;

  //
  versionId?: string;

  // Enhanced configuration options for the s3 destination. See `extended_s3_configuration` block below for details.
  extendedS3Configuration?: kinesis_FirehoseDeliveryStreamExtendedS3Configuration;

  // Configuration options when `destination` is `elasticsearch`. See `elasticsearch_configuration` block below for details.
  elasticsearchConfiguration?: kinesis_FirehoseDeliveryStreamElasticsearchConfiguration;

  // The stream and role Amazon Resource Names (ARNs) for a Kinesis data stream used as the source for a delivery stream. See `kinesis_source_configuration` block below for details.
  kinesisSourceConfiguration?: kinesis_FirehoseDeliveryStreamKinesisSourceConfiguration;

  // The configuration for the Amazon MSK cluster to be used as the source for a delivery stream. See `msk_source_configuration` block below for details.
  mskSourceConfiguration?: kinesis_FirehoseDeliveryStreamMskSourceConfiguration;

  /*
Encrypt at rest options. See `server_side_encryption` block below for details.

--NOTE:-- Server-side encryption should not be enabled when a kinesis stream is configured as the source of the firehose delivery stream.
*/
  serverSideEncryption?: kinesis_FirehoseDeliveryStreamServerSideEncryption;

  // Configuration options when `destination` is `snowflake`. See `snowflake_configuration` block below for details.
  snowflakeConfiguration?: kinesis_FirehoseDeliveryStreamSnowflakeConfiguration;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The Amazon Resource Name (ARN) specifying the Stream
  arn?: string;

  // A name to identify the stream. This is unique to the AWS account and region the Stream is created in. When using for WAF logging, name must be prefixed with `aws-waf-logs-`. See [AWS Documentation](https://docs.aws.amazon.com/waf/latest/developerguide/waf-policies.html#waf-policies-logging-config) for more details.
  name?: string;

  // Configuration options when `destination` is `opensearchserverless`. See `opensearchserverless_configuration` block below for details.
  opensearchserverlessConfiguration?: kinesis_FirehoseDeliveryStreamOpensearchserverlessConfiguration;

  // Configuration options when `destination` is `splunk`. See `splunk_configuration` block below for details.
  splunkConfiguration?: kinesis_FirehoseDeliveryStreamSplunkConfiguration;

  //
  destinationId?: string;
}
export class FirehoseDeliveryStream extends DS_Resource {
  // Configuration options when `destination` is `opensearch`. See `opensearch_configuration` block below for details.
  public opensearchConfiguration?: kinesis_FirehoseDeliveryStreamOpensearchConfiguration;

  // Configuration options when `destination` is `opensearchserverless`. See `opensearchserverless_configuration` block below for details.
  public opensearchserverlessConfiguration?: kinesis_FirehoseDeliveryStreamOpensearchserverlessConfiguration;

  /*
Encrypt at rest options. See `server_side_encryption` block below for details.

--NOTE:-- Server-side encryption should not be enabled when a kinesis stream is configured as the source of the firehose delivery stream.
*/
  public serverSideEncryption?: kinesis_FirehoseDeliveryStreamServerSideEncryption;

  // Configuration options when `destination` is `snowflake`. See `snowflake_configuration` block below for details.
  public snowflakeConfiguration?: kinesis_FirehoseDeliveryStreamSnowflakeConfiguration;

  // Configuration options when `destination` is `splunk`. See `splunk_configuration` block below for details.
  public splunkConfiguration?: kinesis_FirehoseDeliveryStreamSplunkConfiguration;

  // Enhanced configuration options for the s3 destination. See `extended_s3_configuration` block below for details.
  public extendedS3Configuration?: kinesis_FirehoseDeliveryStreamExtendedS3Configuration;

  // A name to identify the stream. This is unique to the AWS account and region the Stream is created in. When using for WAF logging, name must be prefixed with `aws-waf-logs-`. See [AWS Documentation](https://docs.aws.amazon.com/waf/latest/developerguide/waf-policies.html#waf-policies-logging-config) for more details.
  public name?: string;

  // The Amazon Resource Name (ARN) specifying the Stream
  public arn?: string;

  // Configuration options when `destination` is `redshift`. Requires the user to also specify an `s3_configuration` block. See `redshift_configuration` block below for details.
  public redshiftConfiguration?: kinesis_FirehoseDeliveryStreamRedshiftConfiguration;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // This is the destination to where the data is delivered. The only options are `s3` (Deprecated, use `extended_s3` instead), `extended_s3`, `redshift`, `elasticsearch`, `splunk`, `http_endpoint`, `opensearch`, `opensearchserverless` and `snowflake`.
  public destination?: string;

  //
  public destinationId?: string;

  // Configuration options when `destination` is `elasticsearch`. See `elasticsearch_configuration` block below for details.
  public elasticsearchConfiguration?: kinesis_FirehoseDeliveryStreamElasticsearchConfiguration;

  // Configuration options when `destination` is `http_endpoint`. Requires the user to also specify an `s3_configuration` block.  See `http_endpoint_configuration` block below for details.
  public httpEndpointConfiguration?: kinesis_FirehoseDeliveryStreamHttpEndpointConfiguration;

  // The stream and role Amazon Resource Names (ARNs) for a Kinesis data stream used as the source for a delivery stream. See `kinesis_source_configuration` block below for details.
  public kinesisSourceConfiguration?: kinesis_FirehoseDeliveryStreamKinesisSourceConfiguration;

  // The configuration for the Amazon MSK cluster to be used as the source for a delivery stream. See `msk_source_configuration` block below for details.
  public mskSourceConfiguration?: kinesis_FirehoseDeliveryStreamMskSourceConfiguration;

  //
  public versionId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'opensearchserverlessConfiguration',
        'Configuration options when `destination` is `opensearchserverless`. See `opensearchserverless_configuration` block below for details.',
        () =>
          kinesis_FirehoseDeliveryStreamOpensearchserverlessConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'destinationId',
        '',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'httpEndpointConfiguration',
        'Configuration options when `destination` is `http_endpoint`. Requires the user to also specify an `s3_configuration` block.  See `http_endpoint_configuration` block below for details.',
        () =>
          kinesis_FirehoseDeliveryStreamHttpEndpointConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'extendedS3Configuration',
        'Enhanced configuration options for the s3 destination. See `extended_s3_configuration` block below for details.',
        () => kinesis_FirehoseDeliveryStreamExtendedS3Configuration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'arn',
        'The Amazon Resource Name (ARN) specifying the Stream',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'A name to identify the stream. This is unique to the AWS account and region the Stream is created in. When using for WAF logging, name must be prefixed with `aws-waf-logs-`. See [AWS Documentation](https://docs.aws.amazon.com/waf/latest/developerguide/waf-policies.html#waf-policies-logging-config) for more details.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'versionId',
        '',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'kinesisSourceConfiguration',
        'The stream and role Amazon Resource Names (ARNs) for a Kinesis data stream used as the source for a delivery stream. See `kinesis_source_configuration` block below for details.',
        () =>
          kinesis_FirehoseDeliveryStreamKinesisSourceConfiguration_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'splunkConfiguration',
        'Configuration options when `destination` is `splunk`. See `splunk_configuration` block below for details.',
        () => kinesis_FirehoseDeliveryStreamSplunkConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'opensearchConfiguration',
        'Configuration options when `destination` is `opensearch`. See `opensearch_configuration` block below for details.',
        () => kinesis_FirehoseDeliveryStreamOpensearchConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'elasticsearchConfiguration',
        'Configuration options when `destination` is `elasticsearch`. See `elasticsearch_configuration` block below for details.',
        () =>
          kinesis_FirehoseDeliveryStreamElasticsearchConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'serverSideEncryption',
        'Encrypt at rest options. See `server_side_encryption` block below for details.\n\n**NOTE:** Server-side encryption should not be enabled when a kinesis stream is configured as the source of the firehose delivery stream.',
        () => kinesis_FirehoseDeliveryStreamServerSideEncryption_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'snowflakeConfiguration',
        'Configuration options when `destination` is `snowflake`. See `snowflake_configuration` block below for details.',
        () => kinesis_FirehoseDeliveryStreamSnowflakeConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'redshiftConfiguration',
        'Configuration options when `destination` is `redshift`. Requires the user to also specify an `s3_configuration` block. See `redshift_configuration` block below for details.',
        () => kinesis_FirehoseDeliveryStreamRedshiftConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'destination',
        'This is the destination to where the data is delivered. The only options are `s3` (Deprecated, use `extended_s3` instead), `extended_s3`, `redshift`, `elasticsearch`, `splunk`, `http_endpoint`, `opensearch`, `opensearchserverless` and `snowflake`.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'mskSourceConfiguration',
        'The configuration for the Amazon MSK cluster to be used as the source for a delivery stream. See `msk_source_configuration` block below for details.',
        () => kinesis_FirehoseDeliveryStreamMskSourceConfiguration_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
