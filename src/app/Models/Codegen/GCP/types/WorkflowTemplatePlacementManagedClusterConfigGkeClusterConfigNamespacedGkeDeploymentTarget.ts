export interface WorkflowTemplatePlacementManagedClusterConfigGkeClusterConfigNamespacedGkeDeploymentTarget {
  // The target GKE cluster to deploy to. Format: 'projects/{project}/locations/{location}/clusters/{cluster_id}'
  TargetGkeCluster?: string;

  // A namespace within the GKE cluster to deploy into.
  ClusterNamespace?: string;
}
