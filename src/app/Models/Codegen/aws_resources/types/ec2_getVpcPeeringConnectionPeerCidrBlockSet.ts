import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2_getVpcPeeringConnectionPeerCidrBlockSet {
  // Primary CIDR block of the requester VPC of the specific VPC Peering Connection to retrieve.
  cidrBlock?: string;
}

export function ec2_getVpcPeeringConnectionPeerCidrBlockSet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "cidrBlock",
      "Primary CIDR block of the requester VPC of the specific VPC Peering Connection to retrieve.",
      [],
      true,
      false,
    ),
  ];
}
