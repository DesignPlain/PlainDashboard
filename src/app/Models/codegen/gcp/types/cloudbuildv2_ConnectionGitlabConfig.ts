import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudbuildv2_ConnectionGitlabConfigReadAuthorizerCredential,
  cloudbuildv2_ConnectionGitlabConfigReadAuthorizerCredential_GetTypes,
} from "./cloudbuildv2_ConnectionGitlabConfigReadAuthorizerCredential";
import {
  cloudbuildv2_ConnectionGitlabConfigServiceDirectoryConfig,
  cloudbuildv2_ConnectionGitlabConfigServiceDirectoryConfig_GetTypes,
} from "./cloudbuildv2_ConnectionGitlabConfigServiceDirectoryConfig";
import {
  cloudbuildv2_ConnectionGitlabConfigAuthorizerCredential,
  cloudbuildv2_ConnectionGitlabConfigAuthorizerCredential_GetTypes,
} from "./cloudbuildv2_ConnectionGitlabConfigAuthorizerCredential";

export interface cloudbuildv2_ConnectionGitlabConfig {
  /*
Required. A GitLab personal access token with the `api` scope access.
Structure is documented below.
*/
  authorizerCredential?: cloudbuildv2_ConnectionGitlabConfigAuthorizerCredential;

  // The URI of the GitLab Enterprise host this connection is for. If not specified, the default value is https://gitlab.com.
  hostUri?: string;

  /*
Required. A GitLab personal access token with the minimum `read_api` scope access.
Structure is documented below.
*/
  readAuthorizerCredential?: cloudbuildv2_ConnectionGitlabConfigReadAuthorizerCredential;

  /*
(Output)
Output only. Version of the GitLab Enterprise server running on the `host_uri`.
*/
  serverVersion?: string;

  /*
Configuration for using Service Directory to privately connect to a GitLab Enterprise server. This should only be set if the GitLab Enterprise server is hosted on-premises and not reachable by public internet. If this field is left empty, calls to the GitLab Enterprise server will be made over the public internet.
Structure is documented below.
*/
  serviceDirectoryConfig?: cloudbuildv2_ConnectionGitlabConfigServiceDirectoryConfig;

  // SSL certificate to use for requests to GitLab Enterprise.
  sslCa?: string;

  // Required. Immutable. SecretManager resource containing the webhook secret of a GitLab Enterprise project, formatted as `projects/-/secrets/-/versions/-`.
  webhookSecretSecretVersion?: string;
}

export function cloudbuildv2_ConnectionGitlabConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "hostUri",
      "The URI of the GitLab Enterprise host this connection is for. If not specified, the default value is https://gitlab.com.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "readAuthorizerCredential",
      "Required. A GitLab personal access token with the minimum `read_api` scope access.\nStructure is documented below.",
      () =>
        cloudbuildv2_ConnectionGitlabConfigReadAuthorizerCredential_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serverVersion",
      "(Output)\nOutput only. Version of the GitLab Enterprise server running on the `host_uri`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "serviceDirectoryConfig",
      "Configuration for using Service Directory to privately connect to a GitLab Enterprise server. This should only be set if the GitLab Enterprise server is hosted on-premises and not reachable by public internet. If this field is left empty, calls to the GitLab Enterprise server will be made over the public internet.\nStructure is documented below.",
      () =>
        cloudbuildv2_ConnectionGitlabConfigServiceDirectoryConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sslCa",
      "SSL certificate to use for requests to GitLab Enterprise.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "webhookSecretSecretVersion",
      "Required. Immutable. SecretManager resource containing the webhook secret of a GitLab Enterprise project, formatted as `projects/*/secrets/*/versions/*`.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "authorizerCredential",
      "Required. A GitLab personal access token with the `api` scope access.\nStructure is documented below.",
      () => cloudbuildv2_ConnectionGitlabConfigAuthorizerCredential_GetTypes(),
      true,
      false,
    ),
  ];
}
