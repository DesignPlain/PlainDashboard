import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_ClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig,
  Container_ClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig_GetTypes,
} from "./Container_ClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig";
import {
  Container_ClusterNodeConfigGuestAcceleratorGpuSharingConfig,
  Container_ClusterNodeConfigGuestAcceleratorGpuSharingConfig_GetTypes,
} from "./Container_ClusterNodeConfigGuestAcceleratorGpuSharingConfig";

export interface Container_ClusterNodeConfigGuestAccelerator {
  // The number of the guest accelerator cards exposed to this instance.
  Count?: number;

  // Configuration for auto installation of GPU driver. Structure is documented below.
  GpuDriverInstallationConfig?: Container_ClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig;

  // Size of partitions to create on the GPU. Valid values are described in the NVIDIA mig [user guide](https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning).
  GpuPartitionSize?: string;

  // Configuration for GPU sharing. Structure is documented below.
  GpuSharingConfig?: Container_ClusterNodeConfigGuestAcceleratorGpuSharingConfig;

  // The accelerator type resource to expose to this instance. E.g. `nvidia-tesla-k80`.
  Type?: string;
}

export function Container_ClusterNodeConfigGuestAccelerator_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Count",
      "The number of the guest accelerator cards exposed to this instance.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "GpuDriverInstallationConfig",
      "Configuration for auto installation of GPU driver. Structure is documented below.",
      Container_ClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig_GetTypes(),
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
      Container_ClusterNodeConfigGuestAcceleratorGpuSharingConfig_GetTypes(),
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
  ];
}
