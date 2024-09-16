import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  compute_RegionInstanceGroupManagerAllInstancesConfig,
  compute_RegionInstanceGroupManagerAllInstancesConfig_GetTypes,
} from '../types/compute_RegionInstanceGroupManagerAllInstancesConfig';
import {
  compute_RegionInstanceGroupManagerStatefulExternalIp,
  compute_RegionInstanceGroupManagerStatefulExternalIp_GetTypes,
} from '../types/compute_RegionInstanceGroupManagerStatefulExternalIp';
import {
  compute_RegionInstanceGroupManagerAutoHealingPolicies,
  compute_RegionInstanceGroupManagerAutoHealingPolicies_GetTypes,
} from '../types/compute_RegionInstanceGroupManagerAutoHealingPolicies';
import {
  compute_RegionInstanceGroupManagerInstanceLifecyclePolicy,
  compute_RegionInstanceGroupManagerInstanceLifecyclePolicy_GetTypes,
} from '../types/compute_RegionInstanceGroupManagerInstanceLifecyclePolicy';
import {
  compute_RegionInstanceGroupManagerNamedPort,
  compute_RegionInstanceGroupManagerNamedPort_GetTypes,
} from '../types/compute_RegionInstanceGroupManagerNamedPort';
import {
  compute_RegionInstanceGroupManagerVersion,
  compute_RegionInstanceGroupManagerVersion_GetTypes,
} from '../types/compute_RegionInstanceGroupManagerVersion';
import {
  compute_RegionInstanceGroupManagerStatus,
  compute_RegionInstanceGroupManagerStatus_GetTypes,
} from '../types/compute_RegionInstanceGroupManagerStatus';
import {
  compute_RegionInstanceGroupManagerStatefulInternalIp,
  compute_RegionInstanceGroupManagerStatefulInternalIp_GetTypes,
} from '../types/compute_RegionInstanceGroupManagerStatefulInternalIp';
import {
  compute_RegionInstanceGroupManagerUpdatePolicy,
  compute_RegionInstanceGroupManagerUpdatePolicy_GetTypes,
} from '../types/compute_RegionInstanceGroupManagerUpdatePolicy';
import {
  compute_RegionInstanceGroupManagerStatefulDisk,
  compute_RegionInstanceGroupManagerStatefulDisk_GetTypes,
} from '../types/compute_RegionInstanceGroupManagerStatefulDisk';

export interface RegionInstanceGroupManagerArgs {
  // The shape to which the group converges either proactively or on resize events (depending on the value set in update_policy.0.instance_redistribution_type). For more information see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/regional-mig-distribution-shape).
  distributionPolicyTargetShape?: string;

  /*
The name of the instance group manager. Must be 1-63
characters long and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt). Supported characters
include lowercase letters, numbers, and hyphens.
*/
  name?: string;

  /*
External network IPs assigned to the instances that will be preserved on instance delete, update, etc. This map is keyed with the network interface name. Structure is documented below.

- - -
*/
  statefulExternalIps?: Array<compute_RegionInstanceGroupManagerStatefulExternalIp>;

  // Internal network IPs assigned to the instances that will be preserved on instance delete, update, etc. This map is keyed with the network interface name. Structure is documented below.
  statefulInternalIps?: Array<compute_RegionInstanceGroupManagerStatefulInternalIp>;

  // The update policy for this managed instance group. Structure is documented below. For more information, see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/updating-managed-instance-groups) and [API](https://cloud.google.com/compute/docs/reference/rest/beta/regionInstanceGroupManagers/patch)
  updatePolicy?: compute_RegionInstanceGroupManagerUpdatePolicy;

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
An optional textual description of the instance
group manager.
*/
  description?: string;

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
The region where the managed instance group resides. If not provided, the provider region is used.

- - -
*/
  region?: string;

