import { ClusterProtectConfigWorkloadConfig } from "./ClusterProtectConfigWorkloadConfig";

export interface ClusterProtectConfig {
  // WorkloadConfig defines which actions are enabled for a cluster's workload configurations. Structure is documented below
  WorkloadConfig?: ClusterProtectConfigWorkloadConfig;

  // Sets which mode to use for Protect workload vulnerability scanning feature. Accepted values are DISABLED, BASIC.
  WorkloadVulnerabilityMode?: string;
}
