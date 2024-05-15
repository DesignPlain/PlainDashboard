import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkeonprem_VMwareClusterLoadBalancerMetalLbConfigAddressPool,
  Gkeonprem_VMwareClusterLoadBalancerMetalLbConfigAddressPool_GetTypes,
} from "./Gkeonprem_VMwareClusterLoadBalancerMetalLbConfigAddressPool";

export interface Gkeonprem_VMwareClusterLoadBalancerMetalLbConfig {
  /*
AddressPools is a list of non-overlapping IP pools used by load balancer
typed services. All addresses must be routable to load balancer nodes.
IngressVIP must be included in the pools.
Structure is documented below.
*/
  AddressPools?: Array<Gkeonprem_VMwareClusterLoadBalancerMetalLbConfigAddressPool>;
}

export function Gkeonprem_VMwareClusterLoadBalancerMetalLbConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "AddressPools",
      "AddressPools is a list of non-overlapping IP pools used by load balancer\ntyped services. All addresses must be routable to load balancer nodes.\nIngressVIP must be included in the pools.\nStructure is documented below.",
      Gkeonprem_VMwareClusterLoadBalancerMetalLbConfigAddressPool_GetTypes(),
      true,
      false,
    ),
  ];
}
