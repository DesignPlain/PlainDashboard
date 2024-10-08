import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  sql_getDatabaseInstanceSettingIpConfigurationAuthorizedNetwork,
  sql_getDatabaseInstanceSettingIpConfigurationAuthorizedNetwork_GetTypes,
} from './sql_getDatabaseInstanceSettingIpConfigurationAuthorizedNetwork';
import {
  sql_getDatabaseInstanceSettingIpConfigurationPscConfig,
  sql_getDatabaseInstanceSettingIpConfigurationPscConfig_GetTypes,
} from './sql_getDatabaseInstanceSettingIpConfigurationPscConfig';

export interface sql_getDatabaseInstanceSettingIpConfiguration {
  //
  authorizedNetworks?: Array<sql_getDatabaseInstanceSettingIpConfigurationAuthorizedNetwork>;

  // Whether Google Cloud services such as BigQuery are allowed to access data in this Cloud SQL instance over a private IP connection. SQLSERVER database type is not supported.
  enablePrivatePathForGoogleCloudServices?: boolean;

  // Whether this Cloud SQL instance should be assigned a public IPV4 address. At least ipv4_enabled must be enabled or a private_network must be configured.
  ipv4Enabled?: boolean;

  // The VPC network from which the Cloud SQL instance is accessible for private IP. For example, projects/myProject/global/networks/default. Specifying a network enables private IP. At least ipv4_enabled must be enabled or a private_network must be configured. This setting can be updated, but it cannot be removed after it is set.
  privateNetwork?: string;

  // PSC settings for a Cloud SQL instance.
  pscConfigs?: Array<sql_getDatabaseInstanceSettingIpConfigurationPscConfig>;

  // Whether SSL connections over IP are enforced or not. To change this field, also set the corresponding value in ssl_mode if it has been set too.
  requireSsl?: boolean;

  // Specify how SSL connection should be enforced in DB connections. This field provides more SSL enforcment options compared to require_ssl. To change this field, also set the correspoding value in require_ssl.
  sslMode?: string;

  // The name of the allocated ip range for the private ip CloudSQL instance. For example: "google-managed-services-default". If set, the instance ip will be created in the allocated range. The range name must comply with RFC 1035. Specifically, the name must be 1-63 characters long and match the regular expression a-z?.
  allocatedIpRange?: string;
}

export function sql_getDatabaseInstanceSettingIpConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'ipv4Enabled',
      'Whether this Cloud SQL instance should be assigned a public IPV4 address. At least ipv4_enabled must be enabled or a private_network must be configured.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'privateNetwork',
      'The VPC network from which the Cloud SQL instance is accessible for private IP. For example, projects/myProject/global/networks/default. Specifying a network enables private IP. At least ipv4_enabled must be enabled or a private_network must be configured. This setting can be updated, but it cannot be removed after it is set.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'pscConfigs',
      'PSC settings for a Cloud SQL instance.',
      () => sql_getDatabaseInstanceSettingIpConfigurationPscConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'requireSsl',
      'Whether SSL connections over IP are enforced or not. To change this field, also set the corresponding value in ssl_mode if it has been set too.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'sslMode',
      'Specify how SSL connection should be enforced in DB connections. This field provides more SSL enforcment options compared to require_ssl. To change this field, also set the correspoding value in require_ssl.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'allocatedIpRange',
      'The name of the allocated ip range for the private ip CloudSQL instance. For example: "google-managed-services-default". If set, the instance ip will be created in the allocated range. The range name must comply with RFC 1035. Specifically, the name must be 1-63 characters long and match the regular expression a-z?.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'authorizedNetworks',
      '',
      () =>
        sql_getDatabaseInstanceSettingIpConfigurationAuthorizedNetwork_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enablePrivatePathForGoogleCloudServices',
      'Whether Google Cloud services such as BigQuery are allowed to access data in this Cloud SQL instance over a private IP connection. SQLSERVER database type is not supported.',
      () => [],
      true,
      false,
    ),
  ];
}
