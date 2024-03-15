export interface ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling {
  // The maximum number of nodes in the node pool. Must be >= minNodeCount, and must be > 0.
  MaxNodeCount?: number;

  // The minimum number of nodes in the node pool. Must be >= 0 and <= maxNodeCount.
  MinNodeCount?: number;
}
