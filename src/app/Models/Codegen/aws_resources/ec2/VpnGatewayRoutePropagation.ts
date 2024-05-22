import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface VpnGatewayRoutePropagationArgs {
  // The id of the `aws.ec2.RouteTable` to propagate routes into.
  routeTableId?: string;

  // The id of the `aws.ec2.VpnGateway` to propagate routes from.
  vpnGatewayId?: string;
}
export class VpnGatewayRoutePropagation extends Resource {
  // The id of the `aws.ec2.RouteTable` to propagate routes into.
  public routeTableId?: string;

  // The id of the `aws.ec2.VpnGateway` to propagate routes from.
  public vpnGatewayId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "routeTableId",
        "The id of the `aws.ec2.RouteTable` to propagate routes into.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "vpnGatewayId",
        "The id of the `aws.ec2.VpnGateway` to propagate routes from.",
        [],
        true,
        true,
      ),
    ];
  }
}
