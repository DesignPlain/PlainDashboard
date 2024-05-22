import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  gkeonprem_BareMetalAdminClusterLoadBalancerManualLbConfig,
  gkeonprem_BareMetalAdminClusterLoadBalancerManualLbConfig_GetTypes,
} from "./gkeonprem_BareMetalAdminClusterLoadBalancerManualLbConfig";
import {
  gkeonprem_BareMetalAdminClusterLoadBalancerPortConfig,
  gkeonprem_BareMetalAdminClusterLoadBalancerPortConfig_GetTypes,
} from "./gkeonprem_BareMetalAdminClusterLoadBalancerPortConfig";
import {
  gkeonprem_BareMetalAdminClusterLoadBalancerVipConfig,
  gkeonprem_BareMetalAdminClusterLoadBalancerVipConfig_GetTypes,
} from "./gkeonprem_BareMetalAdminClusterLoadBalancerVipConfig";

export interface gkeonprem_BareMetalAdminClusterLoadBalancer {
  /*
A nested object resource
Structure is documented below.
*/
  manualLbConfig?: gkeonprem_BareMetalAdminClusterLoadBalancerManualLbConfig;

  /*
Specifies the load balancer ports.
Structure is documented below.
*/
  portConfig?: gkeonprem_BareMetalAdminClusterLoadBalancerPortConfig;

  /*
Specified the Bare Metal Load Balancer Config
Structure is documented below.
*/
  vipConfig?: gkeonprem_BareMetalAdminClusterLoadBalancerVipConfig;
}

export function gkeonprem_BareMetalAdminClusterLoadBalancer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "manualLbConfig",
      "A nested object resource\nStructure is documented below.",
      gkeonprem_BareMetalAdminClusterLoadBalancerManualLbConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "portConfig",
      "Specifies the load balancer ports.\nStructure is documented below.",
      gkeonprem_BareMetalAdminClusterLoadBalancerPortConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "vipConfig",
      "Specified the Bare Metal Load Balancer Config\nStructure is documented below.",
      gkeonprem_BareMetalAdminClusterLoadBalancerVipConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
