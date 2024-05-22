import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2transitgateway_getMulticastDomainMember {
  // The group members' network interface ID.
  networkInterfaceId?: string;

  // The IP address assigned to the transit gateway multicast group.
  groupIpAddress?: string;
}

export function ec2transitgateway_getMulticastDomainMember_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "groupIpAddress",
      "The IP address assigned to the transit gateway multicast group.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "networkInterfaceId",
      "The group members' network interface ID.",
      [],
      true,
      false,
    ),
  ];
}
