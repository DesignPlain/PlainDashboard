import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { NodePoolManagement } from "../types/NodePoolManagement";
import { NodePoolNetworkConfig } from "../types/NodePoolNetworkConfig";
import { NodePoolNodeConfig } from "../types/NodePoolNodeConfig";
import { NodePoolQueuedProvisioning } from "../types/NodePoolQueuedProvisioning";
import { NodePoolUpgradeSettings } from "../types/NodePoolUpgradeSettings";
import { NodePoolPlacementPolicy } from "../types/NodePoolPlacementPolicy";
import { NodePoolAutoscaling } from "../types/NodePoolAutoscaling";

export interface NodePoolArgs {
  /*
The network configuration of the pool. Such as
configuration for [Adding Pod IP address ranges](https://cloud.google.com/kubernetes-engine/docs/how-to/multi-pod-cidr)) to the node pool. Or enabling private nodes. Structure is
documented below
*/
  NetworkConfig?: NodePoolNetworkConfig;

  /*
Parameters used in creating the node pool. See
gcp.container.Cluster for schema.
*/
  NodeConfig?: NodePoolNodeConfig;

  /*
Specifies node pool-level settings of queued provisioning.
Structure is documented below.

<a name="nested_autoscaling"></a>The `autoscaling` block supports (either total or per zone limits are required):
*/
  QueuedProvisioning?: NodePoolQueuedProvisioning;

  /*
The cluster to create the node pool for. Cluster must be present in `location` provided for clusters. May be specified in the format `projects/{{project}}/locations/{{location}}/clusters/{{cluster}}` or as just the name of the cluster.

- - -
*/
  Cluster?: string;

  /*
The initial number of nodes for the pool. In
regional or multi-zonal clusters, this is the number of nodes per zone. Changing
this will force recreation of the resource. WARNING: Resizing your node pool manually
may change this value in your existing cluster, which will trigger destruction
and recreation on the next provider run (to rectify the discrepancy).  If you don't
need this value, don't set it.  If you do need it, you can use a lifecycle block to
ignore subsqeuent changes to this field.
*/
  InitialNodeCount?: number;

  /*
The maximum number of pods per node in this node pool.
Note that this does not work on node pools which are "route-based" - that is, node
pools belonging to clusters that do not have IP Aliasing enabled.
See the [official documentation](https://cloud.google.com/kubernetes-engine/docs/how-to/flexible-pod-cidr)
for more information.
*/
  MaxPodsPerNode?: number;

  /*
The name of the node pool. If left blank, the provider will
auto-generate a unique name.
*/
  Name?: string;

  /*
The location (region or zone) of the cluster.

- - -
*/
  Location?: string;

  /*
Specify node upgrade settings to change how GKE upgrades nodes.
The maximum number of nodes upgraded simultaneously is limited to 20. Structure is documented below.
*/
  UpgradeSettings?: NodePoolUpgradeSettings;

  /*
The Kubernetes version for the nodes in this pool. Note that if this field
and `auto_upgrade` are both specified, they will fight each other for what the node version should
be, so setting both is highly discouraged. While a fuzzy version can be specified, it's
recommended that you specify explicit versions as the provider will see spurious diffs
when fuzzy versions are used. See the `gcp.container.getEngineVersions` data source's
`version_prefix` field to approximate fuzzy versions in a provider-compatible way.
*/
  Version?: string;

  /*
Specifies a custom placement policy for the
nodes.
*/
  PlacementPolicy?: NodePoolPlacementPolicy;

  /*
The ID of the project in which to create the node pool. If blank,
the provider-configured project will be used.
*/
  Project?: string;

  /*
Configuration required by cluster autoscaler to adjust
the size of the node pool to the current cluster usage. Structure is documented below.
*/
  Autoscaling?: NodePoolAutoscaling;

  /*
Node management configuration, wherein auto-repair and
auto-upgrade is configured. Structure is documented below.
*/
  Management?: NodePoolManagement;

  /*
Creates a unique name for the node pool beginning
with the specified prefix. Conflicts with `name`.
*/
  NamePrefix?: string;

  /*
The number of nodes per instance group. This field can be used to
update the number of nodes per instance group but should not be used alongside `autoscaling`.
*/
  NodeCount?: number;

