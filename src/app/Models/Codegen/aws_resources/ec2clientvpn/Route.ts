import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface RouteArgs {
  // The ID of the Client VPN endpoint.
  clientVpnEndpointId?: string;

  // A brief description of the route.
  description?: string;

  // The IPv4 address range, in CIDR notation, of the route destination.
  destinationCidrBlock?: string;

  // The ID of the Subnet to route the traffic through. It must already be attached to the Client VPN.
  targetVpcSubnetId?: string;
}
export class Route extends Resource {
  // The IPv4 address range, in CIDR notation, of the route destination.
  public destinationCidrBlock?: string;

  // Indicates how the Client VPN route was added. Will be `add-route` for routes created by this resource.
  public origin?: string;

  // The ID of the Subnet to route the traffic through. It must already be attached to the Client VPN.
  public targetVpcSubnetId?: string;

  // The type of the route.
  public type?: string;

  // The ID of the Client VPN endpoint.
  public clientVpnEndpointId?: string;

  // A brief description of the route.
  public description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "clientVpnEndpointId",
        "The ID of the Client VPN endpoint.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A brief description of the route.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "destinationCidrBlock",
        "The IPv4 address range, in CIDR notation, of the route destination.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "targetVpcSubnetId",
        "The ID of the Subnet to route the traffic through. It must already be attached to the Client VPN.",
        [],
        true,
        true,
      ),
    ];
  }
}
