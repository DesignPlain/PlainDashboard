import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Composer_EnvironmentConfigPrivateEnvironmentConfig {
  // The CIDR block from which IP range for web server will be reserved. Needs to be disjoint from master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block. This field is supported for Cloud Composer environments in versions composer-1.-.--airflow--.-.-.
  WebServerIpv4CidrBlock?: string;

  // When specified, the environment will use Private Service Connect instead of VPC peerings to connect to Cloud SQL in the Tenant Project, and the PSC endpoint in the Customer Project will use an IP address from this subnetwork. This field is supported for Cloud Composer environments in versions composer-2.-.--airflow--.-.- and newer.
  CloudComposerConnectionSubnetwork?: string;

  // The CIDR block from which IP range for Cloud Composer Network in tenant project will be reserved. Needs to be disjoint from private_cluster_config.master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block. This field is supported for Cloud Composer environments in versions composer-2.-.--airflow--.-.- and newer.
  CloudComposerNetworkIpv4CidrBlock?: string;

  // The CIDR block from which IP range in tenant project will be reserved for Cloud SQL. Needs to be disjoint from web_server_ipv4_cidr_block.
  CloudSqlIpv4CidrBlock?: string;

  // Mode of internal communication within the Composer environment. Must be one of "VPC_PEERING" or "PRIVATE_SERVICE_CONNECT".
  ConnectionType?: string;

  // If true, access to the public endpoint of the GKE cluster is denied. If this field is set to true, ip_allocation_policy.use_ip_aliases must be set to true for Cloud Composer environments in versions composer-1.-.--airflow--.-.-.
  EnablePrivateEndpoint?: boolean;

  // When enabled, IPs from public (non-RFC1918) ranges can be used for ip_allocation_policy.cluster_ipv4_cidr_block and ip_allocation_policy.service_ipv4_cidr_block.
  EnablePrivatelyUsedPublicIps?: boolean;

  // The IP range in CIDR notation to use for the hosted master network. This range is used for assigning internal IP addresses to the cluster master or set of masters and to the internal load balancer virtual IP. This range must not overlap with any other ranges in use within the cluster's network. If left blank, the default value of '172.16.0.0/28' is used.
  MasterIpv4CidrBlock?: string;
}

export function Composer_EnvironmentConfigPrivateEnvironmentConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "EnablePrivatelyUsedPublicIps",
      "When enabled, IPs from public (non-RFC1918) ranges can be used for ip_allocation_policy.cluster_ipv4_cidr_block and ip_allocation_policy.service_ipv4_cidr_block.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "MasterIpv4CidrBlock",
      "The IP range in CIDR notation to use for the hosted master network. This range is used for assigning internal IP addresses to the cluster master or set of masters and to the internal load balancer virtual IP. This range must not overlap with any other ranges in use within the cluster's network. If left blank, the default value of '172.16.0.0/28' is used.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "WebServerIpv4CidrBlock",
      "The CIDR block from which IP range for web server will be reserved. Needs to be disjoint from master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "CloudComposerConnectionSubnetwork",
      "When specified, the environment will use Private Service Connect instead of VPC peerings to connect to Cloud SQL in the Tenant Project, and the PSC endpoint in the Customer Project will use an IP address from this subnetwork. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "CloudComposerNetworkIpv4CidrBlock",
      "The CIDR block from which IP range for Cloud Composer Network in tenant project will be reserved. Needs to be disjoint from private_cluster_config.master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "CloudSqlIpv4CidrBlock",
      "The CIDR block from which IP range in tenant project will be reserved for Cloud SQL. Needs to be disjoint from web_server_ipv4_cidr_block.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ConnectionType",
      'Mode of internal communication within the Composer environment. Must be one of "VPC_PEERING" or "PRIVATE_SERVICE_CONNECT".',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnablePrivateEndpoint",
      "If true, access to the public endpoint of the GKE cluster is denied. If this field is set to true, ip_allocation_policy.use_ip_aliases must be set to true for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.",
      [],
      false,
      true,
    ),
  ];
}
