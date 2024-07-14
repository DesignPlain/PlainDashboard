import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface lb_getLoadBalancerSubnetMapping {
  //
  outpostId?: string;

  //
  privateIpv4Address?: string;

  //
  subnetId?: string;

  //
  allocationId?: string;

  //
  ipv6Address?: string;
}

export function lb_getLoadBalancerSubnetMapping_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "outpostId", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "privateIpv4Address",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "subnetId", "", [], true, false),
    new DynamicUIProps(InputType.String, "allocationId", "", [], true, false),
    new DynamicUIProps(InputType.String, "ipv6Address", "", [], true, false),
  ];
}
