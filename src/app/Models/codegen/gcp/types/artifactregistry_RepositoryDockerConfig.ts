import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface artifactregistry_RepositoryDockerConfig {
  // The repository which enabled this flag prevents all tags from being modified, moved or deleted. This does not prevent tags from being created.
  immutableTags?: boolean;
}

export function artifactregistry_RepositoryDockerConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'immutableTags',
      'The repository which enabled this flag prevents all tags from being modified, moved or deleted. This does not prevent tags from being created.',
      () => [],
      false,
      false,
    ),
  ];
}
