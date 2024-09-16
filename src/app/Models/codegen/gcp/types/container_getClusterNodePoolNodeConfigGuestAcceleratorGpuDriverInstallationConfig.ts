import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface container_getClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig {
  // Mode for how the GPU driver is installed.
  gpuDriverVersion?: string;
}

export function container_getClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'gpuDriverVersion',
      'Mode for how the GPU driver is installed.',
      () => [],
      true,
      false,
    ),
  ];
}
