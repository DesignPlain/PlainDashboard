import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ecs_getTaskExecutionOverridesContainerOverrideResourceRequirement,
  ecs_getTaskExecutionOverridesContainerOverrideResourceRequirement_GetTypes,
} from './ecs_getTaskExecutionOverridesContainerOverrideResourceRequirement';
import {
  ecs_getTaskExecutionOverridesContainerOverrideEnvironment,
  ecs_getTaskExecutionOverridesContainerOverrideEnvironment_GetTypes,
} from './ecs_getTaskExecutionOverridesContainerOverrideEnvironment';

export interface ecs_getTaskExecutionOverridesContainerOverride {
  // The hard limit (in MiB) of memory to present to the container, instead of the default value from the task definition. If your container attempts to exceed the memory specified here, the container is killed.
  memory?: number;

  // The soft limit (in MiB) of memory to reserve for the container, instead of the default value from the task definition.
  memoryReservation?: number;

  // The name of the container that receives the override. This parameter is required if any override is specified.
  name?: string;

  // The type and amount of a resource to assign to a container, instead of the default value from the task definition. The only supported resource is a GPU. See below.
  resourceRequirements?: Array<ecs_getTaskExecutionOverridesContainerOverrideResourceRequirement>;

  // The command to send to the container that overrides the default command from the Docker image or the task definition.
  commands?: Array<string>;

  // The number of cpu units reserved for the container, instead of the default value from the task definition.
  cpu?: number;

  // The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the task definition. See below.
  environments?: Array<ecs_getTaskExecutionOverridesContainerOverrideEnvironment>;
}

export function ecs_getTaskExecutionOverridesContainerOverride_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the container that receives the override. This parameter is required if any override is specified.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'resourceRequirements',
      'The type and amount of a resource to assign to a container, instead of the default value from the task definition. The only supported resource is a GPU. See below.',
      () =>
        ecs_getTaskExecutionOverridesContainerOverrideResourceRequirement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'commands',
      'The command to send to the container that overrides the default command from the Docker image or the task definition.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'cpu',
      'The number of cpu units reserved for the container, instead of the default value from the task definition.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'environments',
      'The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the task definition. See below.',
      () =>
        ecs_getTaskExecutionOverridesContainerOverrideEnvironment_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'memory',
      'The hard limit (in MiB) of memory to present to the container, instead of the default value from the task definition. If your container attempts to exceed the memory specified here, the container is killed.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'memoryReservation',
      'The soft limit (in MiB) of memory to reserve for the container, instead of the default value from the task definition.',
      () => [],
      false,
      false,
    ),
  ];
}
