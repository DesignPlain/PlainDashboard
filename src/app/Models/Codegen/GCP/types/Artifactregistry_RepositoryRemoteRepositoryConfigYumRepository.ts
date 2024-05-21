import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  artifactregistry_RepositoryRemoteRepositoryConfigYumRepositoryPublicRepository,
  artifactregistry_RepositoryRemoteRepositoryConfigYumRepositoryPublicRepository_GetTypes,
} from "./artifactregistry_RepositoryRemoteRepositoryConfigYumRepositoryPublicRepository";

export interface artifactregistry_RepositoryRemoteRepositoryConfigYumRepository {
  /*
One of the publicly available Yum repositories supported by Artifact Registry.
Structure is documented below.
*/
  publicRepository?: artifactregistry_RepositoryRemoteRepositoryConfigYumRepositoryPublicRepository;
}

export function artifactregistry_RepositoryRemoteRepositoryConfigYumRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "publicRepository",
      "One of the publicly available Yum repositories supported by Artifact Registry.\nStructure is documented below.",
      artifactregistry_RepositoryRemoteRepositoryConfigYumRepositoryPublicRepository_GetTypes(),
      false,
      true,
    ),
  ];
}
