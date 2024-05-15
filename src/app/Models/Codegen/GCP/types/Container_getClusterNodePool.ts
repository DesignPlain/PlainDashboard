import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_getClusterNodePoolQueuedProvisioning,
  Container_getClusterNodePoolQueuedProvisioning_GetTypes,
} from "./Container_getClusterNodePoolQueuedProvisioning";
import {
  Container_getClusterNodePoolManagement,
  Container_getClusterNodePoolManagement_GetTypes,
} from "./Container_getClusterNodePoolManagement";
import {
  Container_getClusterNodePoolNetworkConfig,
  Container_getClusterNodePoolNetworkConfig_GetTypes,
} from "./Container_getClusterNodePoolNetworkConfig";
import {
  Container_getClusterNodePoolNodeConfig,
  Container_getClusterNodePoolNodeConfig_GetTypes,
} from "./Container_getClusterNodePoolNodeConfig";
import {
  Container_getClusterNodePoolAutoscaling,
  Container_getClusterNodePoolAutoscaling_GetTypes,
} from "./Container_getClusterNodePoolAutoscaling";
import {
  Container_getClusterNodePoolUpgradeSetting,
  Container_getClusterNodePoolUpgradeSetting_GetTypes,
} from "./Container_getClusterNodePoolUpgradeSetting";
import {
  Container_getClusterNodePoolPlacementPolicy,
  Container_getClusterNodePoolPlacementPolicy_GetTypes,
} from "./Container_getClusterNodePoolPlacementPolicy";

export interface Container_getClusterNodePool {
  // Specifies the node placement policy
  PlacementPolicies?: Array<Container_getClusterNodePoolPlacementPolicy>;

  // Specifies the configuration of queued provisioning
  QueuedProvisionings?: Array<Container_getClusterNodePoolQueuedProvisioning>;

  //
  Version?: string;

  // The initial number of nodes for the pool. In regional or multi-zonal clusters, this is the number of nodes per zone. Changing this will force recreation of the resource.
  InitialNodeCount?: number;

  // Node management configuration, wherein auto-repair and auto-upgrade is configured.
  Managements?: Array<Container_getClusterNodePoolManagement>;

  // Networking configuration for this NodePool. If specified, it overrides the cluster-level defaults.
  NetworkConfigs?: Array<Container_getClusterNodePoolNetworkConfig>;

  // The list of zones in which the node pool's nodes should be located. Nodes must be in the region of their regional cluster or in the same region as their cluster's zone for zonal clusters. If unspecified, the cluster-level node_locations will be used.
  NodeLocations?: Array<string>;

  // The maximum number of pods per node in this node pool. Note that this does not work on node pools which are "route-based" - that is, node pools belonging to clusters that do not have IP Aliasing enabled.
  MaxPodsPerNode?: number;

  // The name of the cluster.
  Name?: string;

  // Creates a unique name for the node pool beginning with the specified prefix. Conflicts with name.
  NamePrefix?: string;

  // The configuration of the nodepool
  NodeConfigs?: Array<Container_getClusterNodePoolNodeConfig>;

  // The resource URLs of the managed instance groups associated with this node pool.
  InstanceGroupUrls?: Array<string>;

  // List of instance group URLs which have been assigned to this node pool.
  ManagedInstanceGroupUrls?: Array<string>;

  // Configuration required by cluster autoscaler to adjust the size of the node pool to the current cluster usage.
  Autoscalings?: Array<Container_getClusterNodePoolAutoscaling>;

  // The number of nodes per instance group. This field can be used to update the number of nodes per instance group but should not be used alongside autoscaling.
  NodeCount?: number;

  // Specify node upgrade settings to change how many nodes GKE attempts to upgrade at once. The number of nodes upgraded simultaneously is the sum of max_surge and max_unavailable. The maximum number of nodes upgraded simultaneously is limited to 20.
  UpgradeSettings?: Array<Container_getClusterNodePoolUpgradeSetting>;
}

export function Container_getClusterNodePool_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "NodeConfigs",
      "The configuration of the nodepool",
      Container_getClusterNodePoolNodeConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ManagedInstanceGroupUrls",
      "List of instance group URLs which have been assigned to this node pool.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "NodeLocations",
      "The list of zones in which the node pool's nodes should be located. Nodes must be in the region of their regional cluster or in the same region as their cluster's zone for zonal clusters. If unspecified, the cluster-level node_locations will be used.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of the cluster.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "NamePrefix",
      "Creates a unique name for the node pool beginning with the specified prefix. Conflicts with name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "Version", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "InstanceGroupUrls",
      "The resource URLs of the managed instance groups associated with this node pool.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Autoscalings",
      "Configuration required by cluster autoscaler to adjust the size of the node pool to the current cluster usage.",
      Container_getClusterNodePoolAutoscaling_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "NodeCount",
      "The number of nodes per instance group. This field can be used to update the number of nodes per instance group but should not be used alongside autoscaling.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "UpgradeSettings",
      "Specify node upgrade settings to change how many nodes GKE attempts to upgrade at once. The number of nodes upgraded simultaneously is the sum of max_surge and max_unavailable. The maximum number of nodes upgraded simultaneously is limited to 20.",
      Container_getClusterNodePoolUpgradeSetting_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "QueuedProvisionings",
      "Specifies the configuration of queued provisioning",
      Container_getClusterNodePoolQueuedProvisioning_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "NetworkConfigs",
      "Networking configuration for this NodePool. If specified, it overrides the cluster-level defaults.",
      Container_getClusterNodePoolNetworkConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxPodsPerNode",
      'The maximum number of pods per node in this node pool. Note that this does not work on node pools which are "route-based" - that is, node pools belonging to clusters that do not have IP Aliasing enabled.',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "PlacementPolicies",
      "Specifies the node placement policy",
      Container_getClusterNodePoolPlacementPolicy_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "InitialNodeCount",
      "The initial number of nodes for the pool. In regional or multi-zonal clusters, this is the number of nodes per zone. Changing this will force recreation of the resource.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Managements",
      "Node management configuration, wherein auto-repair and auto-upgrade is configured.",
      Container_getClusterNodePoolManagement_GetTypes(),
      true,
      false,
    ),
  ];
}
