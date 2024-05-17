import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudbuildv2_ConnectionGitlabConfigAuthorizerCredential,
  Cloudbuildv2_ConnectionGitlabConfigAuthorizerCredential_GetTypes,
} from "./Cloudbuildv2_ConnectionGitlabConfigAuthorizerCredential";
import {
  Cloudbuildv2_ConnectionGitlabConfigReadAuthorizerCredential,
  Cloudbuildv2_ConnectionGitlabConfigReadAuthorizerCredential_GetTypes,
} from "./Cloudbuildv2_ConnectionGitlabConfigReadAuthorizerCredential";
import {
  Cloudbuildv2_ConnectionGitlabConfigServiceDirectoryConfig,
  Cloudbuildv2_ConnectionGitlabConfigServiceDirectoryConfig_GetTypes,
} from "./Cloudbuildv2_ConnectionGitlabConfigServiceDirectoryConfig";

export interface Cloudbuildv2_ConnectionGitlabConfig {
  // SSL certificate to use for requests to GitLab Enterprise.
  SslCa?: string;

  // Required. Immutable. SecretManager resource containing the webhook secret of a GitLab Enterprise project, formatted as `projects/-/secrets/-/versions/-`.
  WebhookSecretSecretVersion?: string;

  /*
Required. A GitLab personal access token with the `api` scope access.
Structure is documented below.
*/
  AuthorizerCredential?: Cloudbuildv2_ConnectionGitlabConfigAuthorizerCredential;

  // The URI of the GitLab Enterprise host this connection is for. If not specified, the default value is https://gitlab.com.
  HostUri?: string;

  /*
Required. A GitLab personal access token with the minimum `read_api` scope access.
Structure is documented below.
*/
  ReadAuthorizerCredential?: Cloudbuildv2_ConnectionGitlabConfigReadAuthorizerCredential;

  /*
(Output)
Output only. Version of the GitLab Enterprise server running on the `host_uri`.
*/
  ServerVersion?: string;

  /*
Configuration for using Service Directory to privately connect to a GitLab Enterprise server. This should only be set if the GitLab Enterprise server is hosted on-premises and not reachable by public internet. If this field is left empty, calls to the GitLab Enterprise server will be made over the public internet.
Structure is documented below.
*/
  ServiceDirectoryConfig?: Cloudbuildv2_ConnectionGitlabConfigServiceDirectoryConfig;
}

export function Cloudbuildv2_ConnectionGitlabConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ServerVersion",
      "(Output)\nOutput only. Version of the GitLab Enterprise server running on the `host_uri`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ServiceDirectoryConfig",
      "Configuration for using Service Directory to privately connect to a GitLab Enterprise server. This should only be set if the GitLab Enterprise server is hosted on-premises and not reachable by public internet. If this field is left empty, calls to the GitLab Enterprise server will be made over the public internet.\nStructure is documented below.",
      Cloudbuildv2_ConnectionGitlabConfigServiceDirectoryConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SslCa",
      "SSL certificate to use for requests to GitLab Enterprise.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "WebhookSecretSecretVersion",
      "Required. Immutable. SecretManager resource containing the webhook secret of a GitLab Enterprise project, formatted as `projects/*/secrets/*/versions/*`.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "AuthorizerCredential",
      "Required. A GitLab personal access token with the `api` scope access.\nStructure is documented below.",
      Cloudbuildv2_ConnectionGitlabConfigAuthorizerCredential_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "HostUri",
      "The URI of the GitLab Enterprise host this connection is for. If not specified, the default value is https://gitlab.com.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ReadAuthorizerCredential",
      "Required. A GitLab personal access token with the minimum `read_api` scope access.\nStructure is documented below.",
      Cloudbuildv2_ConnectionGitlabConfigReadAuthorizerCredential_GetTypes(),
      true,
      false,
    ),
  ];
}
