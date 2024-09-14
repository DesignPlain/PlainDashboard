import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLogConfiguration,
  batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLogConfiguration_GetTypes,
} from "./batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLogConfiguration";
import {
  batch_getJobDefinitionNodePropertyNodeRangePropertyContainerUlimit,
  batch_getJobDefinitionNodePropertyNodeRangePropertyContainerUlimit_GetTypes,
} from "./batch_getJobDefinitionNodePropertyNodeRangePropertyContainerUlimit";
import {
  batch_getJobDefinitionNodePropertyNodeRangePropertyContainerNetworkConfiguration,
  batch_getJobDefinitionNodePropertyNodeRangePropertyContainerNetworkConfiguration_GetTypes,
} from "./batch_getJobDefinitionNodePropertyNodeRangePropertyContainerNetworkConfiguration";
import {
  batch_getJobDefinitionNodePropertyNodeRangePropertyContainerEnvironment,
  batch_getJobDefinitionNodePropertyNodeRangePropertyContainerEnvironment_GetTypes,
} from "./batch_getJobDefinitionNodePropertyNodeRangePropertyContainerEnvironment";
import {
  batch_getJobDefinitionNodePropertyNodeRangePropertyContainerMountPoint,
  batch_getJobDefinitionNodePropertyNodeRangePropertyContainerMountPoint_GetTypes,
} from "./batch_getJobDefinitionNodePropertyNodeRangePropertyContainerMountPoint";
import {
  batch_getJobDefinitionNodePropertyNodeRangePropertyContainerEphemeralStorage,
  batch_getJobDefinitionNodePropertyNodeRangePropertyContainerEphemeralStorage_GetTypes,
} from "./batch_getJobDefinitionNodePropertyNodeRangePropertyContainerEphemeralStorage";
import {
  batch_getJobDefinitionNodePropertyNodeRangePropertyContainerSecret,
  batch_getJobDefinitionNodePropertyNodeRangePropertyContainerSecret_GetTypes,
} from "./batch_getJobDefinitionNodePropertyNodeRangePropertyContainerSecret";
import {
  batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLinuxParameter,
  batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLinuxParameter_GetTypes,
} from "./batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLinuxParameter";
import {
  batch_getJobDefinitionNodePropertyNodeRangePropertyContainerRuntimePlatform,
  batch_getJobDefinitionNodePropertyNodeRangePropertyContainerRuntimePlatform_GetTypes,
} from "./batch_getJobDefinitionNodePropertyNodeRangePropertyContainerRuntimePlatform";
import {
  batch_getJobDefinitionNodePropertyNodeRangePropertyContainerFargatePlatformConfiguration,
  batch_getJobDefinitionNodePropertyNodeRangePropertyContainerFargatePlatformConfiguration_GetTypes,
} from "./batch_getJobDefinitionNodePropertyNodeRangePropertyContainerFargatePlatformConfiguration";
import {
  batch_getJobDefinitionNodePropertyNodeRangePropertyContainerResourceRequirement,
  batch_getJobDefinitionNodePropertyNodeRangePropertyContainerResourceRequirement_GetTypes,
} from "./batch_getJobDefinitionNodePropertyNodeRangePropertyContainerResourceRequirement";
import {
  batch_getJobDefinitionNodePropertyNodeRangePropertyContainerVolume,
  batch_getJobDefinitionNodePropertyNodeRangePropertyContainerVolume_GetTypes,
} from "./batch_getJobDefinitionNodePropertyNodeRangePropertyContainerVolume";

export interface batch_getJobDefinitionNodePropertyNodeRangePropertyContainer {
  // The secrets for the container.
  secrets?: Array<batch_getJobDefinitionNodePropertyNodeRangePropertyContainerSecret>;

  // The command that's passed to the container.
  commands?: Array<string>;

  // The Amazon Resource Name (ARN) of the execution role that AWS Batch can assume. For jobs that run on Fargate resources, you must provide an execution role.
  executionRoleArn?: string;

  // The image used to start a container.
  image?: string;

  // Linux-specific modifications that are applied to the container.
  linuxParameters?: Array<batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLinuxParameter>;

  // When this parameter is true, the container is given elevated permissions on the host container instance (similar to the root user).
  privileged?: boolean;

  // An object that represents the compute environment architecture for AWS Batch jobs on Fargate.
  runtimePlatforms?: Array<batch_getJobDefinitionNodePropertyNodeRangePropertyContainerRuntimePlatform>;

  // The platform configuration for jobs that are running on Fargate resources. Jobs that are running on EC2 resources must not specify this parameter.
  fargatePlatformConfigurations?: Array<batch_getJobDefinitionNodePropertyNodeRangePropertyContainerFargatePlatformConfiguration>;

