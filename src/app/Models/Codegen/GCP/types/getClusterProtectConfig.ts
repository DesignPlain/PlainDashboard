import { getClusterProtectConfigWorkloadConfig } from "./getClusterProtectConfigWorkloadConfig";

export interface getClusterProtectConfig {
  // WorkloadConfig defines which actions are enabled for a cluster's workload configurations.
  WorkloadConfigs?: Array<getClusterProtectConfigWorkloadConfig>;

  // Sets which mode to use for Protect workload vulnerability scanning feature. Accepted values are DISABLED, BASIC.
  WorkloadVulnerabilityMode?: string;
}
