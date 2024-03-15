import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { RegionInstanceGroupManagerUpdatePolicy } from "../types/RegionInstanceGroupManagerUpdatePolicy";
import { RegionInstanceGroupManagerInstanceLifecyclePolicy } from "../types/RegionInstanceGroupManagerInstanceLifecyclePolicy";
import { RegionInstanceGroupManagerAllInstancesConfig } from "../types/RegionInstanceGroupManagerAllInstancesConfig";
import { RegionInstanceGroupManagerAutoHealingPolicies } from "../types/RegionInstanceGroupManagerAutoHealingPolicies";
import { RegionInstanceGroupManagerVersion } from "../types/RegionInstanceGroupManagerVersion";
import { RegionInstanceGroupManagerNamedPort } from "../types/RegionInstanceGroupManagerNamedPort";
import { RegionInstanceGroupManagerStatefulDisk } from "../types/RegionInstanceGroupManagerStatefulDisk";
import { RegionInstanceGroupManagerStatefulInternalIp } from "../types/RegionInstanceGroupManagerStatefulInternalIp";
import { RegionInstanceGroupManagerStatus } from "../types/RegionInstanceGroupManagerStatus";
import { RegionInstanceGroupManagerStatefulExternalIp } from "../types/RegionInstanceGroupManagerStatefulExternalIp";

export interface RegionInstanceGroupManagerArgs {
  /*
The named port configuration. See the section below
for details on configuration.
*/
  NamedPorts?: Array<RegionInstanceGroupManagerNamedPort>;

  /*
The region where the managed instance group resides. If not provided, the provider region is used.

- - -
*/
  Region?: string;

  /*
The full URL of all target pools to which new
instances in the group are added. Updating the target pools attribute does
not affect existing instances.
*/
  TargetPools?: Array<string>;

  // The update policy for this managed instance group. Structure is documented below. For more information, see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/updating-managed-instance-groups) and [API](https://cloud.google.com/compute/docs/reference/rest/beta/regionInstanceGroupManagers/patch)
  UpdatePolicy?: RegionInstanceGroupManagerUpdatePolicy;

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
  InstanceLifecyclePolicy?: RegionInstanceGroupManagerInstanceLifecyclePolicy;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  Project?: string;

  /*
External network IPs assigned to the instances that will be preserved on instance delete, update, etc. This map is keyed with the network interface name. Structure is documented below.

- - -
*/
  StatefulExternalIps?: Array<RegionInstanceGroupManagerStatefulExternalIp>;

  /*
The target number of running instances for this managed instance group. This value should always be explicitly set
unless this resource is attached to an autoscaler, in which case it should never be set. Defaults to 0.
*/
  TargetSize?: number;

  /*
Whether to wait for all instances to be created/updated before
returning. Note that if this is set to true and the operation does not succeed, the provider will
continue trying until it times out.
*/
  WaitForInstances?: boolean;

  /*
Properties to set on all instances in the group. After setting
allInstancesConfig on the group, you must update the group's instances to
apply the configuration.
*/
  AllInstancesConfig?: RegionInstanceGroupManagerAllInstancesConfig;

  /*
The autohealing policies for this managed instance
group. You can specify only one value. Structure is documented below. For more information, see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances#monitoring_groups).
*/
  AutoHealingPolicies?: RegionInstanceGroupManagerAutoHealingPolicies;

  // Disks created on the instances that will be preserved on instance delete, update, etc. Structure is documented below. For more information see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/configuring-stateful-disks-in-migs). Proactive cross zone instance redistribution must be disabled before you can update stateful disks on existing instance group managers. This can be controlled via the `update_policy`.
  StatefulDisks?: Array<RegionInstanceGroupManagerStatefulDisk>;

  // Internal network IPs assigned to the instances that will be preserved on instance delete, update, etc. This map is keyed with the network interface name. Structure is documented below.
  StatefulInternalIps?: Array<RegionInstanceGroupManagerStatefulInternalIp>;

  /*
An optional textual description of the instance
group manager.
*/
  Description?: string;

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
Application versions managed by this instance group. Each
version deals with a specific instance template, allowing canary release scenarios.
Structure is documented below.
*/
  Versions?: Array<RegionInstanceGroupManagerVersion>;

