import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface artifactregistry_RepositoryRemoteRepositoryConfigDockerRepository {
  /*
Address of the remote repository.
Default value is `DOCKER_HUB`.
Possible values are: `DOCKER_HUB`.
*/
  publicRepository?: string;
}

export function artifactregistry_RepositoryRemoteRepositoryConfigDockerRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'publicRepository',
      'Address of the remote repository.\nDefault value is `DOCKER_HUB`.\nPossible values are: `DOCKER_HUB`.',
      () => [],
      false,
      true,
    ),
  ];
}
