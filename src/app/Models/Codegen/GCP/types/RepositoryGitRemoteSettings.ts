import { RepositoryGitRemoteSettingsSshAuthenticationConfig } from "./RepositoryGitRemoteSettingsSshAuthenticationConfig";

export interface RepositoryGitRemoteSettings {
  /*
Authentication fields for remote uris using SSH protocol.
Structure is documented below.
*/
  SshAuthenticationConfig?: RepositoryGitRemoteSettingsSshAuthenticationConfig;

  /*
(Output)
Indicates the status of the Git access token. https://cloud.google.com/dataform/reference/rest/v1beta1/projects.locations.repositories#TokenStatus
*/
  TokenStatus?: string;

  // The Git remote's URL.
  Url?: string;

  // The name of the Secret Manager secret version to use as an authentication token for Git operations. This secret is for assigning with HTTPS only(for SSH use `ssh_authentication_config`). Must be in the format projects/-/secrets/-/versions/-.
  AuthenticationTokenSecretVersion?: string;

  // The Git remote's default branch name.
  DefaultBranch?: string;
}
