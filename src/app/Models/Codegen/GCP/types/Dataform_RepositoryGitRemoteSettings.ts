import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataform_RepositoryGitRemoteSettingsSshAuthenticationConfig,
  Dataform_RepositoryGitRemoteSettingsSshAuthenticationConfig_GetTypes,
} from "./Dataform_RepositoryGitRemoteSettingsSshAuthenticationConfig";

export interface Dataform_RepositoryGitRemoteSettings {
  // The Git remote's URL.
  Url?: string;

  // The name of the Secret Manager secret version to use as an authentication token for Git operations. This secret is for assigning with HTTPS only(for SSH use `ssh_authentication_config`). Must be in the format projects/-/secrets/-/versions/-.
  AuthenticationTokenSecretVersion?: string;

  // The Git remote's default branch name.
  DefaultBranch?: string;

  /*
Authentication fields for remote uris using SSH protocol.
Structure is documented below.
*/
  SshAuthenticationConfig?: Dataform_RepositoryGitRemoteSettingsSshAuthenticationConfig;

  /*
(Output)
Indicates the status of the Git access token. https://cloud.google.com/dataform/reference/rest/v1beta1/projects.locations.repositories#TokenStatus
*/
  TokenStatus?: string;
}

export function Dataform_RepositoryGitRemoteSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Url",
      "The Git remote's URL.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "AuthenticationTokenSecretVersion",
      "The name of the Secret Manager secret version to use as an authentication token for Git operations. This secret is for assigning with HTTPS only(for SSH use `ssh_authentication_config`). Must be in the format projects/*/secrets/*/versions/*.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DefaultBranch",
      "The Git remote's default branch name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SshAuthenticationConfig",
      "Authentication fields for remote uris using SSH protocol.\nStructure is documented below.",
      Dataform_RepositoryGitRemoteSettingsSshAuthenticationConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "TokenStatus",
      "(Output)\nIndicates the status of the Git access token. https://cloud.google.com/dataform/reference/rest/v1beta1/projects.locations.repositories#TokenStatus",
      [],
      false,
      false,
    ),
  ];
}
