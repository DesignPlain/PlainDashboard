import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  sql_getDatabaseInstancesInstanceSettingIpConfigurationAuthorizedNetwork,
  sql_getDatabaseInstancesInstanceSettingIpConfigurationAuthorizedNetwork_GetTypes,
} from "./sql_getDatabaseInstancesInstanceSettingIpConfigurationAuthorizedNetwork";
import {
  sql_getDatabaseInstancesInstanceSettingIpConfigurationPscConfig,
  sql_getDatabaseInstancesInstanceSettingIpConfigurationPscConfig_GetTypes,
} from "./sql_getDatabaseInstancesInstanceSettingIpConfigurationPscConfig";

export interface sql_getDatabaseInstancesInstanceSettingIpConfiguration {
  // The name of the allocated ip range for the private ip CloudSQL instance. For example: "google-managed-services-default". If set, the instance ip will be created in the allocated range. The range name must comply with RFC 1035. Specifically, the name must be 1-63 characters long and match the regular expression a-z?.
  allocatedIpRange?: string;

  //
  authorizedNetworks?: Array<sql_getDatabaseInstancesInstanceSettingIpConfigurationAuthorizedNetwork>;

  // Whether Google Cloud services such as BigQuery are allowed to access data in this Cloud SQL instance over a private IP connection. SQLSERVER database type is not supported.
  enablePrivatePathForGoogleCloudServices?: boolean;

  // Whether this Cloud SQL instance should be assigned a public IPV4 address. At least ipv4_enabled must be enabled or a private_network must be configured.
  ipv4Enabled?: boolean;

  // The VPC network from which the Cloud SQL instance is accessible for private IP. For example, projects/myProject/global/networks/default. Specifying a network enables private IP. At least ipv4_enabled must be enabled or a private_network must be configured. This setting can be updated, but it cannot be removed after it is set.
  privateNetwork?: string;

  // PSC settings for a Cloud SQL instance.
  pscConfigs?: Array<sql_getDatabaseInstancesInstanceSettingIpConfigurationPscConfig>;

  // Whether SSL connections over IP are enforced or not. To change this field, also set the corresponding value in ssl_mode if it has been set too.
  requireSsl?: boolean;

  // Specify how SSL connection should be enforced in DB connections. This field provides more SSL enforcment options compared to require_ssl. To change this field, also set the correspoding value in require_ssl.
  sslMode?: string;
}

export function sql_getDatabaseInstancesInstanceSettingIpConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "authorizedNetworks",
      "",
      sql_getDatabaseInstancesInstanceSettingIpConfigurationAuthorizedNetwork_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enablePrivatePathForGoogleCloudServices",
      "Whether Google Cloud services such as BigQuery are allowed to access data in this Cloud SQL instance over a private IP connection. SQLSERVER database type is not supported.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "ipv4Enabled",
      "Whether this Cloud SQL instance should be assigned a public IPV4 address. At least ipv4_enabled must be enabled or a private_network must be configured.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "privateNetwork",
      "The VPC network from which the Cloud SQL instance is accessible for private IP. For example, projects/myProject/global/networks/default. Specifying a network enables private IP. At least ipv4_enabled must be enabled or a private_network must be configured. This setting can be updated, but it cannot be removed after it is set.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "pscConfigs",
      "PSC settings for a Cloud SQL instance.",
      sql_getDatabaseInstancesInstanceSettingIpConfigurationPscConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "requireSsl",
      "Whether SSL connections over IP are enforced or not. To change this field, also set the corresponding value in ssl_mode if it has been set too.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sslMode",
      "Specify how SSL connection should be enforced in DB connections. This field provides more SSL enforcment options compared to require_ssl. To change this field, also set the correspoding value in require_ssl.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "allocatedIpRange",
      'The name of the allocated ip range for the private ip CloudSQL instance. For example: "google-managed-services-default". If set, the instance ip will be created in the allocated range. The range name must comply with RFC 1035. Specifically, the name must be 1-63 characters long and match the regular expression a-z?.',
      [],
      true,
      false,
    ),
  ];
}
