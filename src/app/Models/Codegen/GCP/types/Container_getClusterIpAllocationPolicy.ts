import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_getClusterIpAllocationPolicyAdditionalPodRangesConfig,
  Container_getClusterIpAllocationPolicyAdditionalPodRangesConfig_GetTypes,
} from "./Container_getClusterIpAllocationPolicyAdditionalPodRangesConfig";
import {
  Container_getClusterIpAllocationPolicyPodCidrOverprovisionConfig,
  Container_getClusterIpAllocationPolicyPodCidrOverprovisionConfig_GetTypes,
} from "./Container_getClusterIpAllocationPolicyPodCidrOverprovisionConfig";

export interface Container_getClusterIpAllocationPolicy {
  // The IP Stack type of the cluster. Choose between IPV4 and IPV4_IPV6. Default type is IPV4 Only if not set
  StackType?: string;

  // AdditionalPodRangesConfig is the configuration for additional pod secondary ranges supporting the ClusterUpdate message.
  AdditionalPodRangesConfigs?: Array<Container_getClusterIpAllocationPolicyAdditionalPodRangesConfig>;

  // The IP address range for the cluster pod IPs. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use.
  ClusterIpv4CidrBlock?: string;

  // The name of the existing secondary range in the cluster's subnetwork to use for pod IP addresses. Alternatively, cluster_ipv4_cidr_block can be used to automatically create a GKE-managed one.
  ClusterSecondaryRangeName?: string;

  // Configuration for cluster level pod cidr overprovision. Default is disabled=false.
  PodCidrOverprovisionConfigs?: Array<Container_getClusterIpAllocationPolicyPodCidrOverprovisionConfig>;

  // The IP address range of the services IPs in this cluster. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use.
  ServicesIpv4CidrBlock?: string;

  // The name of the existing secondary range in the cluster's subnetwork to use for service ClusterIPs. Alternatively, services_ipv4_cidr_block can be used to automatically create a GKE-managed one.
  ServicesSecondaryRangeName?: string;
}

export function Container_getClusterIpAllocationPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "StackType",
      "The IP Stack type of the cluster. Choose between IPV4 and IPV4_IPV6. Default type is IPV4 Only if not set",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AdditionalPodRangesConfigs",
      "AdditionalPodRangesConfig is the configuration for additional pod secondary ranges supporting the ClusterUpdate message.",
      Container_getClusterIpAllocationPolicyAdditionalPodRangesConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ClusterIpv4CidrBlock",
      "The IP address range for the cluster pod IPs. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ClusterSecondaryRangeName",
      "The name of the existing secondary range in the cluster's subnetwork to use for pod IP addresses. Alternatively, cluster_ipv4_cidr_block can be used to automatically create a GKE-managed one.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "PodCidrOverprovisionConfigs",
      "Configuration for cluster level pod cidr overprovision. Default is disabled=false.",
      Container_getClusterIpAllocationPolicyPodCidrOverprovisionConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ServicesIpv4CidrBlock",
      "The IP address range of the services IPs in this cluster. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ServicesSecondaryRangeName",
      "The name of the existing secondary range in the cluster's subnetwork to use for service ClusterIPs. Alternatively, services_ipv4_cidr_block can be used to automatically create a GKE-managed one.",
      [],
      true,
      false,
    ),
  ];
}
