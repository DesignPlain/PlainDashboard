import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  batch_JobDefinitionEksProperties,
  batch_JobDefinitionEksProperties_GetTypes,
} from "../types/batch_JobDefinitionEksProperties";
import {
  batch_JobDefinitionRetryStrategy,
  batch_JobDefinitionRetryStrategy_GetTypes,
} from "../types/batch_JobDefinitionRetryStrategy";
import {
  batch_JobDefinitionTimeout,
  batch_JobDefinitionTimeout_GetTypes,
} from "../types/batch_JobDefinitionTimeout";

export interface JobDefinitionArgs {
  /*
A valid [container properties](http://docs.aws.amazon.com/batch/latest/APIReference/API_RegisterJobDefinition.html)
provided as a single valid JSON document. This parameter is only valid if the `type` parameter is `container`.
*/
  containerProperties?: string;

  // Specifies the parameter substitution placeholders to set in the job definition.
  parameters?: Map<string, string>;

  // The scheduling priority of the job definition. This only affects jobs in job queues with a fair share policy. Jobs with a higher scheduling priority are scheduled before jobs with a lower scheduling priority. Allowed values `0` through `9999`.
  schedulingPriority?: number;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // A valid eks properties. This parameter is only valid if the `type` parameter is `container`.
  eksProperties?: batch_JobDefinitionEksProperties;

  // Specifies the name of the job definition.
  name?: string;

  /*
A valid [node properties](http://docs.aws.amazon.com/batch/latest/APIReference/API_RegisterJobDefinition.html)
provided as a single valid JSON document. This parameter is required if the `type` parameter is `multinode`.
*/
  nodeProperties?: string;

  // The platform capabilities required by the job definition. If no value is specified, it defaults to `EC2`. To run the job on Fargate resources, specify `FARGATE`.
  platformCapabilities?: Array<string>;

  // Specifies whether to propagate the tags from the job definition to the corresponding Amazon ECS task. Default is `false`.
  propagateTags?: boolean;

  /*
Specifies the retry strategy to use for failed jobs that are submitted with this job definition.
Maximum number of `retry_strategy` is `1`.  Defined below.
*/
  retryStrategy?: batch_JobDefinitionRetryStrategy;

  // Specifies the timeout for jobs so that if a job runs longer, AWS Batch terminates the job. Maximum number of `timeout` is `1`. Defined below.
  timeout?: batch_JobDefinitionTimeout;

  /*
The type of job definition. Must be `container` or `multinode`.

The following arguments are optional:
*/
  type?: string;
}
export class JobDefinition extends Resource {
  // The revision of the job definition.
  public revision?: number;

  /*
The type of job definition. Must be `container` or `multinode`.

The following arguments are optional:
*/
  public type?: string;

  // Specifies whether to propagate the tags from the job definition to the corresponding Amazon ECS task. Default is `false`.
  public propagateTags?: boolean;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The Amazon Resource Name of the job definition, includes revision (`:#`).
  public arn?: string;

  // The ARN without the revision number.
  public arnPrefix?: string;

  /*
A valid [container properties](http://docs.aws.amazon.com/batch/latest/APIReference/API_RegisterJobDefinition.html)
provided as a single valid JSON document. This parameter is only valid if the `type` parameter is `container`.
*/
  public containerProperties?: string;

  // Specifies the parameter substitution placeholders to set in the job definition.
  public parameters?: Map<string, string>;

  // The platform capabilities required by the job definition. If no value is specified, it defaults to `EC2`. To run the job on Fargate resources, specify `FARGATE`.
  public platformCapabilities?: Array<string>;

  /*
Specifies the retry strategy to use for failed jobs that are submitted with this job definition.
Maximum number of `retry_strategy` is `1`.  Defined below.
*/
  public retryStrategy?: batch_JobDefinitionRetryStrategy;

  // The scheduling priority of the job definition. This only affects jobs in job queues with a fair share policy. Jobs with a higher scheduling priority are scheduled before jobs with a lower scheduling priority. Allowed values `0` through `9999`.
  public schedulingPriority?: number;

  // A valid eks properties. This parameter is only valid if the `type` parameter is `container`.
  public eksProperties?: batch_JobDefinitionEksProperties;

  // Specifies the name of the job definition.
  public name?: string;

  /*
A valid [node properties](http://docs.aws.amazon.com/batch/latest/APIReference/API_RegisterJobDefinition.html)
provided as a single valid JSON document. This parameter is required if the `type` parameter is `multinode`.
*/
  public nodeProperties?: string;

  // Specifies the timeout for jobs so that if a job runs longer, AWS Batch terminates the job. Maximum number of `timeout` is `1`. Defined below.
  public timeout?: batch_JobDefinitionTimeout;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "type",
        "The type of job definition. Must be `container` or `multinode`.\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "eksProperties",
        "A valid eks properties. This parameter is only valid if the `type` parameter is `container`.",
        batch_JobDefinitionEksProperties_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Specifies the name of the job definition.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "nodeProperties",
        "A valid [node properties](http://docs.aws.amazon.com/batch/latest/APIReference/API_RegisterJobDefinition.html)\nprovided as a single valid JSON document. This parameter is required if the `type` parameter is `multinode`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "platformCapabilities",
        "The platform capabilities required by the job definition. If no value is specified, it defaults to `EC2`. To run the job on Fargate resources, specify `FARGATE`.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "retryStrategy",
        "Specifies the retry strategy to use for failed jobs that are submitted with this job definition.\nMaximum number of `retry_strategy` is `1`.  Defined below.",
        batch_JobDefinitionRetryStrategy_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "timeout",
        "Specifies the timeout for jobs so that if a job runs longer, AWS Batch terminates the job. Maximum number of `timeout` is `1`. Defined below.",
        batch_JobDefinitionTimeout_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "containerProperties",
        "A valid [container properties](http://docs.aws.amazon.com/batch/latest/APIReference/API_RegisterJobDefinition.html)\nprovided as a single valid JSON document. This parameter is only valid if the `type` parameter is `container`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "parameters",
        "Specifies the parameter substitution placeholders to set in the job definition.",
        InputType_Map_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "schedulingPriority",
        "The scheduling priority of the job definition. This only affects jobs in job queues with a fair share policy. Jobs with a higher scheduling priority are scheduled before jobs with a lower scheduling priority. Allowed values `0` through `9999`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "propagateTags",
        "Specifies whether to propagate the tags from the job definition to the corresponding Amazon ECS task. Default is `false`.",
        [],
        false,
        true,
      ),
    ];
  }
}
