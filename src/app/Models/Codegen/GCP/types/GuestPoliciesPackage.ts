export interface GuestPoliciesPackage {
  /*
The desiredState the agent should maintain for this package. The default is to ensure the package is installed.
Possible values are: `INSTALLED`, `UPDATED`, `REMOVED`.
*/
  DesiredState?: string;

  /*
Type of package manager that can be used to install this package. If a system does not have the package manager,
the package is not installed or removed no error message is returned. By default, or if you specify ANY,
the agent attempts to install and remove this package using the default package manager.
This is useful when creating a policy that applies to different types of systems.
The default behavior is ANY.
Default value is `ANY`.
Possible values are: `ANY`, `APT`, `YUM`, `ZYPPER`, `GOO`.
*/
  Manager?: string;

  /*
The name of the package. A package is uniquely identified for conflict validation
by checking the package name and the manager(s) that the package targets.
*/
  Name?: string;
}
