import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  artifactregistry_getRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository,
  artifactregistry_getRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository_GetTypes,
} from './artifactregistry_getRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository';

export interface artifactregistry_getRepositoryRemoteRepositoryConfigAptRepository {
  // One of the publicly available Apt repositories supported by Artifact Registry.
  publicRepositories?: Array<artifactregistry_getRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository>;
}

export function artifactregistry_getRepositoryRemoteRepositoryConfigAptRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'publicRepositories',
      'One of the publicly available Apt repositories supported by Artifact Registry.',
      () =>
        artifactregistry_getRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository_GetTypes(),
      true,
      false,
    ),
  ];
}
