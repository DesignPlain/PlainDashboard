import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_ClusterIpAllocationPolicyPodCidrOverprovisionConfig,
  Container_ClusterIpAllocationPolicyPodCidrOverprovisionConfig_GetTypes,
} from "./Container_ClusterIpAllocationPolicyPodCidrOverprovisionConfig";
import {
  Container_ClusterIpAllocationPolicyAdditionalPodRangesConfig,
  Container_ClusterIpAllocationPolicyAdditionalPodRangesConfig_GetTypes,
} from "./Container_ClusterIpAllocationPolicyAdditionalPodRangesConfig";

export interface Container_ClusterIpAllocationPolicy {
  /*
The name of the existing secondary
range in the cluster's subnetwork to use for pod IP addresses. Alternatively,
`cluster_ipv4_cidr_block` can be used to automatically create a GKE-managed one.
*/
  ClusterSecondaryRangeName?: string;

  // Configuration for cluster level pod cidr overprovision. Default is disabled=false.
  PodCidrOverprovisionConfig?: Container_ClusterIpAllocationPolicyPodCidrOverprovisionConfig;

  /*
The IP address range of the services IPs in this cluster.
Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14)
to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14)
from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to
pick a specific range to use.
*/
  ServicesIpv4CidrBlock?: string;

  /*
The name of the existing
secondary range in the cluster's subnetwork to use for service `ClusterIP`s.
Alternatively, `services_ipv4_cidr_block` can be used to automatically create a
GKE-managed one.
*/
  ServicesSecondaryRangeName?: string;

  /*
The IP Stack Type of the cluster.
Default value is `IPV4`.
Possible values are `IPV4` and `IPV4_IPV6`.
*/
  StackType?: string;

  /*
The configuration for additional pod secondary ranges at
the cluster level. Used for Autopilot clusters and Standard clusters with which control of the
secondary Pod IP address assignment to node pools isn't needed. Structure is documented below.
*/
  AdditionalPodRangesConfig?: Container_ClusterIpAllocationPolicyAdditionalPodRangesConfig;

  /*
The IP address range for the cluster pod IPs.
Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14)
to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14)
from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to
pick a specific range to use.
*/
  ClusterIpv4CidrBlock?: string;
}

export function Container_ClusterIpAllocationPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "StackType",
      "The IP Stack Type of the cluster.\nDefault value is `IPV4`.\nPossible values are `IPV4` and `IPV4_IPV6`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "AdditionalPodRangesConfig",
      "The configuration for additional pod secondary ranges at\nthe cluster level. Used for Autopilot clusters and Standard clusters with which control of the\nsecondary Pod IP address assignment to node pools isn't needed. Structure is documented below.",
      Container_ClusterIpAllocationPolicyAdditionalPodRangesConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ClusterIpv4CidrBlock",
      "The IP address range for the cluster pod IPs.\nSet to blank to have a range chosen with the default size. Set to /netmask (e.g. /14)\nto have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14)\nfrom the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to\npick a specific range to use.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ClusterSecondaryRangeName",
      "The name of the existing secondary\nrange in the cluster's subnetwork to use for pod IP addresses. Alternatively,\n`cluster_ipv4_cidr_block` can be used to automatically create a GKE-managed one.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "PodCidrOverprovisionConfig",
      "Configuration for cluster level pod cidr overprovision. Default is disabled=false.",
      Container_ClusterIpAllocationPolicyPodCidrOverprovisionConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ServicesIpv4CidrBlock",
      "The IP address range of the services IPs in this cluster.\nSet to blank to have a range chosen with the default size. Set to /netmask (e.g. /14)\nto have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14)\nfrom the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to\npick a specific range to use.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ServicesSecondaryRangeName",
      "The name of the existing\nsecondary range in the cluster's subnetwork to use for service `ClusterIP`s.\nAlternatively, `services_ipv4_cidr_block` can be used to automatically create a\nGKE-managed one.",
      [],
      false,
      true,
    ),
  ];
}
