export interface ClusterNodePoolPlacementPolicy {
  // TPU placement topology for pod slice node pool. https://cloud.google.com/tpu/docs/types-topologies#tpu_topologies
  TpuTopology?: string;

  /*
Telemetry integration for the cluster. Supported values (`ENABLED, DISABLED, SYSTEM_ONLY`);
`SYSTEM_ONLY` (Only system components are monitored and logged) is only available in GKE versions 1.15 and later.
*/
  Type?: string;

  // If set, refers to the name of a custom resource policy supplied by the user. The resource policy must be in the same project and region as the node pool. If not found, InvalidArgument error is returned.
  PolicyName?: string;
}
