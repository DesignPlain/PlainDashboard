import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_NodePoolNodeConfigGuestAcceleratorGpuSharingConfig {
  // The type of GPU sharing strategy to enable on the GPU node. Possible values are described in the API package (https://pkg.go.dev/google.golang.org/api/container/v1#GPUSharingConfig)
  GpuSharingStrategy?: string;

  // The maximum number of containers that can share a GPU.
  MaxSharedClientsPerGpu?: number;
}

export function Container_NodePoolNodeConfigGuestAcceleratorGpuSharingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "MaxSharedClientsPerGpu",
      "The maximum number of containers that can share a GPU.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "GpuSharingStrategy",
      "The type of GPU sharing strategy to enable on the GPU node. Possible values are described in the API package (https://pkg.go.dev/google.golang.org/api/container/v1#GPUSharingConfig)",
      [],
      true,
      true,
    ),
  ];
}
