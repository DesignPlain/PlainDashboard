import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_getClusterNodeConfigGuestAcceleratorGpuSharingConfig,
  Container_getClusterNodeConfigGuestAcceleratorGpuSharingConfig_GetTypes,
} from "./Container_getClusterNodeConfigGuestAcceleratorGpuSharingConfig";
import {
  Container_getClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig,
  Container_getClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig_GetTypes,
} from "./Container_getClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig";

export interface Container_getClusterNodeConfigGuestAccelerator {
  // Configuration for GPU sharing.
  GpuSharingConfigs?: Array<Container_getClusterNodeConfigGuestAcceleratorGpuSharingConfig>;

  // The accelerator type resource name.
  Type?: string;

  // The number of the accelerator cards exposed to an instance.
  Count?: number;

  // Configuration for auto installation of GPU driver.
  GpuDriverInstallationConfigs?: Array<Container_getClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig>;

  // Size of partitions to create on the GPU. Valid values are described in the NVIDIA mig user guide (https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning)
  GpuPartitionSize?: string;
}

export function Container_getClusterNodeConfigGuestAccelerator_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Type",
      "The accelerator type resource name.",
      [],
      true,
      false,
    ),
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
      Container_getClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig_GetTypes(),
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
      Container_getClusterNodeConfigGuestAcceleratorGpuSharingConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
