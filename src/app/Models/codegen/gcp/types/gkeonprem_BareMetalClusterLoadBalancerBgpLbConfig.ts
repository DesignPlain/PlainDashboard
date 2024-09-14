import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigAddressPool,
  gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigAddressPool_GetTypes,
} from "./gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigAddressPool";
import {
  gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigBgpPeerConfig,
  gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigBgpPeerConfig_GetTypes,
} from "./gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigBgpPeerConfig";
import {
  gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfig,
  gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfig_GetTypes,
} from "./gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfig";

export interface gkeonprem_BareMetalClusterLoadBalancerBgpLbConfig {
  /*
AddressPools is a list of non-overlapping IP pools used by load balancer
typed services. All addresses must be routable to load balancer nodes.
IngressVIP must be included in the pools.
Structure is documented below.
*/
  addressPools?: Array<gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigAddressPool>;

  /*
BGP autonomous system number (ASN) of the cluster.
This field can be updated after cluster creation.
*/
  asn?: number;

  /*
The list of BGP peers that the cluster will connect to.
At least one peer must be configured for each control plane node.
Control plane nodes will connect to these peers to advertise the control
plane VIP. The Services load balancer also uses these peers by default.
This field can be updated after cluster creation.
Structure is documented below.
*/
  bgpPeerConfigs?: Array<gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigBgpPeerConfig>;

  /*
Specifies the node pool running data plane load balancing. L2 connectivity
is required among nodes in this pool. If missing, the control plane node
pool is used for data plane load balancing.
Structure is documented below.
*/
  loadBalancerNodePoolConfig?: gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfig;
}

export function gkeonprem_BareMetalClusterLoadBalancerBgpLbConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "addressPools",
      "AddressPools is a list of non-overlapping IP pools used by load balancer\ntyped services. All addresses must be routable to load balancer nodes.\nIngressVIP must be included in the pools.\nStructure is documented below.",
      () =>
        gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigAddressPool_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "asn",
      "BGP autonomous system number (ASN) of the cluster.\nThis field can be updated after cluster creation.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "bgpPeerConfigs",
      "The list of BGP peers that the cluster will connect to.\nAt least one peer must be configured for each control plane node.\nControl plane nodes will connect to these peers to advertise the control\nplane VIP. The Services load balancer also uses these peers by default.\nThis field can be updated after cluster creation.\nStructure is documented below.",
      () =>
        gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigBgpPeerConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "loadBalancerNodePoolConfig",
      "Specifies the node pool running data plane load balancing. L2 connectivity\nis required among nodes in this pool. If missing, the control plane node\npool is used for data plane load balancing.\nStructure is documented below.",
      () =>
        gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
