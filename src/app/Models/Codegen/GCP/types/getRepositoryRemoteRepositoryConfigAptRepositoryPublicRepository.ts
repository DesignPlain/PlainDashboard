export interface getRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository {
  // A common public repository base for Apt, e.g. '"debian/dists/buster"' Possible values: ["DEBIAN", "UBUNTU"]
  RepositoryBase?: string;

  // Specific repository from the base.
  RepositoryPath?: string;
}
