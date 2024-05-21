import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  container_getClusterPrivateClusterConfigMasterGlobalAccessConfig,
  container_getClusterPrivateClusterConfigMasterGlobalAccessConfig_GetTypes,
} from "./container_getClusterPrivateClusterConfigMasterGlobalAccessConfig";

export interface container_getClusterPrivateClusterConfig {
  // Controls cluster master global access settings.
  masterGlobalAccessConfigs?: Array<container_getClusterPrivateClusterConfigMasterGlobalAccessConfig>;

  // The IP range in CIDR notation to use for the hosted master network. This range will be used for assigning private IP addresses to the cluster master(s) and the ILB VIP. This range must not overlap with any other ranges in use within the cluster's network, and it must be a /28 subnet. See Private Cluster Limitations for more details. This field only applies to private clusters, when enable_private_nodes is true.
  masterIpv4CidrBlock?: string;

  // The name of the peering between this cluster and the Google owned VPC.
  peeringName?: string;

  // The internal IP address of this cluster's master endpoint.
  privateEndpoint?: string;

  // Subnetwork in cluster's network where master's endpoint will be provisioned.
  privateEndpointSubnetwork?: string;

  // The external IP address of this cluster's master endpoint.
  publicEndpoint?: string;

  // When true, the cluster's private endpoint is used as the cluster endpoint and access through the public endpoint is disabled. When false, either endpoint can be used.
  enablePrivateEndpoint?: boolean;

  // Enables the private cluster feature, creating a private endpoint on the cluster. In a private cluster, nodes only have RFC 1918 private addresses and communicate with the master's private endpoint via private networking.
  enablePrivateNodes?: boolean;
}

export function container_getClusterPrivateClusterConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "publicEndpoint",
      "The external IP address of this cluster's master endpoint.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enablePrivateEndpoint",
      "When true, the cluster's private endpoint is used as the cluster endpoint and access through the public endpoint is disabled. When false, either endpoint can be used.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enablePrivateNodes",
      "Enables the private cluster feature, creating a private endpoint on the cluster. In a private cluster, nodes only have RFC 1918 private addresses and communicate with the master's private endpoint via private networking.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "masterGlobalAccessConfigs",
      "Controls cluster master global access settings.",
      container_getClusterPrivateClusterConfigMasterGlobalAccessConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "masterIpv4CidrBlock",
      "The IP range in CIDR notation to use for the hosted master network. This range will be used for assigning private IP addresses to the cluster master(s) and the ILB VIP. This range must not overlap with any other ranges in use within the cluster's network, and it must be a /28 subnet. See Private Cluster Limitations for more details. This field only applies to private clusters, when enable_private_nodes is true.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "peeringName",
      "The name of the peering between this cluster and the Google owned VPC.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "privateEndpoint",
      "The internal IP address of this cluster's master endpoint.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "privateEndpointSubnetwork",
      "Subnetwork in cluster's network where master's endpoint will be provisioned.",
      [],
      true,
      false,
    ),
  ];
}