  // The instance type to use for a multi-node parallel job.
  instanceType?: string;

  // The Amazon Resource Name (ARN) of the IAM role that the container can assume for AWS permissions.
  jobRoleArn?: string;

  // The network configuration for jobs that are running on Fargate resources.
  networkConfigurations?: Array<batch_getJobDefinitionNodePropertyNodeRangePropertyContainerNetworkConfiguration>;

  // When this parameter is true, the container is given read-only access to its root file system.
  readonlyRootFilesystem?: boolean;

  // The environment variables to pass to a container.
  environments?: Array<batch_getJobDefinitionNodePropertyNodeRangePropertyContainerEnvironment>;

  // The log configuration specification for the container.
  logConfigurations?: Array<batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLogConfiguration>;

  // The mount points for data volumes in your container.
  mountPoints?: Array<batch_getJobDefinitionNodePropertyNodeRangePropertyContainerMountPoint>;

  // The user name to use inside the container.
  user?: string;

  // The amount of ephemeral storage to allocate for the task. This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on AWS Fargate.
  ephemeralStorages?: Array<batch_getJobDefinitionNodePropertyNodeRangePropertyContainerEphemeralStorage>;

  // The type and amount of resources to assign to a container.
  resourceRequirements?: Array<batch_getJobDefinitionNodePropertyNodeRangePropertyContainerResourceRequirement>;

  // A list of ulimits to set in the container.
  ulimits?: Array<batch_getJobDefinitionNodePropertyNodeRangePropertyContainerUlimit>;

  // A list of data volumes used in a job.
  volumes?: Array<batch_getJobDefinitionNodePropertyNodeRangePropertyContainerVolume>;
}

export function batch_getJobDefinitionNodePropertyNodeRangePropertyContainer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "commands",
      "The command that's passed to the container.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "privileged",
      "When this parameter is true, the container is given elevated permissions on the host container instance (similar to the root user).",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "instanceType",
      "The instance type to use for a multi-node parallel job.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "readonlyRootFilesystem",
      "When this parameter is true, the container is given read-only access to its root file system.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "resourceRequirements",
      "The type and amount of resources to assign to a container.",
      () =>
        batch_getJobDefinitionNodePropertyNodeRangePropertyContainerResourceRequirement_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "fargatePlatformConfigurations",
      "The platform configuration for jobs that are running on Fargate resources. Jobs that are running on EC2 resources must not specify this parameter.",
      () =>
        batch_getJobDefinitionNodePropertyNodeRangePropertyContainerFargatePlatformConfiguration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "logConfigurations",
      "The log configuration specification for the container.",
      () =>
        batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLogConfiguration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "volumes",
      "A list of data volumes used in a job.",
      () =>
        batch_getJobDefinitionNodePropertyNodeRangePropertyContainerVolume_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "secrets",
      "The secrets for the container.",
      () =>
        batch_getJobDefinitionNodePropertyNodeRangePropertyContainerSecret_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "image",
      "The image used to start a container.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "linuxParameters",
      "Linux-specific modifications that are applied to the container.",
      () =>
        batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLinuxParameter_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "runtimePlatforms",
      "An object that represents the compute environment architecture for AWS Batch jobs on Fargate.",
      () =>
        batch_getJobDefinitionNodePropertyNodeRangePropertyContainerRuntimePlatform_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "jobRoleArn",
      "The Amazon Resource Name (ARN) of the IAM role that the container can assume for AWS permissions.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "mountPoints",
      "The mount points for data volumes in your container.",
      () =>
        batch_getJobDefinitionNodePropertyNodeRangePropertyContainerMountPoint_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "executionRoleArn",
      "The Amazon Resource Name (ARN) of the execution role that AWS Batch can assume. For jobs that run on Fargate resources, you must provide an execution role.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "networkConfigurations",
      "The network configuration for jobs that are running on Fargate resources.",
      () =>
        batch_getJobDefinitionNodePropertyNodeRangePropertyContainerNetworkConfiguration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "environments",
      "The environment variables to pass to a container.",
      () =>
        batch_getJobDefinitionNodePropertyNodeRangePropertyContainerEnvironment_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "user",
      "The user name to use inside the container.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ephemeralStorages",
      "The amount of ephemeral storage to allocate for the task. This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on AWS Fargate.",
      () =>
        batch_getJobDefinitionNodePropertyNodeRangePropertyContainerEphemeralStorage_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ulimits",
      "A list of ulimits to set in the container.",
      () =>
        batch_getJobDefinitionNodePropertyNodeRangePropertyContainerUlimit_GetTypes(),
      true,
      false,
    ),
  ];
}
