export interface AzureNodePoolAutoscaling {
  // Maximum number of nodes in the node pool. Must be >= min_node_count.
  MaxNodeCount?: number;

  // Minimum number of nodes in the node pool. Must be >= 1 and <= max_node_count.
  MinNodeCount?: number;
}
