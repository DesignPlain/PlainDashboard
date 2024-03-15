export interface getRepositoryMavenConfig {
  /*
The repository with this flag will allow publishing the same
snapshot versions.
*/
  AllowSnapshotOverwrites?: boolean;

  // Version policy defines the versions that the registry will accept. Default value: "VERSION_POLICY_UNSPECIFIED" Possible values: ["VERSION_POLICY_UNSPECIFIED", "RELEASE", "SNAPSHOT"]
  VersionPolicy?: string;
}
