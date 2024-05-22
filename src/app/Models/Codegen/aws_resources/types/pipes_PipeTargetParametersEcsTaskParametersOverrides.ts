import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  pipes_PipeTargetParametersEcsTaskParametersOverridesEphemeralStorage,
  pipes_PipeTargetParametersEcsTaskParametersOverridesEphemeralStorage_GetTypes,
} from "./pipes_PipeTargetParametersEcsTaskParametersOverridesEphemeralStorage";
import {
  pipes_PipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverride,
  pipes_PipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverride_GetTypes,
} from "./pipes_PipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverride";
import {
  pipes_PipeTargetParametersEcsTaskParametersOverridesContainerOverride,
  pipes_PipeTargetParametersEcsTaskParametersOverridesContainerOverride_GetTypes,
} from "./pipes_PipeTargetParametersEcsTaskParametersOverridesContainerOverride";

export interface pipes_PipeTargetParametersEcsTaskParametersOverrides {
  // The number of cpu units reserved for the container, instead of the default value from the task definition. You must also specify a container name.
  cpu?: string;

  // The ephemeral storage setting override for the task.  Detailed below.
  ephemeralStorage?: pipes_PipeTargetParametersEcsTaskParametersOverridesEphemeralStorage;

  // The Amazon Resource Name (ARN) of the task execution IAM role override for the task.
  executionRoleArn?: string;

  // List of Elastic Inference accelerator overrides for the task. Detailed below.
  inferenceAcceleratorOverrides?: Array<pipes_PipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverride>;

  // The hard limit (in MiB) of memory to present to the container, instead of the default value from the task definition. If your container attempts to exceed the memory specified here, the container is killed. You must also specify a container name.
  memory?: string;

  // The Amazon Resource Name (ARN) of the IAM role that containers in this task can assume. All containers in this task are granted the permissions that are specified in this role.
  taskRoleArn?: string;

  // One or more container overrides that are sent to a task. Detailed below.
  containerOverrides?: Array<pipes_PipeTargetParametersEcsTaskParametersOverridesContainerOverride>;
}

export function pipes_PipeTargetParametersEcsTaskParametersOverrides_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ephemeralStorage",
      "The ephemeral storage setting override for the task.  Detailed below.",
      pipes_PipeTargetParametersEcsTaskParametersOverridesEphemeralStorage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "executionRoleArn",
      "The Amazon Resource Name (ARN) of the task execution IAM role override for the task.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "inferenceAcceleratorOverrides",
      "List of Elastic Inference accelerator overrides for the task. Detailed below.",
      pipes_PipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverride_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "memory",
      "The hard limit (in MiB) of memory to present to the container, instead of the default value from the task definition. If your container attempts to exceed the memory specified here, the container is killed. You must also specify a container name.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "taskRoleArn",
      "The Amazon Resource Name (ARN) of the IAM role that containers in this task can assume. All containers in this task are granted the permissions that are specified in this role.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "containerOverrides",
      "One or more container overrides that are sent to a task. Detailed below.",
      pipes_PipeTargetParametersEcsTaskParametersOverridesContainerOverride_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cpu",
      "The number of cpu units reserved for the container, instead of the default value from the task definition. You must also specify a container name.",
      [],
      false,
      false,
    ),
  ];
}
