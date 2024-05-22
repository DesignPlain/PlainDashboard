import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  pipes_PipeTargetParametersEcsTaskParametersPlacementStrategy,
  pipes_PipeTargetParametersEcsTaskParametersPlacementStrategy_GetTypes,
} from "./pipes_PipeTargetParametersEcsTaskParametersPlacementStrategy";
import {
  pipes_PipeTargetParametersEcsTaskParametersNetworkConfiguration,
  pipes_PipeTargetParametersEcsTaskParametersNetworkConfiguration_GetTypes,
} from "./pipes_PipeTargetParametersEcsTaskParametersNetworkConfiguration";
import {
  pipes_PipeTargetParametersEcsTaskParametersCapacityProviderStrategy,
  pipes_PipeTargetParametersEcsTaskParametersCapacityProviderStrategy_GetTypes,
} from "./pipes_PipeTargetParametersEcsTaskParametersCapacityProviderStrategy";
import {
  pipes_PipeTargetParametersEcsTaskParametersPlacementConstraint,
  pipes_PipeTargetParametersEcsTaskParametersPlacementConstraint_GetTypes,
} from "./pipes_PipeTargetParametersEcsTaskParametersPlacementConstraint";
import {
  pipes_PipeTargetParametersEcsTaskParametersOverrides,
  pipes_PipeTargetParametersEcsTaskParametersOverrides_GetTypes,
} from "./pipes_PipeTargetParametersEcsTaskParametersOverrides";

export interface pipes_PipeTargetParametersEcsTaskParameters {
  // Specifies the platform version for the task. Specify only the numeric portion of the platform version, such as 1.1.0. This structure is used only if LaunchType is FARGATE.
  platformVersion?: string;

  // The reference ID to use for the task. Maximum length of 1,024.
  referenceId?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The ARN of the task definition to use if the event target is an Amazon ECS task.
  taskDefinitionArn?: string;

  // Specifies the launch type on which your task is running. The launch type that you specify here must match one of the launch type (compatibilities) of the target task. The FARGATE value is supported only in the Regions where AWS Fargate with Amazon ECS is supported. Valid Values: EC2, FARGATE, EXTERNAL
  launchType?: string;

  // The placement strategy objects to use for the task. You can specify a maximum of five strategy rules per task. Detailed below.
  placementStrategies?: Array<pipes_PipeTargetParametersEcsTaskParametersPlacementStrategy>;

  // Use this structure if the Amazon ECS task uses the awsvpc network mode. This structure specifies the VPC subnets and security groups associated with the task, and whether a public IP address is to be used. This structure is required if LaunchType is FARGATE because the awsvpc mode is required for Fargate tasks. If you specify NetworkConfiguration when the target ECS task does not use the awsvpc network mode, the task fails. Detailed below.
  networkConfiguration?: pipes_PipeTargetParametersEcsTaskParametersNetworkConfiguration;

  // Specifies whether to enable Amazon ECS managed tags for the task. Valid values: true, false.
  enableEcsManagedTags?: boolean;

  // Whether or not to enable the execute command functionality for the containers in this task. If true, this enables execute command functionality on all containers in the task. Valid values: true, false.
  enableExecuteCommand?: boolean;

  // List of capacity provider strategies to use for the task. If a capacityProviderStrategy is specified, the launchType parameter must be omitted. If no capacityProviderStrategy or launchType is specified, the defaultCapacityProviderStrategy for the cluster is used. Detailed below.
  capacityProviderStrategies?: Array<pipes_PipeTargetParametersEcsTaskParametersCapacityProviderStrategy>;

  // Specifies whether to propagate the tags from the task definition to the task. If no value is specified, the tags are not propagated. Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use the TagResource API action. Valid Values: TASK_DEFINITION
  propagateTags?: string;

  // An array of placement constraint objects to use for the task. You can specify up to 10 constraints per task (including constraints in the task definition and those specified at runtime). Detailed below.
  placementConstraints?: Array<pipes_PipeTargetParametersEcsTaskParametersPlacementConstraint>;

  // The number of tasks to create based on TaskDefinition. The default is 1.
  taskCount?: number;

  // Specifies an Amazon ECS task group for the task. The maximum length is 255 characters.
  group?: string;

  // The overrides that are associated with a task. Detailed below.
  overrides?: pipes_PipeTargetParametersEcsTaskParametersOverrides;
}

export function pipes_PipeTargetParametersEcsTaskParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "placementStrategies",
      "The placement strategy objects to use for the task. You can specify a maximum of five strategy rules per task. Detailed below.",
      pipes_PipeTargetParametersEcsTaskParametersPlacementStrategy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "taskDefinitionArn",
      "The ARN of the task definition to use if the event target is an Amazon ECS task.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "launchType",
      "Specifies the launch type on which your task is running. The launch type that you specify here must match one of the launch type (compatibilities) of the target task. The FARGATE value is supported only in the Regions where AWS Fargate with Amazon ECS is supported. Valid Values: EC2, FARGATE, EXTERNAL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableExecuteCommand",
      "Whether or not to enable the execute command functionality for the containers in this task. If true, this enables execute command functionality on all containers in the task. Valid values: true, false.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "group",
      "Specifies an Amazon ECS task group for the task. The maximum length is 255 characters.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "platformVersion",
      "Specifies the platform version for the task. Specify only the numeric portion of the platform version, such as 1.1.0. This structure is used only if LaunchType is FARGATE.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "tags",
      "Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "referenceId",
      "The reference ID to use for the task. Maximum length of 1,024.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableEcsManagedTags",
      "Specifies whether to enable Amazon ECS managed tags for the task. Valid values: true, false.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "capacityProviderStrategies",
      "List of capacity provider strategies to use for the task. If a capacityProviderStrategy is specified, the launchType parameter must be omitted. If no capacityProviderStrategy or launchType is specified, the defaultCapacityProviderStrategy for the cluster is used. Detailed below.",
      pipes_PipeTargetParametersEcsTaskParametersCapacityProviderStrategy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "propagateTags",
      "Specifies whether to propagate the tags from the task definition to the task. If no value is specified, the tags are not propagated. Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use the TagResource API action. Valid Values: TASK_DEFINITION",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "placementConstraints",
      "An array of placement constraint objects to use for the task. You can specify up to 10 constraints per task (including constraints in the task definition and those specified at runtime). Detailed below.",
      pipes_PipeTargetParametersEcsTaskParametersPlacementConstraint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "taskCount",
      "The number of tasks to create based on TaskDefinition. The default is 1.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "overrides",
      "The overrides that are associated with a task. Detailed below.",
      pipes_PipeTargetParametersEcsTaskParametersOverrides_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "networkConfiguration",
      "Use this structure if the Amazon ECS task uses the awsvpc network mode. This structure specifies the VPC subnets and security groups associated with the task, and whether a public IP address is to be used. This structure is required if LaunchType is FARGATE because the awsvpc mode is required for Fargate tasks. If you specify NetworkConfiguration when the target ECS task does not use the awsvpc network mode, the task fails. Detailed below.",
      pipes_PipeTargetParametersEcsTaskParametersNetworkConfiguration_GetTypes(),
      false,
      false,
    ),
  ];
}
