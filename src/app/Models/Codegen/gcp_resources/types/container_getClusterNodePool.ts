import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  container_getClusterNodePoolUpgradeSetting,
  container_getClusterNodePoolUpgradeSetting_GetTypes,
} from "./container_getClusterNodePoolUpgradeSetting";
import {
  container_getClusterNodePoolAutoscaling,
  container_getClusterNodePoolAutoscaling_GetTypes,
} from "./container_getClusterNodePoolAutoscaling";
import {
  container_getClusterNodePoolPlacementPolicy,
  container_getClusterNodePoolPlacementPolicy_GetTypes,
} from "./container_getClusterNodePoolPlacementPolicy";
import {
  container_getClusterNodePoolNetworkConfig,
  container_getClusterNodePoolNetworkConfig_GetTypes,
} from "./container_getClusterNodePoolNetworkConfig";
import {
  container_getClusterNodePoolNodeConfig,
  container_getClusterNodePoolNodeConfig_GetTypes,
} from "./container_getClusterNodePoolNodeConfig";
import {
  container_getClusterNodePoolQueuedProvisioning,
  container_getClusterNodePoolQueuedProvisioning_GetTypes,
} from "./container_getClusterNodePoolQueuedProvisioning";
import {
  container_getClusterNodePoolManagement,
  container_getClusterNodePoolManagement_GetTypes,
} from "./container_getClusterNodePoolManagement";

export interface container_getClusterNodePool {
  // Specify node upgrade settings to change how many nodes GKE attempts to upgrade at once. The number of nodes upgraded simultaneously is the sum of max_surge and max_unavailable. The maximum number of nodes upgraded simultaneously is limited to 20.
  upgradeSettings?: Array<container_getClusterNodePoolUpgradeSetting>;

  // The name of the cluster.
  name?: string;

  // The number of nodes per instance group. This field can be used to update the number of nodes per instance group but should not be used alongside autoscaling.
  nodeCount?: number;

  // The maximum number of pods per node in this node pool. Note that this does not work on node pools which are "route-based" - that is, node pools belonging to clusters that do not have IP Aliasing enabled.
  maxPodsPerNode?: number;

  //
  version?: string;

  // Configuration required by cluster autoscaler to adjust the size of the node pool to the current cluster usage.
  autoscalings?: Array<container_getClusterNodePoolAutoscaling>;

  // The resource URLs of the managed instance groups associated with this node pool.
  instanceGroupUrls?: Array<string>;

  // The list of zones in which the node pool's nodes should be located. Nodes must be in the region of their regional cluster or in the same region as their cluster's zone for zonal clusters. If unspecified, the cluster-level node_locations will be used.
  nodeLocations?: Array<string>;

  // Specifies the node placement policy
  placementPolicies?: Array<container_getClusterNodePoolPlacementPolicy>;

  // List of instance group URLs which have been assigned to this node pool.
  managedInstanceGroupUrls?: Array<string>;

  // Creates a unique name for the node pool beginning with the specified prefix. Conflicts with name.
  namePrefix?: string;

  // Networking configuration for this NodePool. If specified, it overrides the cluster-level defaults.
  networkConfigs?: Array<container_getClusterNodePoolNetworkConfig>;

  // The configuration of the nodepool
  nodeConfigs?: Array<container_getClusterNodePoolNodeConfig>;

  // Specifies the configuration of queued provisioning
  queuedProvisionings?: Array<container_getClusterNodePoolQueuedProvisioning>;

  // The initial number of nodes for the pool. In regional or multi-zonal clusters, this is the number of nodes per zone. Changing this will force recreation of the resource.
  initialNodeCount?: number;

  // Node management configuration, wherein auto-repair and auto-upgrade is configured.
  managements?: Array<container_getClusterNodePoolManagement>;
}

export function container_getClusterNodePool_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "nodeLocations",
      "The list of zones in which the node pool's nodes should be located. Nodes must be in the region of their regional cluster or in the same region as their cluster's zone for zonal clusters. If unspecified, the cluster-level node_locations will be used.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "managedInstanceGroupUrls",
      "List of instance group URLs which have been assigned to this node pool.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "namePrefix",
      "Creates a unique name for the node pool beginning with the specified prefix. Conflicts with name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "networkConfigs",
      "Networking configuration for this NodePool. If specified, it overrides the cluster-level defaults.",
      container_getClusterNodePoolNetworkConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "nodeConfigs",
      "The configuration of the nodepool",
      container_getClusterNodePoolNodeConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "upgradeSettings",
      "Specify node upgrade settings to change how many nodes GKE attempts to upgrade at once. The number of nodes upgraded simultaneously is the sum of max_surge and max_unavailable. The maximum number of nodes upgraded simultaneously is limited to 20.",
      container_getClusterNodePoolUpgradeSetting_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "autoscalings",
      "Configuration required by cluster autoscaler to adjust the size of the node pool to the current cluster usage.",
      container_getClusterNodePoolAutoscaling_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "nodeCount",
      "The number of nodes per instance group. This field can be used to update the number of nodes per instance group but should not be used alongside autoscaling.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxPodsPerNode",
      'The maximum number of pods per node in this node pool. Note that this does not work on node pools which are "route-based" - that is, node pools belonging to clusters that do not have IP Aliasing enabled.',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "instanceGroupUrls",
      "The resource URLs of the managed instance groups associated with this node pool.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "placementPolicies",
      "Specifies the node placement policy",
      container_getClusterNodePoolPlacementPolicy_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "managements",
      "Node management configuration, wherein auto-repair and auto-upgrade is configured.",
      container_getClusterNodePoolManagement_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the cluster.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "version", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "queuedProvisionings",
      "Specifies the configuration of queued provisioning",
      container_getClusterNodePoolQueuedProvisioning_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "initialNodeCount",
      "The initial number of nodes for the pool. In regional or multi-zonal clusters, this is the number of nodes per zone. Changing this will force recreation of the resource.",
      [],
      true,
      false,
    ),
  ];
}
