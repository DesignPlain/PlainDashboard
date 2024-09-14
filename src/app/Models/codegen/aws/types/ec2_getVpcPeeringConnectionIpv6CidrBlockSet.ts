import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_getVpcPeeringConnectionIpv6CidrBlockSet {
  //
  ipv6CidrBlock?: string;
}

export function ec2_getVpcPeeringConnectionIpv6CidrBlockSet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ipv6CidrBlock",
      "",
      () => [],
      true,
      false,
    ),
  ];
}