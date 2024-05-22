import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataform_RepositoryGitRemoteSettingsSshAuthenticationConfig,
  dataform_RepositoryGitRemoteSettingsSshAuthenticationConfig_GetTypes,
} from "./dataform_RepositoryGitRemoteSettingsSshAuthenticationConfig";

export interface dataform_RepositoryGitRemoteSettings {
  // The Git remote's default branch name.
  defaultBranch?: string;

  /*
Authentication fields for remote uris using SSH protocol.
Structure is documented below.
*/
  sshAuthenticationConfig?: dataform_RepositoryGitRemoteSettingsSshAuthenticationConfig;

  /*
(Output)
Indicates the status of the Git access token. https://cloud.google.com/dataform/reference/rest/v1beta1/projects.locations.repositories#TokenStatus
*/
  tokenStatus?: string;

  // The Git remote's URL.
  url?: string;

  // The name of the Secret Manager secret version to use as an authentication token for Git operations. This secret is for assigning with HTTPS only(for SSH use `ssh_authentication_config`). Must be in the format projects/-/secrets/-/versions/-.
  authenticationTokenSecretVersion?: string;
}

export function dataform_RepositoryGitRemoteSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "url",
      "The Git remote's URL.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "authenticationTokenSecretVersion",
      "The name of the Secret Manager secret version to use as an authentication token for Git operations. This secret is for assigning with HTTPS only(for SSH use `ssh_authentication_config`). Must be in the format projects/*/secrets/*/versions/*.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "defaultBranch",
      "The Git remote's default branch name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sshAuthenticationConfig",
      "Authentication fields for remote uris using SSH protocol.\nStructure is documented below.",
      dataform_RepositoryGitRemoteSettingsSshAuthenticationConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tokenStatus",
      "(Output)\nIndicates the status of the Git access token. https://cloud.google.com/dataform/reference/rest/v1beta1/projects.locations.repositories#TokenStatus",
      [],
      false,
      false,
    ),
  ];
}
