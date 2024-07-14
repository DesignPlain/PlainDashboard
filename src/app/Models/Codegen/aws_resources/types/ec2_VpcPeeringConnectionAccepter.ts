import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_VpcPeeringConnectionAccepter {
  /*
Allow a local VPC to resolve public DNS hostnames to
private IP addresses when queried from instances in the peer VPC.
*/
  allowRemoteVpcDnsResolution?: boolean;
}

export function ec2_VpcPeeringConnectionAccepter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "allowRemoteVpcDnsResolution",
      "Allow a local VPC to resolve public DNS hostnames to\nprivate IP addresses when queried from instances in the peer VPC.",
      [],
      false,
      false,
    ),
  ];
}
