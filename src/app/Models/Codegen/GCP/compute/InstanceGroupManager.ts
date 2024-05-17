import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_InstanceGroupManagerInstanceLifecyclePolicy,
  Compute_InstanceGroupManagerInstanceLifecyclePolicy_GetTypes,
} from "../types/Compute_InstanceGroupManagerInstanceLifecyclePolicy";
import {
  Compute_InstanceGroupManagerUpdatePolicy,
  Compute_InstanceGroupManagerUpdatePolicy_GetTypes,
} from "../types/Compute_InstanceGroupManagerUpdatePolicy";
import {
  Compute_InstanceGroupManagerVersion,
  Compute_InstanceGroupManagerVersion_GetTypes,
} from "../types/Compute_InstanceGroupManagerVersion";
import {
  Compute_InstanceGroupManagerStatefulExternalIp,
  Compute_InstanceGroupManagerStatefulExternalIp_GetTypes,
} from "../types/Compute_InstanceGroupManagerStatefulExternalIp";
import {
  Compute_InstanceGroupManagerStatefulInternalIp,
  Compute_InstanceGroupManagerStatefulInternalIp_GetTypes,
} from "../types/Compute_InstanceGroupManagerStatefulInternalIp";
import {
  Compute_InstanceGroupManagerStatefulDisk,
  Compute_InstanceGroupManagerStatefulDisk_GetTypes,
} from "../types/Compute_InstanceGroupManagerStatefulDisk";
import {
  Compute_InstanceGroupManagerStatus,
  Compute_InstanceGroupManagerStatus_GetTypes,
} from "../types/Compute_InstanceGroupManagerStatus";
import {
  Compute_InstanceGroupManagerAutoHealingPolicies,
  Compute_InstanceGroupManagerAutoHealingPolicies_GetTypes,
} from "../types/Compute_InstanceGroupManagerAutoHealingPolicies";
import {
  Compute_InstanceGroupManagerNamedPort,
  Compute_InstanceGroupManagerNamedPort_GetTypes,
} from "../types/Compute_InstanceGroupManagerNamedPort";
import {
  Compute_InstanceGroupManagerAllInstancesConfig,
  Compute_InstanceGroupManagerAllInstancesConfig_GetTypes,
} from "../types/Compute_InstanceGroupManagerAllInstancesConfig";

export interface InstanceGroupManagerArgs {
  /*
The autohealing policies for this managed instance
group. You can specify only one value. Structure is documented below. For more information, see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances#monitoring_groups).
*/
  AutoHealingPolicies?: Compute_InstanceGroupManagerAutoHealingPolicies;

  /*
Pagination behavior of the `listManagedInstances` API
method for this managed instance group. Valid values are: `PAGELESS`, `PAGINATED`.
If `PAGELESS` (default), Pagination is disabled for the group's `listManagedInstances` API method.
`maxResults` and `pageToken` query parameters are ignored and all instances are returned in a single
response. If `PAGINATED`, pagination is enabled, `maxResults` and `pageToken` query parameters are
respected.
*/
  ListManagedInstancesResults?: string;

  /*
The name of the instance group manager. Must be 1-63
characters long and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt). Supported characters
include lowercase letters, numbers, and hyphens.
*/
  Name?: string;

  /*
The named port configuration. See the section below
for details on configuration.
*/
  NamedPorts?: Array<Compute_InstanceGroupManagerNamedPort>;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  Project?: string;

  /*
The update policy for this managed instance group. Structure is documented below. For more information, see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/updating-managed-instance-groups) and [API](https://cloud.google.com/compute/docs/reference/rest/v1/instanceGroupManagers/patch)

- - -
*/
  UpdatePolicy?: Compute_InstanceGroupManagerUpdatePolicy;

  /*
Application versions managed by this instance group. Each
version deals with a specific instance template, allowing canary release scenarios.
Structure is documented below.
*/
  Versions?: Array<Compute_InstanceGroupManagerVersion>;

  /*
When used with `wait_for_instances` it specifies the status to wait for.
When `STABLE` is specified this resource will wait until the instances are stable before returning. When `UPDATED` is
set, it will wait for the version target to be reached and any per instance configs to be effective as well as all
instances to be stable before returning. The possible values are `STABLE` and `UPDATED`
*/
  WaitForInstancesStatus?: string;

  /*
An optional textual description of the instance
group manager.
*/
  Description?: string;

  /*
The full URL of all target pools to which new
instances in the group are added. Updating the target pools attribute does
not affect existing instances.
*/
  TargetPools?: Array<string>;

  /*
Properties to set on all instances in the group. After setting
allInstancesConfig on the group, you must update the group's instances to
apply the configuration.
*/
  AllInstancesConfig?: Compute_InstanceGroupManagerAllInstancesConfig;

  // External network IPs assigned to the instances that will be preserved on instance delete, update, etc. This map is keyed with the network interface name. Structure is documented below.
  StatefulExternalIps?: Array<Compute_InstanceGroupManagerStatefulExternalIp>;

