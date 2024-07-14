import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  gkeonprem_BareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfig,
  gkeonprem_BareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfig_GetTypes,
} from "./gkeonprem_BareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfig";

export interface gkeonprem_BareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfig {
  /*
The generic configuration for a node pool running a load balancer.
Structure is documented below.
*/
  nodePoolConfig?: gkeonprem_BareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfig;
}

export function gkeonprem_BareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "nodePoolConfig",
      "The generic configuration for a node pool running a load balancer.\nStructure is documented below.",
      gkeonprem_BareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
