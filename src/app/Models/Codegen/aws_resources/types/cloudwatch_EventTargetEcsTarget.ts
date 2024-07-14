import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudwatch_EventTargetEcsTargetCapacityProviderStrategy,
  cloudwatch_EventTargetEcsTargetCapacityProviderStrategy_GetTypes,
} from "./cloudwatch_EventTargetEcsTargetCapacityProviderStrategy";
import {
  cloudwatch_EventTargetEcsTargetNetworkConfiguration,
  cloudwatch_EventTargetEcsTargetNetworkConfiguration_GetTypes,
} from "./cloudwatch_EventTargetEcsTargetNetworkConfiguration";
import {
  cloudwatch_EventTargetEcsTargetOrderedPlacementStrategy,
  cloudwatch_EventTargetEcsTargetOrderedPlacementStrategy_GetTypes,
} from "./cloudwatch_EventTargetEcsTargetOrderedPlacementStrategy";
import {
  cloudwatch_EventTargetEcsTargetPlacementConstraint,
  cloudwatch_EventTargetEcsTargetPlacementConstraint_GetTypes,
} from "./cloudwatch_EventTargetEcsTargetPlacementConstraint";

export interface cloudwatch_EventTargetEcsTarget {
  // An array of placement strategy objects to use for the task. You can specify a maximum of five strategy rules per task.
  orderedPlacementStrategies?: Array<cloudwatch_EventTargetEcsTargetOrderedPlacementStrategy>;

  // An array of placement constraint objects to use for the task. You can specify up to 10 constraints per task (including constraints in the task definition and those specified at runtime). See Below.
  placementConstraints?: Array<cloudwatch_EventTargetEcsTargetPlacementConstraint>;

  // Specifies whether to propagate the tags from the task definition to the task. If no value is specified, the tags are not propagated. Tags can only be propagated to the task during task creation. The only valid value is: `TASK_DEFINITION`.
  propagateTags?: string;

  // A map of tags to assign to ecs resources.
  tags?: Map<string, string>;

  // The capacity provider strategy to use for the task. If a `capacity_provider_strategy` specified, the `launch_type` parameter must be omitted. If no `capacity_provider_strategy` or `launch_type` is specified, the default capacity provider strategy for the cluster is used. Can be one or more. See below.
  capacityProviderStrategies?: Array<cloudwatch_EventTargetEcsTargetCapacityProviderStrategy>;

  // Whether or not to enable the execute command functionality for the containers in this task. If true, this enables execute command functionality on all containers in the task.
  enableExecuteCommand?: boolean;

  // Specifies an ECS task group for the task. The maximum length is 255 characters.
  group?: string;

  // Use this if the ECS task uses the awsvpc network mode. This specifies the VPC subnets and security groups associated with the task, and whether a public IP address is to be used. Required if `launch_type` is `FARGATE` because the awsvpc mode is required for Fargate tasks.
  networkConfiguration?: cloudwatch_EventTargetEcsTargetNetworkConfiguration;

  // The ARN of the task definition to use if the event target is an Amazon ECS cluster.
  taskDefinitionArn?: string;

  // Specifies whether to enable Amazon ECS managed tags for the task.
  enableEcsManagedTags?: boolean;

  // Specifies the launch type on which your task is running. The launch type that you specify here must match one of the launch type (compatibilities) of the target task. Valid values include: `EC2`, `EXTERNAL`, or `FARGATE`.
  launchType?: string;

  // Specifies the platform version for the task. Specify only the numeric portion of the platform version, such as `1.1.0`. This is used only if LaunchType is FARGATE. For more information about valid platform versions, see [AWS Fargate Platform Versions](http://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html).
  platformVersion?: string;

  // The number of tasks to create based on the TaskDefinition. Defaults to `1`.
  taskCount?: number;
}

export function cloudwatch_EventTargetEcsTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "launchType",
      "Specifies the launch type on which your task is running. The launch type that you specify here must match one of the launch type (compatibilities) of the target task. Valid values include: `EC2`, `EXTERNAL`, or `FARGATE`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "orderedPlacementStrategies",
      "An array of placement strategy objects to use for the task. You can specify a maximum of five strategy rules per task.",
      cloudwatch_EventTargetEcsTargetOrderedPlacementStrategy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "group",
      "Specifies an ECS task group for the task. The maximum length is 255 characters.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "networkConfiguration",
      "Use this if the ECS task uses the awsvpc network mode. This specifies the VPC subnets and security groups associated with the task, and whether a public IP address is to be used. Required if `launch_type` is `FARGATE` because the awsvpc mode is required for Fargate tasks.",
      cloudwatch_EventTargetEcsTargetNetworkConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableEcsManagedTags",
      "Specifies whether to enable Amazon ECS managed tags for the task.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableExecuteCommand",
      "Whether or not to enable the execute command functionality for the containers in this task. If true, this enables execute command functionality on all containers in the task.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "taskDefinitionArn",
      "The ARN of the task definition to use if the event target is an Amazon ECS cluster.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "platformVersion",
      "Specifies the platform version for the task. Specify only the numeric portion of the platform version, such as `1.1.0`. This is used only if LaunchType is FARGATE. For more information about valid platform versions, see [AWS Fargate Platform Versions](http://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "taskCount",
      "The number of tasks to create based on the TaskDefinition. Defaults to `1`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "placementConstraints",
      "An array of placement constraint objects to use for the task. You can specify up to 10 constraints per task (including constraints in the task definition and those specified at runtime). See Below.",
      cloudwatch_EventTargetEcsTargetPlacementConstraint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "propagateTags",
      "Specifies whether to propagate the tags from the task definition to the task. If no value is specified, the tags are not propagated. Tags can only be propagated to the task during task creation. The only valid value is: `TASK_DEFINITION`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "tags",
      "A map of tags to assign to ecs resources.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "capacityProviderStrategies",
      "The capacity provider strategy to use for the task. If a `capacity_provider_strategy` specified, the `launch_type` parameter must be omitted. If no `capacity_provider_strategy` or `launch_type` is specified, the default capacity provider strategy for the cluster is used. Can be one or more. See below.",
      cloudwatch_EventTargetEcsTargetCapacityProviderStrategy_GetTypes(),
      false,
      false,
    ),
  ];
}
