import { getClusterNodePoolNetworkConfig } from "./getClusterNodePoolNetworkConfig";
import { getClusterNodePoolNodeConfig } from "./getClusterNodePoolNodeConfig";
import { getClusterNodePoolAutoscaling } from "./getClusterNodePoolAutoscaling";
import { getClusterNodePoolPlacementPolicy } from "./getClusterNodePoolPlacementPolicy";
import { getClusterNodePoolQueuedProvisioning } from "./getClusterNodePoolQueuedProvisioning";
import { getClusterNodePoolUpgradeSetting } from "./getClusterNodePoolUpgradeSetting";
import { getClusterNodePoolManagement } from "./getClusterNodePoolManagement";

export interface getClusterNodePool {
  // Creates a unique name for the node pool beginning with the specified prefix. Conflicts with name.
  NamePrefix?: string;

  // The list of zones in which the node pool's nodes should be located. Nodes must be in the region of their regional cluster or in the same region as their cluster's zone for zonal clusters. If unspecified, the cluster-level node_locations will be used.
  NodeLocations?: Array<string>;

  // Specifies the node placement policy
  PlacementPolicies?: Array<getClusterNodePoolPlacementPolicy>;

  // Specifies the configuration of queued provisioning
  QueuedProvisionings?: Array<getClusterNodePoolQueuedProvisioning>;

  // The resource URLs of the managed instance groups associated with this node pool.
  InstanceGroupUrls?: Array<string>;

  // The name of the cluster.
  Name?: string;

  // Specify node upgrade settings to change how many nodes GKE attempts to upgrade at once. The number of nodes upgraded simultaneously is the sum of max_surge and max_unavailable. The maximum number of nodes upgraded simultaneously is limited to 20.
  UpgradeSettings?: Array<getClusterNodePoolUpgradeSetting>;

  //
  Version?: string;

  // Node management configuration, wherein auto-repair and auto-upgrade is configured.
  Managements?: Array<getClusterNodePoolManagement>;

  // The maximum number of pods per node in this node pool. Note that this does not work on node pools which are "route-based" - that is, node pools belonging to clusters that do not have IP Aliasing enabled.
  MaxPodsPerNode?: number;

  // List of instance group URLs which have been assigned to this node pool.
  ManagedInstanceGroupUrls?: Array<string>;

  // Networking configuration for this NodePool. If specified, it overrides the cluster-level defaults.
  NetworkConfigs?: Array<getClusterNodePoolNetworkConfig>;

  // The configuration of the nodepool
  NodeConfigs?: Array<getClusterNodePoolNodeConfig>;

  // The number of nodes per instance group. This field can be used to update the number of nodes per instance group but should not be used alongside autoscaling.
  NodeCount?: number;

  // Configuration required by cluster autoscaler to adjust the size of the node pool to the current cluster usage.
  Autoscalings?: Array<getClusterNodePoolAutoscaling>;

  // The initial number of nodes for the pool. In regional or multi-zonal clusters, this is the number of nodes per zone. Changing this will force recreation of the resource.
  InitialNodeCount?: number;
}
