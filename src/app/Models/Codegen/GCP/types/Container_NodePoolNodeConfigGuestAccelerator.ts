import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  container_NodePoolNodeConfigGuestAcceleratorGpuSharingConfig,
  container_NodePoolNodeConfigGuestAcceleratorGpuSharingConfig_GetTypes,
} from "./container_NodePoolNodeConfigGuestAcceleratorGpuSharingConfig";
import {
  container_NodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig,
  container_NodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig_GetTypes,
} from "./container_NodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig";

export interface container_NodePoolNodeConfigGuestAccelerator {
  // Size of partitions to create on the GPU. Valid values are described in the NVIDIA mig user guide (https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning)
  gpuPartitionSize?: string;

  // Configuration for GPU sharing.
  gpuSharingConfig?: container_NodePoolNodeConfigGuestAcceleratorGpuSharingConfig;

  /*
The type of the policy. Supports a single value: COMPACT.
Specifying COMPACT placement policy type places node pool's nodes in a closer
physical proximity in order to reduce network latency between nodes.
*/
  type?: string;

  // The number of the accelerator cards exposed to an instance.
  count?: number;

  // Configuration for auto installation of GPU driver.
  gpuDriverInstallationConfig?: container_NodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig;
}

export function container_NodePoolNodeConfigGuestAccelerator_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "gpuPartitionSize",
      "Size of partitions to create on the GPU. Valid values are described in the NVIDIA mig user guide (https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning)",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "gpuSharingConfig",
      "Configuration for GPU sharing.",
      container_NodePoolNodeConfigGuestAcceleratorGpuSharingConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of the policy. Supports a single value: COMPACT.\nSpecifying COMPACT placement policy type places node pool's nodes in a closer\nphysical proximity in order to reduce network latency between nodes.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "count",
      "The number of the accelerator cards exposed to an instance.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "gpuDriverInstallationConfig",
      "Configuration for auto installation of GPU driver.",
      container_NodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig_GetTypes(),
      false,
      true,
    ),
  ];
}
