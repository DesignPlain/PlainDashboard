import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_NodeGroupShareSettings,
  Compute_NodeGroupShareSettings_GetTypes,
} from "../types/Compute_NodeGroupShareSettings";
import {
  Compute_NodeGroupAutoscalingPolicy,
  Compute_NodeGroupAutoscalingPolicy_GetTypes,
} from "../types/Compute_NodeGroupAutoscalingPolicy";
import {
  Compute_NodeGroupMaintenanceWindow,
  Compute_NodeGroupMaintenanceWindow_GetTypes,
} from "../types/Compute_NodeGroupMaintenanceWindow";

export interface NodeGroupArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // Zone where this node group is located
  Zone?: string;

  /*
If you use sole-tenant nodes for your workloads, you can use the node
group autoscaler to automatically manage the sizes of your node groups.
One of `initial_size` or `autoscaling_policy` must be configured on resource creation.
Structure is documented below.
*/
  AutoscalingPolicy?: Compute_NodeGroupAutoscalingPolicy;

  // An optional textual description of the resource.
  Description?: string;

  /*
contains properties for the timeframe of maintenance
Structure is documented below.
*/
  MaintenanceWindow?: Compute_NodeGroupMaintenanceWindow;

  /*
The URL of the node template to which this node group belongs.


- - -
*/
  NodeTemplate?: string;

  /*
Share settings for the node group.
Structure is documented below.
*/
  ShareSettings?: Compute_NodeGroupShareSettings;

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

  // Name of the resource.
  Name?: string;
}
export class NodeGroup extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Specifies the frequency of planned maintenance events. Set to one of the following:
- AS_NEEDED: Hosts are eligible to receive infrastructure and hypervisor updates as they become available.
- RECURRENT: Hosts receive planned infrastructure and hypervisor updates on a periodic basis, but not more frequently than every 28 days. This minimizes the number of planned maintenance operations on individual hosts and reduces the frequency of disruptions, both live migrations and terminations, on individual VMs.
Possible values are: `AS_NEEDED`, `RECURRENT`.
*/
  public MaintenanceInterval?: string;

  /*
contains properties for the timeframe of maintenance
Structure is documented below.
*/
  public MaintenanceWindow?: Compute_NodeGroupMaintenanceWindow;

  // Name of the resource.
  public Name?: string;

  /*
If you use sole-tenant nodes for your workloads, you can use the node
group autoscaler to automatically manage the sizes of your node groups.
One of `initial_size` or `autoscaling_policy` must be configured on resource creation.
Structure is documented below.
*/
  public AutoscalingPolicy?: Compute_NodeGroupAutoscalingPolicy;

  /*
The URL of the node template to which this node group belongs.


- - -
*/
  public NodeTemplate?: string;

  // The total number of nodes in the node group.
  public Size?: number;

  // Zone where this node group is located
  public Zone?: string;

  // Specifies how to handle instances when a node in the group undergoes maintenance. Set to one of: DEFAULT, RESTART_IN_PLACE, or MIGRATE_WITHIN_NODE_GROUP. The default value is DEFAULT.
  public MaintenancePolicy?: string;

  // The URI of the created resource.
  public SelfLink?: string;

  /*
Share settings for the node group.
Structure is documented below.
*/
  public ShareSettings?: Compute_NodeGroupShareSettings;

  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  // An optional textual description of the resource.
  public Description?: string;

  // The initial number of nodes in the node group. One of `initial_size` or `autoscaling_policy` must be configured on resource creation.
  public InitialSize?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "ShareSettings",
        "Share settings for the node group.\nStructure is documented below.",
        Compute_NodeGroupShareSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "MaintenancePolicy",
        "Specifies how to handle instances when a node in the group undergoes maintenance. Set to one of: DEFAULT, RESTART_IN_PLACE, or MIGRATE_WITHIN_NODE_GROUP. The default value is DEFAULT.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Zone",
        "Zone where this node group is located",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "AutoscalingPolicy",
        "If you use sole-tenant nodes for your workloads, you can use the node\ngroup autoscaler to automatically manage the sizes of your node groups.\nOne of `initial_size` or `autoscaling_policy` must be configured on resource creation.\nStructure is documented below.",
        Compute_NodeGroupAutoscalingPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional textual description of the resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "MaintenanceWindow",
        "contains properties for the timeframe of maintenance\nStructure is documented below.",
        Compute_NodeGroupMaintenanceWindow_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "NodeTemplate",
        "The URL of the node template to which this node group belongs.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "InitialSize",
        "The initial number of nodes in the node group. One of `initial_size` or `autoscaling_policy` must be configured on resource creation.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "MaintenanceInterval",
        "Specifies the frequency of planned maintenance events. Set to one of the following:\n- AS_NEEDED: Hosts are eligible to receive infrastructure and hypervisor updates as they become available.\n- RECURRENT: Hosts receive planned infrastructure and hypervisor updates on a periodic basis, but not more frequently than every 28 days. This minimizes the number of planned maintenance operations on individual hosts and reduces the frequency of disruptions, both live migrations and terminations, on individual VMs.\nPossible values are: `AS_NEEDED`, `RECURRENT`.",
        [],
        false,
        false,
      ),
    ];
  }
}
