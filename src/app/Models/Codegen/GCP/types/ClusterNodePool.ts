import { ClusterNodePoolPlacementPolicy } from "./ClusterNodePoolPlacementPolicy";
import { ClusterNodePoolQueuedProvisioning } from "./ClusterNodePoolQueuedProvisioning";
import { ClusterNodePoolUpgradeSettings } from "./ClusterNodePoolUpgradeSettings";
import { ClusterNodePoolNetworkConfig } from "./ClusterNodePoolNetworkConfig";
import { ClusterNodePoolAutoscaling } from "./ClusterNodePoolAutoscaling";
import { ClusterNodePoolManagement } from "./ClusterNodePoolManagement";
import { ClusterNodePoolNodeConfig } from "./ClusterNodePoolNodeConfig";

export interface ClusterNodePool {
  /*
The number of nodes to create in this
cluster's default node pool. In regional or multi-zonal clusters, this is the
number of nodes per zone. Must be set if `node_pool` is not set. If you're using
`gcp.container.NodePool` objects with no default node pool, you'll need to
set this to a value of at least `1`, alongside setting
`remove_default_node_pool` to `true`.
*/
  InitialNodeCount?: number;

  // The resource URLs of the managed instance groups associated with this node pool.
  InstanceGroupUrls?: Array<string>;

  /*
The list of zones in which the cluster's nodes
are located. Nodes must be in the region of their regional cluster or in the
same region as their cluster's zone for zonal clusters. If this is specified for
a zonal cluster, omit the cluster's zone.

> A "multi-zonal" cluster is a zonal cluster with at least one additional zone
defined; in a multi-zonal cluster, the cluster master is only present in a
single zone while nodes are present in each of the primary zone and the node
locations. In contrast, in a regional cluster, cluster master nodes are present
in multiple zones in the region. For that reason, regional clusters should be
preferred.
*/
  NodeLocations?: Array<string>;

  /*
Configuration for
[Adding Pod IP address ranges](https://cloud.google.com/kubernetes-engine/docs/how-to/multi-pod-cidr)) to the node pool. Structure is documented below
*/
  NetworkConfig?: ClusterNodePoolNetworkConfig;

  // The number of nodes per instance group. This field can be used to update the number of nodes per instance group but should not be used alongside autoscaling.
  NodeCount?: number;

  //
  Version?: string;

  // Configuration required by cluster autoscaler to adjust the size of the node pool to the current cluster usage.
  Autoscaling?: ClusterNodePoolAutoscaling;

  // NodeManagement configuration for this NodePool. Structure is documented below.
  Management?: ClusterNodePoolManagement;

  /*
The name of the cluster, unique within the project and
location.

- - -
*/
  Name?: string;

  // Creates a unique name for the node pool beginning with the specified prefix. Conflicts with name.
  NamePrefix?: string;

  /*
Parameters used in creating the default node pool.
Generally, this field should not be used at the same time as a
`gcp.container.NodePool` or a `node_pool` block; this configuration
manages the default node pool, which isn't recommended to be used.
Structure is documented below.
*/
  NodeConfig?: ClusterNodePoolNodeConfig;

  // Specifies the node placement policy
  PlacementPolicy?: ClusterNodePoolPlacementPolicy;

  // List of instance group URLs which have been assigned to this node pool.
  ManagedInstanceGroupUrls?: Array<string>;

  // The maximum number of pods per node in this node pool. Note that this does not work on node pools which are "route-based" - that is, node pools belonging to clusters that do not have IP Aliasing enabled.
  MaxPodsPerNode?: number;

  // Specifies the configuration of queued provisioning
  QueuedProvisioning?: ClusterNodePoolQueuedProvisioning;

  // Specifies the upgrade settings for NAP created node pools. Structure is documented below.
  UpgradeSettings?: ClusterNodePoolUpgradeSettings;
}
