import { ClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig } from "./ClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig";
import { ClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig } from "./ClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig";

export interface ClusterVirtualClusterConfigAuxiliaryServicesConfig {
  // The Hive Metastore configuration for this workload.
  MetastoreConfig?: ClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig;

  // The Spark History Server configuration for the workload.
  SparkHistoryServerConfig?: ClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig;
}
