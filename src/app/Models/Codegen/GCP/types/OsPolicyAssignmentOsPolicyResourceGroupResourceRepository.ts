import { OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryApt } from "./OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryApt";
import { OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryGoo } from "./OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryGoo";
import { OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryYum } from "./OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryYum";
import { OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryZypper } from "./OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryZypper";

export interface OsPolicyAssignmentOsPolicyResourceGroupResourceRepository {
  /*
An Apt Repository. Structure is
documented below.
*/
  Apt?: OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryApt;

  /*
A Goo Repository. Structure is
documented below.
*/
  Goo?: OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryGoo;

  /*
A Yum Repository. Structure is
documented below.
*/
  Yum?: OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryYum;

  /*
A Zypper Repository. Structure is
documented below.
*/
  Zypper?: OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryZypper;
}
