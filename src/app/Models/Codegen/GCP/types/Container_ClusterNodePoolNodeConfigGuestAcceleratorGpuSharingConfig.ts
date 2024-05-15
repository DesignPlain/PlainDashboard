import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_ClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig {
  /*
The type of GPU sharing strategy to enable on the GPU node.
Accepted values are:
- `"TIME_SHARING"`: Allow multiple containers to have [time-shared](https://cloud.google.com/kubernetes-engine/docs/concepts/timesharing-gpus) access to a single GPU device.
*/
  GpuSharingStrategy?: string;

  // The maximum number of containers that can share a GPU.
  MaxSharedClientsPerGpu?: number;
}

export function Container_ClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "GpuSharingStrategy",
      'The type of GPU sharing strategy to enable on the GPU node.\nAccepted values are:\n* `"TIME_SHARING"`: Allow multiple containers to have [time-shared](https://cloud.google.com/kubernetes-engine/docs/concepts/timesharing-gpus) access to a single GPU device.',
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxSharedClientsPerGpu",
      "The maximum number of containers that can share a GPU.",
      [],
      true,
      true,
    ),
  ];
}
