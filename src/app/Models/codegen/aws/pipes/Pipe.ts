import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  pipes_PipeSourceParameters,
  pipes_PipeSourceParameters_GetTypes,
} from '../types/pipes_PipeSourceParameters';
import {
  pipes_PipeTargetParameters,
  pipes_PipeTargetParameters_GetTypes,
} from '../types/pipes_PipeTargetParameters';
import {
  pipes_PipeEnrichmentParameters,
  pipes_PipeEnrichmentParameters_GetTypes,
} from '../types/pipes_PipeEnrichmentParameters';
import {
  pipes_PipeLogConfiguration,
  pipes_PipeLogConfiguration_GetTypes,
} from '../types/pipes_PipeLogConfiguration';

export interface PipeArgs {
  // Logging configuration settings for the pipe. Detailed below.
  logConfiguration?: pipes_PipeLogConfiguration;

  // Name of the pipe. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`.
  name?: string;

  // ARN of the role that allows the pipe to send data to the target.
  roleArn?: string;

  /*
Target resource of the pipe (typically an ARN).

The following arguments are optional:
*/
  target?: string;

  // A description of the pipe. At most 512 characters.
  description?: string;

  // Enrichment resource of the pipe (typically an ARN). Read more about enrichment in the [User Guide](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html#pipes-enrichment).
  enrichment?: string;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  namePrefix?: string;

  // Source resource of the pipe. This field typically requires an ARN (Amazon Resource Name). However, when using a self-managed Kafka cluster, you should use a different format. Instead of an ARN, use 'smk://' followed by the bootstrap server's address.
  source?: string;

  // Parameters to configure a source for the pipe. Detailed below.
  sourceParameters?: pipes_PipeSourceParameters;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Parameters to configure a target for your pipe. Detailed below.
  targetParameters?: pipes_PipeTargetParameters;

  // The state the pipe should be in. One of: `RUNNING`, `STOPPED`.
  desiredState?: string;

  // Parameters to configure enrichment for your pipe. Detailed below.
  enrichmentParameters?: pipes_PipeEnrichmentParameters;
}
export class Pipe extends DS_Resource {
  /*
Target resource of the pipe (typically an ARN).

The following arguments are optional:
*/
  public target?: string;

  // The state the pipe should be in. One of: `RUNNING`, `STOPPED`.
  public desiredState?: string;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  public namePrefix?: string;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Source resource of the pipe. This field typically requires an ARN (Amazon Resource Name). However, when using a self-managed Kafka cluster, you should use a different format. Instead of an ARN, use 'smk://' followed by the bootstrap server's address.
  public source?: string;

  // Parameters to configure a source for the pipe. Detailed below.
  public sourceParameters?: pipes_PipeSourceParameters;

  // ARN of this pipe.
  public arn?: string;

  // Parameters to configure enrichment for your pipe. Detailed below.
  public enrichmentParameters?: pipes_PipeEnrichmentParameters;

  // Logging configuration settings for the pipe. Detailed below.
  public logConfiguration?: pipes_PipeLogConfiguration;

  // A description of the pipe. At most 512 characters.
  public description?: string;

  // Name of the pipe. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`.
  public name?: string;

  // ARN of the role that allows the pipe to send data to the target.
  public roleArn?: string;

  // Enrichment resource of the pipe (typically an ARN). Read more about enrichment in the [User Guide](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html#pipes-enrichment).
  public enrichment?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Parameters to configure a target for your pipe. Detailed below.
  public targetParameters?: pipes_PipeTargetParameters;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'desiredState',
        'The state the pipe should be in. One of: `RUNNING`, `STOPPED`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the pipe. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'A description of the pipe. At most 512 characters.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'namePrefix',
        'Creates a unique name beginning with the specified prefix. Conflicts with `name`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'source',
        "Source resource of the pipe. This field typically requires an ARN (Amazon Resource Name). However, when using a self-managed Kafka cluster, you should use a different format. Instead of an ARN, use 'smk://' followed by the bootstrap server's address.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'sourceParameters',
        'Parameters to configure a source for the pipe. Detailed below.',
        () => pipes_PipeSourceParameters_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'targetParameters',
        'Parameters to configure a target for your pipe. Detailed below.',
        () => pipes_PipeTargetParameters_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'enrichmentParameters',
        'Parameters to configure enrichment for your pipe. Detailed below.',
        () => pipes_PipeEnrichmentParameters_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'logConfiguration',
        'Logging configuration settings for the pipe. Detailed below.',
        () => pipes_PipeLogConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'roleArn',
        'ARN of the role that allows the pipe to send data to the target.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'target',
        'Target resource of the pipe (typically an ARN).\n\nThe following arguments are optional:',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'enrichment',
        'Enrichment resource of the pipe (typically an ARN). Read more about enrichment in the [User Guide](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html#pipes-enrichment).',
        () => [],
        false,
        false,
      ),
    ];
  }
}
