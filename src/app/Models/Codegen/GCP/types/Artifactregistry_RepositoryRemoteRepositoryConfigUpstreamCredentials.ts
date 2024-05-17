import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Artifactregistry_RepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials,
  Artifactregistry_RepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials_GetTypes,
} from "./Artifactregistry_RepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials";

export interface Artifactregistry_RepositoryRemoteRepositoryConfigUpstreamCredentials {
  /*
Use username and password to access the remote repository.
Structure is documented below.
*/
  UsernamePasswordCredentials?: Artifactregistry_RepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials;
}

export function Artifactregistry_RepositoryRemoteRepositoryConfigUpstreamCredentials_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "UsernamePasswordCredentials",
      "Use username and password to access the remote repository.\nStructure is documented below.",
      Artifactregistry_RepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials_GetTypes(),
      false,
      true,
    ),
  ];
}
