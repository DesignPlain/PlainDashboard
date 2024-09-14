import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface RouteArgs {
  // The destination CIDR block.
  destinationCidrBlock?: string;

  // Identifier of an EC2 network interface.
  networkInterfaceId?: string;

  // Identifier of an EC2 Transit Gateway.
  transitGatewayId?: string;

  /*
Identifier of a VPC peering connection.

Note that the default route, mapping the VPC's CIDR block to "local", is created implicitly and cannot be specified.
*/
  vpcPeeringConnectionId?: string;

  // Identifier of a VPC internet gateway or a virtual private gateway. Specify `local` when updating a previously imported local route.
  gatewayId?: string;

  /*
The ID of the routing table.

One of the following destination arguments must be supplied:
*/
  routeTableId?: string;

  // The destination IPv6 CIDR block.
  destinationIpv6CidrBlock?: string;

  /*
The ID of a managed prefix list destination.

One of the following target arguments must be supplied:
*/
  destinationPrefixListId?: string;

  // Identifier of a Outpost local gateway.
  localGatewayId?: string;

  // Identifier of a VPC Endpoint.
  vpcEndpointId?: string;

  // Identifier of a carrier gateway. This attribute can only be used when the VPC contains a subnet which is associated with a Wavelength Zone.
  carrierGatewayId?: string;

  // The Amazon Resource Name (ARN) of a core network.
  coreNetworkArn?: string;

  // Identifier of a VPC Egress Only Internet Gateway.
  egressOnlyGatewayId?: string;

  // Identifier of a VPC NAT gateway.
  natGatewayId?: string;
}
export class Route extends DS_Resource {
  // The AWS account ID of the owner of the EC2 instance.
  public instanceOwnerId?: string;

  /*
The ID of the routing table.

One of the following destination arguments must be supplied:
*/
  public routeTableId?: string;

  // Identifier of a carrier gateway. This attribute can only be used when the VPC contains a subnet which is associated with a Wavelength Zone.
  public carrierGatewayId?: string;

  // Identifier of an EC2 instance.
  public instanceId?: string;

  // Identifier of a VPC NAT gateway.
  public natGatewayId?: string;

  // Identifier of an EC2 Transit Gateway.
  public transitGatewayId?: string;

  // The state of the route - `active` or `blackhole`.
  public state?: string;

  /*
Identifier of a VPC peering connection.

Note that the default route, mapping the VPC's CIDR block to "local", is created implicitly and cannot be specified.
*/
  public vpcPeeringConnectionId?: string;

  // The destination CIDR block.
  public destinationCidrBlock?: string;

  /*
The ID of a managed prefix list destination.

One of the following target arguments must be supplied:
*/
  public destinationPrefixListId?: string;

  // Identifier of a VPC Egress Only Internet Gateway.
  public egressOnlyGatewayId?: string;

  // Identifier of a VPC internet gateway or a virtual private gateway. Specify `local` when updating a previously imported local route.
  public gatewayId?: string;

  // Identifier of a Outpost local gateway.
  public localGatewayId?: string;

  // Identifier of an EC2 network interface.
  public networkInterfaceId?: string;

  // The Amazon Resource Name (ARN) of a core network.
  public coreNetworkArn?: string;

  // The destination IPv6 CIDR block.
  public destinationIpv6CidrBlock?: string;

  // How the route was created - `CreateRouteTable`, `CreateRoute` or `EnableVgwRoutePropagation`.
  public origin?: string;

  // Identifier of a VPC Endpoint.
  public vpcEndpointId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "destinationPrefixListId",
        "The ID of a managed prefix list destination.\n\nOne of the following target arguments must be supplied:",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "natGatewayId",
        "Identifier of a VPC NAT gateway.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "transitGatewayId",
        "Identifier of an EC2 Transit Gateway.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "routeTableId",
        "The ID of the routing table.\n\nOne of the following destination arguments must be supplied:",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "coreNetworkArn",
        "The Amazon Resource Name (ARN) of a core network.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "destinationCidrBlock",
        "The destination CIDR block.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "networkInterfaceId",
        "Identifier of an EC2 network interface.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "vpcPeeringConnectionId",
        'Identifier of a VPC peering connection.\n\nNote that the default route, mapping the VPC\'s CIDR block to "local", is created implicitly and cannot be specified.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "destinationIpv6CidrBlock",
        "The destination IPv6 CIDR block.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "localGatewayId",
        "Identifier of a Outpost local gateway.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "vpcEndpointId",
        "Identifier of a VPC Endpoint.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "carrierGatewayId",
        "Identifier of a carrier gateway. This attribute can only be used when the VPC contains a subnet which is associated with a Wavelength Zone.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "gatewayId",
        "Identifier of a VPC internet gateway or a virtual private gateway. Specify `local` when updating a previously imported local route.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "egressOnlyGatewayId",
        "Identifier of a VPC Egress Only Internet Gateway.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
