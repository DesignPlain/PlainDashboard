import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_getClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig {
  // The type of GPU sharing strategy to enable on the GPU node. Possible values are described in the API package (https://pkg.go.dev/google.golang.org/api/container/v1#GPUSharingConfig)
  gpuSharingStrategy?: string;

  // The maximum number of containers that can share a GPU.
  maxSharedClientsPerGpu?: number;
}

export function container_getClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "gpuSharingStrategy",
      "The type of GPU sharing strategy to enable on the GPU node. Possible values are described in the API package (https://pkg.go.dev/google.golang.org/api/container/v1#GPUSharingConfig)",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxSharedClientsPerGpu",
      "The maximum number of containers that can share a GPU.",
      [],
      true,
      false,
    ),
  ];
}
