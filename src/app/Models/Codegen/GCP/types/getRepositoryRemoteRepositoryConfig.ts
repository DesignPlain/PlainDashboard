import { getRepositoryRemoteRepositoryConfigAptRepository } from "./getRepositoryRemoteRepositoryConfigAptRepository";
import { getRepositoryRemoteRepositoryConfigDockerRepository } from "./getRepositoryRemoteRepositoryConfigDockerRepository";
import { getRepositoryRemoteRepositoryConfigMavenRepository } from "./getRepositoryRemoteRepositoryConfigMavenRepository";
import { getRepositoryRemoteRepositoryConfigNpmRepository } from "./getRepositoryRemoteRepositoryConfigNpmRepository";
import { getRepositoryRemoteRepositoryConfigPythonRepository } from "./getRepositoryRemoteRepositoryConfigPythonRepository";
import { getRepositoryRemoteRepositoryConfigUpstreamCredential } from "./getRepositoryRemoteRepositoryConfigUpstreamCredential";
import { getRepositoryRemoteRepositoryConfigYumRepository } from "./getRepositoryRemoteRepositoryConfigYumRepository";

export interface getRepositoryRemoteRepositoryConfig {
  // The credentials used to access the remote repository.
  UpstreamCredentials?: Array<getRepositoryRemoteRepositoryConfigUpstreamCredential>;

  // Specific settings for an Yum remote repository.
  YumRepositories?: Array<getRepositoryRemoteRepositoryConfigYumRepository>;

  // Specific settings for an Apt remote repository.
  AptRepositories?: Array<getRepositoryRemoteRepositoryConfigAptRepository>;

  // The description of the remote source.
  Description?: string;

  // Specific settings for a Docker remote repository.
  DockerRepositories?: Array<getRepositoryRemoteRepositoryConfigDockerRepository>;

  // Specific settings for a Maven remote repository.
  MavenRepositories?: Array<getRepositoryRemoteRepositoryConfigMavenRepository>;

  // Specific settings for an Npm remote repository.
  NpmRepositories?: Array<getRepositoryRemoteRepositoryConfigNpmRepository>;

  // Specific settings for a Python remote repository.
  PythonRepositories?: Array<getRepositoryRemoteRepositoryConfigPythonRepository>;
}
