import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { InstanceGroupManagerStatefulExternalIp } from "../types/InstanceGroupManagerStatefulExternalIp";
import { InstanceGroupManagerVersion } from "../types/InstanceGroupManagerVersion";
import { InstanceGroupManagerNamedPort } from "../types/InstanceGroupManagerNamedPort";
import { InstanceGroupManagerStatefulDisk } from "../types/InstanceGroupManagerStatefulDisk";
import { InstanceGroupManagerStatefulInternalIp } from "../types/InstanceGroupManagerStatefulInternalIp";
import { InstanceGroupManagerStatus } from "../types/InstanceGroupManagerStatus";
import { InstanceGroupManagerUpdatePolicy } from "../types/InstanceGroupManagerUpdatePolicy";
import { InstanceGroupManagerAutoHealingPolicies } from "../types/InstanceGroupManagerAutoHealingPolicies";
import { InstanceGroupManagerAllInstancesConfig } from "../types/InstanceGroupManagerAllInstancesConfig";
import { InstanceGroupManagerInstanceLifecyclePolicy } from "../types/InstanceGroupManagerInstanceLifecyclePolicy";

export interface InstanceGroupManagerArgs {
  // External network IPs assigned to the instances that will be preserved on instance delete, update, etc. This map is keyed with the network interface name. Structure is documented below.
  StatefulExternalIps?: Array<InstanceGroupManagerStatefulExternalIp>;

  /*
The update policy for this managed instance group. Structure is documented below. For more information, see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/updating-managed-instance-groups) and [API](https://cloud.google.com/compute/docs/reference/rest/v1/instanceGroupManagers/patch)

- - -
*/
  UpdatePolicy?: InstanceGroupManagerUpdatePolicy;

  /*
Application versions managed by this instance group. Each
version deals with a specific instance template, allowing canary release scenarios.
Structure is documented below.
*/
  Versions?: Array<InstanceGroupManagerVersion>;

  /*
The autohealing policies for this managed instance
group. You can specify only one value. Structure is documented below. For more information, see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances#monitoring_groups).
*/
  AutoHealingPolicies?: InstanceGroupManagerAutoHealingPolicies;

  /*
The named port configuration. See the section below
for details on configuration.
*/
  NamedPorts?: Array<InstanceGroupManagerNamedPort>;

  // Disks created on the instances that will be preserved on instance delete, update, etc. Structure is documented below. For more information see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/configuring-stateful-disks-in-migs).
  StatefulDisks?: Array<InstanceGroupManagerStatefulDisk>;

  // Internal network IPs assigned to the instances that will be preserved on instance delete, update, etc. This map is keyed with the network interface name. Structure is documented below.
  StatefulInternalIps?: Array<InstanceGroupManagerStatefulInternalIp>;

  /*
The full URL of all target pools to which new
instances in the group are added. Updating the target pools attribute does
not affect existing instances.
*/
  TargetPools?: Array<string>;

  /*
The target number of running instances for this managed instance group. This value should always be explicitly set
unless this resource is attached to an autoscaler, in which case it should never be set. Defaults to 0.
*/
  TargetSize?: number;

  /*
When used with `wait_for_instances` it specifies the status to wait for.
When `STABLE` is specified this resource will wait until the instances are stable before returning. When `UPDATED` is
set, it will wait for the version target to be reached and any per instance configs to be effective as well as all
instances to be stable before returning. The possible values are `STABLE` and `UPDATED`
*/
  WaitForInstancesStatus?: string;

  /*
Properties to set on all instances in the group. After setting
allInstancesConfig on the group, you must update the group's instances to
apply the configuration.
*/
  AllInstancesConfig?: InstanceGroupManagerAllInstancesConfig;

  /*
The base instance name to use for
instances in this group. The value must be a valid
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt) name. Supported characters
are lowercase letters, numbers, and hyphens (-). Instances are named by
appending a hyphen and a random four-character string to the base instance
name.
*/
  BaseInstanceName?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  Project?: string;

  /*
Whether to wait for all instances to be created/updated before
returning. Note that if this is set to true and the operation does not succeed, this provider will
continue trying until it times out.
*/
  WaitForInstances?: boolean;

  /*
An optional textual description of the instance
group manager.
*/
  Description?: string;

  // The instance lifecycle policy for this managed instance group.
  InstanceLifecyclePolicy?: InstanceGroupManagerInstanceLifecyclePolicy;

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
The zone that instances in this group should be created
in.

- - -
*/
  Zone?: string;
}
export class InstanceGroupManager extends Resource {
  /*
The autohealing policies for this managed instance
group. You can specify only one value. Structure is documented below. For more information, see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances#monitoring_groups).
*/
  public AutoHealingPolicies?: InstanceGroupManagerAutoHealingPolicies;

  // The URL of the created resource.
  public SelfLink?: string;

  // External network IPs assigned to the instances that will be preserved on instance delete, update, etc. This map is keyed with the network interface name. Structure is documented below.
  public StatefulExternalIps?: Array<InstanceGroupManagerStatefulExternalIp>;

  // The status of this managed instance group.
  public Statuses?: Array<InstanceGroupManagerStatus>;

  /*
The update policy for this managed instance group. Structure is documented below. For more information, see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/updating-managed-instance-groups) and [API](https://cloud.google.com/compute/docs/reference/rest/v1/instanceGroupManagers/patch)

- - -
*/
  public UpdatePolicy?: InstanceGroupManagerUpdatePolicy;

  // Internal network IPs assigned to the instances that will be preserved on instance delete, update, etc. This map is keyed with the network interface name. Structure is documented below.
  public StatefulInternalIps?: Array<InstanceGroupManagerStatefulInternalIp>;

