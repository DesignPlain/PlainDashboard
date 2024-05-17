import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_ClusterNodePoolNodeConfig,
  Container_ClusterNodePoolNodeConfig_GetTypes,
} from "./Container_ClusterNodePoolNodeConfig";
import {
  Container_ClusterNodePoolQueuedProvisioning,
  Container_ClusterNodePoolQueuedProvisioning_GetTypes,
} from "./Container_ClusterNodePoolQueuedProvisioning";
import {
  Container_ClusterNodePoolNetworkConfig,
  Container_ClusterNodePoolNetworkConfig_GetTypes,
} from "./Container_ClusterNodePoolNetworkConfig";
import {
  Container_ClusterNodePoolPlacementPolicy,
  Container_ClusterNodePoolPlacementPolicy_GetTypes,
} from "./Container_ClusterNodePoolPlacementPolicy";
import {
  Container_ClusterNodePoolUpgradeSettings,
  Container_ClusterNodePoolUpgradeSettings_GetTypes,
} from "./Container_ClusterNodePoolUpgradeSettings";
import {
  Container_ClusterNodePoolManagement,
  Container_ClusterNodePoolManagement_GetTypes,
} from "./Container_ClusterNodePoolManagement";
import {
  Container_ClusterNodePoolAutoscaling,
  Container_ClusterNodePoolAutoscaling_GetTypes,
} from "./Container_ClusterNodePoolAutoscaling";

export interface Container_ClusterNodePool {
  /*
Parameters used in creating the default node pool.
Generally, this field should not be used at the same time as a
`gcp.container.NodePool` or a `node_pool` block; this configuration
manages the default node pool, which isn't recommended to be used.
Structure is documented below.
*/
  NodeConfig?: Container_ClusterNodePoolNodeConfig;

  // Specifies the configuration of queued provisioning
  QueuedProvisioning?: Container_ClusterNodePoolQueuedProvisioning;

  // The resource URLs of the managed instance groups associated with this node pool.
  InstanceGroupUrls?: Array<string>;

  /*
Configuration for
[Adding Pod IP address ranges](https://cloud.google.com/kubernetes-engine/docs/how-to/multi-pod-cidr)) to the node pool. Structure is documented below
*/
  NetworkConfig?: Container_ClusterNodePoolNetworkConfig;

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

  // Specifies the node placement policy
  PlacementPolicy?: Container_ClusterNodePoolPlacementPolicy;

  // Specifies the upgrade settings for NAP created node pools. Structure is documented below.
  UpgradeSettings?: Container_ClusterNodePoolUpgradeSettings;

  //
  Version?: string;

  // List of instance group URLs which have been assigned to this node pool.
  ManagedInstanceGroupUrls?: Array<string>;

  // NodeManagement configuration for this NodePool. Structure is documented below.
  Management?: Container_ClusterNodePoolManagement;

  // The number of nodes per instance group. This field can be used to update the number of nodes per instance group but should not be used alongside autoscaling.
  NodeCount?: number;

  // Configuration required by cluster autoscaler to adjust the size of the node pool to the current cluster usage.
  Autoscaling?: Container_ClusterNodePoolAutoscaling;

  /*
The number of nodes to create in this
cluster's default node pool. In regional or multi-zonal clusters, this is the
number of nodes per zone. Must be set if `node_pool` is not set. If you're using
`gcp.container.NodePool` objects with no default node pool, you'll need to
set this to a value of at least `1`, alongside setting
`remove_default_node_pool` to `true`.
*/
  InitialNodeCount?: number;

  // The maximum number of pods per node in this node pool. Note that this does not work on node pools which are "route-based" - that is, node pools belonging to clusters that do not have IP Aliasing enabled.
  MaxPodsPerNode?: number;

  /*
The name of the cluster, unique within the project and
location.

- - -
*/
  Name?: string;

  // Creates a unique name for the node pool beginning with the specified prefix. Conflicts with name.
  NamePrefix?: string;
}

export function Container_ClusterNodePool_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "InstanceGroupUrls",
      "The resource URLs of the managed instance groups associated with this node pool.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "PlacementPolicy",
      "Specifies the node placement policy",
      Container_ClusterNodePoolPlacementPolicy_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "UpgradeSettings",
      "Specifies the upgrade settings for NAP created node pools. Structure is documented below.",
      Container_ClusterNodePoolUpgradeSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "InitialNodeCount",
      "The number of nodes to create in this\ncluster's default node pool. In regional or multi-zonal clusters, this is the\nnumber of nodes per zone. Must be set if `node_pool` is not set. If you're using\n`gcp.container.NodePool` objects with no default node pool, you'll need to\nset this to a value of at least `1`, alongside setting\n`remove_default_node_pool` to `true`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "NamePrefix",
      "Creates a unique name for the node pool beginning with the specified prefix. Conflicts with name.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "NodeLocations",
      "The list of zones in which the cluster's nodes\nare located. Nodes must be in the region of their regional cluster or in the\nsame region as their cluster's zone for zonal clusters. If this is specified for\na zonal cluster, omit the cluster's zone.\n\n> A \"multi-zonal\" cluster is a zonal cluster with at least one additional zone\ndefined; in a multi-zonal cluster, the cluster master is only present in a\nsingle zone while nodes are present in each of the primary zone and the node\nlocations. In contrast, in a regional cluster, cluster master nodes are present\nin multiple zones in the region. For that reason, regional clusters should be\npreferred.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "NodeCount",
      "The number of nodes per instance group. This field can be used to update the number of nodes per instance group but should not be used alongside autoscaling.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Autoscaling",
      "Configuration required by cluster autoscaler to adjust the size of the node pool to the current cluster usage.",
      Container_ClusterNodePoolAutoscaling_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of the cluster, unique within the project and\nlocation.\n\n- - -",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "NodeConfig",
      "Parameters used in creating the default node pool.\nGenerally, this field should not be used at the same time as a\n`gcp.container.NodePool` or a `node_pool` block; this configuration\nmanages the default node pool, which isn't recommended to be used.\nStructure is documented below.",
      Container_ClusterNodePoolNodeConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "NetworkConfig",
      "Configuration for\n[Adding Pod IP address ranges](https://cloud.google.com/kubernetes-engine/docs/how-to/multi-pod-cidr)) to the node pool. Structure is documented below",
      Container_ClusterNodePoolNetworkConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Management",
      "NodeManagement configuration for this NodePool. Structure is documented below.",
      Container_ClusterNodePoolManagement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxPodsPerNode",
      'The maximum number of pods per node in this node pool. Note that this does not work on node pools which are "route-based" - that is, node pools belonging to clusters that do not have IP Aliasing enabled.',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "QueuedProvisioning",
      "Specifies the configuration of queued provisioning",
      Container_ClusterNodePoolQueuedProvisioning_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(InputType.String, "Version", "", [], false, false),
    new DynamicUIProps(
      InputType.Array,
      "ManagedInstanceGroupUrls",
      "List of instance group URLs which have been assigned to this node pool.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
