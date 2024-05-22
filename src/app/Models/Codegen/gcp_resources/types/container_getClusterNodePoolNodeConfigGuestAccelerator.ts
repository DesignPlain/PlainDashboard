import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  container_getClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig,
  container_getClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig_GetTypes,
} from "./container_getClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig";
import {
  container_getClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig,
  container_getClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig_GetTypes,
} from "./container_getClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig";

export interface container_getClusterNodePoolNodeConfigGuestAccelerator {
  // The number of the accelerator cards exposed to an instance.
  count?: number;

  // Configuration for auto installation of GPU driver.
  gpuDriverInstallationConfigs?: Array<container_getClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig>;

  // Size of partitions to create on the GPU. Valid values are described in the NVIDIA mig user guide (https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning)
  gpuPartitionSize?: string;

  // Configuration for GPU sharing.
  gpuSharingConfigs?: Array<container_getClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig>;

  // The accelerator type resource name.
  type?: string;
}

export function container_getClusterNodePoolNodeConfigGuestAccelerator_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "gpuSharingConfigs",
      "Configuration for GPU sharing.",
      container_getClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig_GetTypes(),
      true,
      false,
    ),
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
      container_getClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig_GetTypes(),
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
  ];
}
