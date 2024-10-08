import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ecs_TaskDefinitionInferenceAccelerator {
  // Elastic Inference accelerator device name. The deviceName must also be referenced in a container definition as a ResourceRequirement.
  deviceName?: string;

  // Elastic Inference accelerator type to use.
  deviceType?: string;
}

export function ecs_TaskDefinitionInferenceAccelerator_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'deviceName',
      'Elastic Inference accelerator device name. The deviceName must also be referenced in a container definition as a ResourceRequirement.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'deviceType',
      'Elastic Inference accelerator type to use.',
      () => [],
      true,
      true,
    ),
  ];
}