  /*
When used with `wait_for_instances` it specifies the status to wait for.
When `STABLE` is specified this resource will wait until the instances are stable before returning. When `UPDATED` is
set, it will wait for the version target to be reached and any per instance configs to be effective as well as all
instances to be stable before returning. The possible values are `STABLE` and `UPDATED`
*/
  WaitForInstancesStatus?: string;

  // The shape to which the group converges either proactively or on resize events (depending on the value set in update_policy.0.instance_redistribution_type). For more information see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/regional-mig-distribution-shape).
  DistributionPolicyTargetShape?: string;

  /*
The distribution policy for this managed instance
group. You can specify one or more values. For more information, see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/distributing-instances-with-regional-instance-groups#selectingzones).
*/
  DistributionPolicyZones?: Array<string>;
}
export class RegionInstanceGroupManager extends Resource {
  // The instance lifecycle policy for this managed instance group.
  public InstanceLifecyclePolicy?: RegionInstanceGroupManagerInstanceLifecyclePolicy;

  // Disks created on the instances that will be preserved on instance delete, update, etc. Structure is documented below. For more information see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/configuring-stateful-disks-in-migs). Proactive cross zone instance redistribution must be disabled before you can update stateful disks on existing instance group managers. This can be controlled via the `update_policy`.
  public StatefulDisks?: Array<RegionInstanceGroupManagerStatefulDisk>;

  // Internal network IPs assigned to the instances that will be preserved on instance delete, update, etc. This map is keyed with the network interface name. Structure is documented below.
  public StatefulInternalIps?: Array<RegionInstanceGroupManagerStatefulInternalIp>;

  // The update policy for this managed instance group. Structure is documented below. For more information, see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/updating-managed-instance-groups) and [API](https://cloud.google.com/compute/docs/reference/rest/beta/regionInstanceGroupManagers/patch)
  public UpdatePolicy?: RegionInstanceGroupManagerUpdatePolicy;

  /*
Properties to set on all instances in the group. After setting
allInstancesConfig on the group, you must update the group's instances to
apply the configuration.
*/
  public AllInstancesConfig?: RegionInstanceGroupManagerAllInstancesConfig;

  // The fingerprint of the instance group manager.
  public Fingerprint?: string;

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
The full URL of all target pools to which new
instances in the group are added. Updating the target pools attribute does
not affect existing instances.
*/
  public TargetPools?: Array<string>;

  /*
The target number of running instances for this managed instance group. This value should always be explicitly set
unless this resource is attached to an autoscaler, in which case it should never be set. Defaults to 0.
*/
  public TargetSize?: number;

  /*
Whether to wait for all instances to be created/updated before
returning. Note that if this is set to true and the operation does not succeed, the provider will
continue trying until it times out.
*/
  public WaitForInstances?: boolean;

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

  // The shape to which the group converges either proactively or on resize events (depending on the value set in update_policy.0.instance_redistribution_type). For more information see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/regional-mig-distribution-shape).
  public DistributionPolicyTargetShape?: string;

  /*
The distribution policy for this managed instance
group. You can specify one or more values. For more information, see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/distributing-instances-with-regional-instance-groups#selectingzones).
*/
  public DistributionPolicyZones?: Array<string>;

  // The full URL of the instance group created by the manager.
  public InstanceGroup?: string;

  /*
The named port configuration. See the section below
for details on configuration.
*/
  public NamedPorts?: Array<RegionInstanceGroupManagerNamedPort>;

  // The URL of the created resource.
  public SelfLink?: string;

  /*
External network IPs assigned to the instances that will be preserved on instance delete, update, etc. This map is keyed with the network interface name. Structure is documented below.

- - -
*/
  public StatefulExternalIps?: Array<RegionInstanceGroupManagerStatefulExternalIp>;

  /*
The autohealing policies for this managed instance
group. You can specify only one value. Structure is documented below. For more information, see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances#monitoring_groups).
*/
  public AutoHealingPolicies?: RegionInstanceGroupManagerAutoHealingPolicies;

  /*
The name of the instance group manager. Must be 1-63
characters long and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt). Supported characters
include lowercase letters, numbers, and hyphens.
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The region where the managed instance group resides. If not provided, the provider region is used.

- - -
*/
  public Region?: string;

