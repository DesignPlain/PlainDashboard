import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  gkeonprem_BareMetalClusterLoadBalancerPortConfig,
  gkeonprem_BareMetalClusterLoadBalancerPortConfig_GetTypes,
} from "./gkeonprem_BareMetalClusterLoadBalancerPortConfig";
import {
  gkeonprem_BareMetalClusterLoadBalancerVipConfig,
  gkeonprem_BareMetalClusterLoadBalancerVipConfig_GetTypes,
} from "./gkeonprem_BareMetalClusterLoadBalancerVipConfig";
import {
  gkeonprem_BareMetalClusterLoadBalancerBgpLbConfig,
  gkeonprem_BareMetalClusterLoadBalancerBgpLbConfig_GetTypes,
} from "./gkeonprem_BareMetalClusterLoadBalancerBgpLbConfig";
import {
  gkeonprem_BareMetalClusterLoadBalancerManualLbConfig,
  gkeonprem_BareMetalClusterLoadBalancerManualLbConfig_GetTypes,
} from "./gkeonprem_BareMetalClusterLoadBalancerManualLbConfig";
import {
  gkeonprem_BareMetalClusterLoadBalancerMetalLbConfig,
  gkeonprem_BareMetalClusterLoadBalancerMetalLbConfig_GetTypes,
} from "./gkeonprem_BareMetalClusterLoadBalancerMetalLbConfig";

export interface gkeonprem_BareMetalClusterLoadBalancer {
  /*
Configuration for BGP typed load balancers.
Structure is documented below.
*/
  bgpLbConfig?: gkeonprem_BareMetalClusterLoadBalancerBgpLbConfig;

  /*
A nested object resource
Structure is documented below.
*/
  manualLbConfig?: gkeonprem_BareMetalClusterLoadBalancerManualLbConfig;

  /*
A nested object resource
Structure is documented below.
*/
  metalLbConfig?: gkeonprem_BareMetalClusterLoadBalancerMetalLbConfig;

  /*
Specifies the load balancer ports.
Structure is documented below.
*/
  portConfig?: gkeonprem_BareMetalClusterLoadBalancerPortConfig;

  /*
Specified the Bare Metal Load Balancer Config
Structure is documented below.
*/
  vipConfig?: gkeonprem_BareMetalClusterLoadBalancerVipConfig;
}

export function gkeonprem_BareMetalClusterLoadBalancer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "metalLbConfig",
      "A nested object resource\nStructure is documented below.",
      gkeonprem_BareMetalClusterLoadBalancerMetalLbConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "portConfig",
      "Specifies the load balancer ports.\nStructure is documented below.",
      gkeonprem_BareMetalClusterLoadBalancerPortConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "vipConfig",
      "Specified the Bare Metal Load Balancer Config\nStructure is documented below.",
      gkeonprem_BareMetalClusterLoadBalancerVipConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "bgpLbConfig",
      "Configuration for BGP typed load balancers.\nStructure is documented below.",
      gkeonprem_BareMetalClusterLoadBalancerBgpLbConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "manualLbConfig",
      "A nested object resource\nStructure is documented below.",
      gkeonprem_BareMetalClusterLoadBalancerManualLbConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
