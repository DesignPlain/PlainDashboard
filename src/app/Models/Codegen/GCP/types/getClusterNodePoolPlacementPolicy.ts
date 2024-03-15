export interface getClusterNodePoolPlacementPolicy {
  // If set, refers to the name of a custom resource policy supplied by the user. The resource policy must be in the same project and region as the node pool. If not found, InvalidArgument error is returned.
  PolicyName?: string;

  // TPU placement topology for pod slice node pool. https://cloud.google.com/tpu/docs/types-topologies#tpu_topologies
  TpuTopology?: string;

  // Type defines the type of placement policy
  Type?: string;
}
