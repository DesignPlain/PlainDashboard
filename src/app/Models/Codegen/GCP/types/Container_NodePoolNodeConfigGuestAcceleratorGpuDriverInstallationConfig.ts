import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_NodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig {
  // Mode for how the GPU driver is installed.
  gpuDriverVersion?: string;
}

export function container_NodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "gpuDriverVersion",
      "Mode for how the GPU driver is installed.",
      [],
      true,
      true,
    ),
  ];
}
