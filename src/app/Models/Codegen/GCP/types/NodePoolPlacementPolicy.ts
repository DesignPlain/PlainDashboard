export interface NodePoolPlacementPolicy {
  /*
The type of the policy. Supports a single value: COMPACT.
Specifying COMPACT placement policy type places node pool's nodes in a closer
physical proximity in order to reduce network latency between nodes.
*/
  Type?: string;

  /*
If set, refers to the name of a custom resource policy supplied by the user.
The resource policy must be in the same project and region as the node pool.
If not found, InvalidArgument error is returned.
*/
  PolicyName?: string;

  // The [TPU placement topology](https://cloud.google.com/tpu/docs/types-topologies#tpu_topologies) for pod slice node pool.
  TpuTopology?: string;
}
