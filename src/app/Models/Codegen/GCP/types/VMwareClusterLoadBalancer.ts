import { VMwareClusterLoadBalancerF5Config } from "./VMwareClusterLoadBalancerF5Config";
import { VMwareClusterLoadBalancerManualLbConfig } from "./VMwareClusterLoadBalancerManualLbConfig";
import { VMwareClusterLoadBalancerMetalLbConfig } from "./VMwareClusterLoadBalancerMetalLbConfig";
import { VMwareClusterLoadBalancerVipConfig } from "./VMwareClusterLoadBalancerVipConfig";

export interface VMwareClusterLoadBalancer {
  /*
Configuration for F5 Big IP typed load balancers.
Structure is documented below.
*/
  F5Config?: VMwareClusterLoadBalancerF5Config;

  /*
Manually configured load balancers.
Structure is documented below.
*/
  ManualLbConfig?: VMwareClusterLoadBalancerManualLbConfig;

  /*
Configuration for MetalLB typed load balancers.
Structure is documented below.
*/
  MetalLbConfig?: VMwareClusterLoadBalancerMetalLbConfig;

  /*
The VIPs used by the load balancer.
Structure is documented below.
*/
  VipConfig?: VMwareClusterLoadBalancerVipConfig;
}
