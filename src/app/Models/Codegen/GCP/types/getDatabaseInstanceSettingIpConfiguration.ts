import { getDatabaseInstanceSettingIpConfigurationPscConfig } from "./getDatabaseInstanceSettingIpConfigurationPscConfig";
import { getDatabaseInstanceSettingIpConfigurationAuthorizedNetwork } from "./getDatabaseInstanceSettingIpConfigurationAuthorizedNetwork";

export interface getDatabaseInstanceSettingIpConfiguration {
  // Whether Google Cloud services such as BigQuery are allowed to access data in this Cloud SQL instance over a private IP connection. SQLSERVER database type is not supported.
  EnablePrivatePathForGoogleCloudServices?: boolean;

  // Whether this Cloud SQL instance should be assigned a public IPV4 address. At least ipv4_enabled must be enabled or a private_network must be configured.
  Ipv4Enabled?: boolean;

  // The VPC network from which the Cloud SQL instance is accessible for private IP. For example, projects/myProject/global/networks/default. Specifying a network enables private IP. At least ipv4_enabled must be enabled or a private_network must be configured. This setting can be updated, but it cannot be removed after it is set.
  PrivateNetwork?: string;

  // PSC settings for a Cloud SQL instance.
  PscConfigs?: Array<getDatabaseInstanceSettingIpConfigurationPscConfig>;

  // Whether SSL connections over IP are enforced or not. To change this field, also set the corresponding value in ssl_mode if it has been set too.
  RequireSsl?: boolean;

  // Specify how SSL connection should be enforced in DB connections. This field provides more SSL enforcment options compared to require_ssl. To change this field, also set the correspoding value in require_ssl.
  SslMode?: string;

  // The name of the allocated ip range for the private ip CloudSQL instance. For example: "google-managed-services-default". If set, the instance ip will be created in the allocated range. The range name must comply with RFC 1035. Specifically, the name must be 1-63 characters long and match the regular expression a-z?.
  AllocatedIpRange?: string;

  //
  AuthorizedNetworks?: Array<getDatabaseInstanceSettingIpConfigurationAuthorizedNetwork>;
}
