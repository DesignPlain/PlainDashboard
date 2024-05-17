import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_getClusterPrivateClusterConfigMasterGlobalAccessConfig,
  Container_getClusterPrivateClusterConfigMasterGlobalAccessConfig_GetTypes,
} from "./Container_getClusterPrivateClusterConfigMasterGlobalAccessConfig";

export interface Container_getClusterPrivateClusterConfig {
  // The internal IP address of this cluster's master endpoint.
  PrivateEndpoint?: string;

  // Subnetwork in cluster's network where master's endpoint will be provisioned.
  PrivateEndpointSubnetwork?: string;

  // The external IP address of this cluster's master endpoint.
  PublicEndpoint?: string;

  // When true, the cluster's private endpoint is used as the cluster endpoint and access through the public endpoint is disabled. When false, either endpoint can be used.
  EnablePrivateEndpoint?: boolean;

  // Enables the private cluster feature, creating a private endpoint on the cluster. In a private cluster, nodes only have RFC 1918 private addresses and communicate with the master's private endpoint via private networking.
  EnablePrivateNodes?: boolean;

  // Controls cluster master global access settings.
  MasterGlobalAccessConfigs?: Array<Container_getClusterPrivateClusterConfigMasterGlobalAccessConfig>;

  // The IP range in CIDR notation to use for the hosted master network. This range will be used for assigning private IP addresses to the cluster master(s) and the ILB VIP. This range must not overlap with any other ranges in use within the cluster's network, and it must be a /28 subnet. See Private Cluster Limitations for more details. This field only applies to private clusters, when enable_private_nodes is true.
  MasterIpv4CidrBlock?: string;

  // The name of the peering between this cluster and the Google owned VPC.
  PeeringName?: string;
}

export function Container_getClusterPrivateClusterConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "PeeringName",
      "The name of the peering between this cluster and the Google owned VPC.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PrivateEndpoint",
      "The internal IP address of this cluster's master endpoint.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PrivateEndpointSubnetwork",
      "Subnetwork in cluster's network where master's endpoint will be provisioned.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PublicEndpoint",
      "The external IP address of this cluster's master endpoint.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnablePrivateEndpoint",
      "When true, the cluster's private endpoint is used as the cluster endpoint and access through the public endpoint is disabled. When false, either endpoint can be used.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnablePrivateNodes",
      "Enables the private cluster feature, creating a private endpoint on the cluster. In a private cluster, nodes only have RFC 1918 private addresses and communicate with the master's private endpoint via private networking.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "MasterGlobalAccessConfigs",
      "Controls cluster master global access settings.",
      Container_getClusterPrivateClusterConfigMasterGlobalAccessConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MasterIpv4CidrBlock",
      "The IP range in CIDR notation to use for the hosted master network. This range will be used for assigning private IP addresses to the cluster master(s) and the ILB VIP. This range must not overlap with any other ranges in use within the cluster's network, and it must be a /28 subnet. See Private Cluster Limitations for more details. This field only applies to private clusters, when enable_private_nodes is true.",
      [],
      true,
      false,
    ),
  ];
}
