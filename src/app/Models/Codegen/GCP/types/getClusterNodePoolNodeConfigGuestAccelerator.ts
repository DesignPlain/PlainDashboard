import { getClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig } from "./getClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig";
import { getClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig } from "./getClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig";

export interface getClusterNodePoolNodeConfigGuestAccelerator {
  // The accelerator type resource name.
  Type?: string;

  // The number of the accelerator cards exposed to an instance.
  Count?: number;

  // Configuration for auto installation of GPU driver.
  GpuDriverInstallationConfigs?: Array<getClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig>;

  // Size of partitions to create on the GPU. Valid values are described in the NVIDIA mig user guide (https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning)
  GpuPartitionSize?: string;

  // Configuration for GPU sharing.
  GpuSharingConfigs?: Array<getClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig>;
}