  /*
The list of zones in which the node pool's nodes should be located. Nodes must
be in the region of their regional cluster or in the same region as their
cluster's zone for zonal clusters. If unspecified, the cluster-level
`node_locations` will be used.

> Note: `node_locations` will not revert to the cluster's default set of zones
upon being unset. You must manually reconcile the list of zones with your
cluster.
*/
  NodeLocations?: Array<string>;
}
export class NodePool extends Resource {
  /*
Configuration required by cluster autoscaler to adjust
the size of the node pool to the current cluster usage. Structure is documented below.
*/
  public Autoscaling?: NodePoolAutoscaling;

  /*
Node management configuration, wherein auto-repair and
auto-upgrade is configured. Structure is documented below.
*/
  public Management?: NodePoolManagement;

  /*
Creates a unique name for the node pool beginning
with the specified prefix. Conflicts with `name`.
*/
  public NamePrefix?: string;

  /*
The name of the node pool. If left blank, the provider will
auto-generate a unique name.
*/
  public Name?: string;

  /*
Specifies node pool-level settings of queued provisioning.
Structure is documented below.

<a name="nested_autoscaling"></a>The `autoscaling` block supports (either total or per zone limits are required):
*/
  public QueuedProvisioning?: NodePoolQueuedProvisioning;

  /*
The Kubernetes version for the nodes in this pool. Note that if this field
and `auto_upgrade` are both specified, they will fight each other for what the node version should
be, so setting both is highly discouraged. While a fuzzy version can be specified, it's
recommended that you specify explicit versions as the provider will see spurious diffs
when fuzzy versions are used. See the `gcp.container.getEngineVersions` data source's
`version_prefix` field to approximate fuzzy versions in a provider-compatible way.
*/
  public Version?: string;

  /*
The initial number of nodes for the pool. In
regional or multi-zonal clusters, this is the number of nodes per zone. Changing
this will force recreation of the resource. WARNING: Resizing your node pool manually
may change this value in your existing cluster, which will trigger destruction
and recreation on the next provider run (to rectify the discrepancy).  If you don't
need this value, don't set it.  If you do need it, you can use a lifecycle block to
ignore subsqeuent changes to this field.
*/
  public InitialNodeCount?: number;

  // The resource URLs of the managed instance groups associated with this node pool.
  public InstanceGroupUrls?: Array<string>;

  /*
The location (region or zone) of the cluster.

- - -
*/
  public Location?: string;

  // List of instance group URLs which have been assigned to this node pool.
  public ManagedInstanceGroupUrls?: Array<string>;

  /*
Specify node upgrade settings to change how GKE upgrades nodes.
The maximum number of nodes upgraded simultaneously is limited to 20. Structure is documented below.
*/
  public UpgradeSettings?: NodePoolUpgradeSettings;

  /*
The cluster to create the node pool for. Cluster must be present in `location` provided for clusters. May be specified in the format `projects/{{project}}/locations/{{location}}/clusters/{{cluster}}` or as just the name of the cluster.

- - -
*/
  public Cluster?: string;

  /*
Parameters used in creating the node pool. See
gcp.container.Cluster for schema.
*/
  public NodeConfig?: NodePoolNodeConfig;

  /*
The list of zones in which the node pool's nodes should be located. Nodes must
be in the region of their regional cluster or in the same region as their
cluster's zone for zonal clusters. If unspecified, the cluster-level
`node_locations` will be used.

> Note: `node_locations` will not revert to the cluster's default set of zones
upon being unset. You must manually reconcile the list of zones with your
cluster.
*/
  public NodeLocations?: Array<string>;

  /*
The ID of the project in which to create the node pool. If blank,
the provider-configured project will be used.
*/
  public Project?: string;

  /*
Specifies a custom placement policy for the
nodes.
*/
  public PlacementPolicy?: NodePoolPlacementPolicy;

  /*
The maximum number of pods per node in this node pool.
Note that this does not work on node pools which are "route-based" - that is, node
pools belonging to clusters that do not have IP Aliasing enabled.
See the [official documentation](https://cloud.google.com/kubernetes-engine/docs/how-to/flexible-pod-cidr)
for more information.
*/
  public MaxPodsPerNode?: number;

