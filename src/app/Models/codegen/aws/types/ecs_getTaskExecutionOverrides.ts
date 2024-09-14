import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ecs_getTaskExecutionOverridesInferenceAcceleratorOverride,
  ecs_getTaskExecutionOverridesInferenceAcceleratorOverride_GetTypes,
} from "./ecs_getTaskExecutionOverridesInferenceAcceleratorOverride";
import {
  ecs_getTaskExecutionOverridesContainerOverride,
  ecs_getTaskExecutionOverridesContainerOverride_GetTypes,
} from "./ecs_getTaskExecutionOverridesContainerOverride";

export interface ecs_getTaskExecutionOverrides {
  // One or more container overrides that are sent to a task. See below.
  containerOverrides?: Array<ecs_getTaskExecutionOverridesContainerOverride>;

  // The CPU override for the task.
  cpu?: string;

  // Amazon Resource Name (ARN) of the task execution role override for the task.
  executionRoleArn?: string;

  // Elastic Inference accelerator override for the task. See below.
  inferenceAcceleratorOverrides?: Array<ecs_getTaskExecutionOverridesInferenceAcceleratorOverride>;

  // The memory override for the task.
  memory?: string;

  // Amazon Resource Name (ARN) of the role that containers in this task can assume.
  taskRoleArn?: string;
}

export function ecs_getTaskExecutionOverrides_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "cpu",
      "The CPU override for the task.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "executionRoleArn",
      "Amazon Resource Name (ARN) of the task execution role override for the task.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "inferenceAcceleratorOverrides",
      "Elastic Inference accelerator override for the task. See below.",
      () =>
        ecs_getTaskExecutionOverridesInferenceAcceleratorOverride_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "memory",
      "The memory override for the task.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "taskRoleArn",
      "Amazon Resource Name (ARN) of the role that containers in this task can assume.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "containerOverrides",
      "One or more container overrides that are sent to a task. See below.",
      () => ecs_getTaskExecutionOverridesContainerOverride_GetTypes(),
      false,
      false,
    ),
  ];
}
