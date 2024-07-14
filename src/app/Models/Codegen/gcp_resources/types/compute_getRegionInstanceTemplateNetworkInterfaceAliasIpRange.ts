import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface compute_getRegionInstanceTemplateNetworkInterfaceAliasIpRange {
  /*
The IP CIDR range represented by this alias IP range. This IP CIDR range
must belong to the specified subnetwork and cannot contain IP addresses reserved by
system or used by other network interfaces. At the time of writing only a
netmask (e.g. /24) may be supplied, with a CIDR format resulting in an API
error.
*/
  ipCidrRange?: string;

  /*
The subnetwork secondary range name specifying
the secondary range from which to allocate the IP CIDR range for this alias IP
range. If left unspecified, the primary range of the subnetwork will be used.
*/
  subnetworkRangeName?: string;
}

export function compute_getRegionInstanceTemplateNetworkInterfaceAliasIpRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "subnetworkRangeName",
      "The subnetwork secondary range name specifying\nthe secondary range from which to allocate the IP CIDR range for this alias IP\nrange. If left unspecified, the primary range of the subnetwork will be used.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ipCidrRange",
      "The IP CIDR range represented by this alias IP range. This IP CIDR range\nmust belong to the specified subnetwork and cannot contain IP addresses reserved by\nsystem or used by other network interfaces. At the time of writing only a\nnetmask (e.g. /24) may be supplied, with a CIDR format resulting in an API\nerror.",
      [],
      true,
      false,
    ),
  ];
}
