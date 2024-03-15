import { NodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig } from "./NodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig";
import { NodePoolNodeConfigGuestAcceleratorGpuSharingConfig } from "./NodePoolNodeConfigGuestAcceleratorGpuSharingConfig";

export interface NodePoolNodeConfigGuestAccelerator {
  /*
The type of the policy. Supports a single value: COMPACT.
Specifying COMPACT placement policy type places node pool's nodes in a closer
physical proximity in order to reduce network latency between nodes.
*/
  Type?: string;

  // The number of the accelerator cards exposed to an instance.
  Count?: number;

  // Configuration for auto installation of GPU driver.
  GpuDriverInstallationConfig?: NodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig;

  // Size of partitions to create on the GPU. Valid values are described in the NVIDIA mig user guide (https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning)
  GpuPartitionSize?: string;

  // Configuration for GPU sharing.
  GpuSharingConfig?: NodePoolNodeConfigGuestAcceleratorGpuSharingConfig;
}
