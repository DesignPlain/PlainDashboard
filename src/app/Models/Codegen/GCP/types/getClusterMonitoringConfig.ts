import { getClusterMonitoringConfigManagedPrometheus } from "./getClusterMonitoringConfigManagedPrometheus";
import { getClusterMonitoringConfigAdvancedDatapathObservabilityConfig } from "./getClusterMonitoringConfigAdvancedDatapathObservabilityConfig";

export interface getClusterMonitoringConfig {
  // Configuration of Advanced Datapath Observability features.
  AdvancedDatapathObservabilityConfigs?: Array<getClusterMonitoringConfigAdvancedDatapathObservabilityConfig>;

  // GKE components exposing metrics. Valid values include SYSTEM_COMPONENTS, APISERVER, SCHEDULER, CONTROLLER_MANAGER, STORAGE, HPA, POD, DAEMONSET, DEPLOYMENT, STATEFULSET and WORKLOADS.
  EnableComponents?: Array<string>;

  // Configuration for Google Cloud Managed Services for Prometheus.
  ManagedPrometheuses?: Array<getClusterMonitoringConfigManagedPrometheus>;
}
