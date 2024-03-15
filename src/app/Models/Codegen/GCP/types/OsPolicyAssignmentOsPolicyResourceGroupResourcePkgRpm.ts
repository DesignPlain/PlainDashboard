import { OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSource } from "./OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSource";

export interface OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpm {
  /*
Whether dependencies should also be installed. -
install when false: `rpm --upgrade --replacepkgs package.rpm` - install when
true: `yum -y install package.rpm` or `zypper -y install package.rpm`
*/
  PullDeps?: boolean;

  /*
An rpm package. Structure is
documented below.
*/
  Source?: OsPolicyAssignmentOsPolicyResourceGroupResourcePkgRpmSource;
}
