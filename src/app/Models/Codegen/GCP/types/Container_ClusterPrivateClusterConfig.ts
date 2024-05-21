import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  container_ClusterPrivateClusterConfigMasterGlobalAccessConfig,
  container_ClusterPrivateClusterConfigMasterGlobalAccessConfig_GetTypes,
} from "./container_ClusterPrivateClusterConfigMasterGlobalAccessConfig";

export interface container_ClusterPrivateClusterConfig {
  // Subnetwork in cluster's network where master's endpoint will be provisioned.
  privateEndpointSubnetwork?: string;

  /*
The external IP address of this cluster's master endpoint.

!> The Google provider is unable to validate certain configurations of
`private_cluster_config` when `enable_private_nodes` is `false`. It's
recommended that you omit the block entirely if the field is not set to `true`.
*/
  publicEndpoint?: string;

  /*
When `true`, the cluster's private
endpoint is used as the cluster endpoint and access through the public endpoint
is disabled. When `false`, either endpoint can be used. This field only applies
to private clusters, when `enable_private_nodes` is `true`.
*/
  enablePrivateEndpoint?: boolean;

  /*
Enables the private cluster feature,
creating a private endpoint on the cluster. In a private cluster, nodes only
have RFC 1918 private addresses and communicate with the master's private
endpoint via private networking.
*/
  enablePrivateNodes?: boolean;

  /*
Controls cluster master global
access settings. If unset, the provider will no longer manage this field and will
not modify the previously-set value. Structure is documented below.
*/
  masterGlobalAccessConfig?: container_ClusterPrivateClusterConfigMasterGlobalAccessConfig;

  /*
The IP range in CIDR notation to use for
the hosted master network. This range will be used for assigning private IP
addresses to the cluster master(s) and the ILB VIP. This range must not overlap
with any other ranges in use within the cluster's network, and it must be a /28
subnet. See [Private Cluster Limitations](https://cloud.google.com/kubernetes-engine/docs/how-to/private-clusters#req_res_lim)
for more details. This field only applies to private clusters, when
`enable_private_nodes` is `true`.
*/
  masterIpv4CidrBlock?: string;

  // The name of the peering between this cluster and the Google owned VPC.
  peeringName?: string;

  // The internal IP address of this cluster's master endpoint.
  privateEndpoint?: string;
}

export function container_ClusterPrivateClusterConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "masterIpv4CidrBlock",
      "The IP range in CIDR notation to use for\nthe hosted master network. This range will be used for assigning private IP\naddresses to the cluster master(s) and the ILB VIP. This range must not overlap\nwith any other ranges in use within the cluster's network, and it must be a /28\nsubnet. See [Private Cluster Limitations](https://cloud.google.com/kubernetes-engine/docs/how-to/private-clusters#req_res_lim)\nfor more details. This field only applies to private clusters, when\n`enable_private_nodes` is `true`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "peeringName",
      "The name of the peering between this cluster and the Google owned VPC.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "privateEndpoint",
      "The internal IP address of this cluster's master endpoint.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "privateEndpointSubnetwork",
      "Subnetwork in cluster's network where master's endpoint will be provisioned.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "publicEndpoint",
      "The external IP address of this cluster's master endpoint.\n\n!> The Google provider is unable to validate certain configurations of\n`private_cluster_config` when `enable_private_nodes` is `false`. It's\nrecommended that you omit the block entirely if the field is not set to `true`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enablePrivateEndpoint",
      "When `true`, the cluster's private\nendpoint is used as the cluster endpoint and access through the public endpoint\nis disabled. When `false`, either endpoint can be used. This field only applies\nto private clusters, when `enable_private_nodes` is `true`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enablePrivateNodes",
      "Enables the private cluster feature,\ncreating a private endpoint on the cluster. In a private cluster, nodes only\nhave RFC 1918 private addresses and communicate with the master's private\nendpoint via private networking.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "masterGlobalAccessConfig",
      "Controls cluster master global\naccess settings. If unset, the provider will no longer manage this field and will\nnot modify the previously-set value. Structure is documented below.",
      container_ClusterPrivateClusterConfigMasterGlobalAccessConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
