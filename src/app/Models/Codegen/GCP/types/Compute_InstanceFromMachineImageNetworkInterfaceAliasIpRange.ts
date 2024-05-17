import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_InstanceFromMachineImageNetworkInterfaceAliasIpRange {
  // The IP CIDR range represented by this alias IP range.
  IpCidrRange?: string;

  // The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range.
  SubnetworkRangeName?: string;
}

export function Compute_InstanceFromMachineImageNetworkInterfaceAliasIpRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "IpCidrRange",
      "The IP CIDR range represented by this alias IP range.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SubnetworkRangeName",
      "The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range.",
      [],
      false,
      false,
    ),
  ];
}
