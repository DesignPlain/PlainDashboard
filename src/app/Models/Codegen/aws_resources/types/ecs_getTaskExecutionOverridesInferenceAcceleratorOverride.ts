import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ecs_getTaskExecutionOverridesInferenceAcceleratorOverride {
  // The Elastic Inference accelerator type to use.
  deviceType?: string;

  // The Elastic Inference accelerator device name to override for the task. This parameter must match a deviceName specified in the task definition.
  deviceName?: string;
}

export function ecs_getTaskExecutionOverridesInferenceAcceleratorOverride_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "deviceType",
      "The Elastic Inference accelerator type to use.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deviceName",
      "The Elastic Inference accelerator device name to override for the task. This parameter must match a deviceName specified in the task definition.",
      [],
      false,
      false,
    ),
  ];
}
