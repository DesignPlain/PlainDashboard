import { ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling } from "./ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling";
import { ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig } from "./ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig";

export interface ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig {
  // The node pool configuration.
  Config?: ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig;

  /*
The list of Compute Engine zones where node pool nodes associated 
with a Dataproc on GKE virtual cluster will be located.
- - -
*/
  Locations?: Array<string>;

  /*
The autoscaler configuration for this node pool. 
The autoscaler is enabled only when a valid configuration is present.
*/
  Autoscaling?: ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling;
}
