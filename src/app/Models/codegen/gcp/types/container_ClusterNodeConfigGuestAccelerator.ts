import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  container_ClusterNodeConfigGuestAcceleratorGpuSharingConfig,
  container_ClusterNodeConfigGuestAcceleratorGpuSharingConfig_GetTypes,
} from './container_ClusterNodeConfigGuestAcceleratorGpuSharingConfig';
import {
  container_ClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig,
  container_ClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig_GetTypes,
} from './container_ClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig';

export interface container_ClusterNodeConfigGuestAccelerator {
  // The number of the guest accelerator cards exposed to this instance.
  count?: number;

  // Configuration for auto installation of GPU driver. Structure is documented below.
  gpuDriverInstallationConfig?: container_ClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig;

  // Size of partitions to create on the GPU. Valid values are described in the NVIDIA mig [user guide](https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning).
  gpuPartitionSize?: string;

  // Configuration for GPU sharing. Structure is documented below.
  gpuSharingConfig?: container_ClusterNodeConfigGuestAcceleratorGpuSharingConfig;

  // The accelerator type resource to expose to this instance. E.g. `nvidia-tesla-k80`.
  type?: string;
}

export function container_ClusterNodeConfigGuestAccelerator_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'type',
      'The accelerator type resource to expose to this instance. E.g. `nvidia-tesla-k80`.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      'count',
      'The number of the guest accelerator cards exposed to this instance.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'gpuDriverInstallationConfig',
      'Configuration for auto installation of GPU driver. Structure is documented below.',
      () =>
        container_ClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'gpuPartitionSize',
      'Size of partitions to create on the GPU. Valid values are described in the NVIDIA mig [user guide](https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning).',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'gpuSharingConfig',
      'Configuration for GPU sharing. Structure is documented below.',
      () =>
        container_ClusterNodeConfigGuestAcceleratorGpuSharingConfig_GetTypes(),
      false,
      true,
    ),
  ];
}
