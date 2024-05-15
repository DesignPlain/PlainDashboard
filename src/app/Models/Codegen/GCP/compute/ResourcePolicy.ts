import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_ResourcePolicySnapshotSchedulePolicy,
  Compute_ResourcePolicySnapshotSchedulePolicy_GetTypes,
} from "../types/Compute_ResourcePolicySnapshotSchedulePolicy";
import {
  Compute_ResourcePolicyDiskConsistencyGroupPolicy,
  Compute_ResourcePolicyDiskConsistencyGroupPolicy_GetTypes,
} from "../types/Compute_ResourcePolicyDiskConsistencyGroupPolicy";
import {
  Compute_ResourcePolicyGroupPlacementPolicy,
  Compute_ResourcePolicyGroupPlacementPolicy_GetTypes,
} from "../types/Compute_ResourcePolicyGroupPlacementPolicy";
import {
  Compute_ResourcePolicyInstanceSchedulePolicy,
  Compute_ResourcePolicyInstanceSchedulePolicy_GetTypes,
} from "../types/Compute_ResourcePolicyInstanceSchedulePolicy";

export interface ResourcePolicyArgs {
  // An optional description of this resource. Provide this property when you create the resource.
  Description?: string;

  /*
Replication consistency group for asynchronous disk replication.
Structure is documented below.
*/
  DiskConsistencyGroupPolicy?: Compute_ResourcePolicyDiskConsistencyGroupPolicy;

  /*
Resource policy for instances used for placement configuration.
Structure is documented below.
*/
  GroupPlacementPolicy?: Compute_ResourcePolicyGroupPlacementPolicy;

  /*
Resource policy for scheduling instance operations.
Structure is documented below.
*/
  InstanceSchedulePolicy?: Compute_ResourcePolicyInstanceSchedulePolicy;

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
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // Region where resource policy resides.
  Region?: string;

  /*
Policy for creating snapshots of persistent disks.
Structure is documented below.
*/
  SnapshotSchedulePolicy?: Compute_ResourcePolicySnapshotSchedulePolicy;
}
export class ResourcePolicy extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Region where resource policy resides.
  public Region?: string;

  /*
Replication consistency group for asynchronous disk replication.
Structure is documented below.
*/
  public DiskConsistencyGroupPolicy?: Compute_ResourcePolicyDiskConsistencyGroupPolicy;

  /*
Resource policy for scheduling instance operations.
Structure is documented below.
*/
  public InstanceSchedulePolicy?: Compute_ResourcePolicyInstanceSchedulePolicy;

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
  public Name?: string;

  /*
Policy for creating snapshots of persistent disks.
Structure is documented below.
*/
  public SnapshotSchedulePolicy?: Compute_ResourcePolicySnapshotSchedulePolicy;

  // An optional description of this resource. Provide this property when you create the resource.
  public Description?: string;

  /*
Resource policy for instances used for placement configuration.
Structure is documented below.
*/
  public GroupPlacementPolicy?: Compute_ResourcePolicyGroupPlacementPolicy;

  // The URI of the created resource.
  public SelfLink?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource. Provide this property when you create the resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "DiskConsistencyGroupPolicy",
        "Replication consistency group for asynchronous disk replication.\nStructure is documented below.",
        Compute_ResourcePolicyDiskConsistencyGroupPolicy_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "GroupPlacementPolicy",
        "Resource policy for instances used for placement configuration.\nStructure is documented below.",
        Compute_ResourcePolicyGroupPlacementPolicy_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "InstanceSchedulePolicy",
        "Resource policy for scheduling instance operations.\nStructure is documented below.",
        Compute_ResourcePolicyInstanceSchedulePolicy_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the resource, provided by the client when initially creating\nthe resource. The resource name must be 1-63 characters long, and comply\nwith RFC1035. Specifically, the name must be 1-63 characters long and\nmatch the regular expression `a-z`? which means the\nfirst character must be a lowercase letter, and all following characters\nmust be a dash, lowercase letter, or digit, except the last character,\nwhich cannot be a dash.\n\n\n- - -",
        [],
        false,
        true,
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
        InputType.String,
        "Region",
        "Region where resource policy resides.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "SnapshotSchedulePolicy",
        "Policy for creating snapshots of persistent disks.\nStructure is documented below.",
        Compute_ResourcePolicySnapshotSchedulePolicy_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
