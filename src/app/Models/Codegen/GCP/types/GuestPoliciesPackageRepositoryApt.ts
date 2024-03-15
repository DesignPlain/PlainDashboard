export interface GuestPoliciesPackageRepositoryApt {
  // List of components for this repository. Must contain at least one item.
  Components?: Array<string>;

  // Distribution of this repository.
  Distribution?: string;

  /*
URI of the key file for this repository. The agent maintains a keyring at
/etc/apt/trusted.gpg.d/osconfig_agent_managed.gpg containing all the keys in any applied guest policy.
*/
  GpgKey?: string;

  // URI for this repository.
  Uri?: string;

  /*
Type of archive files in this repository. The default behavior is DEB.
Default value is `DEB`.
Possible values are: `DEB`, `DEB_SRC`.
*/
  ArchiveType?: string;
}
