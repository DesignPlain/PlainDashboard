import { ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig } from "./ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig";

export interface ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget {
  // The target GKE node pool.
  NodePool?: string;

  /*
The configuration for the GKE node pool. 
If specified, Dataproc attempts to create a node pool with the specified shape.
If one with the same name already exists, it is verified against all specified fields.
If a field differs, the virtual cluster creation will fail.
*/
  NodePoolConfig?: ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig;

  /*
Node group roles. 
One of `"DRIVER"`.
*/
  Roles?: Array<string>;
}
