import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkeonprem_BareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfig,
  Gkeonprem_BareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfig_GetTypes,
} from "./Gkeonprem_BareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfig";

export interface Gkeonprem_BareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfig {
  /*
The generic configuration for a node pool running a load balancer.
Structure is documented below.
*/
  NodePoolConfig?: Gkeonprem_BareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfig;
}

export function Gkeonprem_BareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "NodePoolConfig",
      "The generic configuration for a node pool running a load balancer.\nStructure is documented below.",
      Gkeonprem_BareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
