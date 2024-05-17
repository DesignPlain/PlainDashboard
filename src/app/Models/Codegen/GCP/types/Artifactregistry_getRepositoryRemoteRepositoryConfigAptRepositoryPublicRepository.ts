import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Artifactregistry_getRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository {
  // Specific repository from the base.
  RepositoryPath?: string;

  // A common public repository base for Apt, e.g. '"debian/dists/buster"' Possible values: ["DEBIAN", "UBUNTU"]
  RepositoryBase?: string;
}

export function Artifactregistry_getRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "RepositoryPath",
      "Specific repository from the base.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "RepositoryBase",
      'A common public repository base for Apt, e.g. \'"debian/dists/buster"\' Possible values: ["DEBIAN", "UBUNTU"]',
      [],
      true,
      false,
    ),
  ];
}
