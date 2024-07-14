import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  compute_InstanceGroupManagerVersion,
  compute_InstanceGroupManagerVersion_GetTypes,
} from "../types/compute_InstanceGroupManagerVersion";
import {
  compute_InstanceGroupManagerStatefulDisk,
  compute_InstanceGroupManagerStatefulDisk_GetTypes,
} from "../types/compute_InstanceGroupManagerStatefulDisk";
import {
  compute_InstanceGroupManagerStatefulExternalIp,
  compute_InstanceGroupManagerStatefulExternalIp_GetTypes,
} from "../types/compute_InstanceGroupManagerStatefulExternalIp";
import {
  compute_InstanceGroupManagerAutoHealingPolicies,
  compute_InstanceGroupManagerAutoHealingPolicies_GetTypes,
} from "../types/compute_InstanceGroupManagerAutoHealingPolicies";
import {
  compute_InstanceGroupManagerNamedPort,
  compute_InstanceGroupManagerNamedPort_GetTypes,
} from "../types/compute_InstanceGroupManagerNamedPort";
import {
  compute_InstanceGroupManagerUpdatePolicy,
  compute_InstanceGroupManagerUpdatePolicy_GetTypes,
} from "../types/compute_InstanceGroupManagerUpdatePolicy";
import {
  compute_InstanceGroupManagerAllInstancesConfig,
  compute_InstanceGroupManagerAllInstancesConfig_GetTypes,
} from "../types/compute_InstanceGroupManagerAllInstancesConfig";
import {
  compute_InstanceGroupManagerStatefulInternalIp,
  compute_InstanceGroupManagerStatefulInternalIp_GetTypes,
} from "../types/compute_InstanceGroupManagerStatefulInternalIp";
import {
  compute_InstanceGroupManagerStatus,
  compute_InstanceGroupManagerStatus_GetTypes,
} from "../types/compute_InstanceGroupManagerStatus";
import {
  compute_InstanceGroupManagerInstanceLifecyclePolicy,
  compute_InstanceGroupManagerInstanceLifecyclePolicy_GetTypes,
} from "../types/compute_InstanceGroupManagerInstanceLifecyclePolicy";

export interface InstanceGroupManagerArgs {
  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  project?: string;

  /*
The autohealing policies for this managed instance
group. You can specify only one value. Structure is documented below. For more information, see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances#monitoring_groups).
*/
  autoHealingPolicies?: compute_InstanceGroupManagerAutoHealingPolicies;

  /*
An optional textual description of the instance
group manager.
*/
  description?: string;

  // The instance lifecycle policy for this managed instance group.
  instanceLifecyclePolicy?: compute_InstanceGroupManagerInstanceLifecyclePolicy;

  /*
The named port configuration. See the section below
for details on configuration.
*/
  namedPorts?: Array<compute_InstanceGroupManagerNamedPort>;

  /*
The name of the instance group manager. Must be 1-63
characters long and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt). Supported characters
include lowercase letters, numbers, and hyphens.
*/
  name?: string;

  /*
When used with `wait_for_instances` it specifies the status to wait for.
When `STABLE` is specified this resource will wait until the instances are stable before returning. When `UPDATED` is
set, it will wait for the version target to be reached and any per instance configs to be effective as well as all
instances to be stable before returning. The possible values are `STABLE` and `UPDATED`
*/
  waitForInstancesStatus?: string;

  /*
The update policy for this managed instance group. Structure is documented below. For more information, see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/updating-managed-instance-groups) and [API](https://cloud.google.com/compute/docs/reference/rest/v1/instanceGroupManagers/patch)

- - -
*/
  updatePolicy?: compute_InstanceGroupManagerUpdatePolicy;

  /*
Application versions managed by this instance group. Each
version deals with a specific instance template, allowing canary release scenarios.
Structure is documented below.
*/
  versions?: Array<compute_InstanceGroupManagerVersion>;

  /*
Whether to wait for all instances to be created/updated before
returning. Note that if this is set to true and the operation does not succeed, this provider will
continue trying until it times out.
*/
  waitForInstances?: boolean;

  /*
Properties to set on all instances in the group. After setting
allInstancesConfig on the group, you must update the group's instances to
apply the configuration.
*/
  allInstancesConfig?: compute_InstanceGroupManagerAllInstancesConfig;

  /*
The base instance name to use for
instances in this group. The value must be a valid
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt) name. Supported characters
are lowercase letters, numbers, and hyphens (-). Instances are named by
appending a hyphen and a random four-character string to the base instance
name.
*/
  baseInstanceName?: string;

  /*
Pagination behavior of the `listManagedInstances` API
method for this managed instance group. Valid values are: `PAGELESS`, `PAGINATED`.
If `PAGELESS` (default), Pagination is disabled for the group's `listManagedInstances` API method.
`maxResults` and `pageToken` query parameters are ignored and all instances are returned in a single
response. If `PAGINATED`, pagination is enabled, `maxResults` and `pageToken` query parameters are
respected.
*/
  listManagedInstancesResults?: string;

