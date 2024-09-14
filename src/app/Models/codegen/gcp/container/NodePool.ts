import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  container_NodePoolNetworkConfig,
  container_NodePoolNetworkConfig_GetTypes,
} from "../types/container_NodePoolNetworkConfig";
import {
  container_NodePoolUpgradeSettings,
  container_NodePoolUpgradeSettings_GetTypes,
} from "../types/container_NodePoolUpgradeSettings";
import {
  container_NodePoolManagement,
  container_NodePoolManagement_GetTypes,
} from "../types/container_NodePoolManagement";
import {
  container_NodePoolPlacementPolicy,
  container_NodePoolPlacementPolicy_GetTypes,
} from "../types/container_NodePoolPlacementPolicy";
import {
  container_NodePoolNodeConfig,
  container_NodePoolNodeConfig_GetTypes,
} from "../types/container_NodePoolNodeConfig";
import {
  container_NodePoolQueuedProvisioning,
  container_NodePoolQueuedProvisioning_GetTypes,
} from "../types/container_NodePoolQueuedProvisioning";
import {
  container_NodePoolAutoscaling,
  container_NodePoolAutoscaling_GetTypes,
} from "../types/container_NodePoolAutoscaling";

export interface NodePoolArgs {
  /*
Parameters used in creating the node pool. See
gcp.container.Cluster for schema.
*/
  nodeConfig?: container_NodePoolNodeConfig;

  /*
The ID of the project in which to create the node pool. If blank,
the provider-configured project will be used.
*/
  project?: string;

  /*
Specifies node pool-level settings of queued provisioning.
Structure is documented below.

<a name="nested_autoscaling"></a>The `autoscaling` block supports (either total or per zone limits are required):
*/
  queuedProvisioning?: container_NodePoolQueuedProvisioning;

  /*
Configuration required by cluster autoscaler to adjust
the size of the node pool to the current cluster usage. Structure is documented below.
*/
  autoscaling?: container_NodePoolAutoscaling;

  /*
The maximum number of pods per node in this node pool.
Note that this does not work on node pools which are "route-based" - that is, node
pools belonging to clusters that do not have IP Aliasing enabled.
See the [official documentation](https://cloud.google.com/kubernetes-engine/docs/how-to/flexible-pod-cidr)
for more information.
*/
  maxPodsPerNode?: number;

  /*
The network configuration of the pool. Such as
configuration for [Adding Pod IP address ranges](https://cloud.google.com/kubernetes-engine/docs/how-to/multi-pod-cidr)) to the node pool. Or enabling private nodes. Structure is
documented below
*/
  networkConfig?: container_NodePoolNetworkConfig;

  /*
The list of zones in which the node pool's nodes should be located. Nodes must
be in the region of their regional cluster or in the same region as their
cluster's zone for zonal clusters. If unspecified, the cluster-level
`node_locations` will be used.

> Note: `node_locations` will not revert to the cluster's default set of zones
upon being unset. You must manually reconcile the list of zones with your
cluster.
*/
  nodeLocations?: Array<string>;

  /*
Specify node upgrade settings to change how GKE upgrades nodes.
The maximum number of nodes upgraded simultaneously is limited to 20. Structure is documented below.
*/
  upgradeSettings?: container_NodePoolUpgradeSettings;

  /*
The cluster to create the node pool for. Cluster must be present in `location` provided for clusters. May be specified in the format `projects/{{project}}/locations/{{location}}/clusters/{{cluster}}` or as just the name of the cluster.

- - -
*/
  cluster?: string;

  /*
The location (region or zone) of the cluster.

- - -
*/
  location?: string;

  /*
Node management configuration, wherein auto-repair and
auto-upgrade is configured. Structure is documented below.
*/
  management?: container_NodePoolManagement;

  /*
The number of nodes per instance group. This field can be used to
update the number of nodes per instance group but should not be used alongside `autoscaling`.
*/
  nodeCount?: number;

  /*
The initial number of nodes for the pool. In
regional or multi-zonal clusters, this is the number of nodes per zone. Changing
this will force recreation of the resource. WARNING: Resizing your node pool manually
may change this value in your existing cluster, which will trigger destruction
and recreation on the next provider run (to rectify the discrepancy).  If you don't
need this value, don't set it.  If you do need it, you can use a lifecycle block to
ignore subsqeuent changes to this field.
*/
  initialNodeCount?: number;

