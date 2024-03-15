import { BareMetalAdminClusterLoadBalancerManualLbConfig } from "./BareMetalAdminClusterLoadBalancerManualLbConfig";
import { BareMetalAdminClusterLoadBalancerPortConfig } from "./BareMetalAdminClusterLoadBalancerPortConfig";
import { BareMetalAdminClusterLoadBalancerVipConfig } from "./BareMetalAdminClusterLoadBalancerVipConfig";

export interface BareMetalAdminClusterLoadBalancer {
  /*
A nested object resource
Structure is documented below.
*/
  ManualLbConfig?: BareMetalAdminClusterLoadBalancerManualLbConfig;

  /*
Specifies the load balancer ports.
Structure is documented below.
*/
  PortConfig?: BareMetalAdminClusterLoadBalancerPortConfig;

  /*
Specified the Bare Metal Load Balancer Config
Structure is documented below.
*/
  VipConfig?: BareMetalAdminClusterLoadBalancerVipConfig;
}
