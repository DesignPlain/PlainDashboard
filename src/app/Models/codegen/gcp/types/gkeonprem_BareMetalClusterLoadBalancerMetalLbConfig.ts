import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  gkeonprem_BareMetalClusterLoadBalancerMetalLbConfigAddressPool,
  gkeonprem_BareMetalClusterLoadBalancerMetalLbConfigAddressPool_GetTypes,
} from "./gkeonprem_BareMetalClusterLoadBalancerMetalLbConfigAddressPool";
import {
  gkeonprem_BareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfig,
  gkeonprem_BareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfig_GetTypes,
} from "./gkeonprem_BareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfig";

export interface gkeonprem_BareMetalClusterLoadBalancerMetalLbConfig {
  /*
AddressPools is a list of non-overlapping IP pools used by load balancer
typed services. All addresses must be routable to load balancer nodes.
IngressVIP must be included in the pools.
Structure is documented below.
*/
  addressPools?: Array<gkeonprem_BareMetalClusterLoadBalancerMetalLbConfigAddressPool>;

  /*
Specifies the load balancer's node pool configuration.
Structure is documented below.
*/
  loadBalancerNodePoolConfig?: gkeonprem_BareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfig;
}

export function gkeonprem_BareMetalClusterLoadBalancerMetalLbConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "addressPools",
      "AddressPools is a list of non-overlapping IP pools used by load balancer\ntyped services. All addresses must be routable to load balancer nodes.\nIngressVIP must be included in the pools.\nStructure is documented below.",
      () =>
        gkeonprem_BareMetalClusterLoadBalancerMetalLbConfigAddressPool_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "loadBalancerNodePoolConfig",
      "Specifies the load balancer's node pool configuration.\nStructure is documented below.",
      () =>
        gkeonprem_BareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
