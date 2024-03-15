import { ClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig } from "./ClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig";
import { ClusterNodeConfigGuestAcceleratorGpuSharingConfig } from "./ClusterNodeConfigGuestAcceleratorGpuSharingConfig";

export interface ClusterNodeConfigGuestAccelerator {
  // The number of the guest accelerator cards exposed to this instance.
  Count?: number;

  // Configuration for auto installation of GPU driver. Structure is documented below.
  GpuDriverInstallationConfig?: ClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig;

  // Size of partitions to create on the GPU. Valid values are described in the NVIDIA mig [user guide](https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning).
  GpuPartitionSize?: string;

  // Configuration for GPU sharing. Structure is documented below.
  GpuSharingConfig?: ClusterNodeConfigGuestAcceleratorGpuSharingConfig;

  // The accelerator type resource to expose to this instance. E.g. `nvidia-tesla-k80`.
  Type?: string;
}
