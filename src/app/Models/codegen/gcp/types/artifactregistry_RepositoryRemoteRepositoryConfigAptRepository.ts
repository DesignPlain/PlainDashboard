import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  artifactregistry_RepositoryRemoteRepositoryConfigAptRepositoryPublicRepository,
  artifactregistry_RepositoryRemoteRepositoryConfigAptRepositoryPublicRepository_GetTypes,
} from "./artifactregistry_RepositoryRemoteRepositoryConfigAptRepositoryPublicRepository";

export interface artifactregistry_RepositoryRemoteRepositoryConfigAptRepository {
  /*
One of the publicly available Apt repositories supported by Artifact Registry.
Structure is documented below.
*/
  publicRepository?: artifactregistry_RepositoryRemoteRepositoryConfigAptRepositoryPublicRepository;
}

export function artifactregistry_RepositoryRemoteRepositoryConfigAptRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "publicRepository",
      "One of the publicly available Apt repositories supported by Artifact Registry.\nStructure is documented below.",
      () =>
        artifactregistry_RepositoryRemoteRepositoryConfigAptRepositoryPublicRepository_GetTypes(),
      false,
      true,
    ),
  ];
}