  // Internal network IPs assigned to the instances that will be preserved on instance delete, update, etc. This map is keyed with the network interface name. Structure is documented below.
  StatefulInternalIps?: Array<Compute_InstanceGroupManagerStatefulInternalIp>;

  /*
The base instance name to use for
instances in this group. The value must be a valid
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt) name. Supported characters
are lowercase letters, numbers, and hyphens (-). Instances are named by
appending a hyphen and a random four-character string to the base instance
name.
*/
  BaseInstanceName?: string;

  // The instance lifecycle policy for this managed instance group.
  InstanceLifecyclePolicy?: Compute_InstanceGroupManagerInstanceLifecyclePolicy;

  // Disks created on the instances that will be preserved on instance delete, update, etc. Structure is documented below. For more information see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/configuring-stateful-disks-in-migs).
  StatefulDisks?: Array<Compute_InstanceGroupManagerStatefulDisk>;

  /*
The target number of running instances for this managed instance group. This value should always be explicitly set
unless this resource is attached to an autoscaler, in which case it should never be set. Defaults to 0.
*/
  TargetSize?: number;

  /*
Whether to wait for all instances to be created/updated before
returning. Note that if this is set to true and the operation does not succeed, this provider will
continue trying until it times out.
*/
  WaitForInstances?: boolean;

  /*
The zone that instances in this group should be created
in.

- - -
*/
  Zone?: string;
}
export class InstanceGroupManager extends Resource {
  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public Project?: string;

  // Internal network IPs assigned to the instances that will be preserved on instance delete, update, etc. This map is keyed with the network interface name. Structure is documented below.
  public StatefulInternalIps?: Array<Compute_InstanceGroupManagerStatefulInternalIp>;

  /*
Application versions managed by this instance group. Each
version deals with a specific instance template, allowing canary release scenarios.
Structure is documented below.
*/
  public Versions?: Array<Compute_InstanceGroupManagerVersion>;

  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  /*
An optional textual description of the instance
group manager.
*/
  public Description?: string;

  // The instance lifecycle policy for this managed instance group.
  public InstanceLifecyclePolicy?: Compute_InstanceGroupManagerInstanceLifecyclePolicy;

  // The status of this managed instance group.
  public Statuses?: Array<Compute_InstanceGroupManagerStatus>;

  /*
Whether to wait for all instances to be created/updated before
returning. Note that if this is set to true and the operation does not succeed, this provider will
continue trying until it times out.
*/
  public WaitForInstances?: boolean;

  /*
When used with `wait_for_instances` it specifies the status to wait for.
When `STABLE` is specified this resource will wait until the instances are stable before returning. When `UPDATED` is
set, it will wait for the version target to be reached and any per instance configs to be effective as well as all
instances to be stable before returning. The possible values are `STABLE` and `UPDATED`
*/
  public WaitForInstancesStatus?: string;

  /*
Properties to set on all instances in the group. After setting
allInstancesConfig on the group, you must update the group's instances to
apply the configuration.
*/
  public AllInstancesConfig?: Compute_InstanceGroupManagerAllInstancesConfig;

  // The fingerprint of the instance group manager.
  public Fingerprint?: string;

  //
  public Operation?: string;

  /*
The named port configuration. See the section below
for details on configuration.
*/
  public NamedPorts?: Array<Compute_InstanceGroupManagerNamedPort>;

  // The URL of the created resource.
  public SelfLink?: string;

  // Disks created on the instances that will be preserved on instance delete, update, etc. Structure is documented below. For more information see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/configuring-stateful-disks-in-migs).
  public StatefulDisks?: Array<Compute_InstanceGroupManagerStatefulDisk>;

  // External network IPs assigned to the instances that will be preserved on instance delete, update, etc. This map is keyed with the network interface name. Structure is documented below.
  public StatefulExternalIps?: Array<Compute_InstanceGroupManagerStatefulExternalIp>;

  /*
The target number of running instances for this managed instance group. This value should always be explicitly set
unless this resource is attached to an autoscaler, in which case it should never be set. Defaults to 0.
*/
  public TargetSize?: number;

  /*
The autohealing policies for this managed instance
group. You can specify only one value. Structure is documented below. For more information, see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances#monitoring_groups).
*/
  public AutoHealingPolicies?: Compute_InstanceGroupManagerAutoHealingPolicies;

  /*
The base instance name to use for
instances in this group. The value must be a valid
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt) name. Supported characters
are lowercase letters, numbers, and hyphens (-). Instances are named by
appending a hyphen and a random four-character string to the base instance
name.
*/
  public BaseInstanceName?: string;

  // The full URL of the instance group created by the manager.
  public InstanceGroup?: string;

  /*
The zone that instances in this group should be created
in.

- - -
*/
  public Zone?: string;

  /*
The update policy for this managed instance group. Structure is documented below. For more information, see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/updating-managed-instance-groups) and [API](https://cloud.google.com/compute/docs/reference/rest/v1/instanceGroupManagers/patch)

- - -
*/
  public UpdatePolicy?: Compute_InstanceGroupManagerUpdatePolicy;

