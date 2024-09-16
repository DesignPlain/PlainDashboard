import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  pipes_PipeTargetParametersBatchJobParametersContainerOverridesEnvironment,
  pipes_PipeTargetParametersBatchJobParametersContainerOverridesEnvironment_GetTypes,
} from './pipes_PipeTargetParametersBatchJobParametersContainerOverridesEnvironment';
import {
  pipes_PipeTargetParametersBatchJobParametersContainerOverridesResourceRequirement,
  pipes_PipeTargetParametersBatchJobParametersContainerOverridesResourceRequirement_GetTypes,
} from './pipes_PipeTargetParametersBatchJobParametersContainerOverridesResourceRequirement';

export interface pipes_PipeTargetParametersBatchJobParametersContainerOverrides {
  // List of commands to send to the container that overrides the default command from the Docker image or the task definition. You must also specify a container name.
  commands?: Array<string>;

  // The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the task definition. You must also specify a container name. Detailed below.
  environments?: Array<pipes_PipeTargetParametersBatchJobParametersContainerOverridesEnvironment>;

  // The instance type to use for a multi-node parallel job. This parameter isn't applicable to single-node container jobs or jobs that run on Fargate resources, and shouldn't be provided.
  instanceType?: string;

  // The type and amount of a resource to assign to a container, instead of the default value from the task definition. The only supported resource is a GPU. Detailed below.
  resourceRequirements?: Array<pipes_PipeTargetParametersBatchJobParametersContainerOverridesResourceRequirement>;
}

export function pipes_PipeTargetParametersBatchJobParametersContainerOverrides_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'instanceType',
      "The instance type to use for a multi-node parallel job. This parameter isn't applicable to single-node container jobs or jobs that run on Fargate resources, and shouldn't be provided.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'resourceRequirements',
      'The type and amount of a resource to assign to a container, instead of the default value from the task definition. The only supported resource is a GPU. Detailed below.',
      () =>
        pipes_PipeTargetParametersBatchJobParametersContainerOverridesResourceRequirement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'commands',
      'List of commands to send to the container that overrides the default command from the Docker image or the task definition. You must also specify a container name.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'environments',
      'The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the task definition. You must also specify a container name. Detailed below.',
      () =>
        pipes_PipeTargetParametersBatchJobParametersContainerOverridesEnvironment_GetTypes(),
      false,
      false,
    ),
  ];
}
