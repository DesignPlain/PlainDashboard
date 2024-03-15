import { OsPolicyAssignmentOsPolicyResourceGroupResourcePkgMsi } from "./OsPolicyAssignmentOsPolicyResourceGroupResourcePkgMsi";
import { OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpm } from "./OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpm";
import { OsPolicyAssignmentOsPolicyResourceGroupResourcePkgYum } from "./OsPolicyAssignmentOsPolicyResourceGroupResourcePkgYum";
import { OsPolicyAssignmentOsPolicyResourceGroupResourcePkgZypper } from "./OsPolicyAssignmentOsPolicyResourceGroupResourcePkgZypper";
import { OsPolicyAssignmentOsPolicyResourceGroupResourcePkgApt } from "./OsPolicyAssignmentOsPolicyResourceGroupResourcePkgApt";
import { OsPolicyAssignmentOsPolicyResourceGroupResourcePkgDeb } from "./OsPolicyAssignmentOsPolicyResourceGroupResourcePkgDeb";
import { OsPolicyAssignmentOsPolicyResourceGroupResourcePkgGooget } from "./OsPolicyAssignmentOsPolicyResourceGroupResourcePkgGooget";

export interface OsPolicyAssignmentOsPolicyResourceGroupResourcePkg {
  /*
A package managed by YUM. Structure is
documented below.
*/
  Yum?: OsPolicyAssignmentOsPolicyResourceGroupResourcePkgYum;

  /*
A package managed by Zypper. Structure is
documented below.
*/
  Zypper?: OsPolicyAssignmentOsPolicyResourceGroupResourcePkgZypper;

  /*
A package managed by Apt. Structure is
documented below.
*/
  Apt?: OsPolicyAssignmentOsPolicyResourceGroupResourcePkgApt;

  /*
A deb package file. Structure is
documented below.
*/
  Deb?: OsPolicyAssignmentOsPolicyResourceGroupResourcePkgDeb;

  /*
The desired state the agent should maintain for
this package. Possible values are: `DESIRED_STATE_UNSPECIFIED`, `INSTALLED`,
`REMOVED`.
*/
  DesiredState?: string;

  /*
A package managed by GooGet. Structure is
documented below.
*/
  Googet?: OsPolicyAssignmentOsPolicyResourceGroupResourcePkgGooget;

  /*
An MSI package. Structure is
documented below.
*/
  Msi?: OsPolicyAssignmentOsPolicyResourceGroupResourcePkgMsi;

  /*
An rpm package file. Structure is
documented below.
*/
  Rpm?: OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpm;
}
