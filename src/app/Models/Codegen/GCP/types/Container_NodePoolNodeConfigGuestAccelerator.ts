import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_NodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig,
  Container_NodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig_GetTypes,
} from "./Container_NodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig";
import {
  Container_NodePoolNodeConfigGuestAcceleratorGpuSharingConfig,
  Container_NodePoolNodeConfigGuestAcceleratorGpuSharingConfig_GetTypes,
} from "./Container_NodePoolNodeConfigGuestAcceleratorGpuSharingConfig";

export interface Container_NodePoolNodeConfigGuestAccelerator {
  // Configuration for auto installation of GPU driver.
  GpuDriverInstallationConfig?: Container_NodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig;

  // Size of partitions to create on the GPU. Valid values are described in the NVIDIA mig user guide (https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning)
  GpuPartitionSize?: string;

  // Configuration for GPU sharing.
  GpuSharingConfig?: Container_NodePoolNodeConfigGuestAcceleratorGpuSharingConfig;

  /*
The type of the policy. Supports a single value: COMPACT.
Specifying COMPACT placement policy type places node pool's nodes in a closer
physical proximity in order to reduce network latency between nodes.
*/
  Type?: string;

  // The number of the accelerator cards exposed to an instance.
  Count?: number;
}

export function Container_NodePoolNodeConfigGuestAccelerator_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "GpuPartitionSize",
      "Size of partitions to create on the GPU. Valid values are described in the NVIDIA mig user guide (https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning)",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "GpuSharingConfig",
      "Configuration for GPU sharing.",
      Container_NodePoolNodeConfigGuestAcceleratorGpuSharingConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      "The type of the policy. Supports a single value: COMPACT.\nSpecifying COMPACT placement policy type places node pool's nodes in a closer\nphysical proximity in order to reduce network latency between nodes.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Count",
      "The number of the accelerator cards exposed to an instance.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "GpuDriverInstallationConfig",
      "Configuration for auto installation of GPU driver.",
      Container_NodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig_GetTypes(),
      false,
      true,
    ),
  ];
}
