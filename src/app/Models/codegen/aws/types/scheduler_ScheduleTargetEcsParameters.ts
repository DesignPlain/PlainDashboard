import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  scheduler_ScheduleTargetEcsParametersPlacementConstraint,
  scheduler_ScheduleTargetEcsParametersPlacementConstraint_GetTypes,
} from './scheduler_ScheduleTargetEcsParametersPlacementConstraint';
import {
  scheduler_ScheduleTargetEcsParametersPlacementStrategy,
  scheduler_ScheduleTargetEcsParametersPlacementStrategy_GetTypes,
} from './scheduler_ScheduleTargetEcsParametersPlacementStrategy';
import {
  scheduler_ScheduleTargetEcsParametersNetworkConfiguration,
  scheduler_ScheduleTargetEcsParametersNetworkConfiguration_GetTypes,
} from './scheduler_ScheduleTargetEcsParametersNetworkConfiguration';
import {
  scheduler_ScheduleTargetEcsParametersCapacityProviderStrategy,
  scheduler_ScheduleTargetEcsParametersCapacityProviderStrategy_GetTypes,
} from './scheduler_ScheduleTargetEcsParametersCapacityProviderStrategy';

export interface scheduler_ScheduleTargetEcsParameters {
  // Specifies the platform version for the task. Specify only the numeric portion of the platform version, such as `1.1.0`.
  platformVersion?: string;

  // Specifies whether to enable the execute command functionality for the containers in this task.
  enableExecuteCommand?: boolean;

  // Specifies the launch type on which your task is running. The launch type that you specify here must match one of the launch type (compatibilities) of the target task. One of: `EC2`, `FARGATE`, `EXTERNAL`.
  launchType?: string;

  // A set of up to 10 placement constraints to use for the task. Detailed below.
  placementConstraints?: Array<scheduler_ScheduleTargetEcsParametersPlacementConstraint>;

  // A set of up to 5 placement strategies. Detailed below.
  placementStrategies?: Array<scheduler_ScheduleTargetEcsParametersPlacementStrategy>;

  // Configures the networking associated with the task. Detailed below.
  networkConfiguration?: scheduler_ScheduleTargetEcsParametersNetworkConfiguration;

  // The metadata that you apply to the task. Each tag consists of a key and an optional value. For more information, see [`RunTask`](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html) in the Amazon ECS API Reference.
  tags?: Map<string, string>;

  // The number of tasks to create. Ranges from `1` (default) to `10`.
  taskCount?: number;

  // Specifies whether to enable Amazon ECS managed tags for the task. For more information, see [Tagging Your Amazon ECS Resources](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html) in the Amazon ECS Developer Guide.
  enableEcsManagedTags?: boolean;

  // Specifies an ECS task group for the task. At most 255 characters.
  group?: string;

  // Specifies whether to propagate the tags from the task definition to the task. One of: `TASK_DEFINITION`.
  propagateTags?: string;

  // Reference ID to use for the task.
  referenceId?: string;

  // Up to `6` capacity provider strategies to use for the task. Detailed below.
  capacityProviderStrategies?: Array<scheduler_ScheduleTargetEcsParametersCapacityProviderStrategy>;

  /*
ARN of the task definition to use.

The following arguments are optional:
*/
  taskDefinitionArn?: string;
}

export function scheduler_ScheduleTargetEcsParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'placementConstraints',
      'A set of up to 10 placement constraints to use for the task. Detailed below.',
      () => scheduler_ScheduleTargetEcsParametersPlacementConstraint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'placementStrategies',
      'A set of up to 5 placement strategies. Detailed below.',
      () => scheduler_ScheduleTargetEcsParametersPlacementStrategy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'networkConfiguration',
      'Configures the networking associated with the task. Detailed below.',
      () =>
        scheduler_ScheduleTargetEcsParametersNetworkConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'propagateTags',
      'Specifies whether to propagate the tags from the task definition to the task. One of: `TASK_DEFINITION`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'referenceId',
      'Reference ID to use for the task.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'platformVersion',
      'Specifies the platform version for the task. Specify only the numeric portion of the platform version, such as `1.1.0`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'launchType',
      'Specifies the launch type on which your task is running. The launch type that you specify here must match one of the launch type (compatibilities) of the target task. One of: `EC2`, `FARGATE`, `EXTERNAL`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'capacityProviderStrategies',
      'Up to `6` capacity provider strategies to use for the task. Detailed below.',
      () =>
        scheduler_ScheduleTargetEcsParametersCapacityProviderStrategy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'taskDefinitionArn',
      'ARN of the task definition to use.\n\nThe following arguments are optional:',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      'tags',
      'The metadata that you apply to the task. Each tag consists of a key and an optional value. For more information, see [`RunTask`](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html) in the Amazon ECS API Reference.',
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'group',
      'Specifies an ECS task group for the task. At most 255 characters.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enableEcsManagedTags',
      'Specifies whether to enable Amazon ECS managed tags for the task. For more information, see [Tagging Your Amazon ECS Resources](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html) in the Amazon ECS Developer Guide.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enableExecuteCommand',
      'Specifies whether to enable the execute command functionality for the containers in this task.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'taskCount',
      'The number of tasks to create. Ranges from `1` (default) to `10`.',
      () => [],
      false,
      false,
    ),
  ];
}
