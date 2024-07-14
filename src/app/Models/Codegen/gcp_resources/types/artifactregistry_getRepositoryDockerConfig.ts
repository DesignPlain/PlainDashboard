import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface artifactregistry_getRepositoryDockerConfig {
  // The repository which enabled this flag prevents all tags from being modified, moved or deleted. This does not prevent tags from being created.
  immutableTags?: boolean;
}

export function artifactregistry_getRepositoryDockerConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "immutableTags",
      "The repository which enabled this flag prevents all tags from being modified, moved or deleted. This does not prevent tags from being created.",
      [],
      true,
      false,
    ),
  ];
}
