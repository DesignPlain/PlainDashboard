import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Osconfig_GuestPoliciesRecipe,
  Osconfig_GuestPoliciesRecipe_GetTypes,
} from "../types/Osconfig_GuestPoliciesRecipe";
import {
  Osconfig_GuestPoliciesAssignment,
  Osconfig_GuestPoliciesAssignment_GetTypes,
} from "../types/Osconfig_GuestPoliciesAssignment";
import {
  Osconfig_GuestPoliciesPackageRepository,
  Osconfig_GuestPoliciesPackageRepository_GetTypes,
} from "../types/Osconfig_GuestPoliciesPackageRepository";
import {
  Osconfig_GuestPoliciesPackage,
  Osconfig_GuestPoliciesPackage_GetTypes,
} from "../types/Osconfig_GuestPoliciesPackage";

export interface GuestPoliciesArgs {
  // The etag for this guest policy. If this is provided on update, it must match the server's etag.
  Etag?: string;

  /*
The logical name of the guest policy in the project with the following restrictions:
- Must contain only lowercase letters, numbers, and hyphens.
- Must start with a letter.
- Must be between 1-63 characters.
- Must end with a number or a letter.
- Must be unique within the project.
*/
  GuestPolicyId?: string;

  /*
A list of package repositories to configure on the VM instance.
This is done before any other configs are applied so they can use these repos.
Package repositories are only configured if the corresponding package manager(s) are available.
Structure is documented below.
*/
  PackageRepositories?: Array<Osconfig_GuestPoliciesPackageRepository>;

  /*
The software packages to be managed by this policy.
Structure is documented below.
*/
  Packages?: Array<Osconfig_GuestPoliciesPackage>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
A list of Recipes to install on the VM instance.
Structure is documented below.
*/
  Recipes?: Array<Osconfig_GuestPoliciesRecipe>;

  /*
Specifies the VM instances that are assigned to this policy. This allows you to target sets
or groups of VM instances by different parameters such as labels, names, OS, or zones.
If left empty, all VM instances underneath this policy are targeted.
At the same level in the resource hierarchy (that is within a project), the service prevents
the creation of multiple policies that conflict with each other.
For more information, see how the service
[handles assignment conflicts](https://cloud.google.com/compute/docs/os-config-management/create-guest-policy#handle-conflicts).
Structure is documented below.
*/
  Assignment?: Osconfig_GuestPoliciesAssignment;

  // Description of the guest policy. Length of the description is limited to 1024 characters.
  Description?: string;
}
export class GuestPolicies extends Resource {
  /*
Time this guest policy was created. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds.
Example: "2014-10-02T15:01:23.045123456Z".
*/
  public CreateTime?: string;

  // Description of the guest policy. Length of the description is limited to 1024 characters.
  public Description?: string;

  /*
The logical name of the guest policy in the project with the following restrictions:
- Must contain only lowercase letters, numbers, and hyphens.
- Must start with a letter.
- Must be between 1-63 characters.
- Must end with a number or a letter.
- Must be unique within the project.
*/
  public GuestPolicyId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Last time this guest policy was updated. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds.
Example: "2014-10-02T15:01:23.045123456Z".
*/
  public UpdateTime?: string;

  /*
Specifies the VM instances that are assigned to this policy. This allows you to target sets
or groups of VM instances by different parameters such as labels, names, OS, or zones.
If left empty, all VM instances underneath this policy are targeted.
At the same level in the resource hierarchy (that is within a project), the service prevents
the creation of multiple policies that conflict with each other.
For more information, see how the service
[handles assignment conflicts](https://cloud.google.com/compute/docs/os-config-management/create-guest-policy#handle-conflicts).
Structure is documented below.
*/
  public Assignment?: Osconfig_GuestPoliciesAssignment;

  // The etag for this guest policy. If this is provided on update, it must match the server's etag.
  public Etag?: string;

  // The name of the repository.
  public Name?: string;

  /*
A list of package repositories to configure on the VM instance.
This is done before any other configs are applied so they can use these repos.
Package repositories are only configured if the corresponding package manager(s) are available.
Structure is documented below.
*/
  public PackageRepositories?: Array<Osconfig_GuestPoliciesPackageRepository>;

  /*
The software packages to be managed by this policy.
Structure is documented below.
*/
  public Packages?: Array<Osconfig_GuestPoliciesPackage>;

  /*
A list of Recipes to install on the VM instance.
Structure is documented below.
*/
  public Recipes?: Array<Osconfig_GuestPoliciesRecipe>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "Packages",
        "The software packages to be managed by this policy.\nStructure is documented below.",
        Osconfig_GuestPoliciesPackage_GetTypes(),
        false,
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
        InputType.Array,
        "Recipes",
        "A list of Recipes to install on the VM instance.\nStructure is documented below.",
        Osconfig_GuestPoliciesRecipe_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Assignment",
        "Specifies the VM instances that are assigned to this policy. This allows you to target sets\nor groups of VM instances by different parameters such as labels, names, OS, or zones.\nIf left empty, all VM instances underneath this policy are targeted.\nAt the same level in the resource hierarchy (that is within a project), the service prevents\nthe creation of multiple policies that conflict with each other.\nFor more information, see how the service\n[handles assignment conflicts](https://cloud.google.com/compute/docs/os-config-management/create-guest-policy#handle-conflicts).\nStructure is documented below.",
        Osconfig_GuestPoliciesAssignment_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Description of the guest policy. Length of the description is limited to 1024 characters.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Etag",
        "The etag for this guest policy. If this is provided on update, it must match the server's etag.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "GuestPolicyId",
        "The logical name of the guest policy in the project with the following restrictions:\n* Must contain only lowercase letters, numbers, and hyphens.\n* Must start with a letter.\n* Must be between 1-63 characters.\n* Must end with a number or a letter.\n* Must be unique within the project.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "PackageRepositories",
        "A list of package repositories to configure on the VM instance.\nThis is done before any other configs are applied so they can use these repos.\nPackage repositories are only configured if the corresponding package manager(s) are available.\nStructure is documented below.",
        Osconfig_GuestPoliciesPackageRepository_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