  /*
The full URL of all target pools to which new
instances in the group are added. Updating the target pools attribute does
not affect existing instances.
*/
  public TargetPools?: Array<string>;

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
The zone that instances in this group should be created
in.

- - -
*/
  public Zone?: string;

  /*
An optional textual description of the instance
group manager.
*/
  public Description?: string;

  // The full URL of the instance group created by the manager.
  public InstanceGroup?: string;

  //
  public Operation?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Application versions managed by this instance group. Each
version deals with a specific instance template, allowing canary release scenarios.
Structure is documented below.
*/
  public Versions?: Array<InstanceGroupManagerVersion>;

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
The named port configuration. See the section below
for details on configuration.
*/
  public NamedPorts?: Array<InstanceGroupManagerNamedPort>;

  /*
Properties to set on all instances in the group. After setting
allInstancesConfig on the group, you must update the group's instances to
apply the configuration.
*/
  public AllInstancesConfig?: InstanceGroupManagerAllInstancesConfig;

  /*
The base instance name to use for
instances in this group. The value must be a valid
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt) name. Supported characters
are lowercase letters, numbers, and hyphens (-). Instances are named by
appending a hyphen and a random four-character string to the base instance
name.
*/
  public BaseInstanceName?: string;

  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  // The fingerprint of the instance group manager.
  public Fingerprint?: string;

  // The instance lifecycle policy for this managed instance group.
  public InstanceLifecyclePolicy?: InstanceGroupManagerInstanceLifecyclePolicy;

  // Disks created on the instances that will be preserved on instance delete, update, etc. Structure is documented below. For more information see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/configuring-stateful-disks-in-migs).
  public StatefulDisks?: Array<InstanceGroupManagerStatefulDisk>;

  /*
The target number of running instances for this managed instance group. This value should always be explicitly set
unless this resource is attached to an autoscaler, in which case it should never be set. Defaults to 0.
*/
  public TargetSize?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.DropDown,
        "NamedPorts",
        "The named port configuration. See the section below\nfor details on configuration.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "StatefulDisks",
        "Disks created on the instances that will be preserved on instance delete, update, etc. Structure is documented below. For more information see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/configuring-stateful-disks-in-migs).",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "WaitForInstances",
        "Whether to wait for all instances to be created/updated before\nreturning. Note that if this is set to true and the operation does not succeed, this provider will\ncontinue trying until it times out.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "StatefulExternalIps",
        "External network IPs assigned to the instances that will be preserved on instance delete, update, etc. This map is keyed with the network interface name. Structure is documented below.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Versions",
        "Application versions managed by this instance group. Each\nversion deals with a specific instance template, allowing canary release scenarios.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "AllInstancesConfig",
        "Properties to set on all instances in the group. After setting\nallInstancesConfig on the group, you must update the group's instances to\napply the configuration.",
      ),
      new DynamicUIProps(
        InputType.String,
        "AutoHealingPolicies",
        "The autohealing policies for this managed instance\ngroup. You can specify only one value. Structure is documented below. For more information, see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances#monitoring_groups).",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "TargetPools",
        "The full URL of all target pools to which new\ninstances in the group are added. Updating the target pools attribute does\nnot affect existing instances.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "TargetSize",
        "The target number of running instances for this managed instance group. This value should always be explicitly set\nunless this resource is attached to an autoscaler, in which case it should never be set. Defaults to 0.",
      ),
      new DynamicUIProps(
        InputType.String,
        "BaseInstanceName",
        "The base instance name to use for\ninstances in this group. The value must be a valid\n[RFC1035](https://www.ietf.org/rfc/rfc1035.txt) name. Supported characters\nare lowercase letters, numbers, and hyphens (-). Instances are named by\nappending a hyphen and a random four-character string to the base instance\nname.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional textual description of the instance\ngroup manager.",
      ),
      new DynamicUIProps(
        InputType.String,
        "InstanceLifecyclePolicy",
        "The instance lifecycle policy for this managed instance group.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the instance group manager. Must be 1-63\ncharacters long and comply with\n[RFC1035](https://www.ietf.org/rfc/rfc1035.txt). Supported characters\ninclude lowercase letters, numbers, and hyphens.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Zone",
        "The zone that instances in this group should be created\nin.\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "UpdatePolicy",
        "The update policy for this managed instance group. Structure is documented below. For more information, see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/updating-managed-instance-groups) and [API](https://cloud.google.com/compute/docs/reference/rest/v1/instanceGroupManagers/patch)\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "StatefulInternalIps",
        "Internal network IPs assigned to the instances that will be preserved on instance delete, update, etc. This map is keyed with the network interface name. Structure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "WaitForInstancesStatus",
        "When used with `wait_for_instances` it specifies the status to wait for.\nWhen `STABLE` is specified this resource will wait until the instances are stable before returning. When `UPDATED` is\nset, it will wait for the version target to be reached and any per instance configs to be effective as well as all\ninstances to be stable before returning. The possible values are `STABLE` and `UPDATED`",
      ),
      new DynamicUIProps(
        InputType.String,
        "ListManagedInstancesResults",
        "Pagination behavior of the `listManagedInstances` API\nmethod for this managed instance group. Valid values are: `PAGELESS`, `PAGINATED`.\nIf `PAGELESS` (default), Pagination is disabled for the group's `listManagedInstances` API method.\n`maxResults` and `pageToken` query parameters are ignored and all instances are returned in a single\nresponse. If `PAGINATED`, pagination is enabled, `maxResults` and `pageToken` query parameters are\nrespected.",
      ),
    ];
  }
}
