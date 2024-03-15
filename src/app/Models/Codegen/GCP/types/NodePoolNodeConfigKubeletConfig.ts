export interface NodePoolNodeConfigKubeletConfig {
  // Enable CPU CFS quota enforcement for containers that specify CPU limits.
  CpuCfsQuota?: boolean;

  // Set the CPU CFS quota period value 'cpu.cfs_period_us'.
  CpuCfsQuotaPeriod?: string;

  // Control the CPU management policy on the node.
  CpuManagerPolicy?: string;

  // Controls the maximum number of processes allowed to run in a pod.
  PodPidsLimit?: number;
}