  /*
Creates a unique name for the node pool beginning
with the specified prefix. Conflicts with `name`.
*/
  namePrefix?: string;

  /*
Specifies a custom placement policy for the
nodes.
*/
  placementPolicy?: container_NodePoolPlacementPolicy;

  /*
The Kubernetes version for the nodes in this pool. Note that if this field
and `auto_upgrade` are both specified, they will fight each other for what the node version should
be, so setting both is highly discouraged. While a fuzzy version can be specified, it's
recommended that you specify explicit versions as the provider will see spurious diffs
when fuzzy versions are used. See the `gcp.container.getEngineVersions` data source's
`version_prefix` field to approximate fuzzy versions in a provider-compatible way.
*/
  version?: string;

  /*
The name of the node pool. If left blank, the provider will
auto-generate a unique name.
*/
  name?: string;
}
export class NodePool extends DS_Resource {
  /*
The initial number of nodes for the pool. In
regional or multi-zonal clusters, this is the number of nodes per zone. Changing
this will force recreation of the resource. WARNING: Resizing your node pool manually
may change this value in your existing cluster, which will trigger destruction
and recreation on the next provider run (to rectify the discrepancy).  If you don't
need this value, don't set it.  If you do need it, you can use a lifecycle block to
ignore subsqeuent changes to this field.
*/
  public initialNodeCount?: number;

  // List of instance group URLs which have been assigned to this node pool.
  public managedInstanceGroupUrls?: Array<string>;

  /*
Node management configuration, wherein auto-repair and
auto-upgrade is configured. Structure is documented below.
*/
  public management?: container_NodePoolManagement;

  /*
The name of the node pool. If left blank, the provider will
auto-generate a unique name.
*/
  public name?: string;

  /*
Creates a unique name for the node pool beginning
with the specified prefix. Conflicts with `name`.
*/
  public namePrefix?: string;

  /*
The network configuration of the pool. Such as
configuration for [Adding Pod IP address ranges](https://cloud.google.com/kubernetes-engine/docs/how-to/multi-pod-cidr)) to the node pool. Or enabling private nodes. Structure is
documented below
*/
  public networkConfig?: container_NodePoolNetworkConfig;

  /*
The ID of the project in which to create the node pool. If blank,
the provider-configured project will be used.
*/
  public project?: string;

  /*
The Kubernetes version for the nodes in this pool. Note that if this field
and `auto_upgrade` are both specified, they will fight each other for what the node version should
be, so setting both is highly discouraged. While a fuzzy version can be specified, it's
recommended that you specify explicit versions as the provider will see spurious diffs
when fuzzy versions are used. See the `gcp.container.getEngineVersions` data source's
`version_prefix` field to approximate fuzzy versions in a provider-compatible way.
*/
  public version?: string;

  /*
Configuration required by cluster autoscaler to adjust
the size of the node pool to the current cluster usage. Structure is documented below.
*/
  public autoscaling?: container_NodePoolAutoscaling;

  /*
Specify node upgrade settings to change how GKE upgrades nodes.
The maximum number of nodes upgraded simultaneously is limited to 20. Structure is documented below.
*/
  public upgradeSettings?: container_NodePoolUpgradeSettings;

  // The resource URLs of the managed instance groups associated with this node pool.
  public instanceGroupUrls?: Array<string>;

  /*
Parameters used in creating the node pool. See
gcp.container.Cluster for schema.
*/
  public nodeConfig?: container_NodePoolNodeConfig;

  /*
The number of nodes per instance group. This field can be used to
update the number of nodes per instance group but should not be used alongside `autoscaling`.
*/
  public nodeCount?: number;

  /*
The list of zones in which the node pool's nodes should be located. Nodes must
be in the region of their regional cluster or in the same region as their
cluster's zone for zonal clusters. If unspecified, the cluster-level
`node_locations` will be used.

> Note: `node_locations` will not revert to the cluster's default set of zones
upon being unset. You must manually reconcile the list of zones with your
cluster.
*/
  public nodeLocations?: Array<string>;

  //
  public operation?: string;

  /*
Specifies a custom placement policy for the
nodes.
*/
  public placementPolicy?: container_NodePoolPlacementPolicy;

  /*
Specifies node pool-level settings of queued provisioning.
Structure is documented below.

<a name="nested_autoscaling"></a>The `autoscaling` block supports (either total or per zone limits are required):
*/
  public queuedProvisioning?: container_NodePoolQueuedProvisioning;

