import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  container_ClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig,
  container_ClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig_GetTypes,
} from "./container_ClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig";
import {
  container_ClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig,
  container_ClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig_GetTypes,
} from "./container_ClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig";

export interface container_ClusterNodePoolNodeConfigGuestAccelerator {
  // Size of partitions to create on the GPU. Valid values are described in the NVIDIA mig [user guide](https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning).
  gpuPartitionSize?: string;

  // Configuration for GPU sharing. Structure is documented below.
  gpuSharingConfig?: container_ClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig;

  // The accelerator type resource to expose to this instance. E.g. `nvidia-tesla-k80`.
  type?: string;

  // The number of the guest accelerator cards exposed to this instance.
  count?: number;

  // Configuration for auto installation of GPU driver. Structure is documented below.
  gpuDriverInstallationConfig?: container_ClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig;
}

export function container_ClusterNodePoolNodeConfigGuestAccelerator_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "gpuPartitionSize",
      "Size of partitions to create on the GPU. Valid values are described in the NVIDIA mig [user guide](https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning).",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "gpuSharingConfig",
      "Configuration for GPU sharing. Structure is documented below.",
      container_ClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The accelerator type resource to expose to this instance. E.g. `nvidia-tesla-k80`.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "count",
      "The number of the guest accelerator cards exposed to this instance.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "gpuDriverInstallationConfig",
      "Configuration for auto installation of GPU driver. Structure is documented below.",
      container_ClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig_GetTypes(),
      false,
      true,
    ),
  ];
}