  // The status of this managed instance group.
  public Statuses?: Array<RegionInstanceGroupManagerStatus>;

  /*
Application versions managed by this instance group. Each
version deals with a specific instance template, allowing canary release scenarios.
Structure is documented below.
*/
  public Versions?: Array<RegionInstanceGroupManagerVersion>;

  /*
When used with `wait_for_instances` it specifies the status to wait for.
When `STABLE` is specified this resource will wait until the instances are stable before returning. When `UPDATED` is
set, it will wait for the version target to be reached and any per instance configs to be effective as well as all
instances to be stable before returning. The possible values are `STABLE` and `UPDATED`
*/
  public WaitForInstancesStatus?: string;

  /*
An optional textual description of the instance
group manager.
*/
  public Description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional textual description of the instance\ngroup manager.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The region where the managed instance group resides. If not provided, the provider region is used.\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "TargetSize",
        "The target number of running instances for this managed instance group. This value should always be explicitly set\nunless this resource is attached to an autoscaler, in which case it should never be set. Defaults to 0.",
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
        "StatefulDisks",
        "Disks created on the instances that will be preserved on instance delete, update, etc. Structure is documented below. For more information see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/configuring-stateful-disks-in-migs). Proactive cross zone instance redistribution must be disabled before you can update stateful disks on existing instance group managers. This can be controlled via the `update_policy`.",
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
        InputType.DropDown,
        "NamedPorts",
        "The named port configuration. See the section below\nfor details on configuration.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the instance group manager. Must be 1-63\ncharacters long and comply with\n[RFC1035](https://www.ietf.org/rfc/rfc1035.txt). Supported characters\ninclude lowercase letters, numbers, and hyphens.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Versions",
        "Application versions managed by this instance group. Each\nversion deals with a specific instance template, allowing canary release scenarios.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "DistributionPolicyZones",
        "The distribution policy for this managed instance\ngroup. You can specify one or more values. For more information, see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/distributing-instances-with-regional-instance-groups#selectingzones).",
      ),
      new DynamicUIProps(
        InputType.String,
        "UpdatePolicy",
        "The update policy for this managed instance group. Structure is documented below. For more information, see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/updating-managed-instance-groups) and [API](https://cloud.google.com/compute/docs/reference/rest/beta/regionInstanceGroupManagers/patch)",
      ),
      new DynamicUIProps(
        InputType.String,
        "BaseInstanceName",
        "The base instance name to use for\ninstances in this group. The value must be a valid\n[RFC1035](https://www.ietf.org/rfc/rfc1035.txt) name. Supported characters\nare lowercase letters, numbers, and hyphens (-). Instances are named by\nappending a hyphen and a random four-character string to the base instance\nname.",
      ),
      new DynamicUIProps(
        InputType.String,
        "InstanceLifecyclePolicy",
        "The instance lifecycle policy for this managed instance group.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "StatefulExternalIps",
        "External network IPs assigned to the instances that will be preserved on instance delete, update, etc. This map is keyed with the network interface name. Structure is documented below.\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "ListManagedInstancesResults",
        "Pagination behavior of the `listManagedInstances` API\nmethod for this managed instance group. Valid values are: `PAGELESS`, `PAGINATED`.\nIf `PAGELESS` (default), Pagination is disabled for the group's `listManagedInstances` API method.\n`maxResults` and `pageToken` query parameters are ignored and all instances are returned in a single\nresponse. If `PAGINATED`, pagination is enabled, `maxResults` and `pageToken` query parameters are\nrespected.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DistributionPolicyTargetShape",
        "The shape to which the group converges either proactively or on resize events (depending on the value set in update_policy.0.instance_redistribution_type). For more information see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/regional-mig-distribution-shape).",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "TargetPools",
        "The full URL of all target pools to which new\ninstances in the group are added. Updating the target pools attribute does\nnot affect existing instances.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "WaitForInstances",
        "Whether to wait for all instances to be created/updated before\nreturning. Note that if this is set to true and the operation does not succeed, the provider will\ncontinue trying until it times out.",
      ),
    ];
  }
}
