import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { NodeGroupMaintenanceWindow } from "../types/NodeGroupMaintenanceWindow";
import { NodeGroupShareSettings } from "../types/NodeGroupShareSettings";
import { NodeGroupAutoscalingPolicy } from "../types/NodeGroupAutoscalingPolicy";

export interface NodeGroupArgs {
  /*
contains properties for the timeframe of maintenance
Structure is documented below.
*/
  MaintenanceWindow?: NodeGroupMaintenanceWindow;

  // Name of the resource.
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Share settings for the node group.
Structure is documented below.
*/
  ShareSettings?: NodeGroupShareSettings;

  // Zone where this node group is located
  Zone?: string;

  /*
The URL of the node template to which this node group belongs.


- - -
*/
  NodeTemplate?: string;

  /*
If you use sole-tenant nodes for your workloads, you can use the node
group autoscaler to automatically manage the sizes of your node groups.
One of `initial_size` or `autoscaling_policy` must be configured on resource creation.
Structure is documented below.
*/
  AutoscalingPolicy?: NodeGroupAutoscalingPolicy;

  // An optional textual description of the resource.
  Description?: string;

  // The initial number of nodes in the node group. One of `initial_size` or `autoscaling_policy` must be configured on resource creation.
  InitialSize?: number;

  /*
Specifies the frequency of planned maintenance events. Set to one of the following:
- AS_NEEDED: Hosts are eligible to receive infrastructure and hypervisor updates as they become available.
- RECURRENT: Hosts receive planned infrastructure and hypervisor updates on a periodic basis, but not more frequently than every 28 days. This minimizes the number of planned maintenance operations on individual hosts and reduces the frequency of disruptions, both live migrations and terminations, on individual VMs.
Possible values are: `AS_NEEDED`, `RECURRENT`.
*/
  MaintenanceInterval?: string;

  // Specifies how to handle instances when a node in the group undergoes maintenance. Set to one of: DEFAULT, RESTART_IN_PLACE, or MIGRATE_WITHIN_NODE_GROUP. The default value is DEFAULT.
  MaintenancePolicy?: string;
}
export class NodeGroup extends Resource {
  // The URI of the created resource.
  public SelfLink?: string;

  // Zone where this node group is located
  public Zone?: string;

  // The initial number of nodes in the node group. One of `initial_size` or `autoscaling_policy` must be configured on resource creation.
  public InitialSize?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Specifies how to handle instances when a node in the group undergoes maintenance. Set to one of: DEFAULT, RESTART_IN_PLACE, or MIGRATE_WITHIN_NODE_GROUP. The default value is DEFAULT.
  public MaintenancePolicy?: string;

  // The total number of nodes in the node group.
  public Size?: number;

  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  /*
Specifies the frequency of planned maintenance events. Set to one of the following:
- AS_NEEDED: Hosts are eligible to receive infrastructure and hypervisor updates as they become available.
- RECURRENT: Hosts receive planned infrastructure and hypervisor updates on a periodic basis, but not more frequently than every 28 days. This minimizes the number of planned maintenance operations on individual hosts and reduces the frequency of disruptions, both live migrations and terminations, on individual VMs.
Possible values are: `AS_NEEDED`, `RECURRENT`.
*/
  public MaintenanceInterval?: string;

  // Name of the resource.
  public Name?: string;

  /*
If you use sole-tenant nodes for your workloads, you can use the node
group autoscaler to automatically manage the sizes of your node groups.
One of `initial_size` or `autoscaling_policy` must be configured on resource creation.
Structure is documented below.
*/
  public AutoscalingPolicy?: NodeGroupAutoscalingPolicy;

  // An optional textual description of the resource.
  public Description?: string;

  /*
Share settings for the node group.
Structure is documented below.
*/
  public ShareSettings?: NodeGroupShareSettings;

  /*
contains properties for the timeframe of maintenance
Structure is documented below.
*/
  public MaintenanceWindow?: NodeGroupMaintenanceWindow;

  /*
The URL of the node template to which this node group belongs.


- - -
*/
  public NodeTemplate?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "NodeTemplate",
        "The URL of the node template to which this node group belongs.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "AutoscalingPolicy",
        "If you use sole-tenant nodes for your workloads, you can use the node\ngroup autoscaler to automatically manage the sizes of your node groups.\nOne of `initial_size` or `autoscaling_policy` must be configured on resource creation.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional textual description of the resource.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "InitialSize",
        "The initial number of nodes in the node group. One of `initial_size` or `autoscaling_policy` must be configured on resource creation.",
      ),
      new DynamicUIProps(
        InputType.String,
        "MaintenancePolicy",
        "Specifies how to handle instances when a node in the group undergoes maintenance. Set to one of: DEFAULT, RESTART_IN_PLACE, or MIGRATE_WITHIN_NODE_GROUP. The default value is DEFAULT.",
      ),
      new DynamicUIProps(InputType.String, "Name", "Name of the resource."),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Zone",
        "Zone where this node group is located",
      ),
      new DynamicUIProps(
        InputType.String,
        "MaintenanceInterval",
        "Specifies the frequency of planned maintenance events. Set to one of the following:\n- AS_NEEDED: Hosts are eligible to receive infrastructure and hypervisor updates as they become available.\n- RECURRENT: Hosts receive planned infrastructure and hypervisor updates on a periodic basis, but not more frequently than every 28 days. This minimizes the number of planned maintenance operations on individual hosts and reduces the frequency of disruptions, both live migrations and terminations, on individual VMs.\nPossible values are: `AS_NEEDED`, `RECURRENT`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "MaintenanceWindow",
        "contains properties for the timeframe of maintenance\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ShareSettings",
        "Share settings for the node group.\nStructure is documented below.",
      ),
    ];
  }
}
