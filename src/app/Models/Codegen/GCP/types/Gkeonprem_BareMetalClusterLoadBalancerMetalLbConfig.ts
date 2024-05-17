import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkeonprem_BareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfig,
  Gkeonprem_BareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfig_GetTypes,
} from "./Gkeonprem_BareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfig";
import {
  Gkeonprem_BareMetalClusterLoadBalancerMetalLbConfigAddressPool,
  Gkeonprem_BareMetalClusterLoadBalancerMetalLbConfigAddressPool_GetTypes,
} from "./Gkeonprem_BareMetalClusterLoadBalancerMetalLbConfigAddressPool";

export interface Gkeonprem_BareMetalClusterLoadBalancerMetalLbConfig {
  /*
Specifies the load balancer's node pool configuration.
Structure is documented below.
*/
  LoadBalancerNodePoolConfig?: Gkeonprem_BareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfig;

  /*
AddressPools is a list of non-overlapping IP pools used by load balancer
typed services. All addresses must be routable to load balancer nodes.
IngressVIP must be included in the pools.
Structure is documented below.
*/
  AddressPools?: Array<Gkeonprem_BareMetalClusterLoadBalancerMetalLbConfigAddressPool>;
}

export function Gkeonprem_BareMetalClusterLoadBalancerMetalLbConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "LoadBalancerNodePoolConfig",
      "Specifies the load balancer's node pool configuration.\nStructure is documented below.",
      Gkeonprem_BareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AddressPools",
      "AddressPools is a list of non-overlapping IP pools used by load balancer\ntyped services. All addresses must be routable to load balancer nodes.\nIngressVIP must be included in the pools.\nStructure is documented below.",
      Gkeonprem_BareMetalClusterLoadBalancerMetalLbConfigAddressPool_GetTypes(),
      true,
      false,
    ),
  ];
}
