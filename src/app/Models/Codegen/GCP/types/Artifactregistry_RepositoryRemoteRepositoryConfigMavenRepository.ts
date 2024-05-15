import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Artifactregistry_RepositoryRemoteRepositoryConfigMavenRepository {
  /*
Address of the remote repository.
Default value is `MAVEN_CENTRAL`.
Possible values are: `MAVEN_CENTRAL`.
*/
  PublicRepository?: string;
}

export function Artifactregistry_RepositoryRemoteRepositoryConfigMavenRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "PublicRepository",
      "Address of the remote repository.\nDefault value is `MAVEN_CENTRAL`.\nPossible values are: `MAVEN_CENTRAL`.",
      [],
      false,
      true,
    ),
  ];
}
