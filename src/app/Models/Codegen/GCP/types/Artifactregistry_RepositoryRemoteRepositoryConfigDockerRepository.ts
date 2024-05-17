import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Artifactregistry_RepositoryRemoteRepositoryConfigDockerRepository {
  /*
Address of the remote repository.
Default value is `DOCKER_HUB`.
Possible values are: `DOCKER_HUB`.
*/
  PublicRepository?: string;
}

export function Artifactregistry_RepositoryRemoteRepositoryConfigDockerRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "PublicRepository",
      "Address of the remote repository.\nDefault value is `DOCKER_HUB`.\nPossible values are: `DOCKER_HUB`.",
      [],
      false,
      true,
    ),
  ];
}
