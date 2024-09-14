import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  osconfig_GuestPoliciesPackageRepository,
  osconfig_GuestPoliciesPackageRepository_GetTypes,
} from "../types/osconfig_GuestPoliciesPackageRepository";
import {
  osconfig_GuestPoliciesPackage,
  osconfig_GuestPoliciesPackage_GetTypes,
} from "../types/osconfig_GuestPoliciesPackage";
import {
  osconfig_GuestPoliciesRecipe,
  osconfig_GuestPoliciesRecipe_GetTypes,
} from "../types/osconfig_GuestPoliciesRecipe";
import {
  osconfig_GuestPoliciesAssignment,
  osconfig_GuestPoliciesAssignment_GetTypes,
} from "../types/osconfig_GuestPoliciesAssignment";

export interface GuestPoliciesArgs {
  /*
The logical name of the guest policy in the project with the following restrictions:
- Must contain only lowercase letters, numbers, and hyphens.
- Must start with a letter.
- Must be between 1-63 characters.
- Must end with a number or a letter.
- Must be unique within the project.
*/
  guestPolicyId?: string;

  /*
A list of package repositories to configure on the VM instance.
This is done before any other configs are applied so they can use these repos.
Package repositories are only configured if the corresponding package manager(s) are available.
Structure is documented below.
*/
  packageRepositories?: Array<osconfig_GuestPoliciesPackageRepository>;

  /*
The software packages to be managed by this policy.
Structure is documented below.
*/
  packages?: Array<osconfig_GuestPoliciesPackage>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
A list of Recipes to install on the VM instance.
Structure is documented below.
*/
  recipes?: Array<osconfig_GuestPoliciesRecipe>;

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
  assignment?: osconfig_GuestPoliciesAssignment;

  // Description of the guest policy. Length of the description is limited to 1024 characters.
  description?: string;

  // The etag for this guest policy. If this is provided on update, it must match the server's etag.
  etag?: string;
}
export class GuestPolicies extends DS_Resource {
  // Description of the guest policy. Length of the description is limited to 1024 characters.
  public description?: string;

  /*
The logical name of the guest policy in the project with the following restrictions:
- Must contain only lowercase letters, numbers, and hyphens.
- Must start with a letter.
- Must be between 1-63 characters.
- Must end with a number or a letter.
- Must be unique within the project.
*/
  public guestPolicyId?: string;

  /*
A list of package repositories to configure on the VM instance.
This is done before any other configs are applied so they can use these repos.
Package repositories are only configured if the corresponding package manager(s) are available.
Structure is documented below.
*/
  public packageRepositories?: Array<osconfig_GuestPoliciesPackageRepository>;

  /*
The software packages to be managed by this policy.
Structure is documented below.
*/
  public packages?: Array<osconfig_GuestPoliciesPackage>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

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
  public assignment?: osconfig_GuestPoliciesAssignment;

  // The etag for this guest policy. If this is provided on update, it must match the server's etag.
  public etag?: string;

  // The name of the repository.
  public name?: string;

  /*
A list of Recipes to install on the VM instance.
Structure is documented below.
*/
  public recipes?: Array<osconfig_GuestPoliciesRecipe>;

  /*
Last time this guest policy was updated. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds.
Example: "2014-10-02T15:01:23.045123456Z".
*/
  public updateTime?: string;

  /*
Time this guest policy was created. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds.
Example: "2014-10-02T15:01:23.045123456Z".
*/
  public createTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "etag",
        "The etag for this guest policy. If this is provided on update, it must match the server's etag.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "guestPolicyId",
        "The logical name of the guest policy in the project with the following restrictions:\n* Must contain only lowercase letters, numbers, and hyphens.\n* Must start with a letter.\n* Must be between 1-63 characters.\n* Must end with a number or a letter.\n* Must be unique within the project.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "packageRepositories",
        "A list of package repositories to configure on the VM instance.\nThis is done before any other configs are applied so they can use these repos.\nPackage repositories are only configured if the corresponding package manager(s) are available.\nStructure is documented below.",
        () => osconfig_GuestPoliciesPackageRepository_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "packages",
        "The software packages to be managed by this policy.\nStructure is documented below.",
        () => osconfig_GuestPoliciesPackage_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "recipes",
        "A list of Recipes to install on the VM instance.\nStructure is documented below.",
        () => osconfig_GuestPoliciesRecipe_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "assignment",
        "Specifies the VM instances that are assigned to this policy. This allows you to target sets\nor groups of VM instances by different parameters such as labels, names, OS, or zones.\nIf left empty, all VM instances underneath this policy are targeted.\nAt the same level in the resource hierarchy (that is within a project), the service prevents\nthe creation of multiple policies that conflict with each other.\nFor more information, see how the service\n[handles assignment conflicts](https://cloud.google.com/compute/docs/os-config-management/create-guest-policy#handle-conflicts).\nStructure is documented below.",
        () => osconfig_GuestPoliciesAssignment_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the guest policy. Length of the description is limited to 1024 characters.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
