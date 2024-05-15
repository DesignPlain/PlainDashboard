import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_ClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig,
  Container_ClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig_GetTypes,
} from "./Container_ClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig";
import {
  Container_ClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig,
  Container_ClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig_GetTypes,
} from "./Container_ClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig";

export interface Container_ClusterNodePoolNodeConfigGuestAccelerator {
  // The accelerator type resource to expose to this instance. E.g. `nvidia-tesla-k80`.
  Type?: string;

  // The number of the guest accelerator cards exposed to this instance.
  Count?: number;

  // Configuration for auto installation of GPU driver. Structure is documented below.
  GpuDriverInstallationConfig?: Container_ClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig;

  // Size of partitions to create on the GPU. Valid values are described in the NVIDIA mig [user guide](https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning).
  GpuPartitionSize?: string;

  // Configuration for GPU sharing. Structure is documented below.
  GpuSharingConfig?: Container_ClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig;
}

export function Container_ClusterNodePoolNodeConfigGuestAccelerator_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "GpuDriverInstallationConfig",
      "Configuration for auto installation of GPU driver. Structure is documented below.",
      Container_ClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "GpuPartitionSize",
      "Size of partitions to create on the GPU. Valid values are described in the NVIDIA mig [user guide](https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning).",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "GpuSharingConfig",
      "Configuration for GPU sharing. Structure is documented below.",
      Container_ClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      "The accelerator type resource to expose to this instance. E.g. `nvidia-tesla-k80`.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Count",
      "The number of the guest accelerator cards exposed to this instance.",
      [],
      true,
      true,
    ),
  ];
}
