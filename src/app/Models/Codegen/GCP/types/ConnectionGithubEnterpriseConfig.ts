import { ConnectionGithubEnterpriseConfigServiceDirectoryConfig } from "./ConnectionGithubEnterpriseConfigServiceDirectoryConfig";

export interface ConnectionGithubEnterpriseConfig {
  // SecretManager resource containing the webhook secret of the GitHub App, formatted as `projects/-/secrets/-/versions/-`.
  WebhookSecretSecretVersion?: string;

  // Id of the GitHub App created from the manifest.
  AppId?: number;

  // ID of the installation of the GitHub App.
  AppInstallationId?: number;

  // The URL-friendly name of the GitHub App.
  AppSlug?: string;

  // Required. The URI of the GitHub Enterprise host this connection is for.
  HostUri?: string;

  // SecretManager resource containing the private key of the GitHub App, formatted as `projects/-/secrets/-/versions/-`.
  PrivateKeySecretVersion?: string;

  /*
Configuration for using Service Directory to privately connect to a GitHub Enterprise server. This should only be set if the GitHub Enterprise server is hosted on-premises and not reachable by public internet. If this field is left empty, calls to the GitHub Enterprise server will be made over the public internet.
Structure is documented below.
*/
  ServiceDirectoryConfig?: ConnectionGithubEnterpriseConfigServiceDirectoryConfig;

  // SSL certificate to use for requests to GitHub Enterprise.
  SslCa?: string;
}
