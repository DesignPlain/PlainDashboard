import { BareMetalClusterLoadBalancerBgpLbConfigAddressPool } from "./BareMetalClusterLoadBalancerBgpLbConfigAddressPool";
import { BareMetalClusterLoadBalancerBgpLbConfigBgpPeerConfig } from "./BareMetalClusterLoadBalancerBgpLbConfigBgpPeerConfig";
import { BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfig } from "./BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfig";

export interface BareMetalClusterLoadBalancerBgpLbConfig {
  /*
AddressPools is a list of non-overlapping IP pools used by load balancer
typed services. All addresses must be routable to load balancer nodes.
IngressVIP must be included in the pools.
Structure is documented below.
*/
  AddressPools?: Array<BareMetalClusterLoadBalancerBgpLbConfigAddressPool>;

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
  BgpPeerConfigs?: Array<BareMetalClusterLoadBalancerBgpLbConfigBgpPeerConfig>;

  /*
Specifies the node pool running data plane load balancing. L2 connectivity
is required among nodes in this pool. If missing, the control plane node
pool is used for data plane load balancing.
Structure is documented below.
*/
  LoadBalancerNodePoolConfig?: BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfig;
}
