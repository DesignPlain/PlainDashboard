import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkeonprem_BareMetalClusterLoadBalancerVipConfig,
  Gkeonprem_BareMetalClusterLoadBalancerVipConfig_GetTypes,
} from "./Gkeonprem_BareMetalClusterLoadBalancerVipConfig";
import {
  Gkeonprem_BareMetalClusterLoadBalancerBgpLbConfig,
  Gkeonprem_BareMetalClusterLoadBalancerBgpLbConfig_GetTypes,
} from "./Gkeonprem_BareMetalClusterLoadBalancerBgpLbConfig";
import {
  Gkeonprem_BareMetalClusterLoadBalancerManualLbConfig,
  Gkeonprem_BareMetalClusterLoadBalancerManualLbConfig_GetTypes,
} from "./Gkeonprem_BareMetalClusterLoadBalancerManualLbConfig";
import {
  Gkeonprem_BareMetalClusterLoadBalancerMetalLbConfig,
  Gkeonprem_BareMetalClusterLoadBalancerMetalLbConfig_GetTypes,
} from "./Gkeonprem_BareMetalClusterLoadBalancerMetalLbConfig";
import {
  Gkeonprem_BareMetalClusterLoadBalancerPortConfig,
  Gkeonprem_BareMetalClusterLoadBalancerPortConfig_GetTypes,
} from "./Gkeonprem_BareMetalClusterLoadBalancerPortConfig";

export interface Gkeonprem_BareMetalClusterLoadBalancer {
  /*
Specified the Bare Metal Load Balancer Config
Structure is documented below.
*/
  VipConfig?: Gkeonprem_BareMetalClusterLoadBalancerVipConfig;

  /*
Configuration for BGP typed load balancers.
Structure is documented below.
*/
  BgpLbConfig?: Gkeonprem_BareMetalClusterLoadBalancerBgpLbConfig;

  /*
A nested object resource
Structure is documented below.
*/
  ManualLbConfig?: Gkeonprem_BareMetalClusterLoadBalancerManualLbConfig;

  /*
A nested object resource
Structure is documented below.
*/
  MetalLbConfig?: Gkeonprem_BareMetalClusterLoadBalancerMetalLbConfig;

  /*
Specifies the load balancer ports.
Structure is documented below.
*/
  PortConfig?: Gkeonprem_BareMetalClusterLoadBalancerPortConfig;
}

export function Gkeonprem_BareMetalClusterLoadBalancer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "VipConfig",
      "Specified the Bare Metal Load Balancer Config\nStructure is documented below.",
      Gkeonprem_BareMetalClusterLoadBalancerVipConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "BgpLbConfig",
      "Configuration for BGP typed load balancers.\nStructure is documented below.",
      Gkeonprem_BareMetalClusterLoadBalancerBgpLbConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ManualLbConfig",
      "A nested object resource\nStructure is documented below.",
      Gkeonprem_BareMetalClusterLoadBalancerManualLbConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "MetalLbConfig",
      "A nested object resource\nStructure is documented below.",
      Gkeonprem_BareMetalClusterLoadBalancerMetalLbConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "PortConfig",
      "Specifies the load balancer ports.\nStructure is documented below.",
      Gkeonprem_BareMetalClusterLoadBalancerPortConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
