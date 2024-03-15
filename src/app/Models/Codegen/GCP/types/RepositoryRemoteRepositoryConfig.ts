import { RepositoryRemoteRepositoryConfigAptRepository } from "./RepositoryRemoteRepositoryConfigAptRepository";
import { RepositoryRemoteRepositoryConfigDockerRepository } from "./RepositoryRemoteRepositoryConfigDockerRepository";
import { RepositoryRemoteRepositoryConfigMavenRepository } from "./RepositoryRemoteRepositoryConfigMavenRepository";
import { RepositoryRemoteRepositoryConfigNpmRepository } from "./RepositoryRemoteRepositoryConfigNpmRepository";
import { RepositoryRemoteRepositoryConfigPythonRepository } from "./RepositoryRemoteRepositoryConfigPythonRepository";
import { RepositoryRemoteRepositoryConfigUpstreamCredentials } from "./RepositoryRemoteRepositoryConfigUpstreamCredentials";
import { RepositoryRemoteRepositoryConfigYumRepository } from "./RepositoryRemoteRepositoryConfigYumRepository";

export interface RepositoryRemoteRepositoryConfig {
  /*
Specific settings for an Apt remote repository.
Structure is documented below.
*/
  AptRepository?: RepositoryRemoteRepositoryConfigAptRepository;

  // The description of the remote source.
  Description?: string;

  /*
Specific settings for a Docker remote repository.
Structure is documented below.
*/
  DockerRepository?: RepositoryRemoteRepositoryConfigDockerRepository;

  /*
Specific settings for a Maven remote repository.
Structure is documented below.
*/
  MavenRepository?: RepositoryRemoteRepositoryConfigMavenRepository;

  /*
Specific settings for an Npm remote repository.
Structure is documented below.
*/
  NpmRepository?: RepositoryRemoteRepositoryConfigNpmRepository;

  /*
Specific settings for a Python remote repository.
Structure is documented below.
*/
  PythonRepository?: RepositoryRemoteRepositoryConfigPythonRepository;

  /*
The credentials used to access the remote repository.
Structure is documented below.
*/
  UpstreamCredentials?: RepositoryRemoteRepositoryConfigUpstreamCredentials;

  /*
Specific settings for an Yum remote repository.
Structure is documented below.
*/
  YumRepository?: RepositoryRemoteRepositoryConfigYumRepository;
}