  // Disks created on the instances that will be preserved on instance delete, update, etc. Structure is documented below. For more information see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/configuring-stateful-disks-in-migs). Proactive cross zone instance redistribution must be disabled before you can update stateful disks on existing instance group managers. This can be controlled via the `update_policy`.
  statefulDisks?: Array<compute_RegionInstanceGroupManagerStatefulDisk>;

  /*
When used with `wait_for_instances` it specifies the status to wait for.
When `STABLE` is specified this resource will wait until the instances are stable before returning. When `UPDATED` is
set, it will wait for the version target to be reached and any per instance configs to be effective as well as all
instances to be stable before returning. The possible values are `STABLE` and `UPDATED`
*/
  waitForInstancesStatus?: string;

  /*
The autohealing policies for this managed instance
group. You can specify only one value. Structure is documented below. For more information, see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances#monitoring_groups).
*/
  autoHealingPolicies?: compute_RegionInstanceGroupManagerAutoHealingPolicies;

  /*
The named port configuration. See the section below
for details on configuration.
*/
  namedPorts?: Array<compute_RegionInstanceGroupManagerNamedPort>;

  // The instance lifecycle policy for this managed instance group.
  instanceLifecyclePolicy?: compute_RegionInstanceGroupManagerInstanceLifecyclePolicy;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  project?: string;

  /*
The full URL of all target pools to which new
instances in the group are added. Updating the target pools attribute does
not affect existing instances.
*/
  targetPools?: Array<string>;

  /*
The target number of running instances for this managed instance group. This value should always be explicitly set
unless this resource is attached to an autoscaler, in which case it should never be set. Defaults to 0.
*/
  targetSize?: number;

  /*
Application versions managed by this instance group. Each
version deals with a specific instance template, allowing canary release scenarios.
Structure is documented below.
*/
  versions?: Array<compute_RegionInstanceGroupManagerVersion>;

  /*
Whether to wait for all instances to be created/updated before
returning. Note that if this is set to true and the operation does not succeed, the provider will
continue trying until it times out.
*/
  waitForInstances?: boolean;

  /*
Properties to set on all instances in the group. After setting
allInstancesConfig on the group, you must update the group's instances to
apply the configuration.
*/
  allInstancesConfig?: compute_RegionInstanceGroupManagerAllInstancesConfig;

  /*
The distribution policy for this managed instance
group. You can specify one or more values. For more information, see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/distributing-instances-with-regional-instance-groups#selectingzones).
*/
  distributionPolicyZones?: Array<string>;
}
export class RegionInstanceGroupManager extends DS_Resource {
  /*
The distribution policy for this managed instance
group. You can specify one or more values. For more information, see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/distributing-instances-with-regional-instance-groups#selectingzones).
*/
  public distributionPolicyZones?: Array<string>;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public project?: string;

  /*
The region where the managed instance group resides. If not provided, the provider region is used.

- - -
*/
  public region?: string;

  // The status of this managed instance group.
  public statuses?: Array<compute_RegionInstanceGroupManagerStatus>;

  // The update policy for this managed instance group. Structure is documented below. For more information, see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/updating-managed-instance-groups) and [API](https://cloud.google.com/compute/docs/reference/rest/beta/regionInstanceGroupManagers/patch)
  public updatePolicy?: compute_RegionInstanceGroupManagerUpdatePolicy;

  /*
When used with `wait_for_instances` it specifies the status to wait for.
When `STABLE` is specified this resource will wait until the instances are stable before returning. When `UPDATED` is
set, it will wait for the version target to be reached and any per instance configs to be effective as well as all
instances to be stable before returning. The possible values are `STABLE` and `UPDATED`
*/
  public waitForInstancesStatus?: string;

  // Creation timestamp in RFC3339 text format.
  public creationTimestamp?: string;

  /*
Pagination behavior of the `listManagedInstances` API
method for this managed instance group. Valid values are: `PAGELESS`, `PAGINATED`.
If `PAGELESS` (default), Pagination is disabled for the group's `listManagedInstances` API method.
`maxResults` and `pageToken` query parameters are ignored and all instances are returned in a single
response. If `PAGINATED`, pagination is enabled, `maxResults` and `pageToken` query parameters are
respected.
*/
  public listManagedInstancesResults?: string;

