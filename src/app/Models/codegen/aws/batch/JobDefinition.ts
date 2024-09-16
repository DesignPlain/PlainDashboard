import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  batch_JobDefinitionEksProperties,
  batch_JobDefinitionEksProperties_GetTypes,
} from '../types/batch_JobDefinitionEksProperties';
import {
  batch_JobDefinitionRetryStrategy,
  batch_JobDefinitionRetryStrategy_GetTypes,
} from '../types/batch_JobDefinitionRetryStrategy';
import {
  batch_JobDefinitionTimeout,
  batch_JobDefinitionTimeout_GetTypes,
} from '../types/batch_JobDefinitionTimeout';

export interface JobDefinitionArgs {
  // Valid [ECS properties](http://docs.aws.amazon.com/batch/latest/APIReference/API_RegisterJobDefinition.html) provided as a single valid JSON document. This parameter is only valid if the `type` parameter is `container`.
  ecsProperties?: string;

  // Platform capabilities required by the job definition. If no value is specified, it defaults to `EC2`. To run the job on Fargate resources, specify `FARGATE`.
  platformCapabilities?: Array<string>;

  // Valid [node properties](http://docs.aws.amazon.com/batch/latest/APIReference/API_RegisterJobDefinition.html) provided as a single valid JSON document. This parameter is required if the `type` parameter is `multinode`.
  nodeProperties?: string;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Valid eks properties. This parameter is only valid if the `type` parameter is `container`.
  eksProperties?: batch_JobDefinitionEksProperties;

  // Name of the job definition.
  name?: string;

  // Whether to propagate the tags from the job definition to the corresponding Amazon ECS task. Default is `false`.
  propagateTags?: boolean;

  // Scheduling priority of the job definition. This only affects jobs in job queues with a fair share policy. Jobs with a higher scheduling priority are scheduled before jobs with a lower scheduling priority. Allowed values `0` through `9999`.
  schedulingPriority?: number;

  // Valid [container properties](http://docs.aws.amazon.com/batch/latest/APIReference/API_RegisterJobDefinition.html) provided as a single valid JSON document. This parameter is only valid if the `type` parameter is `container`.
  containerProperties?: string;

  // When updating a job definition a new revision is created. This parameter determines if the previous version is `deregistered` (`INACTIVE`) or left  `ACTIVE`. Defaults to `true`.
  deregisterOnNewRevision?: boolean;

  // Parameter substitution placeholders to set in the job definition.
  parameters?: Map<string, string>;

  // Retry strategy to use for failed jobs that are submitted with this job definition. Maximum number of `retry_strategy` is `1`.  Defined below.
  retryStrategy?: batch_JobDefinitionRetryStrategy;

  // Timeout for jobs so that if a job runs longer, AWS Batch terminates the job. Maximum number of `timeout` is `1`. Defined below.
  timeout?: batch_JobDefinitionTimeout;

  /*
Type of job definition. Must be `container` or `multinode`.

The following arguments are optional:
*/
  type?: string;
}
export class JobDefinition extends DS_Resource {
  // Retry strategy to use for failed jobs that are submitted with this job definition. Maximum number of `retry_strategy` is `1`.  Defined below.
  public retryStrategy?: batch_JobDefinitionRetryStrategy;

  // Revision of the job definition.
  public revision?: number;

  // Scheduling priority of the job definition. This only affects jobs in job queues with a fair share policy. Jobs with a higher scheduling priority are scheduled before jobs with a lower scheduling priority. Allowed values `0` through `9999`.
  public schedulingPriority?: number;

  // ARN without the revision number.
  public arnPrefix?: string;

  // Valid [ECS properties](http://docs.aws.amazon.com/batch/latest/APIReference/API_RegisterJobDefinition.html) provided as a single valid JSON document. This parameter is only valid if the `type` parameter is `container`.
  public ecsProperties?: string;

  // Valid eks properties. This parameter is only valid if the `type` parameter is `container`.
  public eksProperties?: batch_JobDefinitionEksProperties;

  // Parameter substitution placeholders to set in the job definition.
  public parameters?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // When updating a job definition a new revision is created. This parameter determines if the previous version is `deregistered` (`INACTIVE`) or left  `ACTIVE`. Defaults to `true`.
  public deregisterOnNewRevision?: boolean;

  // Platform capabilities required by the job definition. If no value is specified, it defaults to `EC2`. To run the job on Fargate resources, specify `FARGATE`.
  public platformCapabilities?: Array<string>;

  // Whether to propagate the tags from the job definition to the corresponding Amazon ECS task. Default is `false`.
  public propagateTags?: boolean;

  // Timeout for jobs so that if a job runs longer, AWS Batch terminates the job. Maximum number of `timeout` is `1`. Defined below.
  public timeout?: batch_JobDefinitionTimeout;

  // Valid [node properties](http://docs.aws.amazon.com/batch/latest/APIReference/API_RegisterJobDefinition.html) provided as a single valid JSON document. This parameter is required if the `type` parameter is `multinode`.
  public nodeProperties?: string;

  // Valid [container properties](http://docs.aws.amazon.com/batch/latest/APIReference/API_RegisterJobDefinition.html) provided as a single valid JSON document. This parameter is only valid if the `type` parameter is `container`.
  public containerProperties?: string;

  // Name of the job definition.
  public name?: string;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  /*
Type of job definition. Must be `container` or `multinode`.

The following arguments are optional:
*/
  public type?: string;

  // ARN of the job definition, includes revision (`:#`).
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'retryStrategy',
        'Retry strategy to use for failed jobs that are submitted with this job definition. Maximum number of `retry_strategy` is `1`.  Defined below.',
        () => batch_JobDefinitionRetryStrategy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'ecsProperties',
        'Valid [ECS properties](http://docs.aws.amazon.com/batch/latest/APIReference/API_RegisterJobDefinition.html) provided as a single valid JSON document. This parameter is only valid if the `type` parameter is `container`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'deregisterOnNewRevision',
        'When updating a job definition a new revision is created. This parameter determines if the previous version is `deregistered` (`INACTIVE`) or left  `ACTIVE`. Defaults to `true`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'parameters',
        'Parameter substitution placeholders to set in the job definition.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'timeout',
        'Timeout for jobs so that if a job runs longer, AWS Batch terminates the job. Maximum number of `timeout` is `1`. Defined below.',
        () => batch_JobDefinitionTimeout_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'platformCapabilities',
        'Platform capabilities required by the job definition. If no value is specified, it defaults to `EC2`. To run the job on Fargate resources, specify `FARGATE`.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'nodeProperties',
        'Valid [node properties](http://docs.aws.amazon.com/batch/latest/APIReference/API_RegisterJobDefinition.html) provided as a single valid JSON document. This parameter is required if the `type` parameter is `multinode`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the job definition.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'propagateTags',
        'Whether to propagate the tags from the job definition to the corresponding Amazon ECS task. Default is `false`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'schedulingPriority',
        'Scheduling priority of the job definition. This only affects jobs in job queues with a fair share policy. Jobs with a higher scheduling priority are scheduled before jobs with a lower scheduling priority. Allowed values `0` through `9999`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'type',
        'Type of job definition. Must be `container` or `multinode`.\n\nThe following arguments are optional:',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'eksProperties',
        'Valid eks properties. This parameter is only valid if the `type` parameter is `container`.',
        () => batch_JobDefinitionEksProperties_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'containerProperties',
        'Valid [container properties](http://docs.aws.amazon.com/batch/latest/APIReference/API_RegisterJobDefinition.html) provided as a single valid JSON document. This parameter is only valid if the `type` parameter is `container`.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
