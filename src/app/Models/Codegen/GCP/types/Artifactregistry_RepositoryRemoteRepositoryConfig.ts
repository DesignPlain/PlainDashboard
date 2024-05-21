import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  artifactregistry_RepositoryRemoteRepositoryConfigUpstreamCredentials,
  artifactregistry_RepositoryRemoteRepositoryConfigUpstreamCredentials_GetTypes,
} from "./artifactregistry_RepositoryRemoteRepositoryConfigUpstreamCredentials";
import {
  artifactregistry_RepositoryRemoteRepositoryConfigYumRepository,
  artifactregistry_RepositoryRemoteRepositoryConfigYumRepository_GetTypes,
} from "./artifactregistry_RepositoryRemoteRepositoryConfigYumRepository";
import {
  artifactregistry_RepositoryRemoteRepositoryConfigAptRepository,
  artifactregistry_RepositoryRemoteRepositoryConfigAptRepository_GetTypes,
} from "./artifactregistry_RepositoryRemoteRepositoryConfigAptRepository";
import {
  artifactregistry_RepositoryRemoteRepositoryConfigDockerRepository,
  artifactregistry_RepositoryRemoteRepositoryConfigDockerRepository_GetTypes,
} from "./artifactregistry_RepositoryRemoteRepositoryConfigDockerRepository";
import {
  artifactregistry_RepositoryRemoteRepositoryConfigMavenRepository,
  artifactregistry_RepositoryRemoteRepositoryConfigMavenRepository_GetTypes,
} from "./artifactregistry_RepositoryRemoteRepositoryConfigMavenRepository";
import {
  artifactregistry_RepositoryRemoteRepositoryConfigNpmRepository,
  artifactregistry_RepositoryRemoteRepositoryConfigNpmRepository_GetTypes,
} from "./artifactregistry_RepositoryRemoteRepositoryConfigNpmRepository";
import {
  artifactregistry_RepositoryRemoteRepositoryConfigPythonRepository,
  artifactregistry_RepositoryRemoteRepositoryConfigPythonRepository_GetTypes,
} from "./artifactregistry_RepositoryRemoteRepositoryConfigPythonRepository";

export interface artifactregistry_RepositoryRemoteRepositoryConfig {
  /*
Specific settings for an Yum remote repository.
Structure is documented below.
*/
  yumRepository?: artifactregistry_RepositoryRemoteRepositoryConfigYumRepository;

  /*
Specific settings for an Apt remote repository.
Structure is documented below.
*/
  aptRepository?: artifactregistry_RepositoryRemoteRepositoryConfigAptRepository;

  // The description of the remote source.
  description?: string;

  /*
Specific settings for a Docker remote repository.
Structure is documented below.
*/
  dockerRepository?: artifactregistry_RepositoryRemoteRepositoryConfigDockerRepository;

  /*
Specific settings for a Maven remote repository.
Structure is documented below.
*/
  mavenRepository?: artifactregistry_RepositoryRemoteRepositoryConfigMavenRepository;

  /*
Specific settings for an Npm remote repository.
Structure is documented below.
*/
  npmRepository?: artifactregistry_RepositoryRemoteRepositoryConfigNpmRepository;

  /*
Specific settings for a Python remote repository.
Structure is documented below.
*/
  pythonRepository?: artifactregistry_RepositoryRemoteRepositoryConfigPythonRepository;

  /*
The credentials used to access the remote repository.
Structure is documented below.
*/
  upstreamCredentials?: artifactregistry_RepositoryRemoteRepositoryConfigUpstreamCredentials;
}

export function artifactregistry_RepositoryRemoteRepositoryConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "upstreamCredentials",
      "The credentials used to access the remote repository.\nStructure is documented below.",
      artifactregistry_RepositoryRemoteRepositoryConfigUpstreamCredentials_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "yumRepository",
      "Specific settings for an Yum remote repository.\nStructure is documented below.",
      artifactregistry_RepositoryRemoteRepositoryConfigYumRepository_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "aptRepository",
      "Specific settings for an Apt remote repository.\nStructure is documented below.",
      artifactregistry_RepositoryRemoteRepositoryConfigAptRepository_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "The description of the remote source.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dockerRepository",
      "Specific settings for a Docker remote repository.\nStructure is documented below.",
      artifactregistry_RepositoryRemoteRepositoryConfigDockerRepository_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "mavenRepository",
      "Specific settings for a Maven remote repository.\nStructure is documented below.",
      artifactregistry_RepositoryRemoteRepositoryConfigMavenRepository_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "npmRepository",
      "Specific settings for an Npm remote repository.\nStructure is documented below.",
      artifactregistry_RepositoryRemoteRepositoryConfigNpmRepository_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "pythonRepository",
      "Specific settings for a Python remote repository.\nStructure is documented below.",
      artifactregistry_RepositoryRemoteRepositoryConfigPythonRepository_GetTypes(),
      false,
      true,
    ),
  ];
}
