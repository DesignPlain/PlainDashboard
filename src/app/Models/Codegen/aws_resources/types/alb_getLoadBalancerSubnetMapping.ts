import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface alb_getLoadBalancerSubnetMapping {
  //
  ipv6Address?: string;

  //
  outpostId?: string;

  //
  privateIpv4Address?: string;

  //
  subnetId?: string;

  //
  allocationId?: string;
}

export function alb_getLoadBalancerSubnetMapping_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "ipv6Address", "", [], true, false),
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
  ];
}
