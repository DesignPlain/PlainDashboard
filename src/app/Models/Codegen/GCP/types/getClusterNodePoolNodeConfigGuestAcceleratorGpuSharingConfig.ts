export interface getClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig {
  // The maximum number of containers that can share a GPU.
  MaxSharedClientsPerGpu?: number;

  // The type of GPU sharing strategy to enable on the GPU node. Possible values are described in the API package (https://pkg.go.dev/google.golang.org/api/container/v1#GPUSharingConfig)
  GpuSharingStrategy?: string;
}
