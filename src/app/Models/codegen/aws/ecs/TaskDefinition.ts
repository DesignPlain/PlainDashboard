import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ecs_TaskDefinitionRuntimePlatform,
  ecs_TaskDefinitionRuntimePlatform_GetTypes,
} from '../types/ecs_TaskDefinitionRuntimePlatform';
import {
  ecs_TaskDefinitionVolume,
  ecs_TaskDefinitionVolume_GetTypes,
} from '../types/ecs_TaskDefinitionVolume';
import {
  ecs_TaskDefinitionProxyConfiguration,
  ecs_TaskDefinitionProxyConfiguration_GetTypes,
} from '../types/ecs_TaskDefinitionProxyConfiguration';
import {
  ecs_TaskDefinitionInferenceAccelerator,
  ecs_TaskDefinitionInferenceAccelerator_GetTypes,
} from '../types/ecs_TaskDefinitionInferenceAccelerator';
import {
  ecs_TaskDefinitionPlacementConstraint,
  ecs_TaskDefinitionPlacementConstraint_GetTypes,
} from '../types/ecs_TaskDefinitionPlacementConstraint';
import {
  ecs_TaskDefinitionEphemeralStorage,
  ecs_TaskDefinitionEphemeralStorage_GetTypes,
} from '../types/ecs_TaskDefinitionEphemeralStorage';

export interface TaskDefinitionArgs {
  // Number of cpu units used by the task. If the `requires_compatibilities` is `FARGATE` this field is required.
  cpu?: string;

  /*
A unique name for your task definition.

The following arguments are optional:
*/
  family?: string;

  // IPC resource namespace to be used for the containers in the task The valid values are `host`, `task`, and `none`.
  ipcMode?: string;

  // Configuration block for runtime_platform that containers in your task may use.
  runtimePlatform?: ecs_TaskDefinitionRuntimePlatform;

  // Whether to retain the old revision when the resource is destroyed or replacement is necessary. Default is `false`.
  skipDestroy?: boolean;

  // Configuration block for volumes that containers in your task may use. Detailed below.
  volumes?: Array<ecs_TaskDefinitionVolume>;

  // ARN of the task execution role that the Amazon ECS container agent and the Docker daemon can assume.
  executionRoleArn?: string;

  // Amount (in MiB) of memory used by the task. If the `requires_compatibilities` is `FARGATE` this field is required.
  memory?: string;

  // Configuration block for the App Mesh proxy. Detailed below.
  proxyConfiguration?: ecs_TaskDefinitionProxyConfiguration;

  // Configuration block(s) with Inference Accelerators settings. Detailed below.
  inferenceAccelerators?: Array<ecs_TaskDefinitionInferenceAccelerator>;

  // Process namespace to use for the containers in the task. The valid values are `host` and `task`.
  pidMode?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Configuration block for rules that are taken into consideration during task placement. Maximum number of `placement_constraints` is `10`. Detailed below.
  placementConstraints?: Array<ecs_TaskDefinitionPlacementConstraint>;

  // Set of launch types required by the task. The valid values are `EC2` and `FARGATE`.
  requiresCompatibilities?: Array<string>;

  // ARN of IAM role that allows your Amazon ECS container task to make calls to other AWS services.
  taskRoleArn?: string;

  // Whether should track latest `ACTIVE` task definition on AWS or the one created with the resource stored in state. Default is `false`. Useful in the event the task definition is modified outside of this resource.
  trackLatest?: boolean;

  // A list of valid [container definitions](http://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html) provided as a single valid JSON document. Please note that you should only provide values that are part of the container definition document. For a detailed description of what parameters are available, see the [Task Definition Parameters](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html) section from the official [Developer Guide](https://docs.aws.amazon.com/AmazonECS/latest/developerguide).
  containerDefinitions?: string;

  // The amount of ephemeral storage to allocate for the task. This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on AWS Fargate. See Ephemeral Storage.
  ephemeralStorage?: ecs_TaskDefinitionEphemeralStorage;

  // Docker networking mode to use for the containers in the task. Valid values are `none`, `bridge`, `awsvpc`, and `host`.
  networkMode?: string;
}
export class TaskDefinition extends DS_Resource {
  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Docker networking mode to use for the containers in the task. Valid values are `none`, `bridge`, `awsvpc`, and `host`.
  public networkMode?: string;

  // Configuration block for runtime_platform that containers in your task may use.
  public runtimePlatform?: ecs_TaskDefinitionRuntimePlatform;

  // ARN of the task execution role that the Amazon ECS container agent and the Docker daemon can assume.
  public executionRoleArn?: string;

  // Configuration block for rules that are taken into consideration during task placement. Maximum number of `placement_constraints` is `10`. Detailed below.
  public placementConstraints?: Array<ecs_TaskDefinitionPlacementConstraint>;

  // Configuration block for the App Mesh proxy. Detailed below.
  public proxyConfiguration?: ecs_TaskDefinitionProxyConfiguration;

  // Revision of the task in a particular family.
  public revision?: number;

