import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  compute_ResourcePolicySnapshotSchedulePolicy,
  compute_ResourcePolicySnapshotSchedulePolicy_GetTypes,
} from '../types/compute_ResourcePolicySnapshotSchedulePolicy';
import {
  compute_ResourcePolicyDiskConsistencyGroupPolicy,
  compute_ResourcePolicyDiskConsistencyGroupPolicy_GetTypes,
} from '../types/compute_ResourcePolicyDiskConsistencyGroupPolicy';
import {
  compute_ResourcePolicyGroupPlacementPolicy,
  compute_ResourcePolicyGroupPlacementPolicy_GetTypes,
} from '../types/compute_ResourcePolicyGroupPlacementPolicy';
import {
  compute_ResourcePolicyInstanceSchedulePolicy,
  compute_ResourcePolicyInstanceSchedulePolicy_GetTypes,
} from '../types/compute_ResourcePolicyInstanceSchedulePolicy';

export interface ResourcePolicyArgs {
  /*
The name of the resource, provided by the client when initially creating
the resource. The resource name must be 1-63 characters long, and comply
with RFC1035. Specifically, the name must be 1-63 characters long and
match the regular expression `a-z`? which means the
first character must be a lowercase letter, and all following characters
must be a dash, lowercase letter, or digit, except the last character,
which cannot be a dash.


- - -
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // Region where resource policy resides.
  region?: string;

  /*
Policy for creating snapshots of persistent disks.
Structure is documented below.
*/
  snapshotSchedulePolicy?: compute_ResourcePolicySnapshotSchedulePolicy;

  // An optional description of this resource. Provide this property when you create the resource.
  description?: string;

  /*
Replication consistency group for asynchronous disk replication.
Structure is documented below.
*/
  diskConsistencyGroupPolicy?: compute_ResourcePolicyDiskConsistencyGroupPolicy;

  /*
Resource policy for instances used for placement configuration.
Structure is documented below.
*/
  groupPlacementPolicy?: compute_ResourcePolicyGroupPlacementPolicy;

  /*
Resource policy for scheduling instance operations.
Structure is documented below.
*/
  instanceSchedulePolicy?: compute_ResourcePolicyInstanceSchedulePolicy;
}
export class ResourcePolicy extends DS_Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // Region where resource policy resides.
  public region?: string;

  // The URI of the created resource.
  public selfLink?: string;

  // An optional description of this resource. Provide this property when you create the resource.
  public description?: string;

  /*
Resource policy for instances used for placement configuration.
Structure is documented below.
*/
  public groupPlacementPolicy?: compute_ResourcePolicyGroupPlacementPolicy;

  /*
Resource policy for scheduling instance operations.
Structure is documented below.
*/
  public instanceSchedulePolicy?: compute_ResourcePolicyInstanceSchedulePolicy;

  /*
The name of the resource, provided by the client when initially creating
the resource. The resource name must be 1-63 characters long, and comply
with RFC1035. Specifically, the name must be 1-63 characters long and
match the regular expression `a-z`? which means the
first character must be a lowercase letter, and all following characters
must be a dash, lowercase letter, or digit, except the last character,
which cannot be a dash.


- - -
*/
  public name?: string;

  /*
Replication consistency group for asynchronous disk replication.
Structure is documented below.
*/
  public diskConsistencyGroupPolicy?: compute_ResourcePolicyDiskConsistencyGroupPolicy;

  /*
Policy for creating snapshots of persistent disks.
Structure is documented below.
*/
  public snapshotSchedulePolicy?: compute_ResourcePolicySnapshotSchedulePolicy;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'groupPlacementPolicy',
        'Resource policy for instances used for placement configuration.\nStructure is documented below.',
        () => compute_ResourcePolicyGroupPlacementPolicy_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'instanceSchedulePolicy',
        'Resource policy for scheduling instance operations.\nStructure is documented below.',
        () => compute_ResourcePolicyInstanceSchedulePolicy_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the resource, provided by the client when initially creating\nthe resource. The resource name must be 1-63 characters long, and comply\nwith RFC1035. Specifically, the name must be 1-63 characters long and\nmatch the regular expression `a-z`? which means the\nfirst character must be a lowercase letter, and all following characters\nmust be a dash, lowercase letter, or digit, except the last character,\nwhich cannot be a dash.\n\n\n- - -',
        () => [],
        false,
        true,
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
        'region',
        'Region where resource policy resides.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'snapshotSchedulePolicy',
        'Policy for creating snapshots of persistent disks.\nStructure is documented below.',
        () => compute_ResourcePolicySnapshotSchedulePolicy_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'An optional description of this resource. Provide this property when you create the resource.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'diskConsistencyGroupPolicy',
        'Replication consistency group for asynchronous disk replication.\nStructure is documented below.',
        () => compute_ResourcePolicyDiskConsistencyGroupPolicy_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
