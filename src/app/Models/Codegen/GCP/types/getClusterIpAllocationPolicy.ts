import { getClusterIpAllocationPolicyPodCidrOverprovisionConfig } from "./getClusterIpAllocationPolicyPodCidrOverprovisionConfig";
import { getClusterIpAllocationPolicyAdditionalPodRangesConfig } from "./getClusterIpAllocationPolicyAdditionalPodRangesConfig";

export interface getClusterIpAllocationPolicy {
  // The IP address range of the services IPs in this cluster. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use.
  ServicesIpv4CidrBlock?: string;

  // The name of the existing secondary range in the cluster's subnetwork to use for service ClusterIPs. Alternatively, services_ipv4_cidr_block can be used to automatically create a GKE-managed one.
  ServicesSecondaryRangeName?: string;

  // The IP Stack type of the cluster. Choose between IPV4 and IPV4_IPV6. Default type is IPV4 Only if not set
  StackType?: string;

  // AdditionalPodRangesConfig is the configuration for additional pod secondary ranges supporting the ClusterUpdate message.
  AdditionalPodRangesConfigs?: Array<getClusterIpAllocationPolicyAdditionalPodRangesConfig>;

  // The IP address range for the cluster pod IPs. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use.
  ClusterIpv4CidrBlock?: string;

  // The name of the existing secondary range in the cluster's subnetwork to use for pod IP addresses. Alternatively, cluster_ipv4_cidr_block can be used to automatically create a GKE-managed one.
  ClusterSecondaryRangeName?: string;

  // Configuration for cluster level pod cidr overprovision. Default is disabled=false.
  PodCidrOverprovisionConfigs?: Array<getClusterIpAllocationPolicyPodCidrOverprovisionConfig>;
}
