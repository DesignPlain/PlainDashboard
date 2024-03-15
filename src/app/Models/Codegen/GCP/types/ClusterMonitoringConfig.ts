import { ClusterMonitoringConfigAdvancedDatapathObservabilityConfig } from "./ClusterMonitoringConfigAdvancedDatapathObservabilityConfig";
import { ClusterMonitoringConfigManagedPrometheus } from "./ClusterMonitoringConfigManagedPrometheus";

export interface ClusterMonitoringConfig {
  // Configuration for Advanced Datapath Monitoring. Structure is documented below.
  AdvancedDatapathObservabilityConfigs?: Array<ClusterMonitoringConfigAdvancedDatapathObservabilityConfig>;

  // The GKE components exposing metrics. Supported values include: `SYSTEM_COMPONENTS`, `APISERVER`, `SCHEDULER`, `CONTROLLER_MANAGER`, `STORAGE`, `HPA`, `POD`, `DAEMONSET`, `DEPLOYMENT` and `STATEFULSET`. In beta provider, `WORKLOADS` is supported on top of those 10 values. (`WORKLOADS` is deprecated and removed in GKE 1.24.)
  EnableComponents?: Array<string>;

  // Configuration for Managed Service for Prometheus. Structure is documented below.
  ManagedPrometheus?: ClusterMonitoringConfigManagedPrometheus;
}