  /*
The network configuration of the pool. Such as
configuration for [Adding Pod IP address ranges](https://cloud.google.com/kubernetes-engine/docs/how-to/multi-pod-cidr)) to the node pool. Or enabling private nodes. Structure is
documented below
*/
  public NetworkConfig?: NodePoolNetworkConfig;

  /*
The number of nodes per instance group. This field can be used to
update the number of nodes per instance group but should not be used alongside `autoscaling`.
*/
  public NodeCount?: number;

  //
  public Operation?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "MaxPodsPerNode",
        'The maximum number of pods per node in this node pool.\nNote that this does not work on node pools which are "route-based" - that is, node\npools belonging to clusters that do not have IP Aliasing enabled.\nSee the [official documentation](https://cloud.google.com/kubernetes-engine/docs/how-to/flexible-pod-cidr)\nfor more information.',
      ),
      new DynamicUIProps(
        InputType.String,
        "PlacementPolicy",
        "Specifies a custom placement policy for the\nnodes.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "InitialNodeCount",
        "The initial number of nodes for the pool. In\nregional or multi-zonal clusters, this is the number of nodes per zone. Changing\nthis will force recreation of the resource. WARNING: Resizing your node pool manually\nmay change this value in your existing cluster, which will trigger destruction\nand recreation on the next provider run (to rectify the discrepancy).  If you don't\nneed this value, don't set it.  If you do need it, you can use a lifecycle block to\nignore subsqeuent changes to this field.",
      ),
      new DynamicUIProps(
        InputType.String,
        "QueuedProvisioning",
        'Specifies node pool-level settings of queued provisioning.\nStructure is documented below.\n\n<a name="nested_autoscaling"></a>The `autoscaling` block supports (either total or per zone limits are required):',
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the node pool. If left blank, the provider will\nauto-generate a unique name.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location (region or zone) of the cluster.\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Version",
        "The Kubernetes version for the nodes in this pool. Note that if this field\nand `auto_upgrade` are both specified, they will fight each other for what the node version should\nbe, so setting both is highly discouraged. While a fuzzy version can be specified, it's\nrecommended that you specify explicit versions as the provider will see spurious diffs\nwhen fuzzy versions are used. See the `gcp.container.getEngineVersions` data source's\n`version_prefix` field to approximate fuzzy versions in a provider-compatible way.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which to create the node pool. If blank,\nthe provider-configured project will be used.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "NodeCount",
        "The number of nodes per instance group. This field can be used to\nupdate the number of nodes per instance group but should not be used alongside `autoscaling`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "NetworkConfig",
        "The network configuration of the pool. Such as\nconfiguration for [Adding Pod IP address ranges](https://cloud.google.com/kubernetes-engine/docs/how-to/multi-pod-cidr)) to the node pool. Or enabling private nodes. Structure is\ndocumented below",
      ),
      new DynamicUIProps(
        InputType.String,
        "Cluster",
        "The cluster to create the node pool for. Cluster must be present in `location` provided for clusters. May be specified in the format `projects/{{project}}/locations/{{location}}/clusters/{{cluster}}` or as just the name of the cluster.\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Autoscaling",
        "Configuration required by cluster autoscaler to adjust\nthe size of the node pool to the current cluster usage. Structure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Management",
        "Node management configuration, wherein auto-repair and\nauto-upgrade is configured. Structure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "NodeConfig",
        "Parameters used in creating the node pool. See\ngcp.container.Cluster for schema.",
      ),
      new DynamicUIProps(
        InputType.String,
        "NamePrefix",
        "Creates a unique name for the node pool beginning\nwith the specified prefix. Conflicts with `name`.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "NodeLocations",
        "The list of zones in which the node pool's nodes should be located. Nodes must\nbe in the region of their regional cluster or in the same region as their\ncluster's zone for zonal clusters. If unspecified, the cluster-level\n`node_locations` will be used.\n\n> Note: `node_locations` will not revert to the cluster's default set of zones\nupon being unset. You must manually reconcile the list of zones with your\ncluster.",
      ),
      new DynamicUIProps(
        InputType.String,
        "UpgradeSettings",
        "Specify node upgrade settings to change how GKE upgrades nodes.\nThe maximum number of nodes upgraded simultaneously is limited to 20. Structure is documented below.",
      ),
    ];
  }
}
