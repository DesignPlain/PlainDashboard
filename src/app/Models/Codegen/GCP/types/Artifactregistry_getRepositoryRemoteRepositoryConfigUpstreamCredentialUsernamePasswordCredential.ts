import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Artifactregistry_getRepositoryRemoteRepositoryConfigUpstreamCredentialUsernamePasswordCredential {
  // The username to access the remote repository.
  Username?: string;

  /*
The Secret Manager key version that holds the password to access the
remote repository. Must be in the format of
'projects/{project}/secrets/{secret}/versions/{version}'.
*/
  PasswordSecretVersion?: string;
}

export function Artifactregistry_getRepositoryRemoteRepositoryConfigUpstreamCredentialUsernamePasswordCredential_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Username",
      "The username to access the remote repository.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PasswordSecretVersion",
      "The Secret Manager key version that holds the password to access the\nremote repository. Must be in the format of\n'projects/{project}/secrets/{secret}/versions/{version}'.",
      [],
      true,
      false,
    ),
  ];
}
