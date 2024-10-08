import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2_LaunchTemplateElasticInferenceAccelerator {
  // Accelerator type.
  type?: string;
}

export function ec2_LaunchTemplateElasticInferenceAccelerator_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'type',
      'Accelerator type.',
      () => [],
      true,
      false,
    ),
  ];
}
