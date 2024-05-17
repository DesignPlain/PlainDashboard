import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Artifactregistry_getRepositoryRemoteRepositoryConfigDockerRepository,
  Artifactregistry_getRepositoryRemoteRepositoryConfigDockerRepository_GetTypes,
} from "./Artifactregistry_getRepositoryRemoteRepositoryConfigDockerRepository";
import {
  Artifactregistry_getRepositoryRemoteRepositoryConfigMavenRepository,
  Artifactregistry_getRepositoryRemoteRepositoryConfigMavenRepository_GetTypes,
} from "./Artifactregistry_getRepositoryRemoteRepositoryConfigMavenRepository";
import {
  Artifactregistry_getRepositoryRemoteRepositoryConfigNpmRepository,
  Artifactregistry_getRepositoryRemoteRepositoryConfigNpmRepository_GetTypes,
} from "./Artifactregistry_getRepositoryRemoteRepositoryConfigNpmRepository";
import {
  Artifactregistry_getRepositoryRemoteRepositoryConfigPythonRepository,
  Artifactregistry_getRepositoryRemoteRepositoryConfigPythonRepository_GetTypes,
} from "./Artifactregistry_getRepositoryRemoteRepositoryConfigPythonRepository";
import {
  Artifactregistry_getRepositoryRemoteRepositoryConfigUpstreamCredential,
  Artifactregistry_getRepositoryRemoteRepositoryConfigUpstreamCredential_GetTypes,
} from "./Artifactregistry_getRepositoryRemoteRepositoryConfigUpstreamCredential";
import {
  Artifactregistry_getRepositoryRemoteRepositoryConfigYumRepository,
  Artifactregistry_getRepositoryRemoteRepositoryConfigYumRepository_GetTypes,
} from "./Artifactregistry_getRepositoryRemoteRepositoryConfigYumRepository";
import {
  Artifactregistry_getRepositoryRemoteRepositoryConfigAptRepository,
  Artifactregistry_getRepositoryRemoteRepositoryConfigAptRepository_GetTypes,
} from "./Artifactregistry_getRepositoryRemoteRepositoryConfigAptRepository";

export interface Artifactregistry_getRepositoryRemoteRepositoryConfig {
  // The description of the remote source.
  Description?: string;

  // Specific settings for a Docker remote repository.
  DockerRepositories?: Array<Artifactregistry_getRepositoryRemoteRepositoryConfigDockerRepository>;

  // Specific settings for a Maven remote repository.
  MavenRepositories?: Array<Artifactregistry_getRepositoryRemoteRepositoryConfigMavenRepository>;

  // Specific settings for an Npm remote repository.
  NpmRepositories?: Array<Artifactregistry_getRepositoryRemoteRepositoryConfigNpmRepository>;

  // Specific settings for a Python remote repository.
  PythonRepositories?: Array<Artifactregistry_getRepositoryRemoteRepositoryConfigPythonRepository>;

  // The credentials used to access the remote repository.
  UpstreamCredentials?: Array<Artifactregistry_getRepositoryRemoteRepositoryConfigUpstreamCredential>;

  // Specific settings for an Yum remote repository.
  YumRepositories?: Array<Artifactregistry_getRepositoryRemoteRepositoryConfigYumRepository>;

  // Specific settings for an Apt remote repository.
  AptRepositories?: Array<Artifactregistry_getRepositoryRemoteRepositoryConfigAptRepository>;
}

export function Artifactregistry_getRepositoryRemoteRepositoryConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "UpstreamCredentials",
      "The credentials used to access the remote repository.",
      Artifactregistry_getRepositoryRemoteRepositoryConfigUpstreamCredential_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "YumRepositories",
      "Specific settings for an Yum remote repository.",
      Artifactregistry_getRepositoryRemoteRepositoryConfigYumRepository_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AptRepositories",
      "Specific settings for an Apt remote repository.",
      Artifactregistry_getRepositoryRemoteRepositoryConfigAptRepository_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Description",
      "The description of the remote source.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "DockerRepositories",
      "Specific settings for a Docker remote repository.",
      Artifactregistry_getRepositoryRemoteRepositoryConfigDockerRepository_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "MavenRepositories",
      "Specific settings for a Maven remote repository.",
      Artifactregistry_getRepositoryRemoteRepositoryConfigMavenRepository_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "NpmRepositories",
      "Specific settings for an Npm remote repository.",
      Artifactregistry_getRepositoryRemoteRepositoryConfigNpmRepository_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "PythonRepositories",
      "Specific settings for a Python remote repository.",
      Artifactregistry_getRepositoryRemoteRepositoryConfigPythonRepository_GetTypes(),
      true,
      false,
    ),
  ];
}
