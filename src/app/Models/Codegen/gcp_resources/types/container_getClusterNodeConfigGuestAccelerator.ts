import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  container_getClusterNodeConfigGuestAcceleratorGpuSharingConfig,
  container_getClusterNodeConfigGuestAcceleratorGpuSharingConfig_GetTypes,
} from "./container_getClusterNodeConfigGuestAcceleratorGpuSharingConfig";
import {
  container_getClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig,
  container_getClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig_GetTypes,
} from "./container_getClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig";

export interface container_getClusterNodeConfigGuestAccelerator {
  // Configuration for GPU sharing.
  gpuSharingConfigs?: Array<container_getClusterNodeConfigGuestAcceleratorGpuSharingConfig>;

  // The accelerator type resource name.
  type?: string;

  // The number of the accelerator cards exposed to an instance.
  count?: number;

  // Configuration for auto installation of GPU driver.
  gpuDriverInstallationConfigs?: Array<container_getClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig>;

  // Size of partitions to create on the GPU. Valid values are described in the NVIDIA mig user guide (https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning)
  gpuPartitionSize?: string;
}

export function container_getClusterNodeConfigGuestAccelerator_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "The accelerator type resource name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "count",
      "The number of the accelerator cards exposed to an instance.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "gpuDriverInstallationConfigs",
      "Configuration for auto installation of GPU driver.",
      container_getClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "gpuPartitionSize",
      "Size of partitions to create on the GPU. Valid values are described in the NVIDIA mig user guide (https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning)",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "gpuSharingConfigs",
      "Configuration for GPU sharing.",
      container_getClusterNodeConfigGuestAcceleratorGpuSharingConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
