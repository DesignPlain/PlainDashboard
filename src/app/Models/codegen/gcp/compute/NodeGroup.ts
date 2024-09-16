import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  compute_NodeGroupMaintenanceWindow,
  compute_NodeGroupMaintenanceWindow_GetTypes,
} from '../types/compute_NodeGroupMaintenanceWindow';
import {
  compute_NodeGroupShareSettings,
  compute_NodeGroupShareSettings_GetTypes,
} from '../types/compute_NodeGroupShareSettings';
import {
  compute_NodeGroupAutoscalingPolicy,
  compute_NodeGroupAutoscalingPolicy_GetTypes,
} from '../types/compute_NodeGroupAutoscalingPolicy';

export interface NodeGroupArgs {
  /*
Specifies the frequency of planned maintenance events. Set to one of the following:
- AS_NEEDED: Hosts are eligible to receive infrastructure and hypervisor updates as they become available.
- RECURRENT: Hosts receive planned infrastructure and hypervisor updates on a periodic basis, but not more frequently than every 28 days. This minimizes the number of planned maintenance operations on individual hosts and reduces the frequency of disruptions, both live migrations and terminations, on individual VMs.
Possible values are: `AS_NEEDED`, `RECURRENT`.
*/
  maintenanceInterval?: string;

  /*
contains properties for the timeframe of maintenance
Structure is documented below.
*/
  maintenanceWindow?: compute_NodeGroupMaintenanceWindow;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // Name of the resource.
  name?: string;

  /*
The URL of the node template to which this node group belongs.


- - -
*/
  nodeTemplate?: string;

  /*
Share settings for the node group.
Structure is documented below.
*/
  shareSettings?: compute_NodeGroupShareSettings;

  // Zone where this node group is located
  zone?: string;

  /*
If you use sole-tenant nodes for your workloads, you can use the node
group autoscaler to automatically manage the sizes of your node groups.
One of `initial_size` or `autoscaling_policy` must be configured on resource creation.
Structure is documented below.
*/
  autoscalingPolicy?: compute_NodeGroupAutoscalingPolicy;

  // An optional textual description of the resource.
  description?: string;

  // The initial number of nodes in the node group. One of `initial_size` or `autoscaling_policy` must be configured on resource creation.
  initialSize?: number;

  // Specifies how to handle instances when a node in the group undergoes maintenance. Set to one of: DEFAULT, RESTART_IN_PLACE, or MIGRATE_WITHIN_NODE_GROUP. The default value is DEFAULT.
  maintenancePolicy?: string;
}
export class NodeGroup extends DS_Resource {
  // The URI of the created resource.
  public selfLink?: string;

  // The total number of nodes in the node group.
  public size?: number;

  // The initial number of nodes in the node group. One of `initial_size` or `autoscaling_policy` must be configured on resource creation.
  public initialSize?: number;

  /*
The URL of the node template to which this node group belongs.


- - -
*/
  public nodeTemplate?: string;

  // Zone where this node group is located
  public zone?: string;

  /*
Specifies the frequency of planned maintenance events. Set to one of the following:
- AS_NEEDED: Hosts are eligible to receive infrastructure and hypervisor updates as they become available.
- RECURRENT: Hosts receive planned infrastructure and hypervisor updates on a periodic basis, but not more frequently than every 28 days. This minimizes the number of planned maintenance operations on individual hosts and reduces the frequency of disruptions, both live migrations and terminations, on individual VMs.
Possible values are: `AS_NEEDED`, `RECURRENT`.
*/
  public maintenanceInterval?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
If you use sole-tenant nodes for your workloads, you can use the node
group autoscaler to automatically manage the sizes of your node groups.
One of `initial_size` or `autoscaling_policy` must be configured on resource creation.
Structure is documented below.
*/
  public autoscalingPolicy?: compute_NodeGroupAutoscalingPolicy;

  // Specifies how to handle instances when a node in the group undergoes maintenance. Set to one of: DEFAULT, RESTART_IN_PLACE, or MIGRATE_WITHIN_NODE_GROUP. The default value is DEFAULT.
  public maintenancePolicy?: string;

  /*
contains properties for the timeframe of maintenance
Structure is documented below.
*/
  public maintenanceWindow?: compute_NodeGroupMaintenanceWindow;

  // Name of the resource.
  public name?: string;

  /*
Share settings for the node group.
Structure is documented below.
*/
  public shareSettings?: compute_NodeGroupShareSettings;

  // Creation timestamp in RFC3339 text format.
  public creationTimestamp?: string;

  // An optional textual description of the resource.
  public description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'maintenanceInterval',
        'Specifies the frequency of planned maintenance events. Set to one of the following:\n- AS_NEEDED: Hosts are eligible to receive infrastructure and hypervisor updates as they become available.\n- RECURRENT: Hosts receive planned infrastructure and hypervisor updates on a periodic basis, but not more frequently than every 28 days. This minimizes the number of planned maintenance operations on individual hosts and reduces the frequency of disruptions, both live migrations and terminations, on individual VMs.\nPossible values are: `AS_NEEDED`, `RECURRENT`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the resource.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'nodeTemplate',
        'The URL of the node template to which this node group belongs.\n\n\n- - -',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'zone',
        'Zone where this node group is located',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'An optional textual description of the resource.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'maintenanceWindow',
        'contains properties for the timeframe of maintenance\nStructure is documented below.',
        () => compute_NodeGroupMaintenanceWindow_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'shareSettings',
        'Share settings for the node group.\nStructure is documented below.',
        () => compute_NodeGroupShareSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'autoscalingPolicy',
        'If you use sole-tenant nodes for your workloads, you can use the node\ngroup autoscaler to automatically manage the sizes of your node groups.\nOne of `initial_size` or `autoscaling_policy` must be configured on resource creation.\nStructure is documented below.',
        () => compute_NodeGroupAutoscalingPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'initialSize',
        'The initial number of nodes in the node group. One of `initial_size` or `autoscaling_policy` must be configured on resource creation.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'maintenancePolicy',
        'Specifies how to handle instances when a node in the group undergoes maintenance. Set to one of: DEFAULT, RESTART_IN_PLACE, or MIGRATE_WITHIN_NODE_GROUP. The default value is DEFAULT.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
