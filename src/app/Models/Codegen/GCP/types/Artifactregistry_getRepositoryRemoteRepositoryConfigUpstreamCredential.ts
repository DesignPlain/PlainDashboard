import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Artifactregistry_getRepositoryRemoteRepositoryConfigUpstreamCredentialUsernamePasswordCredential,
  Artifactregistry_getRepositoryRemoteRepositoryConfigUpstreamCredentialUsernamePasswordCredential_GetTypes,
} from "./Artifactregistry_getRepositoryRemoteRepositoryConfigUpstreamCredentialUsernamePasswordCredential";

export interface Artifactregistry_getRepositoryRemoteRepositoryConfigUpstreamCredential {
  // Use username and password to access the remote repository.
  UsernamePasswordCredentials?: Array<Artifactregistry_getRepositoryRemoteRepositoryConfigUpstreamCredentialUsernamePasswordCredential>;
}

export function Artifactregistry_getRepositoryRemoteRepositoryConfigUpstreamCredential_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "UsernamePasswordCredentials",
      "Use username and password to access the remote repository.",
      Artifactregistry_getRepositoryRemoteRepositoryConfigUpstreamCredentialUsernamePasswordCredential_GetTypes(),
      true,
      false,
    ),
  ];
}
