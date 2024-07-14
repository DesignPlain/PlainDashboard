import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  container_ClusterIpAllocationPolicyAdditionalPodRangesConfig,
  container_ClusterIpAllocationPolicyAdditionalPodRangesConfig_GetTypes,
} from "./container_ClusterIpAllocationPolicyAdditionalPodRangesConfig";
import {
  container_ClusterIpAllocationPolicyPodCidrOverprovisionConfig,
  container_ClusterIpAllocationPolicyPodCidrOverprovisionConfig_GetTypes,
} from "./container_ClusterIpAllocationPolicyPodCidrOverprovisionConfig";

export interface container_ClusterIpAllocationPolicy {
  /*
The name of the existing
secondary range in the cluster's subnetwork to use for service `ClusterIP`s.
Alternatively, `services_ipv4_cidr_block` can be used to automatically create a
GKE-managed one.
*/
  servicesSecondaryRangeName?: string;

  /*
The IP Stack Type of the cluster.
Default value is `IPV4`.
Possible values are `IPV4` and `IPV4_IPV6`.
*/
  stackType?: string;

  /*
The configuration for additional pod secondary ranges at
the cluster level. Used for Autopilot clusters and Standard clusters with which control of the
secondary Pod IP address assignment to node pools isn't needed. Structure is documented below.
*/
  additionalPodRangesConfig?: container_ClusterIpAllocationPolicyAdditionalPodRangesConfig;

  /*
The IP address range for the cluster pod IPs.
Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14)
to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14)
from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to
pick a specific range to use.
*/
  clusterIpv4CidrBlock?: string;

  /*
The name of the existing secondary
range in the cluster's subnetwork to use for pod IP addresses. Alternatively,
`cluster_ipv4_cidr_block` can be used to automatically create a GKE-managed one.
*/
  clusterSecondaryRangeName?: string;

  // Configuration for cluster level pod cidr overprovision. Default is disabled=false.
  podCidrOverprovisionConfig?: container_ClusterIpAllocationPolicyPodCidrOverprovisionConfig;

  /*
The IP address range of the services IPs in this cluster.
Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14)
to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14)
from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to
pick a specific range to use.
*/
  servicesIpv4CidrBlock?: string;
}

export function container_ClusterIpAllocationPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "podCidrOverprovisionConfig",
      "Configuration for cluster level pod cidr overprovision. Default is disabled=false.",
      container_ClusterIpAllocationPolicyPodCidrOverprovisionConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "servicesIpv4CidrBlock",
      "The IP address range of the services IPs in this cluster.\nSet to blank to have a range chosen with the default size. Set to /netmask (e.g. /14)\nto have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14)\nfrom the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to\npick a specific range to use.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "servicesSecondaryRangeName",
      "The name of the existing\nsecondary range in the cluster's subnetwork to use for service `ClusterIP`s.\nAlternatively, `services_ipv4_cidr_block` can be used to automatically create a\nGKE-managed one.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "stackType",
      "The IP Stack Type of the cluster.\nDefault value is `IPV4`.\nPossible values are `IPV4` and `IPV4_IPV6`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "additionalPodRangesConfig",
      "The configuration for additional pod secondary ranges at\nthe cluster level. Used for Autopilot clusters and Standard clusters with which control of the\nsecondary Pod IP address assignment to node pools isn't needed. Structure is documented below.",
      container_ClusterIpAllocationPolicyAdditionalPodRangesConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "clusterIpv4CidrBlock",
      "The IP address range for the cluster pod IPs.\nSet to blank to have a range chosen with the default size. Set to /netmask (e.g. /14)\nto have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14)\nfrom the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to\npick a specific range to use.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "clusterSecondaryRangeName",
      "The name of the existing secondary\nrange in the cluster's subnetwork to use for pod IP addresses. Alternatively,\n`cluster_ipv4_cidr_block` can be used to automatically create a GKE-managed one.",
      [],
      false,
      true,
    ),
  ];
}
