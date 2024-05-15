import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_getClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig,
  Container_getClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig_GetTypes,
} from "./Container_getClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig";
import {
  Container_getClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig,
  Container_getClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig_GetTypes,
} from "./Container_getClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig";

export interface Container_getClusterNodePoolNodeConfigGuestAccelerator {
  // The number of the accelerator cards exposed to an instance.
  Count?: number;

  // Configuration for auto installation of GPU driver.
  GpuDriverInstallationConfigs?: Array<Container_getClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig>;

  // Size of partitions to create on the GPU. Valid values are described in the NVIDIA mig user guide (https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning)
  GpuPartitionSize?: string;

  // Configuration for GPU sharing.
  GpuSharingConfigs?: Array<Container_getClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig>;

  // The accelerator type resource name.
  Type?: string;
}

export function Container_getClusterNodePoolNodeConfigGuestAccelerator_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Count",
      "The number of the accelerator cards exposed to an instance.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "GpuDriverInstallationConfigs",
      "Configuration for auto installation of GPU driver.",
      Container_getClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "GpuPartitionSize",
      "Size of partitions to create on the GPU. Valid values are described in the NVIDIA mig user guide (https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning)",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "GpuSharingConfigs",
      "Configuration for GPU sharing.",
      Container_getClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      "The accelerator type resource name.",
      [],
      true,
      false,
    ),
  ];
}
