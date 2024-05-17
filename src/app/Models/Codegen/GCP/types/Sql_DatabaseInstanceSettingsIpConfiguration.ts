import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Sql_DatabaseInstanceSettingsIpConfigurationPscConfig,
  Sql_DatabaseInstanceSettingsIpConfigurationPscConfig_GetTypes,
} from "./Sql_DatabaseInstanceSettingsIpConfigurationPscConfig";
import {
  Sql_DatabaseInstanceSettingsIpConfigurationAuthorizedNetwork,
  Sql_DatabaseInstanceSettingsIpConfigurationAuthorizedNetwork_GetTypes,
} from "./Sql_DatabaseInstanceSettingsIpConfigurationAuthorizedNetwork";

export interface Sql_DatabaseInstanceSettingsIpConfiguration {
  /*
The VPC network from which the Cloud SQL
instance is accessible for private IP. For example, projects/myProject/global/networks/default.
Specifying a network enables private IP.
At least `ipv4_enabled` must be enabled or a `private_network` must be configured.
This setting can be updated, but it cannot be removed after it is set.
*/
  PrivateNetwork?: string;

  // PSC settings for a Cloud SQL instance.
  PscConfigs?: Array<Sql_DatabaseInstanceSettingsIpConfigurationPscConfig>;

  // Whether SSL connections over IP are enforced or not. To change this field, also set the corresponding value in `ssl_mode`.
  RequireSsl?: boolean;

  /*
Specify how SSL connection should be enforced in DB connections. This field provides more SSL enforcment options compared to `require_ssl`. To change this field, also set the correspoding value in `require_ssl`.
- For PostgreSQL instances, the value pairs are listed in the [API reference doc](https://cloud.google.com/sql/docs/postgres/admin-api/rest/v1beta4/instances#ipconfiguration) for `ssl_mode` field.
- For MySQL instances, use the same value pairs as the PostgreSQL instances.
- For SQL Server instances, set it to `ALLOW_UNENCRYPTED_AND_ENCRYPTED` when `require_ssl=false` and `ENCRYPTED_ONLY` otherwise.
*/
  SslMode?: string;

  // The name of the allocated ip range for the private ip CloudSQL instance. For example: "google-managed-services-default". If set, the instance ip will be created in the allocated range. The range name must comply with [RFC 1035](https://datatracker.ietf.org/doc/html/rfc1035). Specifically, the name must be 1-63 characters long and match the regular expression a-z?.
  AllocatedIpRange?: string;

  //
  AuthorizedNetworks?: Array<Sql_DatabaseInstanceSettingsIpConfigurationAuthorizedNetwork>;

  // Whether Google Cloud services such as BigQuery are allowed to access data in this Cloud SQL instance over a private IP connection. SQLSERVER database type is not supported.
  EnablePrivatePathForGoogleCloudServices?: boolean;

  /*
Whether this Cloud SQL instance should be assigned
a public IPV4 address. At least `ipv4_enabled` must be enabled or a
`private_network` must be configured.
*/
  Ipv4Enabled?: boolean;
}

export function Sql_DatabaseInstanceSettingsIpConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "PrivateNetwork",
      "The VPC network from which the Cloud SQL\ninstance is accessible for private IP. For example,\u00a0projects/myProject/global/networks/default.\nSpecifying a network enables private IP.\nAt least `ipv4_enabled` must be enabled or a `private_network` must be configured.\nThis setting can be updated, but it cannot be removed after it is set.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "PscConfigs",
      "PSC settings for a Cloud SQL instance.",
      Sql_DatabaseInstanceSettingsIpConfigurationPscConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "RequireSsl",
      "Whether SSL connections over IP are enforced or not. To change this field, also set the corresponding value in `ssl_mode`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SslMode",
      "Specify how SSL connection should be enforced in DB connections. This field provides more SSL enforcment options compared to `require_ssl`. To change this field, also set the correspoding value in `require_ssl`.\n* For PostgreSQL instances, the value pairs are listed in the [API reference doc](https://cloud.google.com/sql/docs/postgres/admin-api/rest/v1beta4/instances#ipconfiguration) for `ssl_mode` field.\n* For MySQL instances, use the same value pairs as the PostgreSQL instances.\n* For SQL Server instances, set it to `ALLOW_UNENCRYPTED_AND_ENCRYPTED` when `require_ssl=false` and `ENCRYPTED_ONLY` otherwise.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "AllocatedIpRange",
      'The name of the allocated ip range for the private ip CloudSQL instance. For example: "google-managed-services-default". If set, the instance ip will be created in the allocated range. The range name must comply with [RFC 1035](https://datatracker.ietf.org/doc/html/rfc1035). Specifically, the name must be 1-63 characters long and match the regular expression a-z?.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AuthorizedNetworks",
      "",
      Sql_DatabaseInstanceSettingsIpConfigurationAuthorizedNetwork_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnablePrivatePathForGoogleCloudServices",
      "Whether Google Cloud services such as BigQuery are allowed to access data in this Cloud SQL instance over a private IP connection. SQLSERVER database type is not supported.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Ipv4Enabled",
      "Whether this Cloud SQL instance should be assigned\na public IPV4 address. At least `ipv4_enabled` must be enabled or a\n`private_network` must be configured.",
      [],
      false,
      false,
    ),
  ];
}
