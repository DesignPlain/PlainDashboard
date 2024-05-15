import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_ClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig {
  /*
Mode for how the GPU driver is installed.
Accepted values are:
- `"GPU_DRIVER_VERSION_UNSPECIFIED"`: Default value is to not install any GPU driver.
- `"INSTALLATION_DISABLED"`: Disable GPU driver auto installation and needs manual installation.
- `"DEFAULT"`: "Default" GPU driver in COS and Ubuntu.
- `"LATEST"`: "Latest" GPU driver in COS.
*/
  GpuDriverVersion?: string;
}

export function Container_ClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "GpuDriverVersion",
      'Mode for how the GPU driver is installed.\nAccepted values are:\n* `"GPU_DRIVER_VERSION_UNSPECIFIED"`: Default value is to not install any GPU driver.\n* `"INSTALLATION_DISABLED"`: Disable GPU driver auto installation and needs manual installation.\n* `"DEFAULT"`: "Default" GPU driver in COS and Ubuntu.\n* `"LATEST"`: "Latest" GPU driver in COS.',
      [],
      true,
      true,
    ),
  ];
}