  // Whether to retain the old revision when the resource is destroyed or replacement is necessary. Default is `false`.
  public skipDestroy?: boolean;

  // Full ARN of the Task Definition (including both `family` and `revision`).
  public arn?: string;

  // Number of cpu units used by the task. If the `requires_compatibilities` is `FARGATE` this field is required.
  public cpu?: string;

  /*
A unique name for your task definition.

The following arguments are optional:
*/
  public family?: string;

  // Configuration block(s) with Inference Accelerators settings. Detailed below.
  public inferenceAccelerators?: Array<ecs_TaskDefinitionInferenceAccelerator>;

  // IPC resource namespace to be used for the containers in the task The valid values are `host`, `task`, and `none`.
  public ipcMode?: string;

  // Amount (in MiB) of memory used by the task. If the `requires_compatibilities` is `FARGATE` this field is required.
  public memory?: string;

  // Process namespace to use for the containers in the task. The valid values are `host` and `task`.
  public pidMode?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // ARN of the Task Definition with the trailing `revision` removed. This may be useful for situations where the latest task definition is always desired. If a revision isn't specified, the latest ACTIVE revision is used. See the [AWS documentation](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_StartTask.html#ECS-StartTask-request-taskDefinition) for details.
  public arnWithoutRevision?: string;

  // A list of valid [container definitions](http://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html) provided as a single valid JSON document. Please note that you should only provide values that are part of the container definition document. For a detailed description of what parameters are available, see the [Task Definition Parameters](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html) section from the official [Developer Guide](https://docs.aws.amazon.com/AmazonECS/latest/developerguide).
  public containerDefinitions?: string;

  // ARN of IAM role that allows your Amazon ECS container task to make calls to other AWS services.
  public taskRoleArn?: string;

  // Whether should track latest `ACTIVE` task definition on AWS or the one created with the resource stored in state. Default is `false`. Useful in the event the task definition is modified outside of this resource.
  public trackLatest?: boolean;

  // Configuration block for volumes that containers in your task may use. Detailed below.
  public volumes?: Array<ecs_TaskDefinitionVolume>;

  // The amount of ephemeral storage to allocate for the task. This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on AWS Fargate. See Ephemeral Storage.
  public ephemeralStorage?: ecs_TaskDefinitionEphemeralStorage;

  // Set of launch types required by the task. The valid values are `EC2` and `FARGATE`.
  public requiresCompatibilities?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'family',
        'A unique name for your task definition.\n\nThe following arguments are optional:',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'volumes',
        'Configuration block for volumes that containers in your task may use. Detailed below.',
        () => ecs_TaskDefinitionVolume_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'pidMode',
        'Process namespace to use for the containers in the task. The valid values are `host` and `task`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'taskRoleArn',
        'ARN of IAM role that allows your Amazon ECS container task to make calls to other AWS services.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'cpu',
        'Number of cpu units used by the task. If the `requires_compatibilities` is `FARGATE` this field is required.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'executionRoleArn',
        'ARN of the task execution role that the Amazon ECS container agent and the Docker daemon can assume.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'trackLatest',
        'Whether should track latest `ACTIVE` task definition on AWS or the one created with the resource stored in state. Default is `false`. Useful in the event the task definition is modified outside of this resource.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'containerDefinitions',
        'A list of valid [container definitions](http://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html) provided as a single valid JSON document. Please note that you should only provide values that are part of the container definition document. For a detailed description of what parameters are available, see the [Task Definition Parameters](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html) section from the official [Developer Guide](https://docs.aws.amazon.com/AmazonECS/latest/developerguide).',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'networkMode',
        'Docker networking mode to use for the containers in the task. Valid values are `none`, `bridge`, `awsvpc`, and `host`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'skipDestroy',
        'Whether to retain the old revision when the resource is destroyed or replacement is necessary. Default is `false`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'proxyConfiguration',
        'Configuration block for the App Mesh proxy. Detailed below.',
        () => ecs_TaskDefinitionProxyConfiguration_GetTypes(),
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
        InputType.Array,
        'requiresCompatibilities',
        'Set of launch types required by the task. The valid values are `EC2` and `FARGATE`.',
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'ephemeralStorage',
        'The amount of ephemeral storage to allocate for the task. This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on AWS Fargate. See Ephemeral Storage.',
        () => ecs_TaskDefinitionEphemeralStorage_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'ipcMode',
        'IPC resource namespace to be used for the containers in the task The valid values are `host`, `task`, and `none`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'runtimePlatform',
        'Configuration block for runtime_platform that containers in your task may use.',
        () => ecs_TaskDefinitionRuntimePlatform_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'memory',
        'Amount (in MiB) of memory used by the task. If the `requires_compatibilities` is `FARGATE` this field is required.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'inferenceAccelerators',
        'Configuration block(s) with Inference Accelerators settings. Detailed below.',
        () => ecs_TaskDefinitionInferenceAccelerator_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'placementConstraints',
        'Configuration block for rules that are taken into consideration during task placement. Maximum number of `placement_constraints` is `10`. Detailed below.',
        () => ecs_TaskDefinitionPlacementConstraint_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
