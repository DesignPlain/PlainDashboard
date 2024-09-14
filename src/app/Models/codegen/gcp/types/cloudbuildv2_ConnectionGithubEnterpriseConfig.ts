import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudbuildv2_ConnectionGithubEnterpriseConfigServiceDirectoryConfig,
  cloudbuildv2_ConnectionGithubEnterpriseConfigServiceDirectoryConfig_GetTypes,
} from "./cloudbuildv2_ConnectionGithubEnterpriseConfigServiceDirectoryConfig";

export interface cloudbuildv2_ConnectionGithubEnterpriseConfig {
  // Required. The URI of the GitHub Enterprise host this connection is for.
  hostUri?: string;

  // SecretManager resource containing the private key of the GitHub App, formatted as `projects/-/secrets/-/versions/-`.
  privateKeySecretVersion?: string;

  /*
Configuration for using Service Directory to privately connect to a GitHub Enterprise server. This should only be set if the GitHub Enterprise server is hosted on-premises and not reachable by public internet. If this field is left empty, calls to the GitHub Enterprise server will be made over the public internet.
Structure is documented below.
*/
  serviceDirectoryConfig?: cloudbuildv2_ConnectionGithubEnterpriseConfigServiceDirectoryConfig;

  // SSL certificate to use for requests to GitHub Enterprise.
  sslCa?: string;

  // SecretManager resource containing the webhook secret of the GitHub App, formatted as `projects/-/secrets/-/versions/-`.
  webhookSecretSecretVersion?: string;

  // Id of the GitHub App created from the manifest.
  appId?: number;

  // ID of the installation of the GitHub App.
  appInstallationId?: number;

  // The URL-friendly name of the GitHub App.
  appSlug?: string;
}

export function cloudbuildv2_ConnectionGithubEnterpriseConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "appSlug",
      "The URL-friendly name of the GitHub App.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "hostUri",
      "Required. The URI of the GitHub Enterprise host this connection is for.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "privateKeySecretVersion",
      "SecretManager resource containing the private key of the GitHub App, formatted as `projects/*/secrets/*/versions/*`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "serviceDirectoryConfig",
      "Configuration for using Service Directory to privately connect to a GitHub Enterprise server. This should only be set if the GitHub Enterprise server is hosted on-premises and not reachable by public internet. If this field is left empty, calls to the GitHub Enterprise server will be made over the public internet.\nStructure is documented below.",
      () =>
        cloudbuildv2_ConnectionGithubEnterpriseConfigServiceDirectoryConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sslCa",
      "SSL certificate to use for requests to GitHub Enterprise.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "webhookSecretSecretVersion",
      "SecretManager resource containing the webhook secret of the GitHub App, formatted as `projects/*/secrets/*/versions/*`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "appId",
      "Id of the GitHub App created from the manifest.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "appInstallationId",
      "ID of the installation of the GitHub App.",
      () => [],
      false,
      false,
    ),
  ];
}
