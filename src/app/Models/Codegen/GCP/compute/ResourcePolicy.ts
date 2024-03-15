import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ResourcePolicySnapshotSchedulePolicy } from "../types/ResourcePolicySnapshotSchedulePolicy";
import { ResourcePolicyDiskConsistencyGroupPolicy } from "../types/ResourcePolicyDiskConsistencyGroupPolicy";
import { ResourcePolicyGroupPlacementPolicy } from "../types/ResourcePolicyGroupPlacementPolicy";
import { ResourcePolicyInstanceSchedulePolicy } from "../types/ResourcePolicyInstanceSchedulePolicy";

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
  SnapshotSchedulePolicy?: ResourcePolicySnapshotSchedulePolicy;

  // An optional description of this resource. Provide this property when you create the resource.
  Description?: string;

  /*
Replication consistency group for asynchronous disk replication.
Structure is documented below.
*/
  DiskConsistencyGroupPolicy?: ResourcePolicyDiskConsistencyGroupPolicy;

  /*
Resource policy for instances used for placement configuration.
Structure is documented below.
*/
  GroupPlacementPolicy?: ResourcePolicyGroupPlacementPolicy;

  /*
Resource policy for scheduling instance operations.
Structure is documented below.
*/
  InstanceSchedulePolicy?: ResourcePolicyInstanceSchedulePolicy;
}
export class ResourcePolicy extends Resource {
  /*
Resource policy for instances used for placement configuration.
Structure is documented below.
*/
  public GroupPlacementPolicy?: ResourcePolicyGroupPlacementPolicy;

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
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Policy for creating snapshots of persistent disks.
Structure is documented below.
*/
  public SnapshotSchedulePolicy?: ResourcePolicySnapshotSchedulePolicy;

  // An optional description of this resource. Provide this property when you create the resource.
  public Description?: string;

  /*
Replication consistency group for asynchronous disk replication.
Structure is documented below.
*/
  public DiskConsistencyGroupPolicy?: ResourcePolicyDiskConsistencyGroupPolicy;

  /*
Resource policy for scheduling instance operations.
Structure is documented below.
*/
  public InstanceSchedulePolicy?: ResourcePolicyInstanceSchedulePolicy;

  // Region where resource policy resides.
  public Region?: string;

  // The URI of the created resource.
  public SelfLink?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource. Provide this property when you create the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DiskConsistencyGroupPolicy",
        "Replication consistency group for asynchronous disk replication.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "GroupPlacementPolicy",
        "Resource policy for instances used for placement configuration.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "InstanceSchedulePolicy",
        "Resource policy for scheduling instance operations.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the resource, provided by the client when initially creating\nthe resource. The resource name must be 1-63 characters long, and comply\nwith RFC1035. Specifically, the name must be 1-63 characters long and\nmatch the regular expression `a-z`? which means the\nfirst character must be a lowercase letter, and all following characters\nmust be a dash, lowercase letter, or digit, except the last character,\nwhich cannot be a dash.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "Region where resource policy resides.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SnapshotSchedulePolicy",
        "Policy for creating snapshots of persistent disks.\nStructure is documented below.",
      ),
    ];
  }
}
