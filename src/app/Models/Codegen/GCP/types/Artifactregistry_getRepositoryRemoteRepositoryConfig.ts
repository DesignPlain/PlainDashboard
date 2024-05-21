import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  artifactregistry_getRepositoryRemoteRepositoryConfigPythonRepository,
  artifactregistry_getRepositoryRemoteRepositoryConfigPythonRepository_GetTypes,
} from "./artifactregistry_getRepositoryRemoteRepositoryConfigPythonRepository";
import {
  artifactregistry_getRepositoryRemoteRepositoryConfigUpstreamCredential,
  artifactregistry_getRepositoryRemoteRepositoryConfigUpstreamCredential_GetTypes,
} from "./artifactregistry_getRepositoryRemoteRepositoryConfigUpstreamCredential";
import {
  artifactregistry_getRepositoryRemoteRepositoryConfigYumRepository,
  artifactregistry_getRepositoryRemoteRepositoryConfigYumRepository_GetTypes,
} from "./artifactregistry_getRepositoryRemoteRepositoryConfigYumRepository";
import {
  artifactregistry_getRepositoryRemoteRepositoryConfigAptRepository,
  artifactregistry_getRepositoryRemoteRepositoryConfigAptRepository_GetTypes,
} from "./artifactregistry_getRepositoryRemoteRepositoryConfigAptRepository";
import {
  artifactregistry_getRepositoryRemoteRepositoryConfigDockerRepository,
  artifactregistry_getRepositoryRemoteRepositoryConfigDockerRepository_GetTypes,
} from "./artifactregistry_getRepositoryRemoteRepositoryConfigDockerRepository";
import {
  artifactregistry_getRepositoryRemoteRepositoryConfigMavenRepository,
  artifactregistry_getRepositoryRemoteRepositoryConfigMavenRepository_GetTypes,
} from "./artifactregistry_getRepositoryRemoteRepositoryConfigMavenRepository";
import {
  artifactregistry_getRepositoryRemoteRepositoryConfigNpmRepository,
  artifactregistry_getRepositoryRemoteRepositoryConfigNpmRepository_GetTypes,
} from "./artifactregistry_getRepositoryRemoteRepositoryConfigNpmRepository";

export interface artifactregistry_getRepositoryRemoteRepositoryConfig {
  // Specific settings for a Python remote repository.
  pythonRepositories?: Array<artifactregistry_getRepositoryRemoteRepositoryConfigPythonRepository>;

  // The credentials used to access the remote repository.
  upstreamCredentials?: Array<artifactregistry_getRepositoryRemoteRepositoryConfigUpstreamCredential>;

  // Specific settings for an Yum remote repository.
  yumRepositories?: Array<artifactregistry_getRepositoryRemoteRepositoryConfigYumRepository>;

  // Specific settings for an Apt remote repository.
  aptRepositories?: Array<artifactregistry_getRepositoryRemoteRepositoryConfigAptRepository>;

  // The description of the remote source.
  description?: string;

  // Specific settings for a Docker remote repository.
  dockerRepositories?: Array<artifactregistry_getRepositoryRemoteRepositoryConfigDockerRepository>;

  // Specific settings for a Maven remote repository.
  mavenRepositories?: Array<artifactregistry_getRepositoryRemoteRepositoryConfigMavenRepository>;

  // Specific settings for an Npm remote repository.
  npmRepositories?: Array<artifactregistry_getRepositoryRemoteRepositoryConfigNpmRepository>;
}

export function artifactregistry_getRepositoryRemoteRepositoryConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "pythonRepositories",
      "Specific settings for a Python remote repository.",
      artifactregistry_getRepositoryRemoteRepositoryConfigPythonRepository_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "upstreamCredentials",
      "The credentials used to access the remote repository.",
      artifactregistry_getRepositoryRemoteRepositoryConfigUpstreamCredential_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "yumRepositories",
      "Specific settings for an Yum remote repository.",
      artifactregistry_getRepositoryRemoteRepositoryConfigYumRepository_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "aptRepositories",
      "Specific settings for an Apt remote repository.",
      artifactregistry_getRepositoryRemoteRepositoryConfigAptRepository_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "The description of the remote source.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "dockerRepositories",
      "Specific settings for a Docker remote repository.",
      artifactregistry_getRepositoryRemoteRepositoryConfigDockerRepository_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "mavenRepositories",
      "Specific settings for a Maven remote repository.",
      artifactregistry_getRepositoryRemoteRepositoryConfigMavenRepository_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "npmRepositories",
      "Specific settings for an Npm remote repository.",
      artifactregistry_getRepositoryRemoteRepositoryConfigNpmRepository_GetTypes(),
      true,
      false,
    ),
  ];
}
