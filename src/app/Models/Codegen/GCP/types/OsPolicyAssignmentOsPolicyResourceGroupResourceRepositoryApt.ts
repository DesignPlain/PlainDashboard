export interface OsPolicyAssignmentOsPolicyResourceGroupResourceRepositoryApt {
  // Distribution of this repository.
  Distribution?: string;

  /*
URI of the key file for this repository. The agent
maintains a keyring at `/etc/apt/trusted.gpg.d/osconfig_agent_managed.gpg`.
*/
  GpgKey?: string;

  // URI for this repository.
  Uri?: string;

  /*
Type of archive files in this repository.
Possible values are: `ARCHIVE_TYPE_UNSPECIFIED`, `DEB`, `DEB_SRC`.
*/
  ArchiveType?: string;

  /*
List of components for this repository. Must
contain at least one item.
*/
  Components?: Array<string>;
}
