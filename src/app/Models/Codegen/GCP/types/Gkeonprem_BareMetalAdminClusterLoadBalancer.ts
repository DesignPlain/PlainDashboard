import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkeonprem_BareMetalAdminClusterLoadBalancerManualLbConfig,
  Gkeonprem_BareMetalAdminClusterLoadBalancerManualLbConfig_GetTypes,
} from "./Gkeonprem_BareMetalAdminClusterLoadBalancerManualLbConfig";
import {
  Gkeonprem_BareMetalAdminClusterLoadBalancerPortConfig,
  Gkeonprem_BareMetalAdminClusterLoadBalancerPortConfig_GetTypes,
} from "./Gkeonprem_BareMetalAdminClusterLoadBalancerPortConfig";
import {
  Gkeonprem_BareMetalAdminClusterLoadBalancerVipConfig,
  Gkeonprem_BareMetalAdminClusterLoadBalancerVipConfig_GetTypes,
} from "./Gkeonprem_BareMetalAdminClusterLoadBalancerVipConfig";

export interface Gkeonprem_BareMetalAdminClusterLoadBalancer {
  /*
A nested object resource
Structure is documented below.
*/
  ManualLbConfig?: Gkeonprem_BareMetalAdminClusterLoadBalancerManualLbConfig;

  /*
Specifies the load balancer ports.
Structure is documented below.
*/
  PortConfig?: Gkeonprem_BareMetalAdminClusterLoadBalancerPortConfig;

  /*
Specified the Bare Metal Load Balancer Config
Structure is documented below.
*/
  VipConfig?: Gkeonprem_BareMetalAdminClusterLoadBalancerVipConfig;
}

export function Gkeonprem_BareMetalAdminClusterLoadBalancer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ManualLbConfig",
      "A nested object resource\nStructure is documented below.",
      Gkeonprem_BareMetalAdminClusterLoadBalancerManualLbConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "PortConfig",
      "Specifies the load balancer ports.\nStructure is documented below.",
      Gkeonprem_BareMetalAdminClusterLoadBalancerPortConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "VipConfig",
      "Specified the Bare Metal Load Balancer Config\nStructure is documented below.",
      Gkeonprem_BareMetalAdminClusterLoadBalancerVipConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
