import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_ClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig {
  // The maximum number of containers that can share a GPU.
  maxSharedClientsPerGpu?: number;

  /*
The type of GPU sharing strategy to enable on the GPU node.
Accepted values are:
- `"TIME_SHARING"`: Allow multiple containers to have [time-shared](https://cloud.google.com/kubernetes-engine/docs/concepts/timesharing-gpus) access to a single GPU device.
*/
  gpuSharingStrategy?: string;
}

export function container_ClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxSharedClientsPerGpu",
      "The maximum number of containers that can share a GPU.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "gpuSharingStrategy",
      'The type of GPU sharing strategy to enable on the GPU node.\nAccepted values are:\n* `"TIME_SHARING"`: Allow multiple containers to have [time-shared](https://cloud.google.com/kubernetes-engine/docs/concepts/timesharing-gpus) access to a single GPU device.',
      [],
      true,
      true,
    ),
  ];
}