  /*
The target number of running instances for this managed instance group. This value should always be explicitly set
unless this resource is attached to an autoscaler, in which case it should never be set. Defaults to 0.
*/
  targetSize?: number;

  /*
The zone that instances in this group should be created
in.

- - -
*/
  zone?: string;

  // Disks created on the instances that will be preserved on instance delete, update, etc. Structure is documented below. For more information see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/configuring-stateful-disks-in-migs).
  statefulDisks?: Array<compute_InstanceGroupManagerStatefulDisk>;

  // External network IPs assigned to the instances that will be preserved on instance delete, update, etc. This map is keyed with the network interface name. Structure is documented below.
  statefulExternalIps?: Array<compute_InstanceGroupManagerStatefulExternalIp>;

  // Internal network IPs assigned to the instances that will be preserved on instance delete, update, etc. This map is keyed with the network interface name. Structure is documented below.
  statefulInternalIps?: Array<compute_InstanceGroupManagerStatefulInternalIp>;

  /*
The full URL of all target pools to which new
instances in the group are added. Updating the target pools attribute does
not affect existing instances.
*/
  targetPools?: Array<string>;
}
export class InstanceGroupManager extends Resource {
  // External network IPs assigned to the instances that will be preserved on instance delete, update, etc. This map is keyed with the network interface name. Structure is documented below.
  public statefulExternalIps?: Array<compute_InstanceGroupManagerStatefulExternalIp>;

  /*
The full URL of all target pools to which new
instances in the group are added. Updating the target pools attribute does
not affect existing instances.
*/
  public targetPools?: Array<string>;

  /*
The zone that instances in this group should be created
in.

- - -
*/
  public zone?: string;

  /*
Properties to set on all instances in the group. After setting
allInstancesConfig on the group, you must update the group's instances to
apply the configuration.
*/
  public allInstancesConfig?: compute_InstanceGroupManagerAllInstancesConfig;

  /*
The named port configuration. See the section below
for details on configuration.
*/
  public namedPorts?: Array<compute_InstanceGroupManagerNamedPort>;

  /*
Application versions managed by this instance group. Each
version deals with a specific instance template, allowing canary release scenarios.
Structure is documented below.
*/
  public versions?: Array<compute_InstanceGroupManagerVersion>;

  /*
The name of the instance group manager. Must be 1-63
characters long and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt). Supported characters
include lowercase letters, numbers, and hyphens.
*/
  public name?: string;

  // Creation timestamp in RFC3339 text format.
  public creationTimestamp?: string;

  /*
An optional textual description of the instance
group manager.
*/
  public description?: string;

  // The instance lifecycle policy for this managed instance group.
  public instanceLifecyclePolicy?: compute_InstanceGroupManagerInstanceLifecyclePolicy;

  //
  public operation?: string;

  // The URL of the created resource.
  public selfLink?: string;

  /*
Whether to wait for all instances to be created/updated before
returning. Note that if this is set to true and the operation does not succeed, this provider will
continue trying until it times out.
*/
  public waitForInstances?: boolean;

  /*
The autohealing policies for this managed instance
group. You can specify only one value. Structure is documented below. For more information, see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances#monitoring_groups).
*/
  public autoHealingPolicies?: compute_InstanceGroupManagerAutoHealingPolicies;

  // The fingerprint of the instance group manager.
  public fingerprint?: string;

  // The full URL of the instance group created by the manager.
  public instanceGroup?: string;

  /*
Pagination behavior of the `listManagedInstances` API
method for this managed instance group. Valid values are: `PAGELESS`, `PAGINATED`.
If `PAGELESS` (default), Pagination is disabled for the group's `listManagedInstances` API method.
`maxResults` and `pageToken` query parameters are ignored and all instances are returned in a single
response. If `PAGINATED`, pagination is enabled, `maxResults` and `pageToken` query parameters are
respected.
*/
  public listManagedInstancesResults?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public project?: string;

  // Disks created on the instances that will be preserved on instance delete, update, etc. Structure is documented below. For more information see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/configuring-stateful-disks-in-migs).
  public statefulDisks?: Array<compute_InstanceGroupManagerStatefulDisk>;

  // Internal network IPs assigned to the instances that will be preserved on instance delete, update, etc. This map is keyed with the network interface name. Structure is documented below.
  public statefulInternalIps?: Array<compute_InstanceGroupManagerStatefulInternalIp>;

  // The status of this managed instance group.
  public statuses?: Array<compute_InstanceGroupManagerStatus>;

  /*
The base instance name to use for
instances in this group. The value must be a valid
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt) name. Supported characters
are lowercase letters, numbers, and hyphens (-). Instances are named by
appending a hyphen and a random four-character string to the base instance
name.
*/
  public baseInstanceName?: string;

