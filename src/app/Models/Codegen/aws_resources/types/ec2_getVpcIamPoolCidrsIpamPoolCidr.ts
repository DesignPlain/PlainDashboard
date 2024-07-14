import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_getVpcIamPoolCidrsIpamPoolCidr {
  // The provisioning state of that CIDR.
  state?: string;

  // A network CIDR.
  cidr?: string;
}

export function ec2_getVpcIamPoolCidrsIpamPoolCidr_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "cidr",
      "A network CIDR.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "state",
      "The provisioning state of that CIDR.",
      [],
      true,
      false,
    ),
  ];
}
