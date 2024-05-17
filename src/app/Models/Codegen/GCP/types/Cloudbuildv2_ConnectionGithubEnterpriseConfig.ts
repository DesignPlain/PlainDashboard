import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudbuildv2_ConnectionGithubEnterpriseConfigServiceDirectoryConfig,
  Cloudbuildv2_ConnectionGithubEnterpriseConfigServiceDirectoryConfig_GetTypes,
} from "./Cloudbuildv2_ConnectionGithubEnterpriseConfigServiceDirectoryConfig";

export interface Cloudbuildv2_ConnectionGithubEnterpriseConfig {
  // SecretManager resource containing the private key of the GitHub App, formatted as `projects/-/secrets/-/versions/-`.
  PrivateKeySecretVersion?: string;

  /*
Configuration for using Service Directory to privately connect to a GitHub Enterprise server. This should only be set if the GitHub Enterprise server is hosted on-premises and not reachable by public internet. If this field is left empty, calls to the GitHub Enterprise server will be made over the public internet.
Structure is documented below.
*/
  ServiceDirectoryConfig?: Cloudbuildv2_ConnectionGithubEnterpriseConfigServiceDirectoryConfig;

  // SSL certificate to use for requests to GitHub Enterprise.
  SslCa?: string;

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
}

export function Cloudbuildv2_ConnectionGithubEnterpriseConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "SslCa",
      "SSL certificate to use for requests to GitHub Enterprise.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "WebhookSecretSecretVersion",
      "SecretManager resource containing the webhook secret of the GitHub App, formatted as `projects/*/secrets/*/versions/*`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "AppId",
      "Id of the GitHub App created from the manifest.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "AppInstallationId",
      "ID of the installation of the GitHub App.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "AppSlug",
      "The URL-friendly name of the GitHub App.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "HostUri",
      "Required. The URI of the GitHub Enterprise host this connection is for.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PrivateKeySecretVersion",
      "SecretManager resource containing the private key of the GitHub App, formatted as `projects/*/secrets/*/versions/*`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ServiceDirectoryConfig",
      "Configuration for using Service Directory to privately connect to a GitHub Enterprise server. This should only be set if the GitHub Enterprise server is hosted on-premises and not reachable by public internet. If this field is left empty, calls to the GitHub Enterprise server will be made over the public internet.\nStructure is documented below.",
      Cloudbuildv2_ConnectionGithubEnterpriseConfigServiceDirectoryConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
