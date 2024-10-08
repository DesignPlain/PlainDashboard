import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  batch_ComputeEnvironmentEksConfiguration,
  batch_ComputeEnvironmentEksConfiguration_GetTypes,
} from '../types/batch_ComputeEnvironmentEksConfiguration';
import {
  batch_ComputeEnvironmentComputeResources,
  batch_ComputeEnvironmentComputeResources_GetTypes,
} from '../types/batch_ComputeEnvironmentComputeResources';
import {
  batch_ComputeEnvironmentUpdatePolicy,
  batch_ComputeEnvironmentUpdatePolicy_GetTypes,
} from '../types/batch_ComputeEnvironmentUpdatePolicy';

export interface ComputeEnvironmentArgs {
  // Details for the Amazon EKS cluster that supports the compute environment. See details below.
  eksConfiguration?: batch_ComputeEnvironmentEksConfiguration;

  // The full Amazon Resource Name (ARN) of the IAM role that allows AWS Batch to make calls to other AWS services on your behalf.
  serviceRole?: string;

  // The state of the compute environment. If the state is `ENABLED`, then the compute environment accepts jobs from a queue and can scale out automatically based on queues. Valid items are `ENABLED` or `DISABLED`. Defaults to `ENABLED`.
  state?: string;

  // The type of the compute environment. Valid items are `MANAGED` or `UNMANAGED`.
  type?: string;

  // The name for your compute environment. Up to 128 letters (uppercase and lowercase), numbers, and underscores are allowed. If omitted, the provider will assign a random, unique name.
  computeEnvironmentName?: string;

  // Details of the compute resources managed by the compute environment. This parameter is required for managed compute environments. See details below.
  computeResources?: batch_ComputeEnvironmentComputeResources;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Specifies the infrastructure update policy for the compute environment. See details below.
  updatePolicy?: batch_ComputeEnvironmentUpdatePolicy;

  // Creates a unique compute environment name beginning with the specified prefix. Conflicts with `compute_environment_name`.
  computeEnvironmentNamePrefix?: string;
}
export class ComputeEnvironment extends DS_Resource {
  // Specifies the infrastructure update policy for the compute environment. See details below.
  public updatePolicy?: batch_ComputeEnvironmentUpdatePolicy;

  // The Amazon Resource Name (ARN) of the underlying Amazon ECS cluster used by the compute environment.
  public ecsClusterArn?: string;

  // The state of the compute environment. If the state is `ENABLED`, then the compute environment accepts jobs from a queue and can scale out automatically based on queues. Valid items are `ENABLED` or `DISABLED`. Defaults to `ENABLED`.
  public state?: string;

  // The name for your compute environment. Up to 128 letters (uppercase and lowercase), numbers, and underscores are allowed. If omitted, the provider will assign a random, unique name.
  public computeEnvironmentName?: string;

  // The full Amazon Resource Name (ARN) of the IAM role that allows AWS Batch to make calls to other AWS services on your behalf.
  public serviceRole?: string;

  // Details for the Amazon EKS cluster that supports the compute environment. See details below.
  public eksConfiguration?: batch_ComputeEnvironmentEksConfiguration;

  // The current status of the compute environment (for example, CREATING or VALID).
  public status?: string;

  // The Amazon Resource Name (ARN) of the compute environment.
  public arn?: string;

  // Details of the compute resources managed by the compute environment. This parameter is required for managed compute environments. See details below.
  public computeResources?: batch_ComputeEnvironmentComputeResources;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The type of the compute environment. Valid items are `MANAGED` or `UNMANAGED`.
  public type?: string;

  // Creates a unique compute environment name beginning with the specified prefix. Conflicts with `compute_environment_name`.
  public computeEnvironmentNamePrefix?: string;

  // A short, human-readable string to provide additional details about the current status of the compute environment.
  public statusReason?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'serviceRole',
        'The full Amazon Resource Name (ARN) of the IAM role that allows AWS Batch to make calls to other AWS services on your behalf.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'type',
        'The type of the compute environment. Valid items are `MANAGED` or `UNMANAGED`.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'computeEnvironmentName',
        'The name for your compute environment. Up to 128 letters (uppercase and lowercase), numbers, and underscores are allowed. If omitted, the provider will assign a random, unique name.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'computeResources',
        'Details of the compute resources managed by the compute environment. This parameter is required for managed compute environments. See details below.',
        () => batch_ComputeEnvironmentComputeResources_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'eksConfiguration',
        'Details for the Amazon EKS cluster that supports the compute environment. See details below.',
        () => batch_ComputeEnvironmentEksConfiguration_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'updatePolicy',
        'Specifies the infrastructure update policy for the compute environment. See details below.',
        () => batch_ComputeEnvironmentUpdatePolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'computeEnvironmentNamePrefix',
        'Creates a unique compute environment name beginning with the specified prefix. Conflicts with `compute_environment_name`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'state',
        'The state of the compute environment. If the state is `ENABLED`, then the compute environment accepts jobs from a queue and can scale out automatically based on queues. Valid items are `ENABLED` or `DISABLED`. Defaults to `ENABLED`.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
