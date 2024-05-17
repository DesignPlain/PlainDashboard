import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Artifactregistry_RepositoryRemoteRepositoryConfigAptRepositoryPublicRepository,
  Artifactregistry_RepositoryRemoteRepositoryConfigAptRepositoryPublicRepository_GetTypes,
} from "./Artifactregistry_RepositoryRemoteRepositoryConfigAptRepositoryPublicRepository";

export interface Artifactregistry_RepositoryRemoteRepositoryConfigAptRepository {
  /*
One of the publicly available Apt repositories supported by Artifact Registry.
Structure is documented below.
*/
  PublicRepository?: Artifactregistry_RepositoryRemoteRepositoryConfigAptRepositoryPublicRepository;
}

export function Artifactregistry_RepositoryRemoteRepositoryConfigAptRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "PublicRepository",
      "One of the publicly available Apt repositories supported by Artifact Registry.\nStructure is documented below.",
      Artifactregistry_RepositoryRemoteRepositoryConfigAptRepositoryPublicRepository_GetTypes(),
      false,
      true,
    ),
  ];
}
