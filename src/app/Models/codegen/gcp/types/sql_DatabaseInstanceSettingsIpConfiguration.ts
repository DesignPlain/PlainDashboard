import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  sql_DatabaseInstanceSettingsIpConfigurationAuthorizedNetwork,
  sql_DatabaseInstanceSettingsIpConfigurationAuthorizedNetwork_GetTypes,
} from "./sql_DatabaseInstanceSettingsIpConfigurationAuthorizedNetwork";
import {
  sql_DatabaseInstanceSettingsIpConfigurationPscConfig,
  sql_DatabaseInstanceSettingsIpConfigurationPscConfig_GetTypes,
} from "./sql_DatabaseInstanceSettingsIpConfigurationPscConfig";

export interface sql_DatabaseInstanceSettingsIpConfiguration {
  // PSC settings for a Cloud SQL instance.
  pscConfigs?: Array<sql_DatabaseInstanceSettingsIpConfigurationPscConfig>;

  // Whether SSL connections over IP are enforced or not. To change this field, also set the corresponding value in `ssl_mode`.
  requireSsl?: boolean;

  /*
Specify how SSL connection should be enforced in DB connections. This field provides more SSL enforcment options compared to `require_ssl`. To change this field, also set the correspoding value in `require_ssl`.
- For PostgreSQL instances, the value pairs are listed in the [API reference doc](https://cloud.google.com/sql/docs/postgres/admin-api/rest/v1beta4/instances#ipconfiguration) for `ssl_mode` field.
- For MySQL instances, use the same value pairs as the PostgreSQL instances.
- For SQL Server instances, set it to `ALLOW_UNENCRYPTED_AND_ENCRYPTED` when `require_ssl=false` and `ENCRYPTED_ONLY` otherwise.
*/
  sslMode?: string;

  // The name of the allocated ip range for the private ip CloudSQL instance. For example: "google-managed-services-default". If set, the instance ip will be created in the allocated range. The range name must comply with [RFC 1035](https://datatracker.ietf.org/doc/html/rfc1035). Specifically, the name must be 1-63 characters long and match the regular expression a-z?.
  allocatedIpRange?: string;

  //
  authorizedNetworks?: Array<sql_DatabaseInstanceSettingsIpConfigurationAuthorizedNetwork>;

  // Whether Google Cloud services such as BigQuery are allowed to access data in this Cloud SQL instance over a private IP connection. SQLSERVER database type is not supported.
  enablePrivatePathForGoogleCloudServices?: boolean;

  /*
Whether this Cloud SQL instance should be assigned
a public IPV4 address. At least `ipv4_enabled` must be enabled or a
`private_network` must be configured.
*/
  ipv4Enabled?: boolean;

  /*
The VPC network from which the Cloud SQL
instance is accessible for private IP. For example, projects/myProject/global/networks/default.
Specifying a network enables private IP.
At least `ipv4_enabled` must be enabled or a `private_network` must be configured.
This setting can be updated, but it cannot be removed after it is set.
*/
  privateNetwork?: string;
}

export function sql_DatabaseInstanceSettingsIpConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "sslMode",
      "Specify how SSL connection should be enforced in DB connections. This field provides more SSL enforcment options compared to `require_ssl`. To change this field, also set the correspoding value in `require_ssl`.\n* For PostgreSQL instances, the value pairs are listed in the [API reference doc](https://cloud.google.com/sql/docs/postgres/admin-api/rest/v1beta4/instances#ipconfiguration) for `ssl_mode` field.\n* For MySQL instances, use the same value pairs as the PostgreSQL instances.\n* For SQL Server instances, set it to `ALLOW_UNENCRYPTED_AND_ENCRYPTED` when `require_ssl=false` and `ENCRYPTED_ONLY` otherwise.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "allocatedIpRange",
      'The name of the allocated ip range for the private ip CloudSQL instance. For example: "google-managed-services-default". If set, the instance ip will be created in the allocated range. The range name must comply with [RFC 1035](https://datatracker.ietf.org/doc/html/rfc1035). Specifically, the name must be 1-63 characters long and match the regular expression a-z?.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "authorizedNetworks",
      "",
      () =>
        sql_DatabaseInstanceSettingsIpConfigurationAuthorizedNetwork_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enablePrivatePathForGoogleCloudServices",
      "Whether Google Cloud services such as BigQuery are allowed to access data in this Cloud SQL instance over a private IP connection. SQLSERVER database type is not supported.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "ipv4Enabled",
      "Whether this Cloud SQL instance should be assigned\na public IPV4 address. At least `ipv4_enabled` must be enabled or a\n`private_network` must be configured.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "privateNetwork",
      "The VPC network from which the Cloud SQL\ninstance is accessible for private IP. For example,\u00a0projects/myProject/global/networks/default.\nSpecifying a network enables private IP.\nAt least `ipv4_enabled` must be enabled or a `private_network` must be configured.\nThis setting can be updated, but it cannot be removed after it is set.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "pscConfigs",
      "PSC settings for a Cloud SQL instance.",
      () => sql_DatabaseInstanceSettingsIpConfigurationPscConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "requireSsl",
      "Whether SSL connections over IP are enforced or not. To change this field, also set the corresponding value in `ssl_mode`.",
      () => [],
      false,
      false,
    ),
  ];
}
