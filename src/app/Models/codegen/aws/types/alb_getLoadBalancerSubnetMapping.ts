import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface alb_getLoadBalancerSubnetMapping {
  //
  subnetId?: string;

  //
  allocationId?: string;

  //
  ipv6Address?: string;

  //
  outpostId?: string;

  //
  privateIpv4Address?: string;
}

export function alb_getLoadBalancerSubnetMapping_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "outpostId",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "privateIpv4Address",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "subnetId", "", () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      "allocationId",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ipv6Address",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
