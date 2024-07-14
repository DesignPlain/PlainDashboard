import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_getVpcCidrBlockAssociation {
  // Association ID for the IPv4 CIDR block.
  associationId?: string;

  // Cidr block of the desired VPC.
  cidrBlock?: string;

  /*
Current state of the desired VPC.
Can be either `"pending"` or `"available"`.
*/
  state?: string;
}

export function ec2_getVpcCidrBlockAssociation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "associationId",
      "Association ID for the IPv4 CIDR block.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cidrBlock",
      "Cidr block of the desired VPC.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "state",
      'Current state of the desired VPC.\nCan be either `"pending"` or `"available"`.',
      [],
      true,
      false,
    ),
  ];
}
