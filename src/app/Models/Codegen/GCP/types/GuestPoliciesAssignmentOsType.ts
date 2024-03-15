export interface GuestPoliciesAssignmentOsType {
  /*
Targets VM instances with OS Inventory enabled and having the following OS architecture.

- - -
*/
  OsArchitecture?: string;

  // Targets VM instances with OS Inventory enabled and having the following OS short name, for example "debian" or "windows".
  OsShortName?: string;

  // Targets VM instances with OS Inventory enabled and having the following following OS version.
  OsVersion?: string;
}
