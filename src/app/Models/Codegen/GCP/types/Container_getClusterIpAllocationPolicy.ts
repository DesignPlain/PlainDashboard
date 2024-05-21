import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  container_getClusterIpAllocationPolicyPodCidrOverprovisionConfig,
  container_getClusterIpAllocationPolicyPodCidrOverprovisionConfig_GetTypes,
} from "./container_getClusterIpAllocationPolicyPodCidrOverprovisionConfig";
import {
  container_getClusterIpAllocationPolicyAdditionalPodRangesConfig,
  container_getClusterIpAllocationPolicyAdditionalPodRangesConfig_GetTypes,
} from "./container_getClusterIpAllocationPolicyAdditionalPodRangesConfig";

export interface container_getClusterIpAllocationPolicy {
  // The name of the existing secondary range in the cluster's subnetwork to use for pod IP addresses. Alternatively, cluster_ipv4_cidr_block can be used to automatically create a GKE-managed one.
  clusterSecondaryRangeName?: string;

  // Configuration for cluster level pod cidr overprovision. Default is disabled=false.
  podCidrOverprovisionConfigs?: Array<container_getClusterIpAllocationPolicyPodCidrOverprovisionConfig>;

  // The IP address range of the services IPs in this cluster. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use.
  servicesIpv4CidrBlock?: string;

  // The name of the existing secondary range in the cluster's subnetwork to use for service ClusterIPs. Alternatively, services_ipv4_cidr_block can be used to automatically create a GKE-managed one.
  servicesSecondaryRangeName?: string;

  // The IP Stack type of the cluster. Choose between IPV4 and IPV4_IPV6. Default type is IPV4 Only if not set
  stackType?: string;

  // AdditionalPodRangesConfig is the configuration for additional pod secondary ranges supporting the ClusterUpdate message.
  additionalPodRangesConfigs?: Array<container_getClusterIpAllocationPolicyAdditionalPodRangesConfig>;

  // The IP address range for the cluster pod IPs. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use.
  clusterIpv4CidrBlock?: string;
}

export function container_getClusterIpAllocationPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "additionalPodRangesConfigs",
      "AdditionalPodRangesConfig is the configuration for additional pod secondary ranges supporting the ClusterUpdate message.",
      container_getClusterIpAllocationPolicyAdditionalPodRangesConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "clusterIpv4CidrBlock",
      "The IP address range for the cluster pod IPs. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "clusterSecondaryRangeName",
      "The name of the existing secondary range in the cluster's subnetwork to use for pod IP addresses. Alternatively, cluster_ipv4_cidr_block can be used to automatically create a GKE-managed one.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "podCidrOverprovisionConfigs",
      "Configuration for cluster level pod cidr overprovision. Default is disabled=false.",
      container_getClusterIpAllocationPolicyPodCidrOverprovisionConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "servicesIpv4CidrBlock",
      "The IP address range of the services IPs in this cluster. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "servicesSecondaryRangeName",
      "The name of the existing secondary range in the cluster's subnetwork to use for service ClusterIPs. Alternatively, services_ipv4_cidr_block can be used to automatically create a GKE-managed one.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "stackType",
      "The IP Stack type of the cluster. Choose between IPV4 and IPV4_IPV6. Default type is IPV4 Only if not set",
      [],
      true,
      false,
    ),
  ];
}
