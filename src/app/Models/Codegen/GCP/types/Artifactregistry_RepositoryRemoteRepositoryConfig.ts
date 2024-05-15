import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Artifactregistry_RepositoryRemoteRepositoryConfigPythonRepository,
  Artifactregistry_RepositoryRemoteRepositoryConfigPythonRepository_GetTypes,
} from "./Artifactregistry_RepositoryRemoteRepositoryConfigPythonRepository";
import {
  Artifactregistry_RepositoryRemoteRepositoryConfigUpstreamCredentials,
  Artifactregistry_RepositoryRemoteRepositoryConfigUpstreamCredentials_GetTypes,
} from "./Artifactregistry_RepositoryRemoteRepositoryConfigUpstreamCredentials";
import {
  Artifactregistry_RepositoryRemoteRepositoryConfigYumRepository,
  Artifactregistry_RepositoryRemoteRepositoryConfigYumRepository_GetTypes,
} from "./Artifactregistry_RepositoryRemoteRepositoryConfigYumRepository";
import {
  Artifactregistry_RepositoryRemoteRepositoryConfigAptRepository,
  Artifactregistry_RepositoryRemoteRepositoryConfigAptRepository_GetTypes,
} from "./Artifactregistry_RepositoryRemoteRepositoryConfigAptRepository";
import {
  Artifactregistry_RepositoryRemoteRepositoryConfigDockerRepository,
  Artifactregistry_RepositoryRemoteRepositoryConfigDockerRepository_GetTypes,
} from "./Artifactregistry_RepositoryRemoteRepositoryConfigDockerRepository";
import {
  Artifactregistry_RepositoryRemoteRepositoryConfigMavenRepository,
  Artifactregistry_RepositoryRemoteRepositoryConfigMavenRepository_GetTypes,
} from "./Artifactregistry_RepositoryRemoteRepositoryConfigMavenRepository";
import {
  Artifactregistry_RepositoryRemoteRepositoryConfigNpmRepository,
  Artifactregistry_RepositoryRemoteRepositoryConfigNpmRepository_GetTypes,
} from "./Artifactregistry_RepositoryRemoteRepositoryConfigNpmRepository";

export interface Artifactregistry_RepositoryRemoteRepositoryConfig {
  /*
Specific settings for a Python remote repository.
Structure is documented below.
*/
  PythonRepository?: Artifactregistry_RepositoryRemoteRepositoryConfigPythonRepository;

  /*
The credentials used to access the remote repository.
Structure is documented below.
*/
  UpstreamCredentials?: Artifactregistry_RepositoryRemoteRepositoryConfigUpstreamCredentials;

  /*
Specific settings for an Yum remote repository.
Structure is documented below.
*/
  YumRepository?: Artifactregistry_RepositoryRemoteRepositoryConfigYumRepository;

  /*
Specific settings for an Apt remote repository.
Structure is documented below.
*/
  AptRepository?: Artifactregistry_RepositoryRemoteRepositoryConfigAptRepository;

  // The description of the remote source.
  Description?: string;

  /*
Specific settings for a Docker remote repository.
Structure is documented below.
*/
  DockerRepository?: Artifactregistry_RepositoryRemoteRepositoryConfigDockerRepository;

  /*
Specific settings for a Maven remote repository.
Structure is documented below.
*/
  MavenRepository?: Artifactregistry_RepositoryRemoteRepositoryConfigMavenRepository;

  /*
Specific settings for an Npm remote repository.
Structure is documented below.
*/
  NpmRepository?: Artifactregistry_RepositoryRemoteRepositoryConfigNpmRepository;
}

export function Artifactregistry_RepositoryRemoteRepositoryConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "PythonRepository",
      "Specific settings for a Python remote repository.\nStructure is documented below.",
      Artifactregistry_RepositoryRemoteRepositoryConfigPythonRepository_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "UpstreamCredentials",
      "The credentials used to access the remote repository.\nStructure is documented below.",
      Artifactregistry_RepositoryRemoteRepositoryConfigUpstreamCredentials_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "YumRepository",
      "Specific settings for an Yum remote repository.\nStructure is documented below.",
      Artifactregistry_RepositoryRemoteRepositoryConfigYumRepository_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "AptRepository",
      "Specific settings for an Apt remote repository.\nStructure is documented below.",
      Artifactregistry_RepositoryRemoteRepositoryConfigAptRepository_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Description",
      "The description of the remote source.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "DockerRepository",
      "Specific settings for a Docker remote repository.\nStructure is documented below.",
      Artifactregistry_RepositoryRemoteRepositoryConfigDockerRepository_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "MavenRepository",
      "Specific settings for a Maven remote repository.\nStructure is documented below.",
      Artifactregistry_RepositoryRemoteRepositoryConfigMavenRepository_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "NpmRepository",
      "Specific settings for an Npm remote repository.\nStructure is documented below.",
      Artifactregistry_RepositoryRemoteRepositoryConfigNpmRepository_GetTypes(),
      false,
      true,
    ),
  ];
}
