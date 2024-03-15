export interface AwsNodePoolAutoscaling {
  // Maximum number of nodes in the NodePool. Must be >= min_node_count.
  MaxNodeCount?: number;

  // Minimum number of nodes in the NodePool. Must be >= 1 and <= max_node_count.
  MinNodeCount?: number;
}
