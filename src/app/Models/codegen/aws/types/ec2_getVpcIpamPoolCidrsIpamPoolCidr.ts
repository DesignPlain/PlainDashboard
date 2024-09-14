import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_getVpcIpamPoolCidrsIpamPoolCidr {
  // A network CIDR.
  cidr?: string;

  // The provisioning state of that CIDR.
  state?: string;
}

export function ec2_getVpcIpamPoolCidrsIpamPoolCidr_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "cidr",
      "A network CIDR.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "state",
      "The provisioning state of that CIDR.",
      () => [],
      true,
      false,
    ),
  ];
}
