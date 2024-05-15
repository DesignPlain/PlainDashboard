import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_NodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig {
  // Mode for how the GPU driver is installed.
  GpuDriverVersion?: string;
}

export function Container_NodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "GpuDriverVersion",
      "Mode for how the GPU driver is installed.",
      [],
      true,
      true,
    ),
  ];
}
