import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface globalaccelerator_CustomRoutingAcceleratorIpSet {
  // The IP addresses to use for BYOIP accelerators. If not specified, the service assigns IP addresses. Valid values: 1 or 2 IPv4 addresses.
  ipAddresses?: Array<string>;

  // The type of IP addresses included in this IP set.
  ipFamily?: string;
}

export function globalaccelerator_CustomRoutingAcceleratorIpSet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ipAddresses",
      "The IP addresses to use for BYOIP accelerators. If not specified, the service assigns IP addresses. Valid values: 1 or 2 IPv4 addresses.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ipFamily",
      "The type of IP addresses included in this IP set.",
      [],
      false,
      false,
    ),
  ];
}
