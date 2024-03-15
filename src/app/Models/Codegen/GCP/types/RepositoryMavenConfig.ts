export interface RepositoryMavenConfig {
  /*
The repository with this flag will allow publishing the same
snapshot versions.
*/
  AllowSnapshotOverwrites?: boolean;

  /*
Version policy defines the versions that the registry will accept.
Default value is `VERSION_POLICY_UNSPECIFIED`.
Possible values are: `VERSION_POLICY_UNSPECIFIED`, `RELEASE`, `SNAPSHOT`.
*/
  VersionPolicy?: string;
}
