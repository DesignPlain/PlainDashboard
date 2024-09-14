import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface MulticastGroupMemberArgs {
  // The IP address assigned to the transit gateway multicast group.
  groupIpAddress?: string;

  // The group members' network interface ID to register with the transit gateway multicast group.
  networkInterfaceId?: string;

  // The ID of the transit gateway multicast domain.
  transitGatewayMulticastDomainId?: string;
}
export class MulticastGroupMember extends DS_Resource {
  // The IP address assigned to the transit gateway multicast group.
  public groupIpAddress?: string;

  // The group members' network interface ID to register with the transit gateway multicast group.
  public networkInterfaceId?: string;

  // The ID of the transit gateway multicast domain.
  public transitGatewayMulticastDomainId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "groupIpAddress",
        "The IP address assigned to the transit gateway multicast group.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "networkInterfaceId",
        "The group members' network interface ID to register with the transit gateway multicast group.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "transitGatewayMulticastDomainId",
        "The ID of the transit gateway multicast domain.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
