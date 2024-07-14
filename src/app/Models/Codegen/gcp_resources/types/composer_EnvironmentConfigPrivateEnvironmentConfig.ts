import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface composer_EnvironmentConfigPrivateEnvironmentConfig {
  // The CIDR block from which IP range in tenant project will be reserved for Cloud SQL. Needs to be disjoint from web_server_ipv4_cidr_block.
  cloudSqlIpv4CidrBlock?: string;

  // Mode of internal communication within the Composer environment. Must be one of "VPC_PEERING" or "PRIVATE_SERVICE_CONNECT".
  connectionType?: string;

  // If true, access to the public endpoint of the GKE cluster is denied. If this field is set to true, ip_allocation_policy.use_ip_aliases must be set to true for Cloud Composer environments in versions composer-1.-.--airflow--.-.-.
  enablePrivateEndpoint?: boolean;

  // When enabled, IPs from public (non-RFC1918) ranges can be used for ip_allocation_policy.cluster_ipv4_cidr_block and ip_allocation_policy.service_ipv4_cidr_block.
  enablePrivatelyUsedPublicIps?: boolean;

  // The IP range in CIDR notation to use for the hosted master network. This range is used for assigning internal IP addresses to the cluster master or set of masters and to the internal load balancer virtual IP. This range must not overlap with any other ranges in use within the cluster's network. If left blank, the default value of '172.16.0.0/28' is used.
  masterIpv4CidrBlock?: string;

  // The CIDR block from which IP range for web server will be reserved. Needs to be disjoint from master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block. This field is supported for Cloud Composer environments in versions composer-1.-.--airflow--.-.-.
  webServerIpv4CidrBlock?: string;

  // When specified, the environment will use Private Service Connect instead of VPC peerings to connect to Cloud SQL in the Tenant Project, and the PSC endpoint in the Customer Project will use an IP address from this subnetwork. This field is supported for Cloud Composer environments in versions composer-2.-.--airflow--.-.- and newer.
  cloudComposerConnectionSubnetwork?: string;

  // The CIDR block from which IP range for Cloud Composer Network in tenant project will be reserved. Needs to be disjoint from private_cluster_config.master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block. This field is supported for Cloud Composer environments in versions composer-2.-.--airflow--.-.- and newer.
  cloudComposerNetworkIpv4CidrBlock?: string;
}

export function composer_EnvironmentConfigPrivateEnvironmentConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enablePrivateEndpoint",
      "If true, access to the public endpoint of the GKE cluster is denied. If this field is set to true, ip_allocation_policy.use_ip_aliases must be set to true for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enablePrivatelyUsedPublicIps",
      "When enabled, IPs from public (non-RFC1918) ranges can be used for ip_allocation_policy.cluster_ipv4_cidr_block and ip_allocation_policy.service_ipv4_cidr_block.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "masterIpv4CidrBlock",
      "The IP range in CIDR notation to use for the hosted master network. This range is used for assigning internal IP addresses to the cluster master or set of masters and to the internal load balancer virtual IP. This range must not overlap with any other ranges in use within the cluster's network. If left blank, the default value of '172.16.0.0/28' is used.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "webServerIpv4CidrBlock",
      "The CIDR block from which IP range for web server will be reserved. Needs to be disjoint from master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "cloudComposerConnectionSubnetwork",
      "When specified, the environment will use Private Service Connect instead of VPC peerings to connect to Cloud SQL in the Tenant Project, and the PSC endpoint in the Customer Project will use an IP address from this subnetwork. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "cloudComposerNetworkIpv4CidrBlock",
      "The CIDR block from which IP range for Cloud Composer Network in tenant project will be reserved. Needs to be disjoint from private_cluster_config.master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "cloudSqlIpv4CidrBlock",
      "The CIDR block from which IP range in tenant project will be reserved for Cloud SQL. Needs to be disjoint from web_server_ipv4_cidr_block.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "connectionType",
      'Mode of internal communication within the Composer environment. Must be one of "VPC_PEERING" or "PRIVATE_SERVICE_CONNECT".',
      [],
      false,
      true,
    ),
  ];
}
