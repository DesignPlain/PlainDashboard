import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface compute_InstanceFromTemplateNetworkInterfaceAliasIpRange {
  // The IP CIDR range represented by this alias IP range.
  ipCidrRange?: string;

  // The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range.
  subnetworkRangeName?: string;
}

export function compute_InstanceFromTemplateNetworkInterfaceAliasIpRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ipCidrRange",
      "The IP CIDR range represented by this alias IP range.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "subnetworkRangeName",
      "The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range.",
      [],
      false,
      false,
    ),
  ];
}
