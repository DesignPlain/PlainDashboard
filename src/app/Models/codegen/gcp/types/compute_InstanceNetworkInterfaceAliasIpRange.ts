import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_InstanceNetworkInterfaceAliasIpRange {
  /*
The IP CIDR range represented by this alias IP range. This IP CIDR range
must belong to the specified subnetwork and cannot contain IP addresses reserved by
system or used by other network interfaces. This range may be a single IP address
(e.g. 10.2.3.4), a netmask (e.g. /24) or a CIDR format string (e.g. 10.1.2.0/24).
*/
  ipCidrRange?: string;

  /*
The subnetwork secondary range name specifying
the secondary range from which to allocate the IP CIDR range for this alias IP
range. If left unspecified, the primary range of the subnetwork will be used.
*/
  subnetworkRangeName?: string;
}

export function compute_InstanceNetworkInterfaceAliasIpRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ipCidrRange",
      "The IP CIDR range represented by this alias IP range. This IP CIDR range\nmust belong to the specified subnetwork and cannot contain IP addresses reserved by\nsystem or used by other network interfaces. This range may be a single IP address\n(e.g. 10.2.3.4), a netmask (e.g. /24) or a CIDR format string (e.g. 10.1.2.0/24).",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "subnetworkRangeName",
      "The subnetwork secondary range name specifying\nthe secondary range from which to allocate the IP CIDR range for this alias IP\nrange. If left unspecified, the primary range of the subnetwork will be used.",
      () => [],
      false,
      false,
    ),
  ];
}
