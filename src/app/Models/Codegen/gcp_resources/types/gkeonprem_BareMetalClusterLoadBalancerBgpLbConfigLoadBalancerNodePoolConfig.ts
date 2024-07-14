import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfig,
  gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfig_GetTypes,
} from "./gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfig";

export interface gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfig {
  /*
The generic configuration for a node pool running a load balancer.
Structure is documented below.
*/
  nodePoolConfig?: gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfig;
}

export function gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "nodePoolConfig",
      "The generic configuration for a node pool running a load balancer.\nStructure is documented below.",
      gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
