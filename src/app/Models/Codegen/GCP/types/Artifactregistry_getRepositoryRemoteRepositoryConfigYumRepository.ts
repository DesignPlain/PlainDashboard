import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Artifactregistry_getRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository,
  Artifactregistry_getRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository_GetTypes,
} from "./Artifactregistry_getRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository";

export interface Artifactregistry_getRepositoryRemoteRepositoryConfigYumRepository {
  // One of the publicly available Yum repositories supported by Artifact Registry.
  PublicRepositories?: Array<Artifactregistry_getRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository>;
}

export function Artifactregistry_getRepositoryRemoteRepositoryConfigYumRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "PublicRepositories",
      "One of the publicly available Yum repositories supported by Artifact Registry.",
      Artifactregistry_getRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository_GetTypes(),
      true,
      false,
    ),
  ];
}
