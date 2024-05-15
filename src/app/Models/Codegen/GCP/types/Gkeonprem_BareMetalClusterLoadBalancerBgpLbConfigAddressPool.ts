import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigAddressPool {
  // The addresses that are part of this pool. Each address must be either in the CIDR form (1.2.3.0/24) or range form (1.2.3.1-1.2.3.5).
  Addresses?: Array<string>;

  /*
If true, avoid using IPs ending in .0 or .255.
This avoids buggy consumer devices mistakenly dropping IPv4 traffic for those special IP addresses.
*/
  AvoidBuggyIps?: boolean;

  // If true, prevent IP addresses from being automatically assigned.
  ManualAssign?: string;

  // The name of the address pool.
  Pool?: string;
}

export function Gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigAddressPool_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ManualAssign",
      "If true, prevent IP addresses from being automatically assigned.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Pool",
      "The name of the address pool.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Addresses",
      "The addresses that are part of this pool. Each address must be either in the CIDR form (1.2.3.0/24) or range form (1.2.3.1-1.2.3.5).",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "AvoidBuggyIps",
      "If true, avoid using IPs ending in .0 or .255.\nThis avoids buggy consumer devices mistakenly dropping IPv4 traffic for those special IP addresses.",
      [],
      false,
      false,
    ),
  ];
}