  // The URL of the created resource.
  public selfLink?: string;

  // The fingerprint of the instance group manager.
  public fingerprint?: string;

  // The instance lifecycle policy for this managed instance group.
  public instanceLifecyclePolicy?: compute_RegionInstanceGroupManagerInstanceLifecyclePolicy;

  /*
The name of the instance group manager. Must be 1-63
characters long and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt). Supported characters
include lowercase letters, numbers, and hyphens.
*/
  public name?: string;

  /*
The named port configuration. See the section below
for details on configuration.
*/
  public namedPorts?: Array<compute_RegionInstanceGroupManagerNamedPort>;

  // Internal network IPs assigned to the instances that will be preserved on instance delete, update, etc. This map is keyed with the network interface name. Structure is documented below.
  public statefulInternalIps?: Array<compute_RegionInstanceGroupManagerStatefulInternalIp>;

  /*
Properties to set on all instances in the group. After setting
allInstancesConfig on the group, you must update the group's instances to
apply the configuration.
*/
  public allInstancesConfig?: compute_RegionInstanceGroupManagerAllInstancesConfig;

  /*
The autohealing policies for this managed instance
group. You can specify only one value. Structure is documented below. For more information, see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances#monitoring_groups).
*/
  public autoHealingPolicies?: compute_RegionInstanceGroupManagerAutoHealingPolicies;

  // The shape to which the group converges either proactively or on resize events (depending on the value set in update_policy.0.instance_redistribution_type). For more information see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/regional-mig-distribution-shape).
  public distributionPolicyTargetShape?: string;

  /*
Application versions managed by this instance group. Each
version deals with a specific instance template, allowing canary release scenarios.
Structure is documented below.
*/
  public versions?: Array<compute_RegionInstanceGroupManagerVersion>;

  /*
Whether to wait for all instances to be created/updated before
returning. Note that if this is set to true and the operation does not succeed, the provider will
continue trying until it times out.
*/
  public waitForInstances?: boolean;

  // Disks created on the instances that will be preserved on instance delete, update, etc. Structure is documented below. For more information see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/configuring-stateful-disks-in-migs). Proactive cross zone instance redistribution must be disabled before you can update stateful disks on existing instance group managers. This can be controlled via the `update_policy`.
  public statefulDisks?: Array<compute_RegionInstanceGroupManagerStatefulDisk>;

  /*
External network IPs assigned to the instances that will be preserved on instance delete, update, etc. This map is keyed with the network interface name. Structure is documented below.

- - -
*/
  public statefulExternalIps?: Array<compute_RegionInstanceGroupManagerStatefulExternalIp>;

  /*
The full URL of all target pools to which new
instances in the group are added. Updating the target pools attribute does
not affect existing instances.
*/
  public targetPools?: Array<string>;

  /*
The target number of running instances for this managed instance group. This value should always be explicitly set
unless this resource is attached to an autoscaler, in which case it should never be set. Defaults to 0.
*/
  public targetSize?: number;

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
An optional textual description of the instance
group manager.
*/
  public description?: string;

