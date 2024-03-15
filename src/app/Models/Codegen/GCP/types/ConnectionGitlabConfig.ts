import { ConnectionGitlabConfigAuthorizerCredential } from "./ConnectionGitlabConfigAuthorizerCredential";
import { ConnectionGitlabConfigReadAuthorizerCredential } from "./ConnectionGitlabConfigReadAuthorizerCredential";
import { ConnectionGitlabConfigServiceDirectoryConfig } from "./ConnectionGitlabConfigServiceDirectoryConfig";

export interface ConnectionGitlabConfig {
  /*
Required. A GitLab personal access token with the `api` scope access.
Structure is documented below.
*/
  AuthorizerCredential?: ConnectionGitlabConfigAuthorizerCredential;

  // The URI of the GitLab Enterprise host this connection is for. If not specified, the default value is https://gitlab.com.
  HostUri?: string;

  /*
Required. A GitLab personal access token with the minimum `read_api` scope access.
Structure is documented below.
*/
  ReadAuthorizerCredential?: ConnectionGitlabConfigReadAuthorizerCredential;

  /*
(Output)
Output only. Version of the GitLab Enterprise server running on the `host_uri`.
*/
  ServerVersion?: string;

  /*
Configuration for using Service Directory to privately connect to a GitLab Enterprise server. This should only be set if the GitLab Enterprise server is hosted on-premises and not reachable by public internet. If this field is left empty, calls to the GitLab Enterprise server will be made over the public internet.
Structure is documented below.
*/
  ServiceDirectoryConfig?: ConnectionGitlabConfigServiceDirectoryConfig;

  // SSL certificate to use for requests to GitLab Enterprise.
  SslCa?: string;

  // Required. Immutable. SecretManager resource containing the webhook secret of a GitLab Enterprise project, formatted as `projects/-/secrets/-/versions/-`.
  WebhookSecretSecretVersion?: string;
}
