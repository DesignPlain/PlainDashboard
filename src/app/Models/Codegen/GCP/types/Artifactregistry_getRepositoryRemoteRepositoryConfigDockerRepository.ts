import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Artifactregistry_getRepositoryRemoteRepositoryConfigDockerRepository {
  // Address of the remote repository. Default value: "DOCKER_HUB" Possible values: ["DOCKER_HUB"]
  PublicRepository?: string;
}

export function Artifactregistry_getRepositoryRemoteRepositoryConfigDockerRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "PublicRepository",
      'Address of the remote repository. Default value: "DOCKER_HUB" Possible values: ["DOCKER_HUB"]',
      [],
      true,
      false,
    ),
  ];
}