  /*
Pagination behavior of the `listManagedInstances` API
method for this managed instance group. Valid values are: `PAGELESS`, `PAGINATED`.
If `PAGELESS` (default), Pagination is disabled for the group's `listManagedInstances` API method.
`maxResults` and `pageToken` query parameters are ignored and all instances are returned in a single
response. If `PAGINATED`, pagination is enabled, `maxResults` and `pageToken` query parameters are
respected.
*/
  public ListManagedInstancesResults?: string;

  /*
The name of the instance group manager. Must be 1-63
characters long and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt). Supported characters
include lowercase letters, numbers, and hyphens.
*/
  public Name?: string;

  /*
The full URL of all target pools to which new
instances in the group are added. Updating the target pools attribute does
not affect existing instances.
*/
  public TargetPools?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "NamedPorts",
        "The named port configuration. See the section below\nfor details on configuration.",
        Compute_InstanceGroupManagerNamedPort_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "StatefulInternalIps",
        "Internal network IPs assigned to the instances that will be preserved on instance delete, update, etc. This map is keyed with the network interface name. Structure is documented below.",
        Compute_InstanceGroupManagerStatefulInternalIp_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Zone",
        "The zone that instances in this group should be created\nin.\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the instance group manager. Must be 1-63\ncharacters long and comply with\n[RFC1035](https://www.ietf.org/rfc/rfc1035.txt). Supported characters\ninclude lowercase letters, numbers, and hyphens.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "UpdatePolicy",
        "The update policy for this managed instance group. Structure is documented below. For more information, see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/updating-managed-instance-groups) and [API](https://cloud.google.com/compute/docs/reference/rest/v1/instanceGroupManagers/patch)\n\n- - -",
        Compute_InstanceGroupManagerUpdatePolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Versions",
        "Application versions managed by this instance group. Each\nversion deals with a specific instance template, allowing canary release scenarios.\nStructure is documented below.",
        Compute_InstanceGroupManagerVersion_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "BaseInstanceName",
        "The base instance name to use for\ninstances in this group. The value must be a valid\n[RFC1035](https://www.ietf.org/rfc/rfc1035.txt) name. Supported characters\nare lowercase letters, numbers, and hyphens (-). Instances are named by\nappending a hyphen and a random four-character string to the base instance\nname.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "InstanceLifecyclePolicy",
        "The instance lifecycle policy for this managed instance group.",
        Compute_InstanceGroupManagerInstanceLifecyclePolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "AutoHealingPolicies",
        "The autohealing policies for this managed instance\ngroup. You can specify only one value. Structure is documented below. For more information, see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances#monitoring_groups).",
        Compute_InstanceGroupManagerAutoHealingPolicies_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "WaitForInstancesStatus",
        "When used with `wait_for_instances` it specifies the status to wait for.\nWhen `STABLE` is specified this resource will wait until the instances are stable before returning. When `UPDATED` is\nset, it will wait for the version target to be reached and any per instance configs to be effective as well as all\ninstances to be stable before returning. The possible values are `STABLE` and `UPDATED`",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional textual description of the instance\ngroup manager.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "TargetPools",
        "The full URL of all target pools to which new\ninstances in the group are added. Updating the target pools attribute does\nnot affect existing instances.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "StatefulExternalIps",
        "External network IPs assigned to the instances that will be preserved on instance delete, update, etc. This map is keyed with the network interface name. Structure is documented below.",
        Compute_InstanceGroupManagerStatefulExternalIp_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "TargetSize",
        "The target number of running instances for this managed instance group. This value should always be explicitly set\nunless this resource is attached to an autoscaler, in which case it should never be set. Defaults to 0.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ListManagedInstancesResults",
        "Pagination behavior of the `listManagedInstances` API\nmethod for this managed instance group. Valid values are: `PAGELESS`, `PAGINATED`.\nIf `PAGELESS` (default), Pagination is disabled for the group's `listManagedInstances` API method.\n`maxResults` and `pageToken` query parameters are ignored and all instances are returned in a single\nresponse. If `PAGINATED`, pagination is enabled, `maxResults` and `pageToken` query parameters are\nrespected.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "AllInstancesConfig",
        "Properties to set on all instances in the group. After setting\nallInstancesConfig on the group, you must update the group's instances to\napply the configuration.",
        Compute_InstanceGroupManagerAllInstancesConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "StatefulDisks",
        "Disks created on the instances that will be preserved on instance delete, update, etc. Structure is documented below. For more information see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/configuring-stateful-disks-in-migs).",
        Compute_InstanceGroupManagerStatefulDisk_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "WaitForInstances",
        "Whether to wait for all instances to be created/updated before\nreturning. Note that if this is set to true and the operation does not succeed, this provider will\ncontinue trying until it times out.",
        [],
        false,
        false,
      ),
    ];
  }
}
