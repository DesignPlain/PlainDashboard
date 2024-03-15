export interface getClusterCostManagementConfig {
  // Whether to enable GKE cost allocation. When you enable GKE cost allocation, the cluster name and namespace of your GKE workloads appear in the labels field of the billing export to BigQuery. Defaults to false.
  Enabled?: boolean;
}
