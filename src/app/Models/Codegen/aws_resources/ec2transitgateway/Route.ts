import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface RouteArgs {
  // Indicates whether to drop traffic that matches this route (default to `false`).
  blackhole?: boolean;

  // IPv4 or IPv6 RFC1924 CIDR used for destination matches. Routing decisions are based on the most specific match.
  destinationCidrBlock?: string;

  // Identifier of EC2 Transit Gateway Attachment (required if `blackhole` is set to false).
  transitGatewayAttachmentId?: string;

  // Identifier of EC2 Transit Gateway Route Table.
  transitGatewayRouteTableId?: string;
}
export class Route extends Resource {
  // Indicates whether to drop traffic that matches this route (default to `false`).
  public blackhole?: boolean;

  // IPv4 or IPv6 RFC1924 CIDR used for destination matches. Routing decisions are based on the most specific match.
  public destinationCidrBlock?: string;

  // Identifier of EC2 Transit Gateway Attachment (required if `blackhole` is set to false).
  public transitGatewayAttachmentId?: string;

  // Identifier of EC2 Transit Gateway Route Table.
  public transitGatewayRouteTableId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "blackhole",
        "Indicates whether to drop traffic that matches this route (default to `false`).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "destinationCidrBlock",
        "IPv4 or IPv6 RFC1924 CIDR used for destination matches. Routing decisions are based on the most specific match.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "transitGatewayAttachmentId",
        "Identifier of EC2 Transit Gateway Attachment (required if `blackhole` is set to false).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "transitGatewayRouteTableId",
        "Identifier of EC2 Transit Gateway Route Table.",
        [],
        true,
        true,
      ),
    ];
  }
}
