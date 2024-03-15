import { OsPolicyAssignmentOsPolicyResourceGroupResourcePkgDebSource } from "./OsPolicyAssignmentOsPolicyResourceGroupResourcePkgDebSource";

export interface OsPolicyAssignmentOsPolicyResourceGroupResourcePkgDeb {
  /*
Whether dependencies should also be installed. -
install when false: `dpkg -i package` - install when true: `apt-get update
&& apt-get -y install package.deb`
*/
  PullDeps?: boolean;

  /*
A deb package. Structure is
documented below.
*/
  Source?: OsPolicyAssignmentOsPolicyResourceGroupResourcePkgDebSource;
}
