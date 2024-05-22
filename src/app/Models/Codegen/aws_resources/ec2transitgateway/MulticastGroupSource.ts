import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface MulticastGroupSourceArgs {
  // The IP address assigned to the transit gateway multicast group.
  groupIpAddress?: string;

  // The group members' network interface ID to register with the transit gateway multicast group.
  networkInterfaceId?: string;

  // The ID of the transit gateway multicast domain.
  transitGatewayMulticastDomainId?: string;
}
export class MulticastGroupSource extends Resource {
  // The group members' network interface ID to register with the transit gateway multicast group.
  public networkInterfaceId?: string;

  // The ID of the transit gateway multicast domain.
  public transitGatewayMulticastDomainId?: string;

  // The IP address assigned to the transit gateway multicast group.
  public groupIpAddress?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "networkInterfaceId",
        "The group members' network interface ID to register with the transit gateway multicast group.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "transitGatewayMulticastDomainId",
        "The ID of the transit gateway multicast domain.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "groupIpAddress",
        "The IP address assigned to the transit gateway multicast group.",
        [],
        true,
        true,
      ),
    ];
  }
}
