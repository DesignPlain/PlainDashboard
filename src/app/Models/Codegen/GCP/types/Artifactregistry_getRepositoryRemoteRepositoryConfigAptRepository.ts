import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Artifactregistry_getRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository,
  Artifactregistry_getRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository_GetTypes,
} from "./Artifactregistry_getRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository";

export interface Artifactregistry_getRepositoryRemoteRepositoryConfigAptRepository {
  // One of the publicly available Apt repositories supported by Artifact Registry.
  PublicRepositories?: Array<Artifactregistry_getRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository>;
}

export function Artifactregistry_getRepositoryRemoteRepositoryConfigAptRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "PublicRepositories",
      "One of the publicly available Apt repositories supported by Artifact Registry.",
      Artifactregistry_getRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository_GetTypes(),
      true,
      false,
    ),
  ];
}
