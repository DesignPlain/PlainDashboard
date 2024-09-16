import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  opensearchingest_PipelineBufferOptions,
  opensearchingest_PipelineBufferOptions_GetTypes,
} from '../types/opensearchingest_PipelineBufferOptions';
import {
  opensearchingest_PipelineEncryptionAtRestOptions,
  opensearchingest_PipelineEncryptionAtRestOptions_GetTypes,
} from '../types/opensearchingest_PipelineEncryptionAtRestOptions';
import {
  opensearchingest_PipelineLogPublishingOptions,
  opensearchingest_PipelineLogPublishingOptions_GetTypes,
} from '../types/opensearchingest_PipelineLogPublishingOptions';
import {
  opensearchingest_PipelineVpcOptions,
  opensearchingest_PipelineVpcOptions_GetTypes,
} from '../types/opensearchingest_PipelineVpcOptions';
import {
  opensearchingest_PipelineTimeouts,
  opensearchingest_PipelineTimeouts_GetTypes,
} from '../types/opensearchingest_PipelineTimeouts';

export interface PipelineArgs {
  // A map of tags to assign to the pipeline. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  //
  timeouts?: opensearchingest_PipelineTimeouts;

  // Key-value pairs to configure persistent buffering for the pipeline. See `buffer_options` below.
  bufferOptions?: opensearchingest_PipelineBufferOptions;

  // Key-value pairs to configure encryption for data that is written to a persistent buffer. See `encryption_at_rest_options` below.
  encryptionAtRestOptions?: opensearchingest_PipelineEncryptionAtRestOptions;

  // Key-value pairs to configure log publishing. See `log_publishing_options` below.
  logPublishingOptions?: opensearchingest_PipelineLogPublishingOptions;

  // The maximum pipeline capacity, in Ingestion Compute Units (ICUs).
  maxUnits?: number;

  // The minimum pipeline capacity, in Ingestion Compute Units (ICUs).
  minUnits?: number;

  // The pipeline configuration in YAML format. This argument accepts the pipeline configuration as a string or within a .yaml file. If you provide the configuration as a string, each new line must be escaped with \n.
  pipelineConfigurationBody?: string;

  /*
The name of the OpenSearch Ingestion pipeline to create. Pipeline names are unique across the pipelines owned by an account within an AWS Region.

The following arguments are optional:
*/
  pipelineName?: string;

  // Container for the values required to configure VPC access for the pipeline. If you don't specify these values, OpenSearch Ingestion creates the pipeline with a public endpoint. See `vpc_options` below.
  vpcOptions?: opensearchingest_PipelineVpcOptions;
}
export class Pipeline extends DS_Resource {
  /*
The name of the OpenSearch Ingestion pipeline to create. Pipeline names are unique across the pipelines owned by an account within an AWS Region.

The following arguments are optional:
*/
  public pipelineName?: string;

  //
  public tagsAll?: Map<string, string>;

  // Key-value pairs to configure encryption for data that is written to a persistent buffer. See `encryption_at_rest_options` below.
  public encryptionAtRestOptions?: opensearchingest_PipelineEncryptionAtRestOptions;

  // The list of ingestion endpoints for the pipeline, which you can send data to.
  public ingestEndpointUrls?: Array<string>;

  // Key-value pairs to configure log publishing. See `log_publishing_options` below.
  public logPublishingOptions?: opensearchingest_PipelineLogPublishingOptions;

  // The minimum pipeline capacity, in Ingestion Compute Units (ICUs).
  public minUnits?: number;

  // The pipeline configuration in YAML format. This argument accepts the pipeline configuration as a string or within a .yaml file. If you provide the configuration as a string, each new line must be escaped with \n.
  public pipelineConfigurationBody?: string;

  // Container for the values required to configure VPC access for the pipeline. If you don't specify these values, OpenSearch Ingestion creates the pipeline with a public endpoint. See `vpc_options` below.
  public vpcOptions?: opensearchingest_PipelineVpcOptions;

  // Key-value pairs to configure persistent buffering for the pipeline. See `buffer_options` below.
  public bufferOptions?: opensearchingest_PipelineBufferOptions;

  // The maximum pipeline capacity, in Ingestion Compute Units (ICUs).
  public maxUnits?: number;

  // Amazon Resource Name (ARN) of the pipeline.
  public pipelineArn?: string;

  // A map of tags to assign to the pipeline. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  //
  public timeouts?: opensearchingest_PipelineTimeouts;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the pipeline. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'encryptionAtRestOptions',
        'Key-value pairs to configure encryption for data that is written to a persistent buffer. See `encryption_at_rest_options` below.',
        () => opensearchingest_PipelineEncryptionAtRestOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'logPublishingOptions',
        'Key-value pairs to configure log publishing. See `log_publishing_options` below.',
        () => opensearchingest_PipelineLogPublishingOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'minUnits',
        'The minimum pipeline capacity, in Ingestion Compute Units (ICUs).',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'timeouts',
        '',
        () => opensearchingest_PipelineTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'bufferOptions',
        'Key-value pairs to configure persistent buffering for the pipeline. See `buffer_options` below.',
        () => opensearchingest_PipelineBufferOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'maxUnits',
        'The maximum pipeline capacity, in Ingestion Compute Units (ICUs).',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'pipelineConfigurationBody',
        'The pipeline configuration in YAML format. This argument accepts the pipeline configuration as a string or within a .yaml file. If you provide the configuration as a string, each new line must be escaped with \\n.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'pipelineName',
        'The name of the OpenSearch Ingestion pipeline to create. Pipeline names are unique across the pipelines owned by an account within an AWS Region.\n\nThe following arguments are optional:',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'vpcOptions',
        "Container for the values required to configure VPC access for the pipeline. If you don't specify these values, OpenSearch Ingestion creates the pipeline with a public endpoint. See `vpc_options` below.",
        () => opensearchingest_PipelineVpcOptions_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
