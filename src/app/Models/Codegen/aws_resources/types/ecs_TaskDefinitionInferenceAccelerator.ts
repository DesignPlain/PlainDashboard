import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ecs_TaskDefinitionInferenceAccelerator {
  // Elastic Inference accelerator type to use.
  deviceType?: string;

  // Elastic Inference accelerator device name. The deviceName must also be referenced in a container definition as a ResourceRequirement.
  deviceName?: string;
}

export function ecs_TaskDefinitionInferenceAccelerator_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "deviceType",
      "Elastic Inference accelerator type to use.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "deviceName",
      "Elastic Inference accelerator device name. The deviceName must also be referenced in a container definition as a ResourceRequirement.",
      [],
      true,
      true,
    ),
  ];
}
