import { OsPolicyAssignmentOsPolicyResourceGroupResourcePkgMsiSource } from "./OsPolicyAssignmentOsPolicyResourceGroupResourcePkgMsiSource";

export interface OsPolicyAssignmentOsPolicyResourceGroupResourcePkgMsi {
  /*
Additional properties to use during installation.
This should be in the format of Property=Setting. Appended to the defaults
of `ACTION=INSTALL REBOOT=ReallySuppress`.
*/
  Properties?: Array<string>;

  /*
The MSI package. Structure is
documented below.
*/
  Source?: OsPolicyAssignmentOsPolicyResourceGroupResourcePkgMsiSource;
}
