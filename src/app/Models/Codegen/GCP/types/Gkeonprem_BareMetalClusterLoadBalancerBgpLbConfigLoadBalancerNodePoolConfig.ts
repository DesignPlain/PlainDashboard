import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfig,
  Gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfig_GetTypes,
} from "./Gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfig";

export interface Gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfig {
  /*
The generic configuration for a node pool running a load balancer.
Structure is documented below.
*/
  NodePoolConfig?: Gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfig;
}

export function Gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "NodePoolConfig",
      "The generic configuration for a node pool running a load balancer.\nStructure is documented below.",
      Gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
