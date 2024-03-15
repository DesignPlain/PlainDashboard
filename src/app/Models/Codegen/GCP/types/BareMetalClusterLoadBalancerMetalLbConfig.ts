import { BareMetalClusterLoadBalancerMetalLbConfigAddressPool } from "./BareMetalClusterLoadBalancerMetalLbConfigAddressPool";
import { BareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfig } from "./BareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfig";

export interface BareMetalClusterLoadBalancerMetalLbConfig {
  /*
AddressPools is a list of non-overlapping IP pools used by load balancer
typed services. All addresses must be routable to load balancer nodes.
IngressVIP must be included in the pools.
Structure is documented below.
*/
  AddressPools?: Array<BareMetalClusterLoadBalancerMetalLbConfigAddressPool>;

  /*
Specifies the load balancer's node pool configuration.
Structure is documented below.
*/
  LoadBalancerNodePoolConfig?: BareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfig;
}
