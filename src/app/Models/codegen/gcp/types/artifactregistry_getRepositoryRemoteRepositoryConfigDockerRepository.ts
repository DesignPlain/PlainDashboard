import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface artifactregistry_getRepositoryRemoteRepositoryConfigDockerRepository {
  // Address of the remote repository. Default value: "DOCKER_HUB" Possible values: ["DOCKER_HUB"]
  publicRepository?: string;
}

export function artifactregistry_getRepositoryRemoteRepositoryConfigDockerRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "publicRepository",
      'Address of the remote repository. Default value: "DOCKER_HUB" Possible values: ["DOCKER_HUB"]',
      () => [],
      true,
      false,
    ),
  ];
}
