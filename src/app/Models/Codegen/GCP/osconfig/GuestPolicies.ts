import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { GuestPoliciesAssignment } from "../types/GuestPoliciesAssignment";
import { GuestPoliciesPackageRepository } from "../types/GuestPoliciesPackageRepository";
import { GuestPoliciesPackage } from "../types/GuestPoliciesPackage";
import { GuestPoliciesRecipe } from "../types/GuestPoliciesRecipe";

export interface GuestPoliciesArgs {
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
  Assignment?: GuestPoliciesAssignment;

  // Description of the guest policy. Length of the description is limited to 1024 characters.
  Description?: string;

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
  PackageRepositories?: Array<GuestPoliciesPackageRepository>;

  /*
The software packages to be managed by this policy.
Structure is documented below.
*/
  Packages?: Array<GuestPoliciesPackage>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
A list of Recipes to install on the VM instance.
Structure is documented below.
*/
  Recipes?: Array<GuestPoliciesRecipe>;
}
export class GuestPolicies extends Resource {
  // Description of the guest policy. Length of the description is limited to 1024 characters.
  public Description?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The logical name of the guest policy in the project with the following restrictions:
- Must contain only lowercase letters, numbers, and hyphens.
- Must start with a letter.
- Must be between 1-63 characters.
- Must end with a number or a letter.
- Must be unique within the project.
*/
  public GuestPolicyId?: string;

  // The name of the repository.
  public Name?: string;

  /*
A list of package repositories to configure on the VM instance.
This is done before any other configs are applied so they can use these repos.
Package repositories are only configured if the corresponding package manager(s) are available.
Structure is documented below.
*/
  public PackageRepositories?: Array<GuestPoliciesPackageRepository>;

  /*
The software packages to be managed by this policy.
Structure is documented below.
*/
  public Packages?: Array<GuestPoliciesPackage>;

  /*
A list of Recipes to install on the VM instance.
Structure is documented below.
*/
  public Recipes?: Array<GuestPoliciesRecipe>;

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
  public Assignment?: GuestPoliciesAssignment;

  /*
Time this guest policy was created. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds.
Example: "2014-10-02T15:01:23.045123456Z".
*/
  public CreateTime?: string;

  // The etag for this guest policy. If this is provided on update, it must match the server's etag.
  public Etag?: string;

  /*
Last time this guest policy was updated. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds.
Example: "2014-10-02T15:01:23.045123456Z".
*/
  public UpdateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Recipes",
        "A list of Recipes to install on the VM instance.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Assignment",
        "Specifies the VM instances that are assigned to this policy. This allows you to target sets\nor groups of VM instances by different parameters such as labels, names, OS, or zones.\nIf left empty, all VM instances underneath this policy are targeted.\nAt the same level in the resource hierarchy (that is within a project), the service prevents\nthe creation of multiple policies that conflict with each other.\nFor more information, see how the service\n[handles assignment conflicts](https://cloud.google.com/compute/docs/os-config-management/create-guest-policy#handle-conflicts).\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Description of the guest policy. Length of the description is limited to 1024 characters.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Etag",
        "The etag for this guest policy. If this is provided on update, it must match the server's etag.",
      ),
      new DynamicUIProps(
        InputType.String,
        "GuestPolicyId",
        "The logical name of the guest policy in the project with the following restrictions:\n* Must contain only lowercase letters, numbers, and hyphens.\n* Must start with a letter.\n* Must be between 1-63 characters.\n* Must end with a number or a letter.\n* Must be unique within the project.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "PackageRepositories",
        "A list of package repositories to configure on the VM instance.\nThis is done before any other configs are applied so they can use these repos.\nPackage repositories are only configured if the corresponding package manager(s) are available.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Packages",
        "The software packages to be managed by this policy.\nStructure is documented below.",
      ),
    ];
  }
}
