export interface getClusterWorkloadAltsConfig {
  // Whether the alts handshaker should be enabled or not for direct-path. Requires Workload Identity (workloadPool must be non-empty).
  EnableAlts?: boolean;
}
