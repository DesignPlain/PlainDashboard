import { AttachedClusterMonitoringConfigManagedPrometheusConfig } from "./AttachedClusterMonitoringConfigManagedPrometheusConfig";

export interface AttachedClusterMonitoringConfig {
  /*
Enable Google Cloud Managed Service for Prometheus in the cluster.
Structure is documented below.
*/
  ManagedPrometheusConfig?: AttachedClusterMonitoringConfigManagedPrometheusConfig;
}
