import { BareMetalClusterLoadBalancerPortConfig } from "./BareMetalClusterLoadBalancerPortConfig";
import { BareMetalClusterLoadBalancerVipConfig } from "./BareMetalClusterLoadBalancerVipConfig";
import { BareMetalClusterLoadBalancerBgpLbConfig } from "./BareMetalClusterLoadBalancerBgpLbConfig";
import { BareMetalClusterLoadBalancerManualLbConfig } from "./BareMetalClusterLoadBalancerManualLbConfig";
import { BareMetalClusterLoadBalancerMetalLbConfig } from "./BareMetalClusterLoadBalancerMetalLbConfig";

export interface BareMetalClusterLoadBalancer {
  /*
Specifies the load balancer ports.
Structure is documented below.
*/
  PortConfig?: BareMetalClusterLoadBalancerPortConfig;

  /*
Specified the Bare Metal Load Balancer Config
Structure is documented below.
*/
  VipConfig?: BareMetalClusterLoadBalancerVipConfig;

  /*
Configuration for BGP typed load balancers.
Structure is documented below.
*/
  BgpLbConfig?: BareMetalClusterLoadBalancerBgpLbConfig;

  /*
A nested object resource
Structure is documented below.
*/
  ManualLbConfig?: BareMetalClusterLoadBalancerManualLbConfig;

  /*
A nested object resource
Structure is documented below.
*/
  MetalLbConfig?: BareMetalClusterLoadBalancerMetalLbConfig;
}
