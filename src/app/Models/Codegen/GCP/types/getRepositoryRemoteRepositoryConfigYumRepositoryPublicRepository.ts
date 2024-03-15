export interface getRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository {
  // A common public repository base for Yum. Possible values: ["CENTOS", "CENTOS_DEBUG", "CENTOS_VAULT", "CENTOS_STREAM", "ROCKY", "EPEL"]
  RepositoryBase?: string;

  // Specific repository from the base, e.g. '"centos/8-stream/BaseOS/x86_64/os"'
  RepositoryPath?: string;
}
