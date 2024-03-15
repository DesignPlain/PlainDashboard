import { OsPolicyAssignmentOsPolicyResourceGroupResourceExec } from "./OsPolicyAssignmentOsPolicyResourceGroupResourceExec";
import { OsPolicyAssignmentOsPolicyResourceGroupResourceFile } from "./OsPolicyAssignmentOsPolicyResourceGroupResourceFile";
import { OsPolicyAssignmentOsPolicyResourceGroupResourcePkg } from "./OsPolicyAssignmentOsPolicyResourceGroupResourcePkg";
import { OsPolicyAssignmentOsPolicyResourceGroupResourceRepository } from "./OsPolicyAssignmentOsPolicyResourceGroupResourceRepository";

export interface OsPolicyAssignmentOsPolicyResourceGroupResource {
  /*
Exec resource Structure is
documented below.
*/
  Exec?: OsPolicyAssignmentOsPolicyResourceGroupResourceExec;

  /*
File resource Structure is
documented below.
*/
  File?: OsPolicyAssignmentOsPolicyResourceGroupResourceFile;

  /*
The id of the resource with the following restrictions:

-   Must contain only lowercase letters, numbers, and hyphens.
-   Must start with a letter.
-   Must be between 1-63 characters.
-   Must end with a number or a letter.
-   Must be unique within the OS policy.
*/
  Id?: string;

  /*
Package resource Structure is
documented below.
*/
  Pkg?: OsPolicyAssignmentOsPolicyResourceGroupResourcePkg;

  /*
Package repository resource Structure is
documented below.
*/
  Repository?: OsPolicyAssignmentOsPolicyResourceGroupResourceRepository;
}
