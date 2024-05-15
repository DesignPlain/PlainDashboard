import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Artifactregistry_RepositoryRemoteRepositoryConfigYumRepositoryPublicRepository,
  Artifactregistry_RepositoryRemoteRepositoryConfigYumRepositoryPublicRepository_GetTypes,
} from "./Artifactregistry_RepositoryRemoteRepositoryConfigYumRepositoryPublicRepository";

export interface Artifactregistry_RepositoryRemoteRepositoryConfigYumRepository {
  /*
One of the publicly available Yum repositories supported by Artifact Registry.
Structure is documented below.
*/
  PublicRepository?: Artifactregistry_RepositoryRemoteRepositoryConfigYumRepositoryPublicRepository;
}

export function Artifactregistry_RepositoryRemoteRepositoryConfigYumRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "PublicRepository",
      "One of the publicly available Yum repositories supported by Artifact Registry.\nStructure is documented below.",
      Artifactregistry_RepositoryRemoteRepositoryConfigYumRepositoryPublicRepository_GetTypes(),
      false,
      true,
    ),
  ];
}
