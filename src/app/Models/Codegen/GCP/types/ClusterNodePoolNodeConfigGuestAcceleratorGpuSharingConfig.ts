export interface ClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig {
  /*
The type of GPU sharing strategy to enable on the GPU node.
Accepted values are:
- `"TIME_SHARING"`: Allow multiple containers to have [time-shared](https://cloud.google.com/kubernetes-engine/docs/concepts/timesharing-gpus) access to a single GPU device.
*/
  GpuSharingStrategy?: string;

  // The maximum number of containers that can share a GPU.
  MaxSharedClientsPerGpu?: number;
}