  // The full URL of the instance group created by the manager.
  public instanceGroup?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'description',
        'An optional textual description of the instance\ngroup manager.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'region',
        'The region where the managed instance group resides. If not provided, the provider region is used.\n\n- - -',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'statefulDisks',
        'Disks created on the instances that will be preserved on instance delete, update, etc. Structure is documented below. For more information see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/configuring-stateful-disks-in-migs). Proactive cross zone instance redistribution must be disabled before you can update stateful disks on existing instance group managers. This can be controlled via the `update_policy`.',
        () => compute_RegionInstanceGroupManagerStatefulDisk_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'waitForInstancesStatus',
        'When used with `wait_for_instances` it specifies the status to wait for.\nWhen `STABLE` is specified this resource will wait until the instances are stable before returning. When `UPDATED` is\nset, it will wait for the version target to be reached and any per instance configs to be effective as well as all\ninstances to be stable before returning. The possible values are `STABLE` and `UPDATED`',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'autoHealingPolicies',
        'The autohealing policies for this managed instance\ngroup. You can specify only one value. Structure is documented below. For more information, see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances#monitoring_groups).',
        () => compute_RegionInstanceGroupManagerAutoHealingPolicies_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'targetPools',
        'The full URL of all target pools to which new\ninstances in the group are added. Updating the target pools attribute does\nnot affect existing instances.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'distributionPolicyTargetShape',
        'The shape to which the group converges either proactively or on resize events (depending on the value set in update_policy.0.instance_redistribution_type). For more information see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/regional-mig-distribution-shape).',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'statefulExternalIps',
        'External network IPs assigned to the instances that will be preserved on instance delete, update, etc. This map is keyed with the network interface name. Structure is documented below.\n\n- - -',
        () => compute_RegionInstanceGroupManagerStatefulExternalIp_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'versions',
        'Application versions managed by this instance group. Each\nversion deals with a specific instance template, allowing canary release scenarios.\nStructure is documented below.',
        () => compute_RegionInstanceGroupManagerVersion_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'allInstancesConfig',
        "Properties to set on all instances in the group. After setting\nallInstancesConfig on the group, you must update the group's instances to\napply the configuration.",
        () => compute_RegionInstanceGroupManagerAllInstancesConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'waitForInstances',
        'Whether to wait for all instances to be created/updated before\nreturning. Note that if this is set to true and the operation does not succeed, the provider will\ncontinue trying until it times out.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the instance group manager. Must be 1-63\ncharacters long and comply with\n[RFC1035](https://www.ietf.org/rfc/rfc1035.txt). Supported characters\ninclude lowercase letters, numbers, and hyphens.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'instanceLifecyclePolicy',
        'The instance lifecycle policy for this managed instance group.',
        () =>
          compute_RegionInstanceGroupManagerInstanceLifecyclePolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'targetSize',
        'The target number of running instances for this managed instance group. This value should always be explicitly set\nunless this resource is attached to an autoscaler, in which case it should never be set. Defaults to 0.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'baseInstanceName',
        'The base instance name to use for\ninstances in this group. The value must be a valid\n[RFC1035](https://www.ietf.org/rfc/rfc1035.txt) name. Supported characters\nare lowercase letters, numbers, and hyphens (-). Instances are named by\nappending a hyphen and a random four-character string to the base instance\nname.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'listManagedInstancesResults',
        "Pagination behavior of the `listManagedInstances` API\nmethod for this managed instance group. Valid values are: `PAGELESS`, `PAGINATED`.\nIf `PAGELESS` (default), Pagination is disabled for the group's `listManagedInstances` API method.\n`maxResults` and `pageToken` query parameters are ignored and all instances are returned in a single\nresponse. If `PAGINATED`, pagination is enabled, `maxResults` and `pageToken` query parameters are\nrespected.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'namedPorts',
        'The named port configuration. See the section below\nfor details on configuration.',
        () => compute_RegionInstanceGroupManagerNamedPort_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'distributionPolicyZones',
        'The distribution policy for this managed instance\ngroup. You can specify one or more values. For more information, see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/distributing-instances-with-regional-instance-groups#selectingzones).',
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'statefulInternalIps',
        'Internal network IPs assigned to the instances that will be preserved on instance delete, update, etc. This map is keyed with the network interface name. Structure is documented below.',
        () => compute_RegionInstanceGroupManagerStatefulInternalIp_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'updatePolicy',
        'The update policy for this managed instance group. Structure is documented below. For more information, see the [official documentation](https://cloud.google.com/compute/docs/instance-groups/updating-managed-instance-groups) and [API](https://cloud.google.com/compute/docs/reference/rest/beta/regionInstanceGroupManagers/patch)',
        () => compute_RegionInstanceGroupManagerUpdatePolicy_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
