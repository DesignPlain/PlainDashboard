import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkeonprem_VMwareClusterLoadBalancerF5Config,
  Gkeonprem_VMwareClusterLoadBalancerF5Config_GetTypes,
} from "./Gkeonprem_VMwareClusterLoadBalancerF5Config";
import {
  Gkeonprem_VMwareClusterLoadBalancerManualLbConfig,
  Gkeonprem_VMwareClusterLoadBalancerManualLbConfig_GetTypes,
} from "./Gkeonprem_VMwareClusterLoadBalancerManualLbConfig";
import {
  Gkeonprem_VMwareClusterLoadBalancerMetalLbConfig,
  Gkeonprem_VMwareClusterLoadBalancerMetalLbConfig_GetTypes,
} from "./Gkeonprem_VMwareClusterLoadBalancerMetalLbConfig";
import {
  Gkeonprem_VMwareClusterLoadBalancerVipConfig,
  Gkeonprem_VMwareClusterLoadBalancerVipConfig_GetTypes,
} from "./Gkeonprem_VMwareClusterLoadBalancerVipConfig";

export interface Gkeonprem_VMwareClusterLoadBalancer {
  /*
Configuration for F5 Big IP typed load balancers.
Structure is documented below.
*/
  F5Config?: Gkeonprem_VMwareClusterLoadBalancerF5Config;

  /*
Manually configured load balancers.
Structure is documented below.
*/
  ManualLbConfig?: Gkeonprem_VMwareClusterLoadBalancerManualLbConfig;

  /*
Configuration for MetalLB typed load balancers.
Structure is documented below.
*/
  MetalLbConfig?: Gkeonprem_VMwareClusterLoadBalancerMetalLbConfig;

  /*
The VIPs used by the load balancer.
Structure is documented below.
*/
  VipConfig?: Gkeonprem_VMwareClusterLoadBalancerVipConfig;
}

export function Gkeonprem_VMwareClusterLoadBalancer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "F5Config",
      "Configuration for F5 Big IP typed load balancers.\nStructure is documented below.",
      Gkeonprem_VMwareClusterLoadBalancerF5Config_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ManualLbConfig",
      "Manually configured load balancers.\nStructure is documented below.",
      Gkeonprem_VMwareClusterLoadBalancerManualLbConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "MetalLbConfig",
      "Configuration for MetalLB typed load balancers.\nStructure is documented below.",
      Gkeonprem_VMwareClusterLoadBalancerMetalLbConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "VipConfig",
      "The VIPs used by the load balancer.\nStructure is documented below.",
      Gkeonprem_VMwareClusterLoadBalancerVipConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
