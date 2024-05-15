import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigAddressPool,
  Gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigAddressPool_GetTypes,
} from "./Gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigAddressPool";
import {
  Gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigBgpPeerConfig,
  Gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigBgpPeerConfig_GetTypes,
} from "./Gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigBgpPeerConfig";
import {
  Gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfig,
  Gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfig_GetTypes,
} from "./Gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfig";

export interface Gkeonprem_BareMetalClusterLoadBalancerBgpLbConfig {
  /*
AddressPools is a list of non-overlapping IP pools used by load balancer
typed services. All addresses must be routable to load balancer nodes.
IngressVIP must be included in the pools.
Structure is documented below.
*/
  AddressPools?: Array<Gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigAddressPool>;

  /*
BGP autonomous system number (ASN) of the cluster.
This field can be updated after cluster creation.
*/
  Asn?: number;

  /*
The list of BGP peers that the cluster will connect to.
At least one peer must be configured for each control plane node.
Control plane nodes will connect to these peers to advertise the control
plane VIP. The Services load balancer also uses these peers by default.
This field can be updated after cluster creation.
Structure is documented below.
*/
  BgpPeerConfigs?: Array<Gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigBgpPeerConfig>;

  /*
Specifies the node pool running data plane load balancing. L2 connectivity
is required among nodes in this pool. If missing, the control plane node
pool is used for data plane load balancing.
Structure is documented below.
*/
  LoadBalancerNodePoolConfig?: Gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfig;
}

export function Gkeonprem_BareMetalClusterLoadBalancerBgpLbConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "LoadBalancerNodePoolConfig",
      "Specifies the node pool running data plane load balancing. L2 connectivity\nis required among nodes in this pool. If missing, the control plane node\npool is used for data plane load balancing.\nStructure is documented below.",
      Gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AddressPools",
      "AddressPools is a list of non-overlapping IP pools used by load balancer\ntyped services. All addresses must be routable to load balancer nodes.\nIngressVIP must be included in the pools.\nStructure is documented below.",
      Gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigAddressPool_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Asn",
      "BGP autonomous system number (ASN) of the cluster.\nThis field can be updated after cluster creation.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "BgpPeerConfigs",
      "The list of BGP peers that the cluster will connect to.\nAt least one peer must be configured for each control plane node.\nControl plane nodes will connect to these peers to advertise the control\nplane VIP. The Services load balancer also uses these peers by default.\nThis field can be updated after cluster creation.\nStructure is documented below.",
      Gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigBgpPeerConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
