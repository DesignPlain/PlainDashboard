import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Artifactregistry_RepositoryRemoteRepositoryConfigNpmRepository {
  /*
Address of the remote repository.
Default value is `NPMJS`.
Possible values are: `NPMJS`.
*/
  PublicRepository?: string;
}

export function Artifactregistry_RepositoryRemoteRepositoryConfigNpmRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "PublicRepository",
      "Address of the remote repository.\nDefault value is `NPMJS`.\nPossible values are: `NPMJS`.",
      [],
      false,
      true,
    ),
  ];
}