  /*
The update policy for this managed instance group. Structure is documented below. For more information, see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/updating-managed-instance-groups) and [API](https://cloud.google.com/compute/docs/reference/rest/v1/instanceGroupManagers/patch)

- - -
*/
  public updatePolicy?: compute_InstanceGroupManagerUpdatePolicy;

  /*
When used with `wait_for_instances` it specifies the status to wait for.
When `STABLE` is specified this resource will wait until the instances are stable before returning. When `UPDATED` is
set, it will wait for the version target to be reached and any per instance configs to be effective as well as all
instances to be stable before returning. The possible values are `STABLE` and `UPDATED`
*/
  public waitForInstancesStatus?: string;

  /*
The target number of running instances for this managed instance group. This value should always be explicitly set
unless this resource is attached to an autoscaler, in which case it should never be set. Defaults to 0.
*/
  public targetSize?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "baseInstanceName",
        "The base instance name to use for\ninstances in this group. The value must be a valid\n[RFC1035](https://www.ietf.org/rfc/rfc1035.txt) name. Supported characters\nare lowercase letters, numbers, and hyphens (-). Instances are named by\nappending a hyphen and a random four-character string to the base instance\nname.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "statefulDisks",
        "Disks created on the instances that will be preserved on instance delete, update, etc. Structure is documented below. For more information see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/configuring-stateful-disks-in-migs).",
        compute_InstanceGroupManagerStatefulDisk_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the instance group manager. Must be 1-63\ncharacters long and comply with\n[RFC1035](https://www.ietf.org/rfc/rfc1035.txt). Supported characters\ninclude lowercase letters, numbers, and hyphens.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "updatePolicy",
        "The update policy for this managed instance group. Structure is documented below. For more information, see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/updating-managed-instance-groups) and [API](https://cloud.google.com/compute/docs/reference/rest/v1/instanceGroupManagers/patch)\n\n- - -",
        compute_InstanceGroupManagerUpdatePolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "waitForInstances",
        "Whether to wait for all instances to be created/updated before\nreturning. Note that if this is set to true and the operation does not succeed, this provider will\ncontinue trying until it times out.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "listManagedInstancesResults",
        "Pagination behavior of the `listManagedInstances` API\nmethod for this managed instance group. Valid values are: `PAGELESS`, `PAGINATED`.\nIf `PAGELESS` (default), Pagination is disabled for the group's `listManagedInstances` API method.\n`maxResults` and `pageToken` query parameters are ignored and all instances are returned in a single\nresponse. If `PAGINATED`, pagination is enabled, `maxResults` and `pageToken` query parameters are\nrespected.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "targetSize",
        "The target number of running instances for this managed instance group. This value should always be explicitly set\nunless this resource is attached to an autoscaler, in which case it should never be set. Defaults to 0.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "zone",
        "The zone that instances in this group should be created\nin.\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "instanceLifecyclePolicy",
        "The instance lifecycle policy for this managed instance group.",
        compute_InstanceGroupManagerInstanceLifecyclePolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "namedPorts",
        "The named port configuration. See the section below\nfor details on configuration.",
        compute_InstanceGroupManagerNamedPort_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "statefulExternalIps",
        "External network IPs assigned to the instances that will be preserved on instance delete, update, etc. This map is keyed with the network interface name. Structure is documented below.",
        compute_InstanceGroupManagerStatefulExternalIp_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "targetPools",
        "The full URL of all target pools to which new\ninstances in the group are added. Updating the target pools attribute does\nnot affect existing instances.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "waitForInstancesStatus",
        "When used with `wait_for_instances` it specifies the status to wait for.\nWhen `STABLE` is specified this resource will wait until the instances are stable before returning. When `UPDATED` is\nset, it will wait for the version target to be reached and any per instance configs to be effective as well as all\ninstances to be stable before returning. The possible values are `STABLE` and `UPDATED`",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "versions",
        "Application versions managed by this instance group. Each\nversion deals with a specific instance template, allowing canary release scenarios.\nStructure is documented below.",
        compute_InstanceGroupManagerVersion_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "allInstancesConfig",
        "Properties to set on all instances in the group. After setting\nallInstancesConfig on the group, you must update the group's instances to\napply the configuration.",
        compute_InstanceGroupManagerAllInstancesConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional textual description of the instance\ngroup manager.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "autoHealingPolicies",
        "The autohealing policies for this managed instance\ngroup. You can specify only one value. Structure is documented below. For more information, see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances#monitoring_groups).",
        compute_InstanceGroupManagerAutoHealingPolicies_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "statefulInternalIps",
        "Internal network IPs assigned to the instances that will be preserved on instance delete, update, etc. This map is keyed with the network interface name. Structure is documented below.",
        compute_InstanceGroupManagerStatefulInternalIp_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