  /*
The cluster to create the node pool for. Cluster must be present in `location` provided for clusters. May be specified in the format `projects/{{project}}/locations/{{location}}/clusters/{{cluster}}` or as just the name of the cluster.

- - -
*/
  public cluster?: string;

  /*
The location (region or zone) of the cluster.

- - -
*/
  public location?: string;

  /*
The maximum number of pods per node in this node pool.
Note that this does not work on node pools which are "route-based" - that is, node
pools belonging to clusters that do not have IP Aliasing enabled.
See the [official documentation](https://cloud.google.com/kubernetes-engine/docs/how-to/flexible-pod-cidr)
for more information.
*/
  public maxPodsPerNode?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "placementPolicy",
        "Specifies a custom placement policy for the\nnodes.",
        () => container_NodePoolPlacementPolicy_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "nodeLocations",
        "The list of zones in which the node pool's nodes should be located. Nodes must\nbe in the region of their regional cluster or in the same region as their\ncluster's zone for zonal clusters. If unspecified, the cluster-level\n`node_locations` will be used.\n\n> Note: `node_locations` will not revert to the cluster's default set of zones\nupon being unset. You must manually reconcile the list of zones with your\ncluster.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location (region or zone) of the cluster.\n\n- - -",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "management",
        "Node management configuration, wherein auto-repair and\nauto-upgrade is configured. Structure is documented below.",
        () => container_NodePoolManagement_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "nodeCount",
        "The number of nodes per instance group. This field can be used to\nupdate the number of nodes per instance group but should not be used alongside `autoscaling`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "initialNodeCount",
        "The initial number of nodes for the pool. In\nregional or multi-zonal clusters, this is the number of nodes per zone. Changing\nthis will force recreation of the resource. WARNING: Resizing your node pool manually\nmay change this value in your existing cluster, which will trigger destruction\nand recreation on the next provider run (to rectify the discrepancy).  If you don't\nneed this value, don't set it.  If you do need it, you can use a lifecycle block to\nignore subsqeuent changes to this field.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which to create the node pool. If blank,\nthe provider-configured project will be used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "autoscaling",
        "Configuration required by cluster autoscaler to adjust\nthe size of the node pool to the current cluster usage. Structure is documented below.",
        () => container_NodePoolAutoscaling_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "upgradeSettings",
        "Specify node upgrade settings to change how GKE upgrades nodes.\nThe maximum number of nodes upgraded simultaneously is limited to 20. Structure is documented below.",
        () => container_NodePoolUpgradeSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "version",
        "The Kubernetes version for the nodes in this pool. Note that if this field\nand `auto_upgrade` are both specified, they will fight each other for what the node version should\nbe, so setting both is highly discouraged. While a fuzzy version can be specified, it's\nrecommended that you specify explicit versions as the provider will see spurious diffs\nwhen fuzzy versions are used. See the `gcp.container.getEngineVersions` data source's\n`version_prefix` field to approximate fuzzy versions in a provider-compatible way.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "nodeConfig",
        "Parameters used in creating the node pool. See\ngcp.container.Cluster for schema.",
        () => container_NodePoolNodeConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "queuedProvisioning",
        'Specifies node pool-level settings of queued provisioning.\nStructure is documented below.\n\n<a name="nested_autoscaling"></a>The `autoscaling` block supports (either total or per zone limits are required):',
        () => container_NodePoolQueuedProvisioning_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "maxPodsPerNode",
        'The maximum number of pods per node in this node pool.\nNote that this does not work on node pools which are "route-based" - that is, node\npools belonging to clusters that do not have IP Aliasing enabled.\nSee the [official documentation](https://cloud.google.com/kubernetes-engine/docs/how-to/flexible-pod-cidr)\nfor more information.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "namePrefix",
        "Creates a unique name for the node pool beginning\nwith the specified prefix. Conflicts with `name`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "networkConfig",
        "The network configuration of the pool. Such as\nconfiguration for [Adding Pod IP address ranges](https://cloud.google.com/kubernetes-engine/docs/how-to/multi-pod-cidr)) to the node pool. Or enabling private nodes. Structure is\ndocumented below",
        () => container_NodePoolNetworkConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "cluster",
        "The cluster to create the node pool for. Cluster must be present in `location` provided for clusters. May be specified in the format `projects/{{project}}/locations/{{location}}/clusters/{{cluster}}` or as just the name of the cluster.\n\n- - -",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the node pool. If left blank, the provider will\nauto-generate a unique name.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
