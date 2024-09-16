import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2_getVpcPeeringConnectionCidrBlockSet {
  // Primary CIDR block of the requester VPC of the specific VPC Peering Connection to retrieve.
  cidrBlock?: string;
}

export function ec2_getVpcPeeringConnectionCidrBlockSet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'cidrBlock',
      'Primary CIDR block of the requester VPC of the specific VPC Peering Connection to retrieve.',
      () => [],
      true,
      false,
    ),
  ];
}
