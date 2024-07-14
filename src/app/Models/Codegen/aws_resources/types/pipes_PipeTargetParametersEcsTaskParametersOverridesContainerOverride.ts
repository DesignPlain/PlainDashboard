import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  pipes_PipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFile,
  pipes_PipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFile_GetTypes,
} from "./pipes_PipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFile";
import {
  pipes_PipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironment,
  pipes_PipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironment_GetTypes,
} from "./pipes_PipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironment";
import {
  pipes_PipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirement,
  pipes_PipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirement_GetTypes,
} from "./pipes_PipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirement";

export interface pipes_PipeTargetParametersEcsTaskParametersOverridesContainerOverride {
  // List of commands to send to the container that overrides the default command from the Docker image or the task definition. You must also specify a container name.
  commands?: Array<string>;

  // The number of cpu units reserved for the container, instead of the default value from the task definition. You must also specify a container name.
  cpu?: number;

  // A list of files containing the environment variables to pass to a container, instead of the value from the container definition. Detailed below.
  environmentFiles?: Array<pipes_PipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFile>;

  // The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the task definition. You must also specify a container name. Detailed below.
  environments?: Array<pipes_PipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironment>;

  // The hard limit (in MiB) of memory to present to the container, instead of the default value from the task definition. If your container attempts to exceed the memory specified here, the container is killed. You must also specify a container name.
  memory?: number;

  // The soft limit (in MiB) of memory to reserve for the container, instead of the default value from the task definition. You must also specify a container name.
  memoryReservation?: number;

  // Name of the pipe. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`.
  name?: string;

  // The type and amount of a resource to assign to a container, instead of the default value from the task definition. The only supported resource is a GPU. Detailed below.
  resourceRequirements?: Array<pipes_PipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirement>;
}

export function pipes_PipeTargetParametersEcsTaskParametersOverridesContainerOverride_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "environments",
      "The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the task definition. You must also specify a container name. Detailed below.",
      pipes_PipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironment_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "memory",
      "The hard limit (in MiB) of memory to present to the container, instead of the default value from the task definition. If your container attempts to exceed the memory specified here, the container is killed. You must also specify a container name.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "memoryReservation",
      "The soft limit (in MiB) of memory to reserve for the container, instead of the default value from the task definition. You must also specify a container name.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the pipe. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "resourceRequirements",
      "The type and amount of a resource to assign to a container, instead of the default value from the task definition. The only supported resource is a GPU. Detailed below.",
      pipes_PipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "commands",
      "List of commands to send to the container that overrides the default command from the Docker image or the task definition. You must also specify a container name.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "cpu",
      "The number of cpu units reserved for the container, instead of the default value from the task definition. You must also specify a container name.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "environmentFiles",
      "A list of files containing the environment variables to pass to a container, instead of the value from the container definition. Detailed below.",
      pipes_PipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFile_GetTypes(),
      false,
      false,
    ),
  ];
}
