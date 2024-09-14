import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  container_ClusterNodePoolNodeConfig,
  container_ClusterNodePoolNodeConfig_GetTypes,
} from "./container_ClusterNodePoolNodeConfig";
import {
  container_ClusterNodePoolUpgradeSettings,
  container_ClusterNodePoolUpgradeSettings_GetTypes,
} from "./container_ClusterNodePoolUpgradeSettings";
import {
  container_ClusterNodePoolManagement,
  container_ClusterNodePoolManagement_GetTypes,
} from "./container_ClusterNodePoolManagement";
import {
  container_ClusterNodePoolPlacementPolicy,
  container_ClusterNodePoolPlacementPolicy_GetTypes,
} from "./container_ClusterNodePoolPlacementPolicy";
import {
  container_ClusterNodePoolQueuedProvisioning,
  container_ClusterNodePoolQueuedProvisioning_GetTypes,
} from "./container_ClusterNodePoolQueuedProvisioning";
import {
  container_ClusterNodePoolAutoscaling,
  container_ClusterNodePoolAutoscaling_GetTypes,
} from "./container_ClusterNodePoolAutoscaling";
import {
  container_ClusterNodePoolNetworkConfig,
  container_ClusterNodePoolNetworkConfig_GetTypes,
} from "./container_ClusterNodePoolNetworkConfig";

export interface container_ClusterNodePool {
  /*
Parameters used in creating the default node pool.
Generally, this field should not be used at the same time as a
`gcp.container.NodePool` or a `node_pool` block; this configuration
manages the default node pool, which isn't recommended to be used.
Structure is documented below.
*/
  nodeConfig?: container_ClusterNodePoolNodeConfig;

  // The number of nodes per instance group. This field can be used to update the number of nodes per instance group but should not be used alongside autoscaling.
  nodeCount?: number;

  // Specifies the upgrade settings for NAP created node pools. Structure is documented below.
  upgradeSettings?: container_ClusterNodePoolUpgradeSettings;

  // List of instance group URLs which have been assigned to this node pool.
  managedInstanceGroupUrls?: Array<string>;

  // Creates a unique name for the node pool beginning with the specified prefix. Conflicts with name.
  namePrefix?: string;

  // NodeManagement configuration for this NodePool. Structure is documented below.
  management?: container_ClusterNodePoolManagement;

  // The maximum number of pods per node in this node pool. Note that this does not work on node pools which are "route-based" - that is, node pools belonging to clusters that do not have IP Aliasing enabled.
  maxPodsPerNode?: number;

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
  nodeLocations?: Array<string>;

  // Specifies the node placement policy
  placementPolicy?: container_ClusterNodePoolPlacementPolicy;

  // Specifies the configuration of queued provisioning
  queuedProvisioning?: container_ClusterNodePoolQueuedProvisioning;

  // Configuration required by cluster autoscaler to adjust the size of the node pool to the current cluster usage.
  autoscaling?: container_ClusterNodePoolAutoscaling;

  /*
The name of the cluster, unique within the project and
location.

- - -
*/
  name?: string;

  /*
Configuration for
[Adding Pod IP address ranges](https://cloud.google.com/kubernetes-engine/docs/how-to/multi-pod-cidr)) to the node pool. Structure is documented below
*/
  networkConfig?: container_ClusterNodePoolNetworkConfig;

  //
  version?: string;

  /*
The number of nodes to create in this
cluster's default node pool. In regional or multi-zonal clusters, this is the
number of nodes per zone. Must be set if `node_pool` is not set. If you're using
`gcp.container.NodePool` objects with no default node pool, you'll need to
set this to a value of at least `1`, alongside setting
`remove_default_node_pool` to `true`.
*/
  initialNodeCount?: number;

  // The resource URLs of the managed instance groups associated with this node pool.
  instanceGroupUrls?: Array<string>;
}

export function container_ClusterNodePool_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "managedInstanceGroupUrls",
      "List of instance group URLs which have been assigned to this node pool.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "namePrefix",
      "Creates a unique name for the node pool beginning with the specified prefix. Conflicts with name.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "autoscaling",
      "Configuration required by cluster autoscaler to adjust the size of the node pool to the current cluster usage.",
      () => container_ClusterNodePoolAutoscaling_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxPodsPerNode",
      'The maximum number of pods per node in this node pool. Note that this does not work on node pools which are "route-based" - that is, node pools belonging to clusters that do not have IP Aliasing enabled.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "nodeLocations",
      "The list of zones in which the cluster's nodes\nare located. Nodes must be in the region of their regional cluster or in the\nsame region as their cluster's zone for zonal clusters. If this is specified for\na zonal cluster, omit the cluster's zone.\n\n> A \"multi-zonal\" cluster is a zonal cluster with at least one additional zone\ndefined; in a multi-zonal cluster, the cluster master is only present in a\nsingle zone while nodes are present in each of the primary zone and the node\nlocations. In contrast, in a regional cluster, cluster master nodes are present\nin multiple zones in the region. For that reason, regional clusters should be\npreferred.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "placementPolicy",
      "Specifies the node placement policy",
      () => container_ClusterNodePoolPlacementPolicy_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the cluster, unique within the project and\nlocation.\n\n- - -",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(InputType.String, "version", "", () => [], false, false),
    new DynamicUIProps(
      InputType.Object,
      "nodeConfig",
      "Parameters used in creating the default node pool.\nGenerally, this field should not be used at the same time as a\n`gcp.container.NodePool` or a `node_pool` block; this configuration\nmanages the default node pool, which isn't recommended to be used.\nStructure is documented below.",
      () => container_ClusterNodePoolNodeConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "nodeCount",
      "The number of nodes per instance group. This field can be used to update the number of nodes per instance group but should not be used alongside autoscaling.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "upgradeSettings",
      "Specifies the upgrade settings for NAP created node pools. Structure is documented below.",
      () => container_ClusterNodePoolUpgradeSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "networkConfig",
      "Configuration for\n[Adding Pod IP address ranges](https://cloud.google.com/kubernetes-engine/docs/how-to/multi-pod-cidr)) to the node pool. Structure is documented below",
      () => container_ClusterNodePoolNetworkConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "management",
      "NodeManagement configuration for this NodePool. Structure is documented below.",
      () => container_ClusterNodePoolManagement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "queuedProvisioning",
      "Specifies the configuration of queued provisioning",
      () => container_ClusterNodePoolQueuedProvisioning_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "initialNodeCount",
      "The number of nodes to create in this\ncluster's default node pool. In regional or multi-zonal clusters, this is the\nnumber of nodes per zone. Must be set if `node_pool` is not set. If you're using\n`gcp.container.NodePool` objects with no default node pool, you'll need to\nset this to a value of at least `1`, alongside setting\n`remove_default_node_pool` to `true`.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "instanceGroupUrls",
      "The resource URLs of the managed instance groups associated with this node pool.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
