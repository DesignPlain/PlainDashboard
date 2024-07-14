import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  artifactregistry_RepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials,
  artifactregistry_RepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials_GetTypes,
} from "./artifactregistry_RepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials";

export interface artifactregistry_RepositoryRemoteRepositoryConfigUpstreamCredentials {
  /*
Use username and password to access the remote repository.
Structure is documented below.
*/
  usernamePasswordCredentials?: artifactregistry_RepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials;
}

export function artifactregistry_RepositoryRemoteRepositoryConfigUpstreamCredentials_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "usernamePasswordCredentials",
      "Use username and password to access the remote repository.\nStructure is documented below.",
      artifactregistry_RepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials_GetTypes(),
      false,
      true,
    ),
  ];
}
