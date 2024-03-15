import { ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfig } from "./ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfig";

export interface ClusterClusterConfigAuxiliaryNodeGroupNodeGroup {
  // The node group instance group configuration.
  NodeGroupConfig?: ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfig;

  /*
Node group roles. 
One of `"DRIVER"`.
*/
  Roles?: Array<string>;

  /*
The name of the cluster, unique within the project and
zone.

- - -
*/
  Name?: string;
}
