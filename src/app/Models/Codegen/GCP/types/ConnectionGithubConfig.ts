import { ConnectionGithubConfigAuthorizerCredential } from "./ConnectionGithubConfigAuthorizerCredential";

export interface ConnectionGithubConfig {
  // GitHub App installation id.
  AppInstallationId?: number;

  /*
OAuth credential of the account that authorized the Cloud Build GitHub App. It is recommended to use a robot account instead of a human user account. The OAuth token must be tied to the Cloud Build GitHub App.
Structure is documented below.
*/
  AuthorizerCredential?: ConnectionGithubConfigAuthorizerCredential;
}
