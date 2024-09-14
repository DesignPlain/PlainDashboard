import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  gkeonprem_VMwareClusterLoadBalancerMetalLbConfigAddressPool,
  gkeonprem_VMwareClusterLoadBalancerMetalLbConfigAddressPool_GetTypes,
} from "./gkeonprem_VMwareClusterLoadBalancerMetalLbConfigAddressPool";

export interface gkeonprem_VMwareClusterLoadBalancerMetalLbConfig {
  /*
AddressPools is a list of non-overlapping IP pools used by load balancer
typed services. All addresses must be routable to load balancer nodes.
IngressVIP must be included in the pools.
Structure is documented below.
*/
  addressPools?: Array<gkeonprem_VMwareClusterLoadBalancerMetalLbConfigAddressPool>;
}

export function gkeonprem_VMwareClusterLoadBalancerMetalLbConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "addressPools",
      "AddressPools is a list of non-overlapping IP pools used by load balancer\ntyped services. All addresses must be routable to load balancer nodes.\nIngressVIP must be included in the pools.\nStructure is documented below.",
      () =>
        gkeonprem_VMwareClusterLoadBalancerMetalLbConfigAddressPool_GetTypes(),
      true,
      false,
    ),
  ];
}
